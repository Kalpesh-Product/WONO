// config/nodemailerConfig.js
const nodemailer = require('nodemailer');
require('dotenv').config();

// Create and export the first transporter
const companyMail = nodemailer.createTransport({
  service: "gmail", // You can use other services like Yahoo, Outlook, etc.
  auth: {
    user: process.env.RESPONSE_EMAIL, // Your email
    pass: process.env.EMAIL_AIWIN_PASS
  },
});

module.exports = {
  companyMail,
};
