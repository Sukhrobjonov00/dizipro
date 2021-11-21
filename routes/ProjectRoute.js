const authMiddleware = require("../middlewares/authMiddleware");
const roleChecker = require("../middlewares/roleChecker");
const router = require("express").Router();

router.use([authMiddleware]);

router.post("/");
router.get("/");

module.exports = router;
