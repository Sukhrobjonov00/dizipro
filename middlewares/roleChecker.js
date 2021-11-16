const { verifyToken } = require("../modules/jwt");

module.exports = async function RoleChecker(role) {
    return async function (req, res, next) {
        try {
            if (!req.role === role)
                throw new res.error(401, "You don't have permission");
            next();
        } catch (error) {
            next(error);
        }
    };
};
