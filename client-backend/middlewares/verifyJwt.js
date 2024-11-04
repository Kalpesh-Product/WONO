const jwt = require("jsonwebtoken");
const redisClient = require("../config/redisClient");
const User = require("../models/User");

const verifyJwt = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: "Unauthorized" });
  const token = authorization.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
    try {
      if (err) return res.sendStatus(403);
      const user = await User.findOne({ "personalInfo.email": decoded.email })
        .lean()
        .exec();
      const sessionId = await redisClient.get(`sessionId:${user._id}`);
      if (sessionId !== decoded.sessionId) {
        return res.status(401).json({ message: "session expired" });
      }
      req.user = decoded.email;
      next();
    } catch (error) {
      next(error);
    }
  });
};

module.exports = verifyJwt;
