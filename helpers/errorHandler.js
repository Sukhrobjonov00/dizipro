const CustomError = require("./customError");

module.exports = function errorHandler(err, req, res, next) {
    res.status(err.status || 500).json({
        ok: false,
        message: err.message || "Something went wrong",
    });
};
