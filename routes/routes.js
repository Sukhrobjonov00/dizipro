const errorHandler = require("../helpers/errorHandler");

module.exports = (app) => {
    try {
        //
    } finally {
        app.use(errorHandler);
    }
};
