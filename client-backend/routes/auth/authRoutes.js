const router = require("express").Router();
const {
  login,
} = require("../../controllers/authControllers/userAuthController");

router.post("/login", login);

module.exports = router;
