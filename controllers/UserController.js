const { genHash } = require("../modules/bcrypt");
const { createToken } = require("../modules/jwt");
const {
    UserCreateAccountValidation,
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
};
