const Router = require("express").Router();

const HomeRouter = require("../routes/HomeRoute");
const AdminRouter = require("../routes/AdminRoute");
const UserRouter = require("../routes/UserRoute");
const SkillRouter = require("../routes/SkillRoute");
const SoftwareRouter = require("../routes/SoftwareRoute");
const ProjectRouter = require("../routes/SoftwareRoute");

Router.use("/projects", ProjectRouter);
Router.use("/softwares", SoftwareRouter);
Router.use("/skills", SkillRouter);
Router.use("/users", UserRouter);
Router.use("/admin", AdminRouter);
Router.use("/", HomeRouter);

module.exports = Router;
