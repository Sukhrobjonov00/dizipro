const {
    CreateProjectPostController,
} = require("../controllers/ProjectController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleChecker = require("../middlewares/roleChecker");
const router = require("express").Router();
const fileUpload = require("express-fileupload");

router.use([authMiddleware]);

router.post("/", fileUpload(), CreateProjectPostController);
router.get("/");

module.exports = router;
