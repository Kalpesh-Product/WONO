import React, { useContext, useState, useRef, useEffect } from "react";
import "../styles/bodyRegister.css";
import { GoogleLogin } from "@react-oauth/google";
// import { Form, FloatingLabel } from 'react-bootstrap';
import {
  TextField,
  MenuItem,
  Button,
  Box,
  Grid,
  Container,
} from "@mui/material";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import emailSend from "../assets/WONO_images/img/emailSend.gif";
import { Link } from "react-router-dom";
import { Stepper, Step } from "react-form-stepper";
import { Country, State, City } from "country-state-city";
import {
  TransactionalWebsite,
  BookingEngine,
  MeetingRoomEngine,
  PaymentGateway,
} from "../assets/WONO_images/img/icon_service";
import gmailLogo from "../assets/WONO_images/img/services/gmailLogo.jpg";
import outlookLogo from "../assets/WONO_images/img/services/outlookLogo.png";
import Spinners from "../components/Spinner";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
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

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [companyStates, setCompanyStates] = useState([]);
  const [companyCities, setCompanyCities] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (formData.country) {
      const countryStates = State.getStatesOfCountry(formData.country);
      setStates(countryStates);
      setFormData((prev) => ({ ...prev, state: "", city: "" }));
      setCities([]);
    }
  }, [formData.country]);

  // Fetch cities when a state is selected
  useEffect(() => {
    if (formData.state) {
      const stateCities = City.getCitiesOfState(
        formData.country,
        formData.state
      );
      setCities(stateCities);
      setFormData((prev) => ({ ...prev, city: "" }));
    }
  }, [formData.state]);

  useEffect(() => {
    const countryStates = State.getStatesOfCountry("IN"); // Fetch states of India
    setCompanyStates(countryStates);
    // Reset state and city on load
    setFormData((prev) => ({ ...prev, companyState: "", companyCity: "" }));
  }, []);

  useEffect(() => {
    if (formData.companyState) {
      const stateCities = City.getCitiesOfState("IN", formData.companyState); // Fetch cities for the selected state
      setCompanyCities(stateCities);
      setFormData((prev) => ({ ...prev, companyCity: "" })); // Reset city when state changes
    } else {
      setCompanyCities([]); // Clear cities if no state is selected
    }
  }, [formData.companyState]);

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
      const response = await axios.get(`/check-email`, { params: { email } });

      if (response.status === 200) {
        const result = response.data;
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
        setLoading(true); // Show the spinner

        let sectionData = {};
        let sectionName = "";

        const { email } = formData;

        if (currentStep === 0 && email) {
          const isDuplicate = await checkEmailDuplicate(email);
          if (isDuplicate) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              email: "This email is already in use.",
            }));
            setLoading(false); // Hide spinner on error
            return;
          }
        }

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
            sectionName = "personal";
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
            sectionName = "company";
            break;
          default:
            setLoading(false); // Hide spinner if no valid step
            return;
        }

        const response = await axios.post(
          "/register/section",
          {
            section: sectionName,
            data: sectionData,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }

        console.log(response.data);

        setCurrentStep((prev) => prev + 1); // Move to the next step
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      } finally {
        setLoading(false); // Always hide spinner when the request finishes
      }
    }
  };

  // Helper function to get section name
  const getSectionName = (step) => {
    switch (step) {
      case 0:
        return "personal";
      case 1:
        return "company";
      case 2:
        return "services";
      // Add more cases as needed
      default:
        return "unknown";
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
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

    console.log("Sending email...");

    try {
      setLoading(true);
      const dataToSubmit = {
        ...formData,
        selectedServices: formData.selectedServices, // Ensure selected services are submitted here
      };

      setCurrentStep((prev) => prev + 1);

      // Final submission to complete the registration
      const response = await axios.post("/register", dataToSubmit, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // No need for response.text() with Axios, access response data directly
      console.log(response.data); // Axios parses the response JSON automatically

      // Show "Email sent" message
      console.log("Email sent");

      // Navigate to login after a successful submission
    } catch (error) {
      console.error("There was a problem with the submission:", error);
      console.log("Failed to send registration details");
    } finally {
      setLoading(false);

      // Clear modal message after some time
      // setTimeout(() => {
      //   setModalMessage("");
      // }, 3000);
    }
  };

  const isChecked = (service) => formData.selectedServices[service];
  return (
    <div className="register-master">
      <section id="contact" className="register">
        <div
          className="card flex justify-content-center "
          style={{
            backgroundColor: "white",
            border: "none",
            fontFamily: "inherit",
          }}
        >
          <div className="stepper-container">
            <Stepper
              connectorStateColors={true}
              styleConfig={{
                activeBgColor: "#2196F3", // Blue for the active step
                completedBgColor: "#4CAF50", // Green for completed steps
                inactiveBgColor: "#E0E0E0", // Color for inactive steps
                size: "2.5em", // Step size (Optional)
                activeTextColor: "#FFFFFF", // Text color for active step
                completedTextColor: "#FFFFFF", // Text color for completed steps
                inactiveTextColor: "#000000", // Text color for inactive steps
                circleFontSize: "1rem", // Font size for step number (Optional)
                fontFamily: "inherit",
              }}
              connectorStyleConfig={{
                size: 3, // Thickness of the connector line
                activeColor: "#4CAF50", // Color of the connector when active
                completedColor: "#4CAF50", // Color of the connector when completed
                inactiveColor: "#E0E0E0", // Color of the connector when inactive
              }}
              style={{ paddingTop: 0, textTransform: "uppercase" }}
              activeStep={currentStep}
            >
              <Step
                label="Personal Details"
                completed={currentStep > 0} // Step is completed if currentStep is greater than 0
                children={currentStep > 0 ? "✓" : 1} // Show tick mark if completed, else show step number
                stepClassName="stepper-container"
              />
              <Step
                label="Company Details"
                completed={currentStep > 1} // Step is completed if currentStep is greater than 1
                children={currentStep > 1 ? "✓" : 2}
              />
              <Step
                label="Services"
                completed={currentStep > 2} // Step is completed if currentStep is greater than 2
                children={currentStep > 2 ? "✓" : 3}
              />
              <Step
                label="Account Activation"
                completed={currentStep > 3} // Step is completed if currentStep is greater than 3
                children={currentStep > 3 ? "✓" : 4}
              />
            </Stepper>
          </div>

          <form
            name="form-p"
            className={`register-form needs-validation ${
              Object.keys(errors).length ? "was-validated" : ""
            }`}
            id="partner-form"
            onSubmit={handleSubmit}
            noValidate
          >
            {currentStep === 0 && (
              <>
                <div className="registration-section-header">
                  <h2>Let's set up your free account</h2>
                </div>
                <div className="register-container">
                  <Container
                    maxWidth="md"
                    sx={{
                      width: {
                        xs: "100%", // Full width on extra small screens (mobile)
                        sm: "100%", // Full width on small screens
                        md: "50%", // 50% width on medium and larger screens
                      },
                    }}
                  >
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
                            {Country.getAllCountries().map((country) => (
                              <MenuItem
                                key={country.isoCode}
                                value={country.isoCode}
                              >
                                {country.name}
                              </MenuItem>
                            ))}
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
                            {states.map((state) => (
                              <MenuItem
                                key={state.isoCode}
                                value={state.isoCode}
                              >
                                {state.name}
                              </MenuItem>
                            ))}
                          </TextField>
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
                            {cities.map((city) => (
                              <MenuItem key={city.name} value={city.name}>
                                {city.name}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>

                        <Grid item xs={12}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <button
                              type="submit"
                              className="register-page-button next-button-width"
                              onClick={handleNext}
                              style={{ width: "100%" }}
                            >
                              Next
                            </button>
                          </div>
                        </Grid>

                        <Grid item xs={12}>
                          <Box textAlign="center" mt={2}>
                            <span>
                              By clicking above you accept the terms and
                              conditions
                            </span>
                            <span
                              style={{
                                display: "block",
                                marginTop: "10px",
                                textDecoration: "none",
                              }}
                            >
                              Already have an account ?{" "}
                              <Link
                                style={{ textDecoration: "none" }}
                                onClick={() => {
                                  window.location.href =
                                    "https://wonofe.vercel.app/";
                                  window.scrollTo({
                                    top: 0,
                                    behavior: "instant",
                                  });
                                }}
                                to="/login"
                              >
                                Log-in
                              </Link>
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
                  <Container
                    maxWidth="md"
                    sx={{
                      width: {
                        xs: "100%", // Full width on extra small screens (mobile)
                        sm: "100%", // Full width on small screens
                        md: "50%", // 50% width on medium and larger screens
                      },
                    }}
                  >
                    <Box
                      component="form"
                      sx={{ flexGrow: 1 }}
                      noValidate
                      autoComplete="off"
                    >
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
                            <MenuItem value="Private Limited">
                              Private Limited
                            </MenuItem>
                            <MenuItem value="Public Limited">
                              Public Limited
                            </MenuItem>
                            <MenuItem value="Partnership">Partnership</MenuItem>
                            <MenuItem value="Sole Proprietorship">
                              Sole Proprietorship
                            </MenuItem>
                            <MenuItem value="LLP">LLP</MenuItem>
                            <MenuItem value="NGO">NGO</MenuItem>
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
                            {companyStates.map((state) => (
                              <MenuItem
                                key={state.isoCode}
                                value={state.isoCode}
                              >
                                {state.name}
                              </MenuItem>
                            ))}
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
                            {companyCities.map((city) => (
                              <MenuItem key={city.name} value={city.name}>
                                {city.name}
                              </MenuItem>
                            ))}
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
                              By clicking below you accept the terms and
                              conditions
                            </span>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <button
                                type="submit"
                                className="register-page-button next-button-width"
                                onClick={handleNext}
                                style={{ width: "100%" }}
                              >
                                Next
                              </button>
                            </div>
                            <span
                              style={{ display: "block", marginTop: "10px" }}
                            >
                              Already have an account ?{" "}
                              <Link
                                onClick={() => {
                                  window.scrollTo({
                                    top: 0,
                                    behavior: "instant",
                                  });
                                }}
                                to="/login"
                              >
                                Log-in
                              </Link>
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
                  <h2 style={{ textTransform: "uppercase" }}>
                    Select your services
                  </h2>
                </div>

                <div className="register-container">
                  <div className="services-section">
                    <div className="checkbox-group">
                      <div
                        className={`checkbox-card ${
                          isChecked("service1") ? "checked" : ""
                        }`}
                        onClick={() => handleCardClick("service1")}
                      >
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
                        className={`checkbox-card ${
                          isChecked("service2") ? "checked" : ""
                        }`}
                        onClick={() => handleCardClick("service2")}
                      >
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
                        className={`checkbox-card ${
                          isChecked("service3") ? "checked" : ""
                        }`}
                        onClick={() => handleCardClick("service3")}
                      >
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
                        className={`checkbox-card ${
                          isChecked("service4") ? "checked" : ""
                        }`}
                        onClick={() => handleCardClick("service4")}
                      >
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
                        onClick={handleSubmit}
                      >
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
                        An email has been send to your email address :{" "}
                        <b>{formData.email ? formData.email : "EMAIL HERE"}</b>{" "}
                        containing all the further process for activating the
                        account.
                      </span>

                      <span>
                        Please let us know if there is any more queries from
                        your side or you can connect us as :{" "}
                        <b>response@wono.co</b>
                      </span>
                      <div className="mail-client-container">
                        <div className="mail-client">
                          <div className="mail-client-image">
                            <img src={gmailLogo} alt="Website" />
                          </div>
                          <div
                            className="mail-client-text"
                            onClick={() =>
                              window.open("https://mail.google.com", "_blank")
                            }
                          >
                            <span>Open G-mail</span>
                          </div>
                        </div>
                        <div className="mail-client">
                          <div className="mail-client-image">
                            <img src={outlookLogo} alt="Outlook" />
                          </div>
                          <div
                            className="mail-client-text"
                            onClick={() =>
                              window.open(
                                "https://outlook.live.com/mail/inbox",
                                "_blank"
                              )
                            }
                          >
                            <span>Open Outlook</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span>
                        Did not recieve an email ? Please check your spam
                        folder..!!
                        <br />
                        <br />
                        {/* Resend and try again */}
                      </span>
                    </div>
                    <div className="register-page-button-space">
                      <button
                        className="register-page-button next-button-width"
                        onClick={() => navigate("/login")}
                      >
                        Login now
                      </button>
                      {/* <span style={{ display: 'block', marginTop: '10px' }}>
                        Already have an account ? <Link onClick={() => {
                          window.scrollTo({ top: 0, behavior: 'instant' })
                        }} to="/login">Log-in</Link>
                      </span> */}
                    </div>
                  </div>
                </div>
              </>
            )}
          </form>
        </div>
        {loading && <Spinners animation={"border"} variant={"dark"} />}
      </section>
    </div>
  );
};

export default Register;
