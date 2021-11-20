const { CreateBanPostController } = require("../controllers/AdminController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleChecker = require("../middlewares/roleChecker");
const router = require("express").Router();

router.use([authMiddleware, roleChecker("admin")]);

router.post("/bans", CreateBanPostController);

// router.post("/password", UserRecoveryPasswordSubmitPostController);
// router.get("/password/:attempt_id", UserRecoveryPasswordCheckGetController);

module.exports = router;
