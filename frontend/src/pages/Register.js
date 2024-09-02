import React, { useContext, useState, useRef } from 'react';
import '../styles/bodyRegister.css';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { UserContext } from '../components/UserContext';
import { useNavigate } from 'react-router-dom';
import emailSend from '../assets/WONO_images/img/emailSend.gif'
import { Link } from 'react-router-dom';
import { Stepper, Step } from "react-form-stepper";
import { TransactionalWebsite, BookingEngine, MeetingRoomEngine, PaymentGateway } from '../assets/WONO_images/img/icon_service';

const Register = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    country: '',
    city: '',
    state: '',
    companyName: '',
    industry: '',
    companySize: '',
    companyType: '',
    companyCity: '',
    companyState: '',
    websiteURL: '',
    linkedinURL: '',
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

  const handleNext = async (e) => {
    e.preventDefault();
    // const validationErrors = validateCurrentStep();

    // if (Object.keys(validationErrors).length === 0) {

    //   if (currentStep === 0 && formData.email) {
    //     const isDuplicate = await checkEmailDuplicate(formData.email);
    //     if (isDuplicate) {
    //       setErrors((prevErrors) => ({
    //         ...prevErrors,
    //         email: 'This email is already in use.',
    //       }));
    //       return;
    //     }
    //   }


    //   console.log(formData);
    // }
    setCurrentStep((prev) => prev + 1); 
  };


  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse?.credential);
    setUser(decoded); // Set the user's profile information
    console.log(decoded);
    navigate('/dashboard'); // Redirect after successful login
  };

  const handleLoginError = () => {
    console.log('Login Failed');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
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
      if (!name) newErrors.name = 'Full Name is required.';
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Please enter a valid Email address.';
      if (!mobile || !/^[1-9]{1}[0-9]{9}$/.test(mobile)) newErrors.mobile = 'Please enter a valid Mobile Number.';
      if (!city) newErrors.city = 'City is required.';
      if (!state) newErrors.state = 'State is required.';
      if (!country) newErrors.country = 'Country is required.';
    } else if (currentStep === 1) {
      // Step 1 validation
      if (!companyName) newErrors.companyName = 'Company Name is required.';
      if (!industry) newErrors.industry = 'Industry is required.';
      if (!companySize) newErrors.companySize = 'Company Size is required.';
      if (!companyType) newErrors.companyType = 'Company Type is required.';
      if (!companyCity) newErrors.companyCity = 'Company City is required.';
      if (!companyState) newErrors.companyState = 'Company State is required.';
      if (!websiteURL) newErrors.websiteURL = 'Please enter a valid Website URL.';
      if (!linkedinURL) newErrors.linkedinURL = 'Please enter a valid LinkedIn Profile Link.';
    }

    setErrors(newErrors);
    return newErrors;
  };


  const checkEmailDuplicate = async (email) => {
    try {
      const response = await fetch(`http://localhost:5000/check-email?email=${encodeURIComponent(email)}`);
      if (response.status === 200) {
        const result = await response.json();
        return result.isDuplicate;
      }
      throw new Error('Failed to check email');
    } catch (error) {
      console.error('Error checking email:', error);
      return false;
    }
  };
  //handlesubmit section
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check for duplicate email
    console.log('handleSubmit')

    // Show "Sending details" modal
    setModalMessage(<img src={emailSend} style={{ width: 100 }} alt='emailSend' />);
    setIsLoading(true);

    try {
      const dataToSubmit = {
        ...formData,
        selectedServices: formData.selectedServices,
      };
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.text();
      console.log(result);

      // Show "Email sent" message
      // setModalMessage('Email sent');
      console.log('Email sent')

      // Navigate to login after a successful submission
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      console.log('Failed to send registration details');
    } finally {
      setIsLoading(false);

      // Clear modal message after some time
      setTimeout(() => {
        setModalMessage('');
      }, 3000);
    }
  };

  const isChecked = (service) => formData.selectedServices[service];
  return (
    <>
      <section id='contact' className='register'>
        <div className="card flex justify-content-center" style={{ backgroundColor: 'white' }}>
          <Stepper activeStep={currentStep}>
            <Step label="Personal Details" />
            <Step label="Company Details" />
            <Step label="Services" />
            <Step label="Account activation" />
          </Stepper>

          <form name='form-p' className={`register-form needs-validation ${Object.keys(errors).length ? 'was-validated' : ''}`} id='partner-form' onSubmit={handleSubmit} noValidate>
            {currentStep === 0 && (
              <>
                <div className="registration-section-header">
                  <h2>Let's set up your free account</h2>
                </div>
                <div className='register-container'>
                  <div className='row gy-4'>
                    <div className='col-md-12' style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                      <div className='col-lg-6'>



                        <div className="row gy-3">
                          {/* Form fields */}

                          {/* Other fields */}
                          <div className="col-lg-6">
                            <input
                              type="text"
                              name="name"
                              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                              placeholder="Full Name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                          </div>

                          <div className="col-lg-6">
                            <input
                              type="email"
                              name="email"
                              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                              placeholder="Email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                          </div>
                          <div className="col-lg-6">
                            <input
                              type="text"
                              name="mobile"
                              pattern="[1-9]{1}[0-9]{9}"
                              className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                              placeholder="Phone-number"
                              value={formData.mobile}
                              onChange={handleChange}
                              required
                            />
                            {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
                          </div>
                          <div className="col-lg-6">
                            <select
                              className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                              aria-label="Default select example"
                              name="city"
                              value={formData.city}
                              onChange={handleChange}
                              required
                            >
                              <option value="" disabled>City</option>
                              <option value="Mumbai">Mumbai</option>
                              <option value="Delhi">Delhi</option>
                              <option value="Bangalore">Bangalore</option>
                              <option value="Chennai">Chennai</option>
                              <option value="Kolkata">Kolkata</option>
                            </select>
                            {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                          </div>
                          <div className="col-lg-6">
                            <select
                              className={`form-select ${errors.state ? 'is-invalid' : ''}`}
                              aria-label="Default select example"
                              name="state"
                              value={formData.state}
                              onChange={handleChange}
                              required
                            >
                              <option value="" disabled>State</option>
                              <option value="Maharashtra">Maharashtra</option>
                              <option value="Delhi">Delhi</option>
                              <option value="Karnataka">Karnataka</option>
                              <option value="Tamil Nadu">Tamil Nadu</option>
                              <option value="West Bengal">West Bengal</option>

                            </select>
                            {errors.state && <div className="invalid-feedback">{errors.state}</div>}
                          </div>
                          <div className="col-lg-6">
                            <select
                              className={`form-control ${errors.country ? 'is-invalid' : ''}`}
                              aria-label="Default select example"
                              name="country"
                              value={formData.country}
                              onChange={handleChange}
                              required
                            >
                              <option value="" disabled>Country</option>
                              <option value="India">India</option>
                              <option value="United States">United States</option>
                              <option value="United Kingdom">United Kingdom</option>
                              <option value="Canada">Canada</option>
                              <option value="Australia">Australia</option>

                            </select>
                            {errors.country && <div className="invalid-feedback">{errors.country}</div>}
                          </div>

                          <div className="register-page-button-space">
                            <span>By clicking below you accept the terms and conditions</span>
                            <button
                              type="submit"
                              className="register-page-button"
                              onClick={handleNext}
                              style={{width:'100%'}}
                            >
                            Next
                            </button>
                            <span>Already have an account <Link to={'/login'}>Log-in</Link></span>
                          </div>
                        </div>
                        {/* <GoogleLogin
                      onSuccess={handleLoginSuccess}
                      onError={handleLoginError}
                    /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {currentStep === 1 && (
              <>
                <div className="registration-section-header">
                  <h2>Create company profile</h2>
                </div>
                <div className='register-container'>
                  <div className='row gy-4'>
                    <div className='col-md-16' style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                      <div className='col-lg-8'>

                        <div className="row gy-3">
                          {/* Form fields */}

                          {/* Other fields */}
                          <div className="col-lg-6">
                            <input
                              type="text"
                              name="companyName"
                              className={`form-control ${errors.companyName ? 'is-invalid' : ''}`}
                              placeholder="Company name"
                              value={formData.companyName}
                              onChange={handleChange}
                              required
                            />
                            {errors.companyName && <div className="invalid-feedback">{errors.companyName}</div>}
                          </div>
                          <div className="col-lg-6">
                            <select
                              className={`form-select ${errors.industry ? 'is-invalid' : ''}`}
                              aria-label="Default select example"
                              name="industry"
                              value={formData.industry}
                              onChange={handleChange}
                              required
                            >
                              <option value="" disabled>Industry</option>
                              <option value="Co-Working">Co-Working</option>
                              <option value="Workation">Workation</option>
                              <option value="Co-Living">Co-Living</option>
                            </select>
                            {errors.industry && <div className="invalid-feedback">{errors.industry}</div>}
                          </div>

                          <div className="col-lg-6">
                            <select
                              className={`form-select ${errors.companySize ? 'is-invalid' : ''}`}
                              aria-label="Default select example"
                              name="companySize"
                              value={formData.companySize}
                              onChange={handleChange}
                              required
                            >
                              <option value="" disabled>Company-size</option>
                              <option value="50-100">50-100</option>
                              <option value="100-200">100-200</option>
                              <option value="200-500">200-500</option>
                              <option value="500+">500+</option>
                            </select>
                            {errors.companySize && <div className="invalid-feedback">{errors.companySize}</div>}
                          </div>

                          <div className="col-lg-6">
                            <select
                              className={`form-select ${errors.companyType ? 'is-invalid' : ''}`}
                              aria-label="Default select example"
                              name="companyType"
                              value={formData.companyType}
                              onChange={handleChange}
                              required
                            >
                              <option value="" disabled>Company Type</option>
                              <option value="Private Limited">Private Limited</option>
                              <option value="Public Limited">Public Limited</option>
                              <option value="Partnership">Partnership</option>
                              <option value="Sole Proprietorship">Sole Proprietorship</option>
                              <option value="LLP">LLP</option>
                              <option value="NGO">NGO</option>
                            </select>
                            {errors.companyType && <div className="invalid-feedback">{errors.companyType}</div>}
                          </div>
                          <div className="col-lg-6">
                            <select
                              className={`form-control ${errors.companyCity ? 'is-invalid' : ''}`}
                              aria-label="Default select example"
                              name="companyCity"
                              value={formData.companyCity}
                              onChange={handleChange}
                              required
                            >
                              <option value="" disabled>City</option>
                              <option value="Mumbai">Mumbai</option>
                              <option value="Delhi">Delhi</option>
                              <option value="Bangalore">Bangalore</option>
                              <option value="Chennai">Chennai</option>
                              <option value="Kolkata">Kolkata</option>
                            </select>
                            {errors.companyCity && <div className="invalid-feedback">{errors.companyCity}</div>}
                          </div>
                          <div className="col-lg-6">
                            <select
                              className={`form-select ${errors.companyState ? 'is-invalid' : ''}`}
                              aria-label="Default select example"
                              name="companyState"
                              value={formData.companyState}
                              onChange={handleChange}
                              required
                            >
                              <option value="" disabled>State</option>
                              <option value="Maharashtra">Maharashtra</option>
                              <option value="Delhi">Delhi</option>
                              <option value="Karnataka">Karnataka</option>
                              <option value="Tamil Nadu">Tamil Nadu</option>
                              <option value="West Bengal">West Bengal</option>

                            </select>
                            {errors.companyState && <div className="invalid-feedback">{errors.companyState}</div>}
                          </div>
                          <div className="col-lg-6">
                            <input
                              type="text"
                              name="websiteURL"
                              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                              placeholder="Website URL"
                              value={formData.websiteURL}
                              onChange={handleChange}
                              required
                            />
                            {errors.websiteURL && <div className="invalid-feedback">{errors.websiteURL}</div>}
                          </div>
                          <div className="col-lg-6">
                            <input
                              type="text"
                              name="linkedinURL"
                              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                              placeholder="Linkedin URL"
                              value={formData.linkedinURL}
                              onChange={handleChange}
                              required
                            />
                            {errors.linkedinURL && <div className="invalid-feedback">{errors.linkedinURL}</div>}
                          </div>


                          <div className="register-page-button-space">
                            <span>By clicking below you accept the terms and conditions</span>
                            <button
                              type="submit"
                              className="register-page-button"
                              onClick={handleNext}
                            >
                              Next
                            </button>
                            <span>Already have an account <Link to={'/login'}>Log-in</Link></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                <div className="registration-section-header">
                  <h2>Select your services</h2>
                </div>

                <div className='register-container'>
                  <div className="services-section">
                    <div className="checkbox-group">
                      <div
                        className={`checkbox-card ${isChecked('service1') ? 'checked' : ''}`}
                        onClick={() => handleCardClick('service1')}
                      >
                        <input
                          type="checkbox"
                          name="BookingEngine"
                          checked={formData.selectedServices.service1}
                          readOnly
                        />
                        <div className='check-image-container'>
                          <img src={BookingEngine} alt="BookingEngine" />
                        </div>
                        <label>Booking Engine</label>
                      </div>
                      <div
                        className={`checkbox-card ${isChecked('service2') ? 'checked' : ''}`}
                        onClick={() => handleCardClick('service2')}
                      >
                        <input
                          type="checkbox"
                          name="website"
                          checked={formData.selectedServices.service2}
                          readOnly
                        />
                        <div className='check-image-container'>
                          <img src={TransactionalWebsite} alt="TransactionalWebsite" />
                        </div>
                        <label>Website</label>
                      </div>
                      <div
                        className={`checkbox-card ${isChecked('service3') ? 'checked' : ''}`}
                        onClick={() => handleCardClick('service3')}
                      >
                        <input
                          type="checkbox"
                          name="MeetingRoomEngine"
                          checked={formData.selectedServices.service3}
                          readOnly
                        />
                        <div className='check-image-container'>
                          <img src={MeetingRoomEngine} alt="MeetingRoomEngine" />
                        </div>
                        <label>Meeting room</label>
                      </div>
                      <div
                        className={`checkbox-card ${isChecked('service4') ? 'checked' : ''}`}
                        onClick={() => handleCardClick('service4')}
                      >
                        <input
                          type="checkbox"
                          name="PaymentGateway"
                          checked={formData.selectedServices.service4}
                          readOnly
                        />
                        <div className='check-image-container'>
                          <img src={PaymentGateway} alt="Payment Gateway" />
                        </div>
                        <label>PaymentGateway</label>
                      </div>
                    </div>
                    <div className='register-page-button-space'>
                      <button
                        type="submit"
                        className="register-page-button"
                        onClick={handleNext}
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
                <div className='account-activation-section'>
                <div className='account-activation-description'>
                  <span>
                    An email has been send to your email address :<b>{formData.email ? formData.email : 'EMAIL HERE'}</b>  containing all the further process for
                    activating the account.
                   
                  </span>

                  <span>
                  Please let us know if there is any more queries from your side or you can connect us as : response@wono.co
                  </span>
                <div className="mail-client-container">
                  <div className="mail-client">
                    <img src={TransactionalWebsite} alt='Website' />
                    <span>Open G-mail</span>
                  </div>
                  <div className="mail-client">
                    <img src={BookingEngine} alt='Outlook' />
                    <span>Open Outlook</span>
                  </div>
                </div>
                </div>
                <div >
                  <span>
                    Did not recieve an email ? Please check your spam folder..!!
                    <br />
                    <br />
                   Resend and try again
                  </span>
                </div>
                <div className="register-page-button-space">
               
                    <button className="register-page-button" onClick={handleSubmit}>
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
    </>
  );
};

export default Register;
