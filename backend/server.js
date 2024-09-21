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

app.use(cors());


const app = express();
const port = process.env.PORT;

// Middleware to parse JSON data
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  key: 'Wono-login',
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // Set to true if using HTTPS
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 2 // 2 hours
  }
}))


// Setup Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // You can use other services like Yahoo, Outlook, etc.
  auth: {
    user: "aiwinraj1810@gmail.com", // Your email
    pass: process.env.EMAIL_AIWIN_PASS, // Your email password or app password
  },
});

const transport = nodemailer.createTransport({
  service: "gmail", // You can use other services like Yahoo, Outlook, etc.
  auth: {
    user: "anushri.bhagat263@gmail.com", // Your email
    pass: "xwhn rrhx ldba vvfx", // Your email password or app password
  },
});




// Test route
app.get("/", (req, res) => {
  res.json({ message: "Backend here" });
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


//Banner-Email

app.post('/banner-email', async (req, res) => {
  const { name, email, number, selectedOption } = req.body;

  const Options = {
    from: 'anushri.bhagat263@gmail.com',
    to: email, // Send to the user
    subject: 'Your Data is Received',
    text: `Hello ${name},\n\nWe have received your data with the following details:\n\nName: ${name}\nEmail: ${email}\nMobile: ${number}\nOption: ${selectedOption}\n\nThank you!`
  };

  try {
    await transport.sendMail(Options);

    // Auto-reply
    const autoReplyOptions = {
      from: 'anushri.bhagat263@gmail.com',
      to: email, // Send to yourself
      subject: 'New Submission Received',
      html: `<h1>Thank you for your concern.</h1>
            <br></br>
            <p>
            We have received your application. We will get back to you in 24hrs.
            </p>`
    };

    await transport.sendMail(autoReplyOptions);

    res.json({ success: true });

  }
  catch (error) {
    console.error('Error sending email:', error);
    res.json({ success: false });
  }
})// End Banner-Email


const jobApplicationSchema = new mongoose.Schema({
  jobTitle: String,
  name: String,
  email: String,
  date: String,
  number: String,
  location: String,
  experience: String,
  linkedInProfile: String,
  resume: String,
  monthlySalary: String,
  expectedSalary: String,
  daysToJoin: String,
  relocateGoa: Boolean,
  personality: String,
  skills: String,
  specialexperience: String,
  willing: String,
  message: String
}, { timestamps: true });

const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);

app.post('/send-email', async (req, res) => {
  const { jobTitle, name, email, date, number, location, experience, linkedInProfile, resume, monthlySalary, expectedSalary,
    daysToJoin, relocateGoa, personality, skills, specialexperience, willing, message } = req.body;

  const parsedDate = parse(date, 'dd-MM-yyyy', new Date());
  const formattedDate = format(parsedDate, 'dd-MM-yyyy');

  // Save the application details to MongoDB
  const jobApplication = new JobApplication({
    jobTitle,
    name,
    email,
    date: formattedDate,
    number,
    location,
    experience,
    linkedInProfile,
    resume,
    monthlySalary,
    expectedSalary,
    daysToJoin,
    relocateGoa,
    personality,
    skills,
    specialexperience,
    willing,
    message
  });

  try {
    // Save to MongoDB
    await jobApplication.save();

    // Email options
    const Mailoption = {
      from: 'anushri.bhagat263@gmail.com',
      to: email,
      subject: `Job Application: ${name} - ${jobTitle}`,
      html: `<head><style>
  table, td {
    border: 1px solid;
  }
  </style></head>
   <body style="font-family: 'Poppins', sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; -webkit-text-size-adjust: none; -ms-text-size-adjust: none;">
   
  <div style="width: 100%; max-width: 600px; background-color: #ffffff; margin: 20px auto; padding: 2rem; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
   <div style="padding: 1rem; text-align: center; border-radius: 1rem;">
                  <h1 style="font-size: 2rem; text-align: center; margin: 0; padding-bottom: 20px;">
                      Application form for the post of<br></br>
                      <b>${jobTitle}</b>
                  </h1>
    </div>
  <table style="width: 100%; border-collapse: collapse; border-radius:1rem">
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">Jobtitle</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${jobTitle}</td>
    </tr>
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">name</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${name}</td>
    </tr>
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">Experience</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${experience}</td>
    </tr>
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">LinkedInProfile</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;"><a href="">${linkedInProfile}</a></td>
    </tr>
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">Personality</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${personality}</td>
    </tr>
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">Skills</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${skills}</td>
    </tr>
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">ResumeLink</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;"><a href=${resume}>${resume}</a></td>
    </tr> 
  </table>
  </div>
  </body>`,
    };

    // Send email
    transport.sendMail(Mailoption, (error, info) => {
      if (error) {
        return res.status(500).send('Failed to send Email: ' + error.message);
      }
      res.status(200).send('Application details have been sent');
    });

  } catch (error) {
    console.error('Error saving application:', error);
    res.status(500).send('Failed to save application');
  }
});

// Route to download the CSV file
app.get('/download-csv', (req, res) => {
  const filePath = path.join(__dirname, 'form_data.csv');

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    res.download(filePath);
  } else {
    res.status(404).send('CSV file not found');
  }
});



// app.post('/submit-form', (req, res) => {
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

// });

const enquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  partnerstype: String,
  message: String,
}, { collection: 'enquiryDetails' });

const Enquiry = mongoose.model('Enquiry', enquirySchema);



app.post('/enquiries', async (req, res) => {
  const { name, email, mobile, partnerstype, message } = req.body;

  try {
    const newEnquiry = new Enquiry({
      name,
      email,
      mobile,
      partnerstype,
      message
    });

    await newEnquiry.save();

    const userEmailTemplate = (name) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You Email</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    </head>
    <body style="font-family: 'Poppins', sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; -webkit-text-size-adjust: none; -ms-text-size-adjust: none;">
        <div style="width: 100%; max-width: 600px; background-color: #ffffff; margin: 20px auto; padding: 2rem; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <div style="background-color: #daf5fe; padding: 1rem; text-align: center; border-radius: 1rem;">
                <h1 style="font-size: 2rem; text-align: center; margin: 0; padding-bottom: 20px; color: black;">Thank You for Your Enquiry</h1>
            </div>
            <div style="padding: 1rem;">
                <p style="font-size: 16px; color: #333;">Dear ${name},</p>
                <p style="font-size: 16px; color: #333;">Thank you for your enquiry. We appreciate your interest and will get back to you shortly.</p>
                <p style="font-size: 16px; color: #333;">Best regards,<br><b>WONOCO PRIVATE LIMITED</b></p>
            </div>
        </div>
    </body>
    </html>
`;


    const companyEmailTemplate = (name, email, mobile, partnerstype, message) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Enquiry Email</title>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  </head>
  <body style="font-family: 'Poppins', sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; -webkit-text-size-adjust: none; -ms-text-size-adjust: none;">
      <div style="width: 100%; max-width: 600px; background-color: #ffffff; margin: 20px auto; padding: 2rem; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #daf5fe; padding: 1rem; text-align: center; border-radius: 1rem;">
            <h1 style="font-size: 2rem; text-align: center; margin: 0; padding-bottom: 20px; color: black;">
                W<span style="color: #0d6efd;">O</span>N<span style="color: #0d6efd;">O</span> enquiry
            </h1>
            
          </div>
          <p style="font-size: 16px; color: #333;">New enquiry recieved</p>
          <table style="width: 100%; border-collapse: collapse;">
              <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;"><strong>Name:</strong></td>
                  <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;"><strong>Email:</strong></td>
                  <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${email}</td>
              </tr>
              <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;"><strong>Mobile:</strong></td>
                  <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${mobile}</td>
              </tr>
              <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;"><strong>Partner Type:</strong></td>
                  <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${partnerstype}</td>
              </tr>
              <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;"><strong>Message:</strong></td>
                  <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${message}</td>
              </tr>
          </table>
          <p>Best regards,</p>
          <b><p style="font-size: 16px; color: #333;">
            W<span style="color: #0d6efd;">O</span>N<span style="color: #0d6efd;">O</span>C<span style="color: #0d6efd;">O</span> PRIVATE LIMITED
        </p>
        </b>
      </div>
  </body>
  </html>
`;



    await transporter.sendMail({
      from: 'aiwinraj1810@gmail.com', // sender address
      to: email, // user email
      subject: 'Thank You for Your Enquiry',
      html: userEmailTemplate(name)
    });

    // Send email to the company
    await transporter.sendMail({
      from: 'aiwinraj1810@gmail.com', // sender address
      to: 'productwonoco@gmail.com', // company email
      subject: 'New Enquiry Received',
      html: companyEmailTemplate(name, email, mobile, partnerstype, message)
    });
    res.status(201).json({ message: 'Enquiry submitted successfully!' });
  } catch (error) {
    console.error('Error saving enquiry:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



//regdetails schema

const userSchema = new mongoose.Schema({
  // Personal Information Section
  personalInfo: {
    name: { type: String, required: false },
    mobile: { type: String, required: false },
    email: { type: String, required: false, unique : true }, // Make optional
    country: String,
    city: String,
    state: String,
  },

  // Company Information Section
  companyInfo: {
    companyName: String,
    industry: String,
    companySize: String,
    companyType: String,
    companyCity: String,
    companyState: String,
    websiteURL: String,
    linkedinURL: String,
  },

  // Login Credentials (if needed in future)
  credentials: {
    username: String,
    password: String,
  },

  // Service Selection Section
  selectedServices: {
    service1: { type: Boolean, default: false },
    service2: { type: Boolean, default: false },
    service3: { type: Boolean, default: false },
    service4: { type: Boolean, default: false },
  },

  otp: { type: String, required: false },

}, { collection: 'registrationDetails' });



// Define UserService schema
const userServiceSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  service_name: String
}, { collection: 'userServices' });

// Create models
const User = mongoose.model('User', userSchema);
const UserService = mongoose.model('UserService', userServiceSchema);


// Route to handle form submission



app.post("/register", async (req, res) => {
  const {
    email,
    name,
    mobile,
    country,
    city,
    state,
    companyName,
    industry,
    companySize,
    companyType,
    companyCity,
    companyState,
    websiteURL,
    linkedinURL,
    selectedServices,
  } = req.body;

  try {
    // Generate username and password
    const username = name.replace(/\s+/g, '');
    const uniqueNumber = crypto.randomInt(1000, 9999);
    const password = `${username}@Wono${uniqueNumber}`;

    // Check if user already exists
    let user = await User.findOne({ 'personalInfo.email': email });

    if (!user) {
      // If user doesn't exist, create a new one
      user = new User({
        personalInfo: {
          name,
          mobile,
          email,
          country,
          city,
          state,
        },
        companyInfo: {
          companyName,
          industry,
          companySize,
          companyType,
          companyCity,
          companyState,
          websiteURL,
          linkedinURL,
        },
        credentials: {
          username,
          password
        },
        selectedServices
      });
    } else {
      // Update existing user
      user.personalInfo = {
        name,
        mobile,
        email,
        country,
        city,
        state,
      };
      user.companyInfo = {
        companyName,
        industry,
        companySize,
        companyType,
        companyCity,
        companyState,
        websiteURL,
        linkedinURL,
      };
      user.selectedServices = selectedServices;
      user.credentials = {
        username,
        password
      };
    }

    const savedUser = await user.save();

    // Insert selected services into UserService collection
    const serviceEntries = Object.keys(selectedServices)
      .filter(service => selectedServices[service])
      .map(service => ({
        user_id: savedUser._id,
        service_name: service
      }));

    if (serviceEntries.length > 0) {
      await UserService.insertMany(serviceEntries);
    }

    // Prepare email templates
    const userMailOptions = {
      from: "your_email@gmail.com",
      to: email,
      subject: "Welcome to Our Service!",
      html: `
        <h1>Welcome to Our Service, ${name}!</h1>
        <p>Thank you for registering with us. We'll be contacting you within 24 hours</p>

        <p>Feel free to explore our services and let us know if you need any assistance.</p>
        <p>Best Regards,<br>Wono</p>
      `,
    };

    const companyMailOptions = {
      from: "your_email@gmail.com",
      to: "productwon@gmail.com",
      subject: "New User Registration",
      html: `
        <h1>New User Registration Details</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Company Size:</strong> ${companySize}</p>
        <p><strong>Company Type:</strong> ${companyType}</p>
        <p><strong>Company City:</strong> ${companyCity}</p>
        <p><strong>Company State:</strong> ${companyState}</p>
        <p><strong>Website URL:</strong> ${websiteURL}</p>
        <p><strong>LinkedIn URL:</strong> ${linkedinURL}</p>
        <p><strong>Selected Services:</strong> ${Object.keys(selectedServices).filter(service => selectedServices[service]).join(', ')}</p>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Password:</strong> ${password}</p>
      `,
    };

    // Send both emails concurrently
    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(companyMailOptions),
    ]);

    res.status(200).send("Registration and emails sent successfully!");
  } catch (error) {
    console.error("Database error:", error.message);
    res.status(500).send("Failed to register user: " + error.message);
  }
});


app.post("/register/section", async (req, res) => {
  const { section, data } = req.body;
  console.log(`Received section: ${section}`);
  console.log('Received data:', data);

  try {
    // Find the user by email or create a new one
    let user = await User.findOne({ 'personalInfo.email': data.email });
    if (!user) {
      console.log("No user found, creating a new one");
      user = new User();
    } else {
      console.log("User found, updating existing one");
    }

    // Initialize fields if not present
    if (!user.personalInfo) user.personalInfo = {};
    if (!user.companyInfo) user.companyInfo = {};
    if (!user.selectedServices) user.selectedServices = {};

    // Update user data based on the section
    switch (section) {
      case 'personal':
        user.personalInfo = { ...user.personalInfo, ...data };
        break;
      case 'company':
        user.companyInfo = { ...user.companyInfo, ...data };
        break;
      case 'services':
        user.selectedServices = { ...user.selectedServices, ...data };
        break;
      default:
        return res.status(400).send("Invalid section");
    }

    // Save the user
    const savedUser = await user.save();
    console.log("User saved:", savedUser);
    res.status(200).send("Section data updated successfully!");
  } catch (error) {
    console.error("Database error:", error.message);
    res.status(500).send("Failed to update section data: " + error.message);
  }
});

app.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const user = await User.findOne({ 'personalInfo.email': email });

    if (!user) {
      return res.status(404).json({ error: 'Email not found' });
    }

    const generatedOTP = crypto.randomInt(100000, 999999).toString();

    user.otp = generatedOTP;
    await user.save();

    const mailOptions = {
      from: 'aiwinraj1810@gmail.com',
      to: email,
      subject: 'Password Reset OTP',
      text: `Your OTP for password reset is ${generatedOTP}`
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'OTP sent successfully' });
    } catch (error) {
      console.error('Error sending OTP email:', error);
      res.status(500).json({ error: 'Failed to send OTP email' });
    }

  } catch (error) {
    console.error('Error in /forgot-password:', error);
    res.status(500).json({ error: 'An error occurred while processing your request' });
  }
});

//verify otp

app.post('/verify-otp', async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ error: 'Email and OTP are required' });
  }

  try {
    const user = await User.findOne({ 'personalInfo.email': email });

    if (!user) {
      return res.status(404).json({ error: 'Email not found' });
    }

    if (otp !== user.otp) {
      return res.status(400).json({ error: 'Invalid OTP' });
    }

    user.otp = null; // Clear the OTP
    await user.save();

    res.status(200).json({ message: 'OTP verified successfully' });

  } catch (error) {
    console.error('Error in /verify-otp:', error);
    res.status(500).json({ error: 'An error occurred while processing your request' });
  }
});

app.post('/reset-password', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and new password are required' });
  }

  try {
    const user = await User.findOne({ 'personalInfo.email': email });

    if (!user) {
      return res.status(404).json({ error: 'Email not found' });
    }

    user.credentials.password = password; // Update password
    await user.save();

    res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error in /reset-password:', error);
    res.status(500).json({ error: 'An error occurred while processing your request' });
  }
});


// Route to handle user login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Query to check user credentials in MongoDB
    const user = await User.findOne({
      'personalInfo.email': email,
      'credentials.password': password
    });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Set session user data
    req.session.user = {
      id: user._id,
      email: user.personalInfo.email,
      name: user.personalInfo.name
    };

    // Send back the session user data
    res.json({
      user: req.session.user
    });
  } catch (error) {
    console.error('Error in /login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



//forgot password




// server.js or your main server file
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      return res.status(500).json({ error: 'Failed to logout' });
    }
    res.json({ message: 'Logged out successfully' });
  });
});


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
app.get("/check-email", async (req, res) => {
  const email = req.query.email;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const isDuplicate = await User.findOne({ 'personalInfo.email': email });

    res.status(200).json({ isDuplicate: !!isDuplicate });
  } catch (error) {
    console.error("Error checking email:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

