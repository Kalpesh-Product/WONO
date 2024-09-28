import React, { useState, useContext, useEffect } from "react";
import "../styles/bodyLogin.css";
import "../styles/bodyLogin2.css";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import { jwtDecode } from "jwt-decode";
import { UserContext } from "../contexts/UserContext";
import Modals from "../components/Modals";
import axios from "axios";
import { Container, Box, Grid, TextField, Button } from '@mui/material';
import LoginWithGoogleImage from "../assets/WONO_images/img/login_images/google-icon2.png";
import LoginWithFacebookImage from "../assets/WONO_images/img/login_images/login-with-facebook-icon.png";
import LoginWithEmailImage from "../assets/WONO_images/img/login_images/email-icon.png";
import Spinners from '../components/Spinner'

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUsername, setLoggedIn, loggedIn, username } = useContext(UserContext);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [showModal, setShowModal] = useState(false); // Control modal visibility
  const [modalTitle, setModalTitle] = useState("Error"); // Modal title
  const [modalMessage, setModalMessage] = useState("");
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false)
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  })



  // axios.defaults.withCredentials = true;

  const handleSubmit = async (event) => {
    event.preventDefault();



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
      setLoading(true)
      const response = await axios.post("/login", {
        email,
        password,
      }, {
        withCredentials: true
      });

      const data = response.data;
      localStorage.setItem("username", data.user.name); // Save username in localStorage
      localStorage.setItem("token", data.token); // Save token in localStorage
      setUsername(data.user.name); // Set the username state
      setLoggedIn(true); // Set the loggedIn state to true

    } catch (error) {
      setModalTitle("Login Failed");
      setModalMessage("Invalid email or password");
      setShowModal(true); // Show the modal for the error
      console.error("Login Failed:", error);
    } finally{
      setLoading(false)
    }

  
  };
  useEffect(() => {
    console.log('Effect running');
  
    // Check if token exists in localStorage
    const token = localStorage.getItem("token");
    console.log('Token:', token);
  
    if (token) {
      // Token exists, so the user is already logged in
      const storedUsername = localStorage.getItem("username");
      console.log('Stored Username:', storedUsername);
  
      if (storedUsername) {
        setUsername(storedUsername); // Set the username from localStorage
      }
      setLoggedIn(true); // Set the loggedIn state to true
    } else {
      setLoggedIn(false); // Ensure loggedIn is false if no token
    }
  }, [navigate]);
  
  useEffect(() => {
    if (loggedIn) {
      console.log('Navigating to dashboard');
      navigate("/dashboard");
    }
  }, [loggedIn, navigate]);
  
  
  


  const handleLoginResolve = ({ provider, data }) => {
    console.log("Provider:", provider);
    console.log("Data:", data);

    // Get the token from data
    const token = data.access_token || data.id_token;

    if (token) {
      try {
        // Decode the JWT token
        const decodedToken = jwtDecode(token);
        console.log("Decoded Token:", decodedToken);

        // Example of accessing user information
        console.log("User ID:", decodedToken.sub); // Example of accessing user ID
        console.log("Email:", decodedToken.email); // Example of accessing user email
        // ... access other details
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Email validation using regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
    if (!emailRegex.test(value)) {
      setUserNameError("Enter a valid email address");
    } else {
      setUserNameError(""); // Clear error if the email is valid
    }
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
            <Container maxWidth="md" style={{ padding: "3rem 0 0" }}>
              <Box
                component="form"
                sx={{ flexGrow: 1 }}
                onSubmit={handleSubmit}
                noValidate
                autoComplete="off">
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

                  <Grid style={{ paddingTop: "0" }} p={0} item xs={12}>
                    <Box p={0} mt={2}>
                      <Link
                        to="/forgot-password"
                        style={{ textDecoration: "none" }}>
                        Forgot Password?
                      </Link>
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
                {/* <LoginSocialGoogle
                  client_id={"358669748567-d4e1dl47ic6patb61sidq0ipdvllb0bn.apps.googleusercontent.com"}
                  scope="openid profile email"
                  access_type="offline"
                  onResolve={handleLoginResolve}
                  onReject={(err) => {
                    console.log('Error:', err);
                  }}
                >
                  
                </LoginSocialGoogle> */}
                <div className="LoginWithGoogleContainer loginWithBox loginWithGoogleBox d-flex justify-content-between align-items-center centerElement">
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

                <div className="login-empty-padding"></div>
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
        closeText={"Close"}>
        {modalMessage}
      </Modals>
      {loading && <Spinners animation={'border'} variant={'dark'}/>} 
    </>
  );
};

export default LoginPage;
