module.exports = function RoleChecker(role) {
    return function (req, res, next) {
        try {
            if (req.role !== role)
                throw new res.error(401, "You don't have permission");
            next();
        } catch (error) {
            next(error);
        }
    };
};
