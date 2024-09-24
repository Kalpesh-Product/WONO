// Here, we test our authorization (whether the user is authorized or not)

const jwt = require("jsonwebtoken");
const {User} = require("../models/user");

async function requireAuth(req, res, next) {
  try {
    // Read token off cookies
    const token = req.cookies.Authorization;
    // console.log("In middleware");

    // Decode the token
    const decoded = jwt.verify(token, process.env.SECRET);

    // Check expiration (check that the token is not expired)
    if (Date.now() > decoded.exp) return res.sendStatus(401);

    // Find user using decoded sub (which is the user id that we saved)
    const user = await User.findById(decoded.sub);
    if (!user) return res.sendStatus(401);

    // attach user to request
    req.user = user;

    // continue on
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
}

module.exports = requireAuth;