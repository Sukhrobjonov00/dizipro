const { AddSkillPostController } = require("../controllers/SkillController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleChecker = require("../middlewares/roleChecker");
const router = require("express").Router();

router.use([authMiddleware]);

router.post("/", roleChecker("admin"), AddSkillPostController);
// router.get("/", AddSkillPostController);

module.exports = router;
