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
//   const navigate = useNavigate();
//   const { setUser } = useContext(UserContext);
//   const [error, setError] = useState("");
//   const [username, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const [userNameError, setUserNameError] = useState("");
//   const [showModal, setShowModal] = useState(false); // Control modal visibility
//   const [modalTitle, setModalTitle] = useState("Error"); // Modal title
//   const [modalMessage, setModalMessage] = useState("");
//   axios.defaults.withCredentials = true;

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

    // // username validation using regex
    // const usernameRegex = /^.{2,}$/; // At least 2 characters long
    // if (!usernameRegex.test(username)) {
    //   setModalTitle("Invalid Username");
    //   setModalMessage("Enter a valid username");
    //   setShowModal(true); // Show the modal for the error
    //   return; // Exit the function if the username is invalid
    // }
    // username validation using regex
    const usernameRegex = /^.{2,}$/; // At least 2 characters long
    if (!usernameRegex.test(username)) {
      setModalTitle("Invalid Username");
      setModalMessage("Enter a valid username");
      setShowModal(true); // Show the modal for the error
      return; // Exit the function if the username is invalid
    }

    // try {
    //   const response = await axios.post("http://localhost:5000/login", {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
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
    //   navigate("/dashboard");
    // } catch (error) {
    //   setModalTitle("Login Failed");
    //   setModalMessage("Invalid username or password");
    //   setShowModal(true); // Show the modal for the error
    //   console.error("Login Failed:", error);
    // }

    setUserName("");
    setPassword("");
  };
//     setUserName("");
//     setPassword("");
//   };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUserName(value);

    // Username validation using regex (at least 2 characters long)
    const usernameRegex = /^.{2,}$/; // At least 2 characters
    if (!usernameRegex.test(value)) {
      setUserNameError("Enter a valid username");
    } else {
      setUserNameError(""); // Clear error if username is valid


//   const handleUsernameChange = (e) => {
//     const value = e.target.value;
//     setUserName(value);

//     // Username validation using regex (at least 2 characters long)
//     const usernameRegex = /^.{2,}$/; // At least 2 characters
//     if (!usernameRegex.test(value)) {
//       setUserNameError("Enter a valid username");
//     } else {
//       setUserNameError(""); // Clear error if username is valid
//     }
//   };
  };

  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse?.credential);
    setUser(decoded); // Set the user's profile information
    console.log(decoded);
    navigate("/dashboard"); // Redirect after successful login
  };
//   const handleLoginSuccess = (credentialResponse) => {
//     const decoded = jwtDecode(credentialResponse?.credential);
//     setUser(decoded); // Set the user's profile information
//     console.log(decoded);
//     navigate("/dashboard"); // Redirect after successful login
//   };

  const handleLoginError = () => {
    console.log("Login Failed");
  };
//   const handleLoginError = () => {
//     console.log("Login Failed");
//   };

  const handleCloseModal = () => {
    setShowModal(false);
  };
//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

  return (
    <>
      {/* <div className="login-section loginTopPadding loginBottomPadding  poppinsRegular bg-info"> */}
      <div className="login-section loginTopPadding loginBottomPadding  poppinsRegular ">
        <h1 className="text-center fw-bold">Log In</h1>
        <p className="text-center">
          Don't have an account? <span className="wono-blue-text">Sign Up</span>
        </p>
        <div className="loginDividingContainer ">
          <div className="loginLeftContainer ">
            <div className="loginFormContainer">
              <form>
                <div className="inputAndLabelContainer d-flex flex-column justify-content-center">
                  <label htmlFor="">Email</label>
                  <input type="email" class="no-border" />
                  <hr className="mb-0 mt-1" />
                </div>
                <div className="inputAndLabelContainer d-flex flex-column justify-content-center pt-2">
                  <label htmlFor="">Password</label>
                  <input type="password" class="no-border" />
                  <hr className="mb-0 mt-1" />
                </div>
                <p className="m-0 py-4">Forgot Password?</p>
                <div className="centerInPhone">
                  <button className="loginButtonStyling">Login</button>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="CenterElement  ">
            hello
            <hr className="hrStyling border border-secondary" />
          </div> */}
          <div className="fullHeight LoginMiddleContainer">
            <div class="vertical-line lineSideMargin">
              <hr className="hrHeight" />
            </div>
            <div class=" lineSideMargin">or</div>

            <div class="vertical-line lineSideMargin">
              <hr className="hrHeight" />
            </div>
          </div>

          <div className="phoneDividerContainer">
            <div className="phoneDivider w-100">
              <div className="w-100 bg-secondary border-secondary border-bottom  line-height">
                {/* .  */}
              </div>
              <div className="w-100 text-center">or</div>
              <div className="w-100 bg-secondary border-secondary border-bottom line-height">
                {/* . */}
              </div>
            </div>
          </div>

          {/* <div className="loginRightContainer bg-warning"> */}
          <div className="loginRightContainer ">
            {/* <div className="loginWithSection bg-danger d-flex flex-column justify-content-center align-items-center bg-success"> */}
            <div className="loginWithSection  d-flex flex-column justify-content-center align-items-center ">
              {/* <div className="LoginWithGoogleContainer loginWithBox d-flex justify-content-between align-items-center bg-primary centerElement w-100"> */}
              <div className="LoginWithGoogleContainer loginWithBox loginWithGoogleBox loginWithGoogleBox d-flex justify-content-between align-items-center  centerElement w-100">
                {/* <div className="loginWithIconBox bg-info centerElement"> */}
                <div className="loginWithIconBox loginWithGoogleIconBox  centerElement">
                  <img
                    src={LoginWithGoogleImage}
                    alt=""
                    className="imageDimensions"
                  />
                </div>
                {/* <div className="LoginWithGoogleText LoginWithText bg-secondary centerElement w-100"> */}
                <div className="LoginWithGoogleText LoginWithText  centerElement w-100">
                  <div> Continue with Google</div>
                </div>
              </div>
              {/* <div className="LoginWithFacebookContainer loginWithBox d-flex justify-content-between align-items-center bg-primary centerElement"> */}
              <div className="LoginWithFacebookContainer loginWithBox loginWithFacebookBox d-flex justify-content-between align-items-center  centerElement">
                {/* <div className="loginWithIconBox bg-info centerElement"> */}
                <div className="loginWithIconBox loginWithFacebookIconBox centerElement">
                  {" "}
                  <img
                    src={LoginWithFacebookImage}
                    alt=""
                    className="imageDimensions"
                  />
                </div>
                {/* <div className="LoginWithFacebookText LoginWithText bg-secondary centerElement w-100"> */}
                <div className="LoginWithFacebookText LoginWithText  centerElement w-100">
                  <div>Continue with Facebook</div>
                </div>
              </div>
              {/* <div className="LoginWithEmailContainer loginWithBox d-flex justify-content-between align-items-center bg-primary centerElement"> */}
              <div className="LoginWithEmailContainer loginWithBox loginWithEmailBox d-flex justify-content-between align-items-center  centerElement">
                {/* <div className="loginWithIconBox bg-info centerElement"> */}
                <div className="loginWithIconBox loginWithEmailIconBox centerElement">
                  {" "}
                  <img
                    src={LoginWithEmailImage}
                    alt=""
                    className="imageDimensions"
                  />
                </div>
                {/* <div className="LoginWithEmailText LoginWithText bg-secondary centerElement w-100"> */}
                <div className="LoginWithEmailText LoginWithText  centerElement w-100">
                  <div>Continue with Email</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-dark">
        <br />
      </div> */}

      {/* <div className="login-container">
        <div className="login-left-container">
          <h2 className="text-center mb-4">Login to your account</h2>
          <form className="loginForm" onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="username"
                value={username}
                onChange={handleUsernameChange} // Updated onChange handler
                required
              />
              {username && userNameError && (
                <div className="text-danger">{userNameError}</div>
              )}
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                aria-label="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <div
                className="forgot-password"
                style={{ textAlign: "end", marginBottom: 8 }}>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/forgot-password")}>
                  Forgot passoword
                </span>
              </div>
              <button type="submit" className="login-page-button w-100">
                Log-in
              </button>
            </div>
            <div className="text-center mt-3">
              <span>
                Don't have an account?{" "}
                <a href="/register" className="text-primary">
                  Register
                </a>
              </span>
            </div>
          </form>
        </div>

        <div className="login-right-container">
          <div className="container">
            <div className="login-carousel-container">
              <Slider {...settings}>
                <div className="login-carousel-item">
                  <img src={Batman} alt="Slide 1" />
                </div>
                <div className="login-carousel-item">
                  <img src={Spiderman} alt="Slide 2" />
                </div>
                <div className="login-carousel-item">
                  <h1>Booking Engine</h1>
                  <img src={BookingEngine} alt="Slide 3" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <Modals
          show={showModal}
          handleClose={handleCloseModal}
          title={modalTitle}>
          {modalMessage}
        </Modals>
      </div> */}
    </>
  );
};

export default LoginPage;
