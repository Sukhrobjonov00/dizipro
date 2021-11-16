const {
    UserCreateAccountPostController,
    UserLoginPostController,
    UserRecoveryPasswordSubmitPostController,
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

router.post("/password", UserRecoveryPasswordSubmitPostController);

module.exports = router;
