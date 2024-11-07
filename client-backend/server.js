const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const corsConfig = require("./config/corsConfig");
const connectDb = require("./config/db");
const errorHandler = require("./middlewares/errorHandler");
const authRoutes = require("./routes/auth/authRoutes");
const verifyJwt = require("./middlewares/verifyJwt");
const redisClient = require("./config/redisClient");
const departmentRoutes = require("./routes/departmentRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

connectDb(process.env.DB_URL);

app.use(cors(corsConfig));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  if (req.accepts("html")) {
    res.status(200).sendFile(path.join(__dirname, "views", "index.html"));
  } else if (req.accepts("json")) {
    res.status(200).json({ message: "Welcome to the client API" });
  } else {
    res.type("text").status(200).send("Welcome to the client API");
  }
});
app.use("/api/auth", authRoutes);

//protected routes
app.get("/protected", verifyJwt, (req, res) => {
  res.status(200).json({ message: "this is protected data" });
});

app.use("/departments", departmentRoutes);

app.all("*", (req, res) => {
  if (req.accepts("html")) {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.status(404).json({ message: "404 Not found" });
  } else {
    res.type("text").status(404).send("404 Not found");
  }
});

app.use(errorHandler);

redisClient.on("connect", () => {
  mongoose.connection.once("open", () => {
    app.listen(PORT, () => {
      console.log(`server started on port ${PORT}`);
    });
  });
});
