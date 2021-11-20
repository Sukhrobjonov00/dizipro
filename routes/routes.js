const Router = require("express").Router();

const HomeRouter = require("../routes/HomeRoute");
const UserRouter = require("../routes/UserRoute");
const AdminRouter = require("../routes/AdminRoute");

Router.use("/users", UserRouter);
Router.use("/admin", AdminRouter);
Router.use("/", HomeRouter);

module.exports = Router;
