const {
    UserCreateAccountPostController,
    UserLoginPostController,
} = require("../../controllers/UserController");
const authMiddleware = require("../../middlewares/authMiddleware");
const roleChecker = require("../../middlewares/roleChecker");

const router = require("express").Router();

router.post(
    "/account",
    [authMiddleware, roleChecker("admin")],
    UserCreateAccountPostController
);

router.post("/login", UserLoginPostController);

module.exports = router;
