const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../../models/User");

const login = async (req, res, next) => {
  try {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const { email, password } = req.body;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    if (!password)
      return res.status(400).json({ message: "Invalid credentaials" });

    const userExists = await User.findOne({ "personalInfo.email": email })
      .lean()
      .exec();

    if (!userExists) {
      return res.status(404).json({ message: "Invalid credentials" });
    }

    if (password !== userExists.credentials.password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const accessToken = jwt.sign(
      {
        email: userExists.credentials.username,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15s" }
    );

    const refreshToken = jwt.sign(
      {
        email: userExists.credentials.username,
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "30d" }
    );

    res.cookie("clientCookie", refreshToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({ user: userExists, accessToken });
  } catch (error) {
    next(error);
  }
};

module.exports = { login };
