const Router = require("express").Router();

const HomeRouter = require("../routes/HomeRoute");
const AdminRouter = require("../routes/AdminRoute");
const UserRouter = require("../routes/UserRoute");
const SkillRouter = require("../routes/SkillRoute");

Router.use("/skills", SkillRouter);
Router.use("/users", UserRouter);
Router.use("/admin", AdminRouter);
Router.use("/", HomeRouter);

module.exports = Router;
