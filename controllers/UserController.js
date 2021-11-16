const { genHash, compareHash } = require("../modules/bcrypt");
const { createToken } = require("../modules/jwt");
const sendEmail = require("../modules/nodemailer");
const {
    UserCreateAccountValidation,
    UserLoginValidation,
    UserForgetPasswordValidation,
} = require("../validations/UserValidation");

module.exports = class UserController {
    static async UserCreateAccountPostController(req, res, next) {
        try {
            const data = await UserCreateAccountValidation(req.body, res.error);

            const user = await req.db.users.create({
                ...data,
                user_password: genHash(data.user_password),
            });

            const session = await req.db.sessions.create({
                session_useragent: req.headers["user-agent"] || "Unknown",
                user_id: user.dataValues.user_id,
            });

            const token = createToken({
                session_id: session.dataValues.session_id,
                user_role: user.dataValues.user_role,
            });

            await res.status(201).json({
                ok: true,
                message: "User created successfully",
                data: { token },
            });
        } catch (error) {
            if (error.message === "Validation error") {
                error.code = 400;
                error.message = "This email already exists";
            }
            next(error);
        }
    }

    static async UserLoginPostController(req, res, next) {
        try {
            const data = await UserLoginValidation(req.body, res.error);

            const user = await req.db.users.findOne({
                where: {
                    user_email: data.user_email,
                },
                raw: true,
            });

            if (!user) throw new res.error(404, "User not found");

            const isTrust = compareHash(data.user_password, user.user_password);

            if (!isTrust) throw new res.error(401, "Invalid password");

            await req.db.sessions.destroy({
                where: {
                    session_useragent: req.headers["user-agent"] || "Unknown",
                    user_id: user.user_id,
                },
            });

            const session = await req.db.sessions.create({
                session_useragent: req.headers["user-agent"] || "Unknown",
                user_id: user.user_id,
            });

            const token = createToken({
                session_id: session.dataValues.session_id,
                user_role: user.user_role,
            });

            res.status(201).json({
                ok: true,
                message: "User logged in successfully",
                data: { token },
            });
        } catch (error) {
            next(error);
        }
    }

    static async UserRecoveryPasswordSubmitPostController(req, res, next) {
        try {
            const { user_email } = await UserForgetPasswordValidation(
                req.body,
                res.error
            );

            const user = await req.db.users.findOne({
                where: {
                    user_email,
                },
                raw: true,
            });

            if (!user) throw new res.error(404, "User not found");

            const count = await req.db.email_attempts.count({
                where: {
                    user_id: user.user_id,
                },
            });

            if (count > 5)
                throw new res.error(429, "Too many attempts, try again later");

            const attempt = await req.db.email_attempts.create({
                user_id: user.user_id,
            });

            await sendEmail(
                user.user_email,
                `<a href="${process.env.SITE_URL}/v1/users/password${attempt.dataValues.attempt_id}">Click to recover</a>`
            );

            res.status(201).json({
                ok: true,
                message: "Confirmation message sent. Check your email.",
            });
        } catch (error) {
            next(error);
        }
    }
};
