const jwt = require("jsonwebtoken");
const redisClient = require("../config/redisClient");

const verifyJwt = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: "Unauthorized" });

  const token = authorization.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const sessionIdInRedis = await redisClient.get(`session:${decoded.userId}`);

    if (sessionIdInRedis !== decoded.sessionId) {
      return res
        .status(403)
        .json({ message: "Session expired. Please log in again." });
    }

    req.user = decoded.email;
    req.userId = decoded.userId;
    req.sessionId = decoded.sessionId;

    next();
  } catch (err) {
    return res.status(403).json({ message: "Forbidden" });
  }
};

module.exports = verifyJwt;
