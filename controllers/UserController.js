const { genHash } = require("../modules/bcrypt");
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
        } catch (error) {
            next(error);
        }
    }
};
