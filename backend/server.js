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


const app = express();
const port = 5000;

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
app.use(cors({
  origin:["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials : true
}
));

// Setup Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // You can use other services like Yahoo, Outlook, etc.
  auth: {
    user: "aiwinraj1810@gmail.com", // Your email
    pass: "egbu dugk nupf xjry", // Your email password or app password
  },
});

const transport = nodemailer.createTransport({
  service: "gmail", // You can use other services like Yahoo, Outlook, etc.
  auth: {
    user: "anushri.bhagat263@gmail.com", // Your email
    pass: "xwhn rrhx ldba vvfx", // Your email password or app password
  },
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

app.post('/banner-email',async(req,res)=>{
  const { name, email, number, selectedOption } = req.body;

  const Options = {
    from: 'anushri.bhagat263@gmail.com',
    to: 'productwonoco@gmail.com', // Send to the user
    subject: 'Your Data is Received',
    text: `Hello ${name},\n\nWe have received your data with the following details:\n\nName: ${name}\nEmail: ${email}\nMobile: ${number}\nOption: ${selectedOption}\n\nThank you!`
};

try{
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
catch(error)
{
  console.error('Error sending email:', error);
  res.json({ success: false });
}
})// End Banner-Email




app.post('/send-email', (req,res) =>{
    const {jobTitle,name,email,date,number,location,experience,linkedInProfile,resume,monthlySalary,expectedSalary,
        daysToJoin,relocateGoa,personality,skills,specialexperience,willing,message} = req.body;

        //Apply form email content
        const Mailoption = {
            from:'anushri.bhagat263@gmail.com',
            to:email,
            subject:`Job Application: ${name} - ${jobTitle}`,
            html:`<head><style>
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

        transport.sendMail(Mailoption,(error,info)=>{
            if(error){
                return res.status(500).send('Failed to send Email',+ error.message);
            }
            res.status(200).send('Application details have been sent');
  });
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



app.post('/submit-form',(req,res)=>{
    const {jobTitle,name,email ,date,number,location,experience,linkedInProfile,resume,monthlySalary,expectedSalary,
      daysToJoin,relocateGoa,personality,skills,specialexperience,willing,message} = req.body;

      let formData = req.body;

      const query = `INSERT into apply_form (jobTitle,namee,email,application_date,PhoneNumber,location,
      experience,linkedInProfile,resumelink,monthlySalary,expectedSalary,daysToJoin,relocateGoa,personality,
      skills,specialexperience,willing,message
      ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
  
      promisePool.query(query,[jobTitle,name,email,date,number,location,experience,linkedInProfile,resume,
        monthlySalary,expectedSalary,daysToJoin,relocateGoa,personality,skills,specialexperience,willing,
        message
      ],(err,result)=>{
        if(err)
        {
          console.log('Error saving data', err);
          res.status(500).send('Error saving data');
          return;
        }
        res.status(200).send('Data saved successfully');
      });

  const filePath = path.join(__dirname,"form_data.csv");

  const fields = Object.keys(formData);

  const csvParser = new Parser({fields});

  let csv = csvParser.parse([formData]);

  if(fs.existsSync(filePath))
  {
    fs.appendFile(filePath , "\n" + csv, (error)=>{
      if(error){
        console.error('Error appending to csv file:', error);
        res.status(500).send('Failed to send formdata');
        return;
      }
       res.send('FormData saved successfully');
      });
  }
  else{
    fs.writeFile(filePath,csv, (err) => {
      if(err){
        console.error('Error writing to csv file:',err);
        res.status(500).send('Failed to send form Data');
        return;
      }
      res.send("Formdata saved successfully");
    });
  }
    
  });

  
  
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

    // Insert user data into user_data table
    const [result] = await promisePool.query(
      `INSERT INTO user_data 
        (name, mobile, email, country, city, state, companyName, industry, companySize, companyType, companyCity, companyState, websiteURL, linkedinURL, username, password)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        name,
        mobile,
        email,
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
        username,
        password,
      ]
    );

    const userId = result.insertId;

    // Insert selected services into user_services table
    const serviceEntries = Object.keys(selectedServices)
      .filter(service => selectedServices[service])
      .map(service => [userId, service]);

    if (serviceEntries.length > 0) {
      await promisePool.query(
        'INSERT INTO user_services (user_id, service_name) VALUES ?',
        [serviceEntries]
      );
    }

    // Prepare email templates
    const userMailOptions = {
      from: "aiwinraj1810@gmail.com",
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
      from: "aiwinraj1810@gmail.com",
      to: "aiwinraj1018@gmail.com",
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


app.post('/reset-password', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
      return res.status(400).json({ error: 'Email and new password are required' });
  }

  try {
      // Update the password in the database
      const [result] = await promisePool.query(
          'UPDATE user_data SET password = ? WHERE email = ?',
          [password, email]
      );

      // Check if the update was successful
      if (result.affectedRows === 0) {
          return res.status(404).json({ error: 'Email not found' });
      }

      res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
      console.error('Error in /reset-password:', error);
      res.status(500).json({ error: 'An error occurred while processing your request' });
  }
});


// Route to handle user login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Query to check user credentials
    const [rows] = await promisePool.query(
      'SELECT * FROM user_data WHERE username = ? AND password = ?',
      [username, password]
    );

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const user = rows[0];
    // Set session user data
    req.session.user = {
      id: user.id,
      email: user.email,
      name: user.name
    };
    res.json({
      user: req.session.user
    });
  } catch (error) {
    console.error('Error in /login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//forgot password

app.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const [rows] = await promisePool.query(
      'SELECT * FROM user_data WHERE email = ?', [email]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Email not found' });
    }

    const generatedOTP = crypto.randomInt(100000, 999999);

    await promisePool.query(
      'UPDATE user_data SET otp = ? WHERE email = ?', [generatedOTP, email]
    );

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
  console.log(req.body)

  if (!email || !otp) {
    return res.status(400).json({ error: 'Email and OTP are required' });
  }

  try {
    const [rows] = await promisePool.query(
      'SELECT otp FROM user_data WHERE email = ?', [email]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Email not found' });
    }
    console.log(email)
    const storedOtp = rows[0].otp;
    console.log(rows[0].otp)
    console.log(storedOtp)
    if (otp !== storedOtp) {
      return res.status(400).json({ error: 'Invalid OTP' });
    }

     promisePool.query(
      'UPDATE user_data SET otp = NULL WHERE email = ?', [email]
    );

    res.status(200).json({ message: 'OTP verified successfully' });

  } catch (error) {
    console.error('Error in /verify-otp:', error);
    res.status(500).json({ error: 'An error occurred while processing your request' });
  }
});


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
    const [rows] = await promisePool.query("SELECT * FROM user_data");
    res.json(rows);
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
    // Query to check if email exists in the database
    const [rows] = await promisePool.query(
      "SELECT COUNT(*) AS count FROM user_data WHERE email = ?",
      [email]
    );
    const isDuplicate = rows[0].count > 0;

    res.status(200).json({ isDuplicate });
  } catch (error) {
    console.error("Error checking email:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

