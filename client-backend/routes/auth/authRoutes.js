const router = require("express").Router();
const {
  login,
  logOut,
} = require("../../controllers/authControllers/userAuthController");

router.post("/login", login);
router.get("/logout", logOut);

module.exports = router;
