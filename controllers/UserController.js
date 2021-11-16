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
        } catch (error) {
            next(error);
        }
    }
};
