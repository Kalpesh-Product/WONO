const jwt = require('jsonwebtoken');

const verifyJwt = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: "Unauthorized" });
    const token = authorization.split(" ")[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403);
            req.user = decoded.email;
            next();
        }
    );
}

module.exports = verifyJwt;