const { HomeGetController } = require("../controllers/HomeController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = require("express").Router();

router.use(authMiddleware);

router.post("/", HomeGetController);

// router.post("/password", UserRecoveryPasswordSubmitPostController);
// router.get("/password/:attempt_id", UserRecoveryPasswordCheckGetController);

module.exports = router;
