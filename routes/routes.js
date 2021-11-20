const Router = require("express").Router();

const HomeRouter = require("../routes/HomeRoute");
const UserRouter = require("../routes/UserRoute");
const AdminRouter = require("../routes/AdminRoute");

Router.use("/", HomeRouter);
Router.use("/users", UserRouter);
Router.use("/admin", AdminRouter);

module.exports = Router;
