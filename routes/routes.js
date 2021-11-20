const Router = require("express").Router();

const UserRouter = require("../routes/UserRoute");
const AdminRouter = require("../routes/AdminRoute");

Router.use("/users", UserRouter);
Router.use("/admin", AdminRouter);

module.exports = Router;
