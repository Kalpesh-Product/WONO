import React, { useContext, useState, useRef } from "react";
import "../styles/bodyRegister.css";
import { GoogleLogin } from "@react-oauth/google";
// import { Form, FloatingLabel } from 'react-bootstrap';
import { TextField, MenuItem, Button, Box, Grid, Container } from '@mui/material';

import { jwtDecode } from "jwt-decode";
import { UserContext } from "../components/UserContext";
import { useNavigate } from "react-router-dom";
import emailSend from "../assets/WONO_images/img/emailSend.gif";
import { Link } from "react-router-dom";
import { Stepper, Step } from "react-form-stepper";
import {
  TransactionalWebsite,
  BookingEngine,
  MeetingRoomEngine,
  PaymentGateway,
} from "../assets/WONO_images/img/icon_service";
import gmailLogo from "../assets/WONO_images/img/services/gmailLogo.jpg";
import outlookLogo from "../assets/WONO_images/img/services/outlookLogo.png";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    country: "",
    city: "",
    state: "",
    companyName: "",
    industry: "",
    companySize: "",
    companyType: "",
    companyCity: "",
    companyState: "",
    websiteURL: "",
    linkedinURL: "",
    selectedServices: {
      service1: false,
      service2: false,
      service3: false,
      service4: false,
    },
  });
  const [errors, setErrors] = useState({});
  //checkbox
  const handleCheckboxChange = (service) => {
    setFormData((prevState) => ({
      ...prevState,
      selectedServices: {
        ...prevState.selectedServices,
        [service]: !prevState.selectedServices[service],
      },
    }));
  };

  const handleCardClick = (service) => {
    handleCheckboxChange(service);
  };

  const checkEmailDuplicate = async (email) => {
    try {
      const response = await fetch(
        `http://localhost:5000/check-email?email=${encodeURIComponent(email)}`
      );
      console.log("Response status:", response.status);
      if (response.status === 200) {
        const result = await response.json();
        console.log("Duplicate check result:", result);
        return result.isDuplicate;
      }
      throw new Error("Failed to check email");
    } catch (error) {
      console.error("Error checking email:", error);
      return false;
    }
  };

  const handleNext = async (e) => {
    e.preventDefault();
    const validationErrors = validateCurrentStep();
  
    if (Object.keys(validationErrors).length === 0) {
      try {
        // Determine the current section and prepare data
        let sectionData = {};
        let sectionName = '';
  
        // Extract the email from formData for duplicate check
        const { email } = formData;
  
        // Check for duplicate email in the database
        if (currentStep === 0 && email) { // Assuming email is only in the personal section
          const isDuplicate = await checkEmailDuplicate(formData.email);
          if (isDuplicate) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              email: 'This email is already in use.',
            }));
            return;
          }}
  
        // Set section data based on current step
        switch (currentStep) {
          case 0:
            sectionData = {
              email: formData.email,
              name: formData.name,
              mobile: formData.mobile,
              country: formData.country,
              city: formData.city,
              state: formData.state,
            };
            sectionName = 'personal';
            break;
          case 1:
            sectionData = {
              companyName: formData.companyName,
              industry: formData.industry,
              companySize: formData.companySize,
              companyType: formData.companyType,
              companyCity: formData.companyCity,
              companyState: formData.companyState,
              websiteURL: formData.websiteURL,
              linkedinURL: formData.linkedinURL,
            };
            sectionName = 'company';
            break;
          case 2:
            sectionData = formData.selectedServices;
            sectionName = 'services';
            break;
          // Add more cases as needed
          default:
            return;
        }
  
        // Send data to the backend
        const response = await fetch("http://localhost:5000/register/section", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ section: sectionName, data: sectionData }),
        });
  
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
  
        console.log(await response.text());
  
        // Move to the next step
        setCurrentStep((prev) => prev + 1);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        // Handle the error, e.g., show an error message to the user
      }
    }
  };
  

  
  
  // Helper function to get section name
  const getSectionName = (step) => {
    switch (step) {
      case 0: return 'personal';
      case 1: return 'company';
      case 2: return 'services';
      // Add more cases as needed
      default: return 'unknown';
    }
  };
  

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse?.credential);
    setUser(decoded); // Set the user's profile information
    console.log(decoded);
    navigate("/dashboard"); // Redirect after successful login
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateCurrentStep = () => {
    const newErrors = {};
    const {
      name,
      email,
      mobile,
      city,
      state,
      country,
      companyName,
      industry,
      companySize,
      companyType,
      websiteURL,
      linkedinURL,
      companyCity,
      companyState,
    } = formData;

    if (currentStep === 0) {
      // Step 0 validation
      if (!name) newErrors.name = "Full Name is required.";
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        newErrors.email = "Please enter a valid Email address.";
      if (!mobile || !/^[1-9]{1}[0-9]{9}$/.test(mobile))
        newErrors.mobile = "Please enter a valid Mobile Number.";
      if (!city) newErrors.city = "City is required.";
      if (!state) newErrors.state = "State is required.";
      if (!country) newErrors.country = "Country is required.";
    } else if (currentStep === 1) {
      // Step 1 validation
      if (!companyName) newErrors.companyName = "Company Name is required.";
      if (!industry) newErrors.industry = "Industry is required.";
      if (!companySize) newErrors.companySize = "Company Size is required.";
      if (!companyType) newErrors.companyType = "Company Type is required.";
      if (!companyCity) newErrors.companyCity = "Company City is required.";
      if (!companyState) newErrors.companyState = "Company State is required.";
      if (!websiteURL)
        newErrors.websiteURL = "Please enter a valid Website URL.";
      if (!linkedinURL)
        newErrors.linkedinURL = "Please enter a valid LinkedIn Profile Link.";
    }

    setErrors(newErrors);
    return newErrors;
  };

  //handlesubmit section
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Check for duplicate email
    console.log("handleSubmit");
  
    // Show "Sending details" modal
    setModalMessage(
      <img src={emailSend} style={{ width: 100 }} alt="emailSend" />
    );
    setIsLoading(true);
  
    try {
      const dataToSubmit = {
        ...formData,
        selectedServices: formData.selectedServices,
      };
  
      // Final submission to complete the registration
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const result = await response.text();
      console.log(result);
  
      // Show "Email sent" message
      // setModalMessage('Email sent');
      console.log("Email sent");
  
      // Navigate to login after a successful submission
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      console.log("Failed to send registration details");
    } finally {
      setIsLoading(false);
  
      // Clear modal message after some time
      setTimeout(() => {
        setModalMessage("");
      }, 3000);
    }
  };
  

  const isChecked = (service) => formData.selectedServices[service];
  return (
    <div className="register-master">
      <section id="contact" className="register">
        <div
          className="card flex justify-content-center"
          style={{ backgroundColor: "white", padding: 0, border: 'none' }}>
          <Stepper style={{ paddingTop: 0, textTransform:'uppercase' }} activeStep={currentStep}>
            <Step label="Personal Details" />
            <Step label="Company Details" />
            <Step label="Services" />
            <Step label="Account activation" />
          </Stepper>

          <form
            name="form-p"
            className={`register-form needs-validation ${Object.keys(errors).length ? "was-validated" : ""
              }`}
            id="partner-form"
            onSubmit={handleSubmit}
            noValidate>
            {currentStep === 0 && (
              <>
                <div className="registration-section-header">
                  <h2>Let's set up your free account</h2>
                </div>
                <div className="register-container">
                  <Container maxWidth="sm">
                    <Box
                      component="form"
                      sx={{ flexGrow: 1 }}
                      noValidate
                      autoComplete="off"
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Full Name"
                            variant="outlined"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            error={!!errors.name}
                            helperText={errors.name}
                            required
                            fullWidth
                          />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Email"
                            variant="outlined"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                            required
                            fullWidth
                          />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Phone Number"
                            variant="outlined"
                            name="mobile"
                            type="text"
                            inputProps={{ pattern: "[1-9]{1}[0-9]{9}" }}
                            value={formData.mobile}
                            onChange={handleChange}
                            error={!!errors.mobile}
                            helperText={errors.mobile}
                            required
                            fullWidth
                          />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="City"
                            variant="outlined"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            error={!!errors.city}
                            helperText={errors.city}
                            select
                            required
                            fullWidth
                          >
                            <MenuItem value="Mumbai">Mumbai</MenuItem>
                            <MenuItem value="Delhi">Delhi</MenuItem>
                            <MenuItem value="Bangalore">Bangalore</MenuItem>
                            <MenuItem value="Chennai">Chennai</MenuItem>
                            <MenuItem value="Kolkata">Kolkata</MenuItem>
                          </TextField>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="State"
                            variant="outlined"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            error={!!errors.state}
                            helperText={errors.state}
                            select
                            required
                            fullWidth
                          >
                            <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                            <MenuItem value="Delhi">Delhi</MenuItem>
                            <MenuItem value="Karnataka">Karnataka</MenuItem>
                            <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
                            <MenuItem value="West Bengal">West Bengal</MenuItem>
                          </TextField>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Country"
                            variant="outlined"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            error={!!errors.country}
                            helperText={errors.country}
                            select
                            required
                            fullWidth
                          >
                            <MenuItem value="India">India</MenuItem>
                            <MenuItem value="United States">United States</MenuItem>
                            <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                            <MenuItem value="Canada">Canada</MenuItem>
                            <MenuItem value="Australia">Australia</MenuItem>
                          </TextField>
                        </Grid>

                        <Grid item xs={12}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <button
                              type="submit"
                              className="register-page-button next-button-width"
                              onClick={handleNext}
                              style={{ width: "100%" }}>
                              Next
                            </button>
                          </div>
                        </Grid>

                        <Grid item xs={12}>
                          <Box textAlign="center" mt={2}>
                            <span>
                              By clicking below you accept the terms and conditions
                            </span>
                            <span style={{ display: 'block', marginTop: '10px' }}>
                              Already have an account <Link to="/login">Log-in</Link>
                            </span>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Container>

                </div>
              </>
            )}
            {currentStep === 1 && (
              <>
                <div className="registration-section-header">
                  <h2>Create company profile</h2>
                </div>
                <div className="register-container">
                  <Container maxWidth="sm">
                    <Box component="form" sx={{ flexGrow: 1 }} noValidate autoComplete="off">
                      <Grid container spacing={2}>

                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Company Name"
                            variant="outlined"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            error={!!errors.companyName}
                            helperText={errors.companyName}
                            required
                            fullWidth
                          />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Industry"
                            variant="outlined"
                            name="industry"
                            select
                            value={formData.industry}
                            onChange={handleChange}
                            error={!!errors.industry}
                            helperText={errors.industry}
                            required
                            fullWidth
                          >
                            <MenuItem value="Co-Working">Co-Working</MenuItem>
                            <MenuItem value="Workation">Workation</MenuItem>
                            <MenuItem value="Co-Living">Co-Living</MenuItem>
                          </TextField>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Company Size"
                            variant="outlined"
                            name="companySize"
                            select
                            value={formData.companySize}
                            onChange={handleChange}
                            error={!!errors.companySize}
                            helperText={errors.companySize}
                            required
                            fullWidth
                          >
                            <MenuItem value="50-100">50-100</MenuItem>
                            <MenuItem value="100-200">100-200</MenuItem>
                            <MenuItem value="200-500">200-500</MenuItem>
                            <MenuItem value="500+">500+</MenuItem>
                          </TextField>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Company Type"
                            variant="outlined"
                            name="companyType"
                            select
                            value={formData.companyType}
                            onChange={handleChange}
                            error={!!errors.companyType}
                            helperText={errors.companyType}
                            required
                            fullWidth
                          >
                            <MenuItem value="Private Limited">Private Limited</MenuItem>
                            <MenuItem value="Public Limited">Public Limited</MenuItem>
                            <MenuItem value="Partnership">Partnership</MenuItem>
                            <MenuItem value="Sole Proprietorship">Sole Proprietorship</MenuItem>
                            <MenuItem value="LLP">LLP</MenuItem>
                            <MenuItem value="NGO">NGO</MenuItem>
                          </TextField>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="City"
                            variant="outlined"
                            name="companyCity"
                            select
                            value={formData.companyCity}
                            onChange={handleChange}
                            error={!!errors.companyCity}
                            helperText={errors.companyCity}
                            required
                            fullWidth
                          >
                            <MenuItem value="Mumbai">Mumbai</MenuItem>
                            <MenuItem value="Delhi">Delhi</MenuItem>
                            <MenuItem value="Bangalore">Bangalore</MenuItem>
                            <MenuItem value="Chennai">Chennai</MenuItem>
                            <MenuItem value="Kolkata">Kolkata</MenuItem>
                          </TextField>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="State"
                            variant="outlined"
                            name="companyState"
                            select
                            value={formData.companyState}
                            onChange={handleChange}
                            error={!!errors.companyState}
                            helperText={errors.companyState}
                            required
                            fullWidth
                          >
                            <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                            <MenuItem value="Delhi">Delhi</MenuItem>
                            <MenuItem value="Karnataka">Karnataka</MenuItem>
                            <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
                            <MenuItem value="West Bengal">West Bengal</MenuItem>
                          </TextField>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Website URL"
                            variant="outlined"
                            name="websiteURL"
                            value={formData.websiteURL}
                            onChange={handleChange}
                            error={!!errors.websiteURL}
                            helperText={errors.websiteURL}
                            required
                            fullWidth
                          />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="LinkedIn URL"
                            variant="outlined"
                            name="linkedinURL"
                            value={formData.linkedinURL}
                            onChange={handleChange}
                            error={!!errors.linkedinURL}
                            helperText={errors.linkedinURL}
                            required
                            fullWidth
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <Box textAlign="center" mt={2}>
                            <span>
                              By clicking below you accept the terms and conditions
                            </span>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <button
                              type="submit"
                              className="register-page-button next-button-width"
                              onClick={handleNext}
                              style={{ width: "100%" }}>
                              Next
                            </button>
                          </div>
                            <span style={{ display: 'block', marginTop: '10px' }}>
                              Already have an account <Link to="/login">Log-in</Link>
                            </span>
                          </Box>
                        </Grid>

                      </Grid>
                    </Box>
                  </Container>
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                <div className="registration-section-header">
                  <h2 style={{textTransform:'uppercase'}}>Select your services</h2>
                </div>

                <div className="register-container">
                  <div className="services-section">
                    <div className="checkbox-group">
                      <div
                        className={`checkbox-card ${isChecked("service1") ? "checked" : ""
                          }`}
                        onClick={() => handleCardClick("service1")}>
                        <input
                          type="checkbox"
                          name="BookingEngine"
                          checked={formData.selectedServices.service1}
                          readOnly
                        />
                        <div className="check-image-container">
                          <img src={BookingEngine} alt="BookingEngine" />
                        </div>
                        <label>Booking Engine</label>
                      </div>
                      <div
                        className={`checkbox-card ${isChecked("service2") ? "checked" : ""
                          }`}
                        onClick={() => handleCardClick("service2")}>
                        <input
                          type="checkbox"
                          name="website"
                          checked={formData.selectedServices.service2}
                          readOnly
                        />
                        <div className="check-image-container">
                          <img
                            src={TransactionalWebsite}
                            alt="TransactionalWebsite"
                          />
                        </div>
                        <label>Website</label>
                      </div>
                      <div
                        className={`checkbox-card ${isChecked("service3") ? "checked" : ""
                          }`}
                        onClick={() => handleCardClick("service3")}>
                        <input
                          type="checkbox"
                          name="MeetingRoomEngine"
                          checked={formData.selectedServices.service3}
                          readOnly
                        />
                        <div className="check-image-container">
                          <img
                            src={MeetingRoomEngine}
                            alt="MeetingRoomEngine"
                          />
                        </div>
                        <label>Meeting room</label>
                      </div>
                      <div
                        className={`checkbox-card ${isChecked("service4") ? "checked" : ""
                          }`}
                        onClick={() => handleCardClick("service4")}>
                        <input
                          type="checkbox"
                          name="PaymentGateway"
                          checked={formData.selectedServices.service4}
                          readOnly
                        />
                        <div className="check-image-container">
                          <img src={PaymentGateway} alt="Payment Gateway" />
                        </div>
                        <label>PaymentGateway</label>
                      </div>
                    </div>
                    <div className="register-page-button-space">
                      <button
                        type="submit"
                        className="register-page-button next-button-width"
                        onClick={handleNext}>
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
            {currentStep === 3 && (
              <>
                <div className="registration-section-header">
                  <h2>Account activation</h2>
                </div>
                <div className="account-activation-container">
                  <div className="account-activation-section">
                    <div className="account-activation-description">
                      <span>
                        An email has been send to your email address :
                        <b>{formData.email ? formData.email : "EMAIL HERE"}</b>{" "}
                        containing all the further process for activating the
                        account.
                      </span>

                      <span>
                        Please let us know if there is any more queries from
                        your side or you can connect us as : response@wono.co
                      </span>
                      <div className="mail-client-container">
                        <div className="mail-client">
                          <img src={gmailLogo} alt="Website" />
                          <span>Open G-mail</span>
                        </div>
                        <div className="mail-client">
                          <img src={outlookLogo} alt="Outlook" />
                          <span>Open Outlook</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span>
                        Did not recieve an email ? Please check your spam
                        folder..!!
                        <br />
                        <br />
                        Resend and try again
                      </span>
                    </div>
                    <div className="register-page-button-space">
                      <button
                        className="register-page-button next-button-width"
                        onClick={handleSubmit}>
                        Submit
                      </button>
                      <span>Already have an account ? log-in</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
