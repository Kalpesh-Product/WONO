import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import dummyData from "../dummyData/dummyData.json";
import { Container, Box, Grid, TextField, Button } from "@mui/material";
import "../styles/ClientLogin.css";
import "../styles/ClientSpecialClasses.css";
import LoginWithGoogleImage from "../assets/WONO_images/img/login_images/google-icon2.png";
import LoginWithFacebookImage from "../assets/WONO_images/img/login_images/login-with-facebook-icon.png";
import LoginWithEmailImage from "../assets/WONO_images/img/login_images/email-icon.png";
import WonoLogo from "../assets/WONO_images/img/WONO_LOGO_white _TP.png";
import Footer from "../components/LoginFooter/LoginFooter";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const styles = (theme) => ({
    notchedOutline: {
      borderWidth: "1px",
      borderColor: "yellow !important",
    },
  });

  // Validation function
  const handleLogin = (e) => {
    e.preventDefault();

    // Find user in dummyData based on email and password
    const user = dummyData.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Store user data in localStorage
      localStorage.setItem("user", JSON.stringify(user));
      // Redirect to homepage
      navigate("/landing");
      console.log(user.name);
      console.log(user);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <div className="bg-black flex justify-around py-3">
        <div>
          <img src={WonoLogo} alt="wono" />
        </div>
        <div className="flex items-center uppercase">
          <ul className="flex gap-5 text-white uppercase font-thin">
            <li>SaaS</li>
            <li>Leads</li>
            <li>Themes</li>
            <li>Capital</li>
            <li>Career</li>
          </ul>
        </div>
        <div className="flex ">
          <div className="flex gap-2">
            <button className="bg-white text-black py-2 px-3 rounded-md uppercase">
              Sign-In
            </button>
            <button className="bg-sky-400 text-black py-2 px-3 rounded-md uppercase">
              Sign-Up
            </button>
          </div>
        </div>
      </div>
      <div className="login-section loginTopPadding loginBottomPadding poppinsRegular heightPadding">
        <h1 className="text-center text-4xl font-bold">Log In</h1>
        <div className="loginDividingContainer shrink-container">
          <div className="loginLeftContainer">
            <Container maxWidth="md" style={{ padding: "3rem 0 0" }}>
              <Box
                component="form"
                sx={{ flexGrow: 1 }}
                onSubmit={handleLogin}
                noValidate
                autoComplete="off"
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                        style={{ textDecoration: "none" }}
                      >
                        Forgot Password?
                      </Link>
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <div className="centerInPhone">
                      {/* <button type="submit" className="loginButtonStyling">
                    Login
                  </button> */}
                      <button
                        type="submit"
                        className="loginButtonStyling text-decoration-none"
                      >
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
                  <div className="LoginWithGoogleText LoginWithText w-100 centerElement-social">
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
                <div className="LoginWithFacebookText LoginWithText w-100 centerElement-social">
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
                  <div className="LoginWithEmailText LoginWithText w-100 centerElement-social">
                    <div>Continue with Email</div>
                  </div>
                </div>
              </Link>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
    // <div className="min-h-screen bg-white-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">

    //   <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    //     <div className=" py-8 px-4 shadow sm:rounded-lg sm:px-10">
    //       <div className="sm:mx-auto sm:w-full sm:max-w-md">
    //         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
    //           Log In
    //         </h2>
    //       </div>
    //       <form className="space-y-6" onSubmit={handleLogin}>
    //         <div>
    //           <div className="mt-1">
    //             <TextField
    //               label="Email"
    //               variant="outlined"
    //               type="email"
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)}
    //               fullWidth
    //               InputProps={{
    //                 styles: {
    //                   notchedOutline: styles.notchedOutline,
    //                 },
    //               }}
    //             />
    //           </div>
    //         </div>

    //         <div>
    //           <div className="mt-1">
    //             <TextField
    //               label="Password"
    //               variant="outlined"
    //               type="password"
    //               value={password}
    //               onChange={(e) => setPassword(e.target.value)}
    //               fullWidth
    //             />
    //           </div>
    //         </div>

    //         {error && <p className="text-red-500 text-sm">{error}</p>}

    //         <div className="flex justify-center items-center">
    //           <button
    //             type="submit"
    //             className="group relative w-[40%] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-3xl text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white-500"
    //           >
    //             Login
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
};

export default LoginPage;
