const {
    UserCreateAccountPostController,
} = require("../../controllers/UserController");

const router = require("express").Router();

router.post("/account", UserCreateAccountPostController);

module.exports = router;
