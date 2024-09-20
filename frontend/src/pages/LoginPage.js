import React, { useState, useContext } from "react";
import "../styles/bodyLogin.css";
import "../styles/bodyLogin2.css";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLoginButton } from 'react-social-login-buttons';
import { LoginSocialGoogle } from 'reactjs-social-login'
import { jwtDecode } from "jwt-decode";
import { UserContext } from "../components/UserContext";
import Modals from "../components/Modals";
import axios from "axios";
import { Container, Box, Grid, TextField, Button } from '@mui/material';

import LoginWithGoogleImage from "../assets/WONO_images/img/login_images/google-icon2.png";
import LoginWithFacebookImage from "../assets/WONO_images/img/login_images/login-with-facebook-icon.png";
import LoginWithEmailImage from "../assets/WONO_images/img/login_images/email-icon.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [showModal, setShowModal] = useState(false); // Control modal visibility
  const [modalTitle, setModalTitle] = useState("Error"); // Modal title
  const [modalMessage, setModalMessage] = useState("");
  const [token, setToken] = useState('');
  axios.defaults.withCredentials = true;


  const handleSubmit = async (event) => {
    event.preventDefault();

    // Function to decode JWT token


    // Username validation using regex
    const usernameRegex = /^.{2,}$/; // At least 2 characters long
    if (!usernameRegex.test(email)) {
      setModalTitle("Invalid email");
      // setModalMessage("Enter a valid username");
      setModalMessage("Enter a valid email");
      setShowModal(true); // Show the modal for the error
      return; // Exit the function if the username is invalid
    }

    try {
      const response = await axios.post("https://wono-xtev.vercel.app/login", {
        email,
        password,
      });

      const { user } = response.data;
      setUser(user);
      navigate("/dashboard");
    } catch (error) {
      setModalTitle("Login Failed");
      setModalMessage("Invalid email or password");
      setShowModal(true); // Show the modal for the error
      console.error("Login Failed:", error);
    }

    setUserName("");
    setPassword("");
  };

  const handleLoginResolve = ({ provider, data }) => {
    console.log('Provider:', provider);
    console.log('Data:', data);

    // Get the token from data
    const token = data.access_token || data.id_token;

    if (token) {
      try {
        // Decode the JWT token
        const decodedToken = jwtDecode(token);
        console.log('Decoded Token:', decodedToken);

        // Example of accessing user information
        console.log('User ID:', decodedToken.sub); // Example of accessing user ID
        console.log('Email:', decodedToken.email); // Example of accessing user email
        // ... access other details
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  };

  // const handleUsernameChange = (e) => {
  //   const value = e.target.value;
  //   setUserName(value);

  //   // Username validation using regex (at least 2 characters long)
  //   const usernameRegex = /^.{2,}$/; // At least 2 characters
  //   if (!usernameRegex.test(value)) {
  //     // setUserNameError("Enter a valid username");
  //     setUserNameError("Enter a valid email");
  //   } else {
  //     setUserNameError(""); // Clear error if username is valid
  //   }
  // };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Email validation using regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value)) {
      setUserNameError("Enter a valid email address");
    } else {
      setUserNameError(""); // Clear error if the email is valid
    }
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

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="login-section loginTopPadding loginBottomPadding poppinsRegular">
        <h1 className="text-center fw-bold">Log In</h1>
        <p className="text-center">
          {/* Don't have an account? <span className="wono-blue-text">Sign Up</span> */}
          Don't have an account?{" "}
          <Link to="/register" className="wono-blue-text text-decoration-none">
            Sign Up
          </Link>
        </p>
        <div className="loginDividingContainer">
          <div className="loginLeftContainer">
            <Container maxWidth="sm" style={{ paddingTop: '3rem' }}>
              <Box component="form" sx={{ flexGrow: 1 }} onSubmit={handleSubmit} noValidate autoComplete="off">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      type="email"
                      value={email}
                      onChange={handleUsernameChange}
                      error={!!userNameError}
                      helperText={userNameError}
                      required
                      fullWidth
          
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label="Password"
                      variant="outlined"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      fullWidth
                    />
                  </Grid>



                  <Grid style={{ paddingTop: '0' }} p={0} item xs={12}>
                    <Box p={0} mt={2}>
                      <Link to="/forgot-password" style={{ textDecoration: 'none' }}>Forgot Password?</Link>
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <div className="centerInPhone">
                      <button type="submit" className="loginButtonStyling">
                        Login
                      </button>
                    </div>

                  </Grid>
                </Grid>
              </Box>
            </Container>
          </div>
          <div className="fullHeight LoginMiddleContainer">
            <div className="vertical-line lineSideMargin">
              <hr className="hrHeight" />
            </div>
            <div className="lineSideMargin">or</div>
            <div className="vertical-line lineSideMargin">
              <hr className="hrHeight" />
            </div>
          </div>
          <div className="phoneDividerContainer">
            <div className="phoneDivider w-100">
              <div className="w-100 bg-secondary border-secondary border-bottom line-height"></div>
              <div className="w-100 text-center">or</div>
              <div className="w-100 bg-secondary border-secondary border-bottom line-height"></div>
            </div>
          </div>
          <div className="loginRightContainer">
            <div className="loginWithSection d-flex flex-column justify-content-center align-items-center">
              <div className="loginWithSection d-flex flex-column justify-content-center align-items-center">
                <LoginSocialGoogle
                  client_id={"358669748567-d4e1dl47ic6patb61sidq0ipdvllb0bn.apps.googleusercontent.com"}
                  scope="openid profile email"
                  access_type="offline"
                  onResolve={handleLoginResolve}
                  onReject={(err) => {
                    console.log('Error:', err);
                  }}
                >
                  <div className="LoginWithGoogleContainer loginWithBox loginWithGoogleBox d-flex justify-content-between align-items-center centerElement w-100">
                    <div className="loginWithIconBox loginWithGoogleIconBox centerElement">
                      <img
                        src={LoginWithGoogleImage}
                        alt="Google Icon"
                        className="imageDimensions"
                      />
                    </div>
                    <div className="LoginWithGoogleText LoginWithText centerElement w-100">
                      <div>Continue with Google</div>
                    </div>
                  </div>
                </LoginSocialGoogle>
              </div>
              <div className="LoginWithFacebookContainer loginWithBox loginWithFacebookBox d-flex justify-content-between align-items-center centerElement">
                <div className="loginWithIconBox loginWithFacebookIconBox centerElement">
                  <img
                    src={LoginWithFacebookImage}
                    alt="Facebook Icon"
                    className="imageDimensions"
                  />
                </div>
                <div className="LoginWithFacebookText LoginWithText centerElement w-100">
                  <div>Continue with Facebook</div>
                </div>

                <div className="login-empty-padding">

                </div>
              </div>
              {/*  */}
              <Link to="/register" className="text-decoration-none">
                <div className="LoginWithEmailContainer loginWithBox loginWithEmailBox d-flex justify-content-between align-items-center centerElement">
                  <div className="loginWithIconBox loginWithEmailIconBox centerElement">
                    <img
                      src={LoginWithEmailImage}
                      alt="Email Icon"
                      className="imageDimensions"
                    />
                  </div>
                  <div className="LoginWithEmailText LoginWithText centerElement w-100">
                    <div>Continue with Email</div>
                  </div>
                </div>
              </Link>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
      <Modals
        show={showModal}
        handleClose={handleCloseModal}
        title={modalTitle}
        closeText={'Close'}
      >
        {modalMessage}

      </Modals>
    </>
  );
};

export default LoginPage;
