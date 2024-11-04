const jwt = require("jsonwebtoken");
const redisClient = require("../config/redisClient");

const verifyJwt = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: "Unauthorized" });
  const token = authorization.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
    try {
      if (err) return res.sendStatus(403);
      const sessionId = await redisClient.get(`sessionId:${decoded.userId}`);
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
