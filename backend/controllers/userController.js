const crypto = require("crypto");
const {
  User,
  UserService,
  Enquiry,
  JobApplication,
} = require("../models/user");
const { companyMail } = require("../email/nodemailerConfig");
const jwt = require("jsonwebtoken");
const path = require("path");
const { sub } = require("date-fns");
const axios = require("axios");
const { handleDocumentUpload } = require("../config/cloudinaryConfig");
const { fetchEnquiriesFromDB, sendDataToGoogleSheets } = require('../services/googleSheet')

// Sync Google Sheets by fetching data from DB
exports.syncEnquiriesToGoogleSheets = async (req, res) => {
  try {
    const enquiries = await Enquiry.find(); // Get all enquiries from DB
    const dataToSync = enquiries.map(enquiry => ({
      name: enquiry.name,
      email: enquiry.email,
      mobile: enquiry.mobile,
      partnerstype: enquiry.partnerstype,
      message: enquiry.message,
    }));

    res.status(200).json({ status: 'success', data: dataToSync });
  } catch (error) {
    console.error('Error fetching data from database:', error.message);
    res.status(500).json({ status: 'error', message: error.message });
  }
};


exports.registerUser = async (req, res) => {
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
    const username = name.replace(/\s+/g, "");
    const uniqueNumber = crypto.randomInt(1000, 9999);
    const password = `${username}@Wono${uniqueNumber}`;

    // Check if user already exists
    let user = await User.findOne({ "personalInfo.email": email });

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
          password,
        },
        selectedServices,
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
        password,
      };
    }

    const savedUser = await user.save();

    // Insert selected services into UserService collection
    const serviceEntries = Object.keys(selectedServices)
      .filter((service) => selectedServices[service])
      .map((service) => ({
        user_id: savedUser._id,
        service_name: service,
      }));

    if (serviceEntries.length > 0) {
      await UserService.insertMany(serviceEntries);
    }

    // Prepare email templates
    const userMailOptions = {
      from: "response@wono.co",
      to: email,
      subject: "Welcome to Our Service!",
      html: `
        <h1>Welcome to Our Service, ${name}!</h1>
        <p>Thank you for registering with us. We'll be contacting you within 24 hours.</p>

        <p>Email : ${email}</p>
        <p>Password : ${password}</p>

        <p>Feel free to explore our services and let us know if you need any assistance.</p>
        <p>Best Regards,<br>Wono</p>
      `,
    };

    const companyMailOptions = {
      from: `"${name} <${email}>"`, // Display user's name and email as the sender
      to: "productwonoco@gmail.com",
      replyTo: email,
      subject: "New User Registration",
      html: `
              <head>
  <style>
 td {
      border: 1px solid;
    }
  </style>
</head>
<body style="font-family: 'Poppins', sans-serif; margin: 0; padding: 0; background-color: #ffffff; -webkit-text-size-adjust: none; -ms-text-size-adjust: none;">
  <div style="width: 100%; max-width: 600px; background-color: #ffffff; margin: 20px auto; padding: 2rem; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    <div style="padding: 1rem; text-align: center; border-radius: 1rem; background-color: #daf5fe">
      <h1 style="font-size: 2rem; text-align: center; margin: 0; padding-bottom: 20px;">
        New User Registration Details
      </h1>
    </div>
    <table style="width: 100%; border-collapse: collapse; border-radius:1rem">
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">Name</td>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">Email</td>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${email}</td>
      </tr>
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">Mobile</td>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${mobile}</td>
      </tr>
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">Country</td>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${country}</td>
      </tr>
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">City</td>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${city}</td>
      </tr>
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">State</td>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${state}</td>
      </tr>
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">Company Name</td>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${companyName}</td>
      </tr>
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">Industry</td>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${industry}</td>
      </tr>
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">Company Size</td>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${companySize}</td>
      </tr>
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">Company Type</td>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${companyType}</td>
      </tr>
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">Company City</td>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${companyCity}</td>
      </tr>
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">Company State</td>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${companyState}</td>
      </tr>
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">Website URL</td>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${websiteURL}</td>
      </tr>
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">LinkedIn URL</td>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${linkedinURL}</td>
      </tr>
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">Selected Services</td>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${Object.keys(
        selectedServices
      )
          .filter((service) => selectedServices[service])
          .join(", ")}</td>
      </tr>
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">Username</td>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${username}</td>
      </tr>
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">Password</td>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${password}</td>
      </tr>
    </table>
  </div>
</body>`}

    // Send both emails concurrently
    await Promise.all([
      companyMail.sendMail(userMailOptions),
      companyMail.sendMail(companyMailOptions),
    ]);

    try {
      // Existing code for saving the user to the database and sending emails

      // After saving the user and sending emails, send data to Google Sheets
      const googleSheetsUrl = 'https://script.google.com/macros/s/AKfycbw2NTr3gIJ982nqXii6Q1Ywt78DR7VWiBBFHHq_WrPe7S6H7QIdVqYutPEOW4nScvZnaQ/exec'; // Replace with your actual web app URL

      // Prepare the data payload
      const payload = {
        name,
        email,
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
        source: 'firstAPI'
      };

      // Send the data to Google Sheets
      await axios.post(googleSheetsUrl, payload);

      return res.status(200).send("User registered successfully and data sent to Google Sheets!");

    } catch (error) {
      console.error("Sheets error", error.message);
      return res.status(500).send("Failed to send sheets user: " + error.message);
    }


  } catch (error) {
    console.error("Database error:", error.message);
    res.status(500).send("Failed to register user: " + error.message);
  }
};


exports.updateSection = async (req, res) => {
  const { section, data } = req.body;
  console.log(`Received section: ${section}`);
  console.log("Received data:", data);

  try {
    // Find the user by email
    let user = await User.findOne({ "personalInfo.email": data.email });

    // If user exists, but you're updating the 'personal' section, prevent duplicate email
    if (user && section === "personal") {
      // If user is found, throw an error for duplicate email
      console.log("Duplicate email found");
      return res.status(409).json({ error: "This email is already in use." });
    }

    // If no user is found, create a new user object
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
      case "personal":
        user.personalInfo = { ...user.personalInfo, ...data };
        break;
      case "company":
        // You can still update the 'company' section without checking email uniqueness
        user.companyInfo = { ...user.companyInfo, ...data };
        break;
      case "services":
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
};

exports.checkEmail = async (req, res) => {
  const email = req.query.email;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const isDuplicate = await User.findOne({ "personalInfo.email": email });
    res.status(200).json({ isDuplicate: !!isDuplicate });
  } catch (error) {
    console.error("Error checking email:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const user = await User.findOne({ "personalInfo.email": email });

    if (!user) {
      return res.status(404).json({ error: "Email not found" });
    }

    const generatedOTP = crypto.randomInt(100000, 999999).toString();

    user.otp = generatedOTP;
    await user.save();

    const mailOptions = {
      from: "response@wono.co",
      to: email,
      subject: "Password Reset OTP",
      text: `Your OTP for password reset is ${generatedOTP}`,
    };

    try {
      await companyMail.sendMail(mailOptions);
      res.status(200).json({ message: "OTP sent successfully" });
    } catch (error) {
      console.error("Error sending OTP email:", error);
      res.status(500).json({ error: "Failed to send OTP email" });
    }
  } catch (error) {
    console.error("Error in /forgot-password:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing your request" });
  }
};

exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ error: "Email and OTP are required" });
  }

  try {
    const user = await User.findOne({ "personalInfo.email": email });

    if (!user) {
      return res.status(404).json({ error: "Email not found" });
    }

    if (otp !== user.otp) {
      return res.status(400).json({ error: "Invalid OTP" });
    }

    user.otp = null; // Clear the OTP
    await user.save();

    res.status(200).json({ message: "OTP verified successfully" });
  } catch (error) {
    console.error("Error in /verify-otp:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing your request" });
  }
};

exports.resetPassword = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Email and new password are required" });
  }

  try {
    const user = await User.findOne({ "personalInfo.email": email });

    if (!user) {
      return res.status(404).json({ error: "Email not found" });
    }

    user.credentials.password = password; // Update password
    await user.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error in /reset-password:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing your request" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Query to check user credentials in MongoDB
    const user = await User.findOne({
      "personalInfo.email": email,
      "credentials.password": password,
    });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Create a jwt token
    const exp = Date.now() + 1000 * 60 * 60 * 24 * 30; // Token expires in 30 days
    const token = jwt.sign(
      {
        sub: user._id,
        exp,
      },
      process.env.TOKEN_SECRET
    );

    res.cookie("Authorization", token, {
      expires: new Date(exp),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    res.status(200).json({
      message: "Logged in",
      user: {
        email: user.personalInfo.email,
        name: user.personalInfo.name,
      },
      token,
    });
  } catch (error) {
    console.error("Error in /login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.logout = (req, res) => {
  try {
    // Delete the cookie
    res.clearCookie("Authorization", {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });

    // respond with 200
    res.status(200).json({ message: "Logged out" });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

// Contact page backend API for submitting enquiry

exports.submitEnquiry = async (req, res) => {
  // getting the user data from request body

  const { name, email, mobile, partnerstype, message } = req.body;

  try {
    const newEnquiry = new Enquiry({
      name,
      email,
      mobile,
      partnerstype,
      message,
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
        <body style="font-family: 'Poppins', sans-serif; margin: 0; padding: 0; background-color: #ffffff; -webkit-text-size-adjust: none; -ms-text-size-adjust: none;">
            <div style="width: 100%; max-width: 600px; background-color: #ffffff; margin: 20px auto; padding: 2rem; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <div style="background-color: #daf5fe; padding: 1rem; text-align: center; border-radius: 1rem;">
                    <h1 style="font-size: 2rem; text-align: center; margin: 0; padding-bottom: 20px; color: black;">Thank You for Your Enquiry</h1>
                </div>
                <div style="padding: 1rem;">
                    <p style="font-size: 16px; color: #333;">Dear ${name},</p>
                    <p style="font-size: 16px; color: #333;">Thank you for your enquiry. We have received your message and will get back to you shortly.</p>
                    <p style="font-size: 16px; color: #333;">Best regards,<br><b>Wono Team</b></p>
                </div>
            </div>
        </body>
        </html>
      `;

    const companyEmailTemplate = (
      name,
      email,
      mobile,
      partnerstype,
      message
    ) => `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Enquiry Email</title>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
        </head>
        <body style="font-family: 'Poppins', sans-serif; margin: 0; padding: 0; background-color: #ffffff; -webkit-text-size-adjust: none; -ms-text-size-adjust: none;">
            <div style="width: 100%; max-width: 600px; background-color: #ffffff; margin: 20px auto; padding: 2rem; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <div style="background-color: #daf5fe; padding: 1rem; text-align: center; border-radius: 1rem;">
                  <h1 style="font-size: 2rem; text-align: center; margin: 0; padding-bottom: 20px; color: black;">
                      W<span style="color: #0d6efd;">O</span>N<span style="color: #0d6efd;">O</span> enquiry
                  </h1>
                </div>
                <p style="font-size: 16px; color: #333;">New enquiry received</p>
                <table style="width: 100%">
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

    await companyMail.sendMail({
      from: "response@wono.co",
      to: email,
      subject: `Wono - Thank you for your enquiry`,
      html: userEmailTemplate(name),
    });

    await companyMail.sendMail({
      from: `"${name} <${email}>"`,
      to: "response@wono.co",
      cc: "productwonoco@gmail.com",
      subject: `Wono - Enquiry From: ${name}`,
      replyTo: email,
      html: companyEmailTemplate(name, email, mobile, partnerstype, message),
    });

    // ////////

    try {
      // Existing code for saving the user to the database and sending emails

      // After saving the user and sending emails, send data to Google Sheets
      const googleSheetsUrl =
        "https://script.google.com/macros/s/AKfycbzaE8HR7n-GkQD26y6oDbUyq0N6RRCQOGzlCJdESwrBE1DlmV27WklQWRsamgaT4jYBOQ/exec"; // Replace with your actual web app URL

      // Prepare the data payload
      // const payload = {
      //   name,
      //   email,
      //   mobile,
      //   partnerstype,
      //   message,
      //   source : 'secondAPI'
      // };

      // Send the data to Google Sheets
      // await axios.post(googleSheetsUrl, payload);

      // return res
      //   .status(200)
      //   .send(
      //     "User enquiry saved successfully and data sent to Google Sheets!"
      //   );
    } catch (error) {
      console.error("Sheets error", error.message);
      return res.status(500).send("Failed to send sheets user: " + error.message);
    }

    // ////////

    res.status(201).json({ message: "Enquiry submitted successfully!" });
  } catch (error) {
    console.error("Error saving enquiry:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//job application - start[[[]]]
exports.createJobApplication = async (req, res) => {
  const {
    jobTitle,
    name,
    email,
    date,
    number,
    location,
    experience,
    linkedInProfile,
    monthlySalary,
    expectedSalary,
    daysToJoin,
    relocateGoa,
    personality,
    skills,
    specialexperience,
    willing,
    message,
  } = req.body;

  // Check if file was uploaded
  if (!req.file) {
    return res.status(400).json({ message: "Resume file is required" });
  }

  try {
    const cloudinaryUploadRes = await handleDocumentUpload(
      req.file.buffer,
      "WoNo/resumes", // or any other folder you prefer
      req.file.originalname
    );

    // Extract Cloudinary URL
    const resumeUrl = cloudinaryUploadRes.secure_url;

    const jobApplication = new JobApplication({
      jobTitle,
      name,
      email,
      date,
      number,
      location,
      experience,
      linkedInProfile,
      resume: req.file.originalname, // Save the original name to DB
      resumeUrl: resumeUrl, // Store the public URL in the DB for future reference
      monthlySalary,
      expectedSalary,
      daysToJoin,
      relocateGoa,
      personality,
      skills,
      specialexperience,
      willing,
      message,
    });

    // Save to MongoDB
    await jobApplication.save();
    console.log("Saved to DB");

    // Email options (as previously defined)
    const mailOptions = {
      from: `"${name} <${email}>"`,
      to: "response@wono.co",
      cc: "productwonoco@gmail.com",
      subject: `Job Application: ${name} - ${jobTitle}`,
      html: `<head><style>
 
  </style></head>
   <body style="font-family: 'Poppins', sans-serif; margin: 0; padding: 0; background-color: #ffffff; -webkit-text-size-adjust: none; -ms-text-size-adjust: none;">
   
  <div style="width: 100%; max-width: 600px; background-color: #ffffff; margin: 20px auto; padding: 2rem; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
   <div style="padding: 1rem; text-align: center; border-radius: 1rem;background-color: #daf5fe">
                  <h1 style="font-size: 2rem; text-align: center; margin: 0; padding-bottom: 20px;">
                      Application form for the post of<br></br>
                      <b>${jobTitle}</b>
                  </h1>
    </div>
  <table style="width: 100%">
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">Jobtitle</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${jobTitle}</td>
    </tr>
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">Name</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${name}</td>
    </tr>
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">Email</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${email}</td>
    </tr>
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">Contact</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${number}</td>
    </tr>
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">Date of joining</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${date}</td>
    </tr>
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">Experience</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${experience}</td>
    </tr>
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">Monthly Salary</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${monthlySalary}</td>
    </tr>
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">Expected Salary</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${expectedSalary}</td>
    </tr>
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">Days to join</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${daysToJoin}</td>
    </tr>
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">Relocate to goa?</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${relocateGoa}</td>
    </tr>
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">LinkedInProfile</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${linkedInProfile}</td>
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
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">willings</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${willing}</td>
    </tr>
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">Message</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${message}</td>
    </tr>

  </table>
  </div>
  </body>`,
      attachments: [
        {
          filename: req.file.originalname,
          content: req.file.buffer, // Attach the actual file buffer
        },
      ],
    };

    const replyMail = {
      from: "response@wono.co",
      to: email,
      subject: `Job Application: ${name} - ${jobTitle}`,
      html: `<h1>Thank you for your application.</h1><p>We have received your application. We will get back to you in 24hrs.</p>`,
    };

    // Send emails
    companyMail.sendMail(mailOptions, (error) => {
      if (error) {
        console.error("Failed to send Email:", error);
        return res
          .status(500)
          .json({ message: "Failed to send Email: " + error.message });
      }
      console.log("Email sent to employer");
    });

    companyMail.sendMail(replyMail, (error) => {
      if (error) {
        console.error("Failed to send Email:", error);
        return res
          .status(500)
          .json({ message: "Failed to send Email: " + error.message });
      }
      console.log("Auto-reply sent to applicant");
    });

    try {
      // Existing code for saving the user to the database and sending emails

      // After saving the user and sending emails, send data to Google Sheets
      const googleSheetsUrl = 'https://script.google.com/macros/s/AKfycby1zFqf25odw7bFEMdIAYe6qZBxE8Xah9__KMtt7YGRxy83qtowLAJAQ85_F33CAzZmeA/exec'; // Replace with your actual web app URL

      // Prepare the data payload
      const payload = {
        jobTitle,
        name,
        email,
        number,
        date,
        experience,
        monthlySalary,
        expectedSalary,
        daysToJoin,
        relocateGoa,
        resumeUrl: resumeUrl,
        personality,
        skills,
        willing,
        message,
        source: 'thirdAPI'
      };

      // Send the data to Google Sheets
      try {
        const response = await axios.post(googleSheetsUrl, payload);
        console.log("Google Sheets response:", response.data);
      } catch (error) {
        console.error("Sheets error", error.message);
        return res.status(500).send("Failed to send sheets user: " + error.message);

      }
      return res.status(200).send("User registered successfully and data sent to Google Sheets!");

    } catch (error) {
      console.error("Sheets error", error.message);
      return res.status(500).send("Failed to send sheets user: " + error.message);
    }
    res.status(200).json({ message: 'Application details have been sent' });
  } catch (error) {
    console.error('Error saving application:', error);
    res.status(500).json({ message: 'Failed to save application' });
  }


};
