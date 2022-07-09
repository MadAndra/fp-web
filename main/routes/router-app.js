const router = require("express").Router();
const homeController = require("../controllers").home;
const adminController = require("../controllers").admin;
const verifyUser = require("../configs/verify");

router.get("/", verifyUser.isLogin, homeController.home);
router.get("/admin", verifyUser.isLogin, adminController.formAdmin);

router.get("/listmobil", (req, res) => {
  res.render("listmobil", { url: "http://localhost:5050/" });
});

router.get("/input", (req, res) => {
  res.render("input", { url: "http://localhost:5050/" });
});

module.exports = router;
