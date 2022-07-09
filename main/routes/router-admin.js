const router = require("express").Router();
const adminController = require("../controllers").admin;
const verifyUser = require("../configs/verify");

router.get("/", verifyUser.isLogin, adminController.formAdmin);
router.post("/save", verifyUser.isLogin, adminController.saveAdmin);

module.exports = router;
