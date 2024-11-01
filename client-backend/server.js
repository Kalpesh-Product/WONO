const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const corsConfig = require("./config/corsConfig");
const connectDb = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

connectDb(process.env.DB_URL);

app.use(cors(corsConfig));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.all("*", (req, res) => {
  if (req.accepts("html")) {
    res.status(404).sendFile(path.join(__dirname, "views", "index.html"));
  } else if (req.accepts("json")) {
    res.status(404).json({ message: "Welcome to the client API" });
  } else {
    res.type("text").status(404).send("Welcome to the client API");
  }
});

mongoose.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });
});
