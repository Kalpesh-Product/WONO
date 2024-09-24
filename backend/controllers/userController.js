const crypto = require('crypto');
const { User, UserService, Enquiry, JobApplication } = require('../models/user');
const { aiwinMail, anushriMail } = require('../email/nodemailerConfig');
const jwt = require('jsonwebtoken');
const { sub } = require('date-fns');


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

       

        // Send both emails concurrently
        await Promise.all([
            aiwinMail.sendMail(userMailOptions),
            aiwinMail.sendMail(companyMailOptions),
        ]);

        res.status(200).send("Registration and emails sent successfully!");
    } catch (error) {
        console.error("Database error:", error.message);
        res.status(500).send("Failed to register user: " + error.message);
    }
};

exports.updateSection = async (req, res) => {
    const { section, data } = req.body;
    console.log(`Received section: ${section}`);
    console.log('Received data:', data);

    try {
        // Find the user by email
        let user = await User.findOne({ 'personalInfo.email': data.email });

        // If user exists, but you're updating the 'personal' section, prevent duplicate email
        if (user && section === 'personal') {
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
            case 'personal':
                user.personalInfo = { ...user.personalInfo, ...data };
                break;
            case 'company':
                // You can still update the 'company' section without checking email uniqueness
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
};

exports.checkEmail = async (req, res) => {
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
};


exports.forgotPassword = async (req, res) => {
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
            from: 'response@wono.co',
            to: email,
            subject: 'Password Reset OTP',
            text: `Your OTP for password reset is ${generatedOTP}`
        };

        try {
            await aiwinMail.sendMail(mailOptions);
            res.status(200).json({ message: 'OTP sent successfully' });
        } catch (error) {
            console.error('Error sending OTP email:', error);
            res.status(500).json({ error: 'Failed to send OTP email' });
        }

    } catch (error) {
        console.error('Error in /forgot-password:', error);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
};

exports.verifyOTP = async (req, res) => {
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
};

exports.resetPassword = async (req, res) => {
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
};


exports.login = async (req, res) => {
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

        // Create a jwt token
        const exp = Date.now() + 1000 * 60 * 60 * 24 * 30; // Token expires in 30 days
        const token = jwt.sign({
            sub: user._id,
            exp
        }, process.env.TOKEN_SECRET);

        res.cookie("Authorization", token, {
            expires: new Date(exp),
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        });

        res.status(200).json({
            message: "Logged in",
            user: {
                email: user.personalInfo.email,
                name: user.personalInfo.name
            },
            token
        });

    } catch (error) {
        console.error('Error in /login:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


exports.logout = (req, res) => {
    try {
        // Delete the cookie
        res.clearCookie("Authorization", { httpOnly: true, secure: true, sameSite: 'Strict' });


        // respond with 200
        res.status(200).json({ message: "Logged out" });
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

exports.submitEnquiry = async (req, res) => {
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
                    <p style="font-size: 16px; color: #333;">Best regards,<br><b>WONOCO PRIVATE LIMITED</b></p>
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
                <p style="font-size: 16px; color: #333;">New enquiry received</p>
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

        await aiwinMail.sendMail({
            from: 'response@wono.co',
            to: email,
            subject: 'Thank You for Your Enquiry',
            html: userEmailTemplate(name)
        });

        await aiwinMail.sendMail({
            from: 'response@wono.co',
            to: 'productwonoco@gmail.com',
            subject: 'New Enquiry Received',
            html: companyEmailTemplate(name, email, mobile, partnerstype, message)
        });

        res.status(201).json({ message: 'Enquiry submitted successfully!' });
    } catch (error) {
        console.error('Error saving enquiry:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.createJobApplication = async (req, res) => {
    const { jobTitle, name, email, date, number, location, experience, linkedInProfile,
        monthlySalary, expectedSalary, daysToJoin, relocateGoa, personality,
        skills, specialexperience, willing, message } = req.body;

    // Check if file was uploaded
    if (!req.file) {
        return res.status(400).json({ message: 'Resume file is required' });
    }

    const resumePath = req.file.path;

    const jobApplication = new JobApplication({
        jobTitle,
        name,
        email,
        date,
        number,
        location,
        experience,
        linkedInProfile,
        resume: req.file.originalname,
        monthlySalary,
        expectedSalary,
        daysToJoin,
        relocateGoa,
        personality,
        skills,
        specialexperience,
        willing,
        message,
        resumePath
    });

    try {
        // Save to MongoDB
        await jobApplication.save();

        // Email options
        const mailOptions = {
            from: email,
            to: 'productwonoco@gmail.com',
            subject: `Job Application: ${name} - ${jobTitle}`,
            html: `<head><style>
  table, td {
    border: 1px solid;
  }
  </style></head>
   <body style="font-family: 'Poppins', sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; -webkit-text-size-adjust: none; -ms-text-size-adjust: none;">
   
  <div style="width: 100%; max-width: 600px; background-color: #ffffff; margin: 20px auto; padding: 2rem; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
   <div style="padding: 1rem; text-align: center; border-radius: 1rem;background-color: #daf5fe">
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
                    path: resumePath,
                },
            ],
        };


        const replyMail = {
            from: 'response@wono.co',
            to: email,
            subject: `Job Application: ${name} - ${jobTitle}`,
            html: `<h1>Thank you for your application.</h1><p>We have received your application. We will get back to you in 24hrs.</p>`,
        };

        // Send emails

        anushriMail.sendMail(mailOptions, (error) => {
            if (error) {
                console.error('Failed to send Email:', error);
                return res.status(500).json({ message: 'Failed to send Email: ' + error.message });
            }
            console.log('Email sent to employer');
        });

        anushriMail.sendMail(replyMail, (error) => {
            if (error) {
                console.error('Failed to send Email:', error);
                return res.status(500).json({ message: 'Failed to send Email: ' + error.message });
            }
            console.log('Auto-reply sent to applicant');
        });

        res.status(200).json({ message: 'Application details have been sent' });
    } catch (error) {
        console.error('Error saving application:', error);
        res.status(500).json({ message: 'Failed to save application' });
    }
};


// exports.checkAuth = (req, res) => {
//     try {
//         res.status(200).json({ message: "Authorized" });
//         console.log(res);
//     } catch (err) {
//         console.log(err);
//         res.sendStatus(400);
//     }
// };
