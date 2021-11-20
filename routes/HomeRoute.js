const { HomeGetController } = require("../controllers/HomeController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = require("express").Router();

router.use(authMiddleware);

router.get("/", HomeGetController);

module.exports = router;
