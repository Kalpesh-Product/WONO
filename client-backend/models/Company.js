const mongoose = require("mongoose");
const companySchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    companySize: {
      type: String,
      required: true,
    },
    companyType: {
      type: String,
      required: true,
    },
    companyCity: {
      type: String,
      required: true,
    },
    companyState: {
      type: String,
      required: true,
    },
    websiteURL: String,
    linkedinURL: String,
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", companySchema);
module.exports = Company;
