if (process.env.NODE_ENV != "production") {
  // if the project is deployed for production, the environment variables from .env file will not be used (usually hosting services like heroku, aws, etc have process.env.NODE_ENV set equal to production)
  require("dotenv").config();
}

const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const promisePool = require("./db");
const fs = require('fs');
const { Parser } = require('json2csv');
const path = require('path');
const { error } = require("console");
const session = require('express-session')
const cookieParser = require('cookie-parser')
const crypto = require('crypto');
const mongoose = require('mongoose');
const { parse, format } = require('date-fns');
const jwt = require('jsonwebtoken')
const userRoutes = require('./routes/userRoutes');
const {User, UserService, Enquiry, JobApplication} = require('../backend/models/user');



const app = express();

const allowedHeaders = [
  "Content-Type", // Allowing both types of content: multipart/form-data and application/json
  "Authorization", // Add other headers you need here
];
// "https://www.wono.co"

app.use(cors({
  origin: "https://www.wono.co" , // Reflects the request origin, allowing all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true, // Allow cookies to be sent
  allowedHeaders : allowedHeaders,
}));


// Preflight (OPTIONS) route handler
app.options('*', cors({
  origin: (origin, callback) => {
    if (origin) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  methods: ['OPTIONS'],
  credentials: true,
  allowedHeaders: allowedHeaders, // Ensure 'Content-Type' is included for file uploads
}));

const port = process.env.PORT;
app.use('/tmp', express.static(path.join(__dirname, 'tmp')));


// Middleware to parse JSON data
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  key: 'wono_session', // Unique cookie name
  secret: 'your-secret-key', // Replace with a strong secret
  resave: false,
  saveUninitialized: false,
  cookie: {
    // secure: process.env.NODE_ENV === 'production',
    secure: true,
    httpOnly: true, // Prevents client-side JS from accessing the cookie
    sameSite: 'lax', // Helps protect against CSRF attacks
    maxAge: 1000 * 60 * 60 * 2, // Session expiration time (2 hours)
  },
}));






// Test route
app.get("/", (req, res) => {
  res.json({ message: "Backend here" });
});

app.post('/', (req, res) => {
  console.log('Session Data:', req.session);
  if (req.session.user) {
    res.json({ valid: true });
  } else {
    res.json({ valid: false });
  }
});
app.get('/session', (req, res) => {
  if (req.session.user) {
    res.json({ user: req.session.user });
  } else {
    res.status(401).json({ error: 'Not authenticated' });
  }
});




app.use("", userRoutes);




// Route to download the CSV file
// app.get('/download-csv', (req, res) => {
//   const filePath = path.join(__dirname, 'form_data.csv');

//   // Check if the file exists
//   if (fs.existsSync(filePath)) {
//     res.download(filePath);
//   } else {
//     res.status(404).send('CSV file not found');
//   }
// });



//   const { jobTitle, name, email, date, number, location, experience, linkedInProfile, resume, monthlySalary, expectedSalary,
//     daysToJoin, relocateGoa, personality, skills, specialexperience, willing, message } = req.body;

//   let formData = req.body;

//   const query = `INSERT into apply_form (jobTitle,namee,email,application_date,PhoneNumber,location,
//       experience,linkedInProfile,resumelink,monthlySalary,expectedSalary,daysToJoin,relocateGoa,personality,
//       skills,specialexperience,willing,message
//       ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`

//   promisePool.query(query, [jobTitle, name, email, date, number, location, experience, linkedInProfile, resume,
//     monthlySalary, expectedSalary, daysToJoin, relocateGoa, personality, skills, specialexperience, willing,
//     message
//   ], (err, result) => {
//     if (err) {
//       console.log('Error saving data', err);
//       res.status(500).send('Error saving data');
//       return;
//     }
//     res.status(200).send('Data saved successfully');
//   });

//   const filePath = path.join(__dirname, "form_data.csv");

//   const fields = Object.keys(formData);

//   const csvParser = new Parser({ fields });

//   let csv = csvParser.parse([formData]);

//   if (fs.existsSync(filePath)) {
//     fs.appendFile(filePath, "\n" + csv, (error) => {
//       if (error) {
//         console.error('Error appending to csv file:', error);
//         res.status(500).send('Failed to send formdata');
//         return;
//       }
//       res.send('FormData saved successfully');
//     });
//   }
//   else {
//     fs.writeFile(filePath, csv, (err) => {
//       if (err) {
//         console.error('Error writing to csv file:', err);
//         res.status(500).send('Failed to send form Data');
//         return;
//       }
//       res.send("Formdata saved successfully");
//     });
//   }

// 








// Route to fetch all users
app.get("/users", async (req, res) => {
  try {
    // Fetch all users from the registrationDetails collection
    const users = await User.find();

    res.json(users); // Send the fetched data as JSON
  } catch (error) {
    console.error("Database error:", error.message);
    res.status(500).send("Failed to fetch user details.");
  }
});

// Route to check if an email is already registered



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
