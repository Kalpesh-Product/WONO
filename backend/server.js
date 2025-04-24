if (process.env.NODE_ENV != "production") {
  // if the project is deployed for production, the environment variables from .env file will not be used (usually hosting services like heroku, aws, etc have process.env.NODE_ENV set equal to production)
  require("dotenv").config();
}

const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const promisePool = require("./db");
const fs = require("fs");
const { Parser } = require("json2csv");
const path = require("path");
const { error } = require("console");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const crypto = require("crypto");
const mongoose = require("mongoose");
const { parse, format } = require("date-fns");
const jwt = require("jsonwebtoken");
const userRoutes = require("./routes/userRoutes");
const {
  User,
  UserService,
  Enquiry,
  JobApplication,
} = require("../backend/models/user");

const app = express();

const allowedHeaders = [
  "Content-Type", // Allowing both types of content: multipart/form-data and application/json
  "Authorization", // Add other headers you need here
];
// "https://www.wono.co"

app.use(
  cors({
    origin: [
      "https://www.wono.co", // Your frontend origin
      /\.google\.com$/, // Allow requests from Google domains
      "http://localhost:3000" // Your specific ngrok URL
    ], // Reflects the request origin, allowing wono frontend origin
    // origin: true, // Reflects the request origin, allowing all origins
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true, // Allow cookies to be sent
    allowedHeaders: allowedHeaders,
  })
);

// Preflight (OPTIONS) route handler
app.options(
  "*",
  cors({
    origin: (origin, callback) => {
      if (origin) {
        callback(null, true);
      } else {
        callback(null, false);
      }
    },
    methods: ["OPTIONS"],
    credentials: true,
    allowedHeaders: allowedHeaders, // Ensure 'Content-Type' is included for file uploads
  })
);

const port = process.env.PORT;
app.use("/tmp", express.static(path.join(__dirname, "tmp")));

// Middleware to parse JSON data
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  session({
    key: "wono_session", // Unique cookie name
    secret: "your-secret-key", // Replace with a strong secret
    resave: false,
    saveUninitialized: false,
    cookie: {
      // secure: process.env.NODE_ENV === 'production',
      secure: true,
      httpOnly: true, // Prevents client-side JS from accessing the cookie
      sameSite: "lax", // Helps protect against CSRF attacks
      maxAge: 1000 * 60 * 60 * 2, // Session expiration time (2 hours)
    },
  })
);


app.post("/", (req, res) => {
  console.log("Session Data:", req.session);
  if (req.session.user) {
    res.json({ valid: true });
  } else {
    res.json({ valid: false });
  }
});
app.get("/session", (req, res) => {
  if (req.session.user) {
    res.json({ user: req.session.user });
  } else {
    res.status(401).json({ error: "Not authenticated" });
  }
});

app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
