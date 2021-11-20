const {
    CreateBanPostController,
    DeleteBanController,
    GetAllUsersController,
} = require("../controllers/AdminController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleChecker = require("../middlewares/roleChecker");
const router = require("express").Router();

router.use([authMiddleware, roleChecker("admin")]);

router.post("/bans", CreateBanPostController);
router.delete("/bans/:ban_id", DeleteBanController);
router.get("/users", GetAllUsersController);

module.exports = router;
