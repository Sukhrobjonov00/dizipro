module.exports = class CustomError extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
    }
};
