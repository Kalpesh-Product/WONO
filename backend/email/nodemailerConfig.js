// config/nodemailerConfig.js
const nodemailer = require('nodemailer');

// Create and export the first transporter
const aiwinMail = nodemailer.createTransport({
  service: "gmail", // You can use other services like Yahoo, Outlook, etc.
  auth: {
    user: "response@wono.co", // Your email
    pass: "xmqw hyuz fdhh srtc", // Your email password or app password
  },
});

// Create and export the second transporter
const anushriMail = nodemailer.createTransport({
  service: "gmail", // You can use other services like Yahoo, Outlook, etc.
  auth: {
    user: "anushri.bhagat263@gmail.com", // Your email
    pass: "xwhn rrhx ldba vvfx", // Your email password or app password
  },
});

module.exports = {
    aiwinMail,
    anushriMail
};
