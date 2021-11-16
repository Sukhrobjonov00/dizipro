const Router = require("express").Router();

const UserRouter = require("../routes/users/UserRoute");

Router.use("/users", UserRouter);

module.exports = Router;
