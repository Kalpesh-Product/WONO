import React, { useState, useContext } from "react";
import "../styles/bodyLogin.css";
import "../styles/bodyLogin2.css";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { UserContext } from "../components/UserContext";
import Modals from "../components/Modals";
import axios from "axios";
import Carousels from "../components/Carousels";
import Batman from "../assets/batman.png";
import Spiderman from "../assets/spiderman.png";
import Slider from "react-slick";
import BookingEngine from "../assets/WONO_images/img/booking_engine_login.png";

import LoginWithGoogleImage from "../assets/WONO_images/img/login_images/google-icon2.png";
import LoginWithFacebookImage from "../assets/WONO_images/img/login_images/login-with-facebook-icon.png";
import LoginWithEmailImage from "../assets/WONO_images/img/login_images/email-icon.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [showModal, setShowModal] = useState(false); // Control modal visibility
  const [modalTitle, setModalTitle] = useState("Error"); // Modal title
  const [modalMessage, setModalMessage] = useState("");
  axios.defaults.withCredentials = true;

  const settings = {
    dots: true,
    infinite: true,
    dotsClass: "login-slick-dots",
    prevArrow: <div className="login-slick-prev" />,
    nextArrow: <div className="login-slick-next" />,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Username validation using regex
    const usernameRegex = /^.{2,}$/; // At least 2 characters long
    if (!usernameRegex.test(username)) {
      setModalTitle("Invalid Username");
      setModalMessage("Enter a valid username");
      setShowModal(true); // Show the modal for the error
      return; // Exit the function if the username is invalid
    }

    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });

      const { user } = response.data;
      setUser(user);
      navigate("/dashboard");
    } catch (error) {
      setModalTitle("Login Failed");
      setModalMessage("Invalid username or password");
      setShowModal(true); // Show the modal for the error
      console.error("Login Failed:", error);
    }

    setUserName("");
    setPassword("");
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUserName(value);

    // Username validation using regex (at least 2 characters long)
    const usernameRegex = /^.{2,}$/; // At least 2 characters
    if (!usernameRegex.test(value)) {
      setUserNameError("Enter a valid username");
    } else {
      setUserNameError(""); // Clear error if username is valid
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
          Don't have an account? <span className="wono-blue-text">Sign Up</span>
        </p>
        <div className="loginDividingContainer">
          <div className="loginLeftContainer">
            <div className="loginFormContainer">
              <form onSubmit={handleSubmit}>
                <div className="inputAndLabelContainer d-flex flex-column justify-content-center">
                  <label htmlFor="username">Email</label>
                  <input
                    type="email"
                    className="no-border"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                  <hr className="mb-0 mt-1" />
                  {userNameError && (
                    <div className="text-danger">{userNameError}</div>
                  )}
                </div>
                <div className="inputAndLabelContainer d-flex flex-column justify-content-center pt-2">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="no-border"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <hr className="mb-0 mt-1" />
                </div>
                <p className="m-0 py-4">Forgot Password?</p>
                <div className="centerInPhone">
                  <button type="submit" className="loginButtonStyling">
                    Login
                  </button>
                </div>
              </form>
            </div>
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
              </div>
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
            </div>
          </div>
        </div>
      </div>
      <Modals
        show={showModal}
        handleClose={handleCloseModal}
        title={modalTitle}>
        {modalMessage}
      </Modals>
    </>
  );
};

export default LoginPage;
