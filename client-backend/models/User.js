const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // Personal Information Section
    personalInfo: {
      name: { type: String, required: true },
      mobile: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      dob: {
        type: Date,
        required: true,
      },
      gender: String,
      country: String,
      city: String,
      state: String,
    },
    profilePicture: String,
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
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
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
    access: {
      hr: [
        {
          type: String,
        },
      ],
      salesAndMarketing: [
        {
          type: String,
        },
      ],
      financeAndAccounting: [
        {
          type: String,
        },
      ],
      customerManagementServices: [
        {
          type: String,
        },
      ],
      reportsAndAnalytics: [
        {
          type: String,
        },
      ],
      frontend: [
        {
          type: String,
        },
      ],
    },

    otp: { type: String, required: false },
  },
  {
    timestamps: true,
    collection: "registrationDetails",
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
