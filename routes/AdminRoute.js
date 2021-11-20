const {
    CreateBanPostController,
    DeleteBanController,
} = require("../controllers/AdminController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleChecker = require("../middlewares/roleChecker");
const router = require("express").Router();

router.use([authMiddleware, roleChecker("admin")]);

router.post("/bans", CreateBanPostController);
router.post("/bans/:ban_id", DeleteBanController);

module.exports = router;
