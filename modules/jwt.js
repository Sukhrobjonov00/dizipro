const { sign, verify } = require("jsonwebtoken");

module.exports.createToken = (data) => {
    return sign(data, process.env.JWT_SECRET);
};

module.exports.verifyToken = (token) => {
    try {
        return verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return false;
    }
};
