const {
    UserCreateAccountPostController,
} = require("../../controllers/UserController");
const authMiddleware = require("../../middlewares/authMiddleware");
const roleChecker = require("../../middlewares/roleChecker");

const router = require("express").Router();

router.post(
    "/account",
    [authMiddleware, roleChecker("admin")],
    UserCreateAccountPostController
);

module.exports = router;
