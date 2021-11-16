const {
    UserCreateAccountValidation,
} = require("../validations/UserValidation");

module.exports = class UserController {
    static async UserCreateAccountPostController(req, res, next) {
        try {
            const data = await UserCreateAccountValidation(req.body, res.error);
            console.log(data);
        } catch (error) {
            next(error);
        }
    }
};
