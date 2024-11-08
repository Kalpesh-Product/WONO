const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const registerLogs = require("../../utils/loginLogs");
const { v4: uuid } = require("uuid");
const redisClient = require("../../config/redisClient");
const bcrypt = require("bcryptjs");
const generatePassword = require("../../utils/passwordGenerator");
const mailer = require("../../config/nodemailerConfig");

const login = async (req, res, next) => {
  try {
    const ipAddress = req.ip;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const { email, password } = req.body;

    if (!emailRegex.test(email)) {
      await registerLogs({
        email,
        status: "failed",
        ip: ipAddress,
        message: "Invalid credentials format",
      });
      return res.status(400).json({ message: "Invalid credentials" });
    }

    if (!password)
      return res.status(400).json({ message: "Invalid credentials" });

    const userExists = await User.findOne({ "personalInfo.email": email })
      .lean()
      .exec();

    if (!userExists) {
      await registerLogs({
        email,
        status: "failed",
        ip: ipAddress,
        message: "Invalid credentials format",
      });
      return res.status(404).json({ message: "Invalid credentials" });
    }

    if (password !== userExists.credentials.password) {
      await registerLogs({
        email,
        status: "failed",
        ip: ipAddress,
        message: "Invalid credentials format",
      });
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const sessionId = uuid();

    await redisClient.set(
      `session:${userExists._id}`,
      sessionId,
      "EX",
      30 * 24 * 60 * 60
    );

    const accessToken = jwt.sign(
      {
        sessionId,
        userId: userExists._id,
        email: userExists.personalInfo.email,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign(
      {
        sessionId,
        email: userExists.personalInfo.email,
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "30d" }
    );

    await registerLogs({
      email,
      status: "success",
      ip: ipAddress,
      message: "Login successful",
    });

    await User.findOneAndUpdate({ _id: userExists._id }, { refreshToken });

    // Send refresh token as HttpOnly cookie
    res.cookie("clientCookie", refreshToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    delete userExists.refreshToken;
    delete userExists.credentials.password;
    delete userExists.updatedAt;

    res.status(200).json({ user: userExists, accessToken });
  } catch (error) {
    next(error);
  }
};

const logOut = async (req, res, next) => {
  try {
    const cookie = req.cookies;
    if (!cookie.clientCookie) return res.sendStatus(204);

    const refreshToken = cookie.clientCookie;
    const foundUser = await User.findOne({ refreshToken }).lean().exec();

    if (!foundUser) {
      res.clearCookie("clientCookie", {
        httpOnly: true,
        sameSite: "None",
        secure: true,
      });
      return res.sendStatus(204);
    }

    const sessionIdInRedis = await redisClient.get(`session:${foundUser._id}`);
    if (sessionIdInRedis) {
      await redisClient.del(`session:${foundUser._id}`);
    }

    await User.findOneAndUpdate({ _id: foundUser._id }, { refreshToken: null })
      .lean()
      .exec();

    res.clearCookie("clientCookie", {
      httpOnly: true,
      sameSite: "None",
      secure: true,
    });

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const {
      name,
      mobile,
      email,
      dob,
      gender,
      country,
      state,
      city,
      role,
      department,
      userId,
    } = req.body;

    if (
      !name ||
      !email ||
      !mobile ||
      !dob ||
      !gender ||
      !country ||
      !state ||
      !city ||
      !role ||
      !department ||
      !userId
    ) {
      return res.status(400), json({ message: "Invalid data" });
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400), json({ message: "Invalid data" });
    }

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid data" });
    }

    const userExists = await User.findOne({ "personalInfo.email": email })
      .lean()
      .exec();

    if (userExists) {
      return res.status(409).json({ message: "User already exists" });
    }

    const username = email.split("@")[1];
    const password = generatePassword(8, {
      upper: true,
      lower: true,
      number: true,
      symbol: true,
    });

    const hashPwd = await bcrypt.hash(password, 10);
    const creator = await User.findById(userId).lean().exec();
    if (!creator) {
      return res.status(400).json({ message: "Invalid data" });
    }
    const newUser = new User({
      personalInfo: {
        name,
        email,
        mobile,
        gender,
        dob,
        country,
        state,
        city,
      },
      role,
      department,
      companyInfo: {
        ...creator.companyInfo,
      },
      credentials: {
        username,
        password: hashPwd,
      },
    });

    await newUser.save();
    const userMailOptions = emailTemplates(email, name, password);
    await mailer.sendMail(userMailOptions);
    res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = { login, logOut, createUser };
