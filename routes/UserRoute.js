const {
    UserCreateAccountPostController,
    UserLoginPostController,
    UserRecoveryPasswordSubmitPostController,
    UserRecoveryPasswordCheckGetController,
    UserGetController,
} = require("../controllers/UserController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleChecker = require("../middlewares/roleChecker");

const router = require("express").Router();

router.post(
    "/account",
    [authMiddleware, roleChecker("admin")],
    UserCreateAccountPostController
);

router.post("/login", UserLoginPostController);

router.post("/password", UserRecoveryPasswordSubmitPostController);
router.get("/password/:attempt_id", UserRecoveryPasswordCheckGetController);

module.exports = router;
