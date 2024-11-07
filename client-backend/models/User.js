const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // Personal Information Section
    personalInfo: {
      name: { type: String, required: false },
      mobile: { type: String, required: false },
      email: { type: String, required: false, unique: true },
      country: String,
      city: String,
      state: String,
    },
    role: {
      type: String,
      default: "CMA-001",
    },
    department: [
      {                        
        type: String,
        default: "",
      },
    ],

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

    // Login Credentials
    credentials: {
      username: String,
      password: String,
    },
    refreshToken: String,

    // Service Selection Section
    selectedServices: {
      service1: { type: Boolean, default: false },
      service2: { type: Boolean, default: false },
      service3: { type: Boolean, default: false },
      service4: { type: Boolean, default: false },
    },

    otp: { type: String, required: false },
  },
  {
    timestamps: true,
    collection: "registrationDetails", // Specify the existing collection name here
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
