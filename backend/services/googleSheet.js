const { Enquiry } = require('../models/user')
const axios = require('axios')

const fetchEnquiriesFromDB = async () => {
    try {
      // Fetch all data from the enquiry collection/table
      const enquiries = await Enquiry.find();
      return enquiries;
    } catch (error) {
      console.error('Error fetching enquiries from DB:', error);
      throw error;
    }
  };

  const sendDataToGoogleSheets = async (enquiries) => {
    try {
      const googleSheetsUrl = 'https://script.google.com/macros/s/AKfycbwyliZbXQHolxwETgYBleOneWyXUnwxdXXlNu0kMHLtVNtsWd1sbv-4toVNwF85YWKiWQ/exec';
  
      // Iterate through each enquiry and send it to Google Sheets
      for (const enquiry of enquiries) {
        const payload = {
          name: enquiry.name,
          email: enquiry.email,
          mobile: enquiry.mobile,
          partnerstype: enquiry.partnerstype,
          message: enquiry.message,
          source: 'secondAPI' // Mark the source if needed
        };
  
        // Send the data to Google Sheets
        await axios.post(googleSheetsUrl, payload);
      }
  
      console.log('Data sent to Google Sheets successfully!');
    } catch (error) {
      console.error('Error sending data to Google Sheets:', error.message);
      throw error;
    }
  };

  module.exports = {fetchEnquiriesFromDB, sendDataToGoogleSheets}