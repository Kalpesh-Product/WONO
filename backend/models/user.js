const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Personal Information Section
  personalInfo: {
    name: { type: String, required: false },
    mobile: { type: String, required: false },
    email: { type: String, required: false, unique: true }, // Make optional
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


const userServiceSchema = new mongoose.Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    service_name: String
  }, { collection: 'userServices' });

  const enquirySchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    partnerstype: String,
    message: String,
  }, { collection: 'enquiryDetails' });

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
  });
  

  


const User = mongoose.model('User', userSchema);
const UserService = mongoose.model('UserService', userServiceSchema);
const Enquiry = mongoose.model('Enquiry', enquirySchema);
const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);

module.exports = {User, UserService, Enquiry, JobApplication};
