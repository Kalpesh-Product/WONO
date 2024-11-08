const nodemailer = require("nodemailer");

const mailer = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  port: 465,
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

module.exports = mailer;
