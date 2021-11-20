module.exports = class HomeController {
    static async HomeGetController(req, res, next) {
        try {
            res.status(200).json({
                ok: true,
                message: "Welcome to the home page",
            });
        } catch (error) {
            next(error);
        }
    }
};
