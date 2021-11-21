const {
    AddSoftwarePostController,
    SoftwaresGetController,
} = require("../controllers/SoftwareController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleChecker = require("../middlewares/roleChecker");
const router = require("express").Router();

router.use([authMiddleware]);

router.post("/", roleChecker("admin"), AddSoftwarePostController);
router.get("/", SoftwaresGetController);

module.exports = router;
