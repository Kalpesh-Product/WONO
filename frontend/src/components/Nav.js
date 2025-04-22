// NavBar.js
//Kindly make changes in the offCanvas as well while making changes in the main navbar
import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate, useLocation } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/componentStyle.css";
import WonoLogo from "../assets/WONO_images/img/WONO_LOGO_white _TP.png";
// import ProfileImage from "../assets/WONO_images/img/profile-image-wono.png";
// import ProfileImage from "../assets/WONO_images/img/user-profile.webp";
// import ProfileImage from "../assets/WONO_images/img/wono-img-profile.png";
import ProfileImage from "../assets/WONO_images/img/User-default.png";
import Spinners from "./Spinner";

const NavBar = ({ activeTab, changeActiveTab }) => {
  const navigate = useNavigate();
  const { username, loggedIn, setLoggedIn, setUsername } =
    useContext(UserContext);
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" && location.pathname === "/register";
  const isthempage = location.pathname === "/themes";
  const isservices = location.pathname === "/modules";
  const isleadspage = location.pathname === "/leads";
  const iscareerpage = location.pathname === "/career";
  const iscapitalpage = location.pathname === "/capital";
  const [show, setShow] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [activeTab, setActiveTab] = useState("Home");

  // const changeActiveTab = (activeTab) => {
  //   setActiveTab(activeTab);
  // };

  // If username is not set, check localStorage
  const storedUsername = localStorage.getItem("username");

  const handleLogout = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/logout", { withCredentials: true });

      if (response.status === 200) {
        // Clear the local storage for username
        localStorage.removeItem("token");
        localStorage.removeItem("username");

        // Clear user context state
        setLoggedIn(false); // Set loggedIn to false
        setUsername(""); // Clear the username from context state

        console.log("Logged out, username cleared");
        navigate("/login"); // Redirect to login
        setShow(false);
      } else {
        console.error("Error logging out:", response);
      }
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("LoggedIn state changed: ", loggedIn);
  }, [loggedIn]);

  const handleRegister = () => {
    navigate("/register");
    setShow(false);
  };

  const handleClose = () => {
    setShow(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const handleShow = () => setShow(true);

  // UseEffect for keeping the navbar item underlined even after page refresh
  useEffect(() => {
    const path = location.pathname;
    if (path === "/modules") {
      changeActiveTab("Services");
    } else if (path === "/themes") {
      changeActiveTab("themes");
    } else if (path === "/leads") {
      changeActiveTab("leads");
    } else if (path === "/capital") {
      changeActiveTab("capital");
    } else if (path === "/career") {
      changeActiveTab("Career");
    } else {
      changeActiveTab("Home");
    }
  }, [location.pathname]);

  return (
    <>
      <nav className="custom-navbar">
        <div className="custom-navbar-logo">
          <img
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
              changeActiveTab("Home");
              window.scrollTo({ top: 0, behavior: "instant" });
            }}
            src={WonoLogo}
            alt="logo"
          />
        </div>
        <div className="flex items-center gap-6 uppercase custom-navbar-menu nav-tabss ">
                {loggedIn ? (
                  <Link to={"/dashboard"} className="active">
                    {/* Dashboard */}
                    Activating Soon
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/modules"
                      className={
                        !isAuthPage && isservices && activeTab === "Services"
                          ? "active"
                          : ""
                      }
                      onClick={() => {
                        changeActiveTab("Services");
                        window.scrollTo({ top: 0, behavior: "instant" });
                      }}
                    >
                      Modules
                    </Link>
                    <Link
                      to="/themes"
                      onClick={() => {
                        changeActiveTab("themes");
                        window.scrollTo({ top: 0, behavior: "instant" });
                      }}
                      className={
                        !isAuthPage && isthempage && activeTab === "themes"
                          ? "active"
                          : ""
                      }
                    >
                      Themes
                    </Link>
                    <Link
                      to="/leads"
                      onClick={() => {
                        changeActiveTab("leads");
                        window.scrollTo({ top: 0, behavior: "instant" });
                      }}
                      className={
                        !isAuthPage &&
                        !isservices &&
                        isleadspage &&
                        activeTab === "leads"
                          ? "active"
                          : ""
                      }
                    >
                      Leads
                    </Link>
                    <Link
                      to="/capital"
                      className={
                        !isAuthPage &&
                        iscapitalpage &&
                        !isservices &&
                        activeTab === "capital"
                          ? "active"
                          : ""
                      }
                      onClick={() => {
                        changeActiveTab("capital");
                        window.scrollTo({ top: 0, behavior: "instant" });
                      }}
                    >
                      Capital
                    </Link>
                    <Link
                      to="/career"
                      className={
                        !isAuthPage && activeTab === "Career" ? "active" : ""
                      }
                      onClick={() => {
                        changeActiveTab("Career");
                        window.scrollTo({ top: 0, behavior: "instant" });
                      }}
                    >
                      Career
                    </Link>
                  </>
                )}
              </div>
        <div className="custom-navbar-menu">
          {loggedIn ? (
            <div className="user-profile custom-navbar-buttons">
              <div
                className="profile-container"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <img
                  // src={user.picture}
                  src={ProfileImage}
                  alt={"ProfileImage"}
                  className="profile-image"
                />
                <span>{username && storedUsername && "NewUser"}</span>
                <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-6" >
         
              <div className="flex items-center gap-6">
                <button
                  onClick={() => (window.location.href = "https://wonofe.vercel.app")}
                  className="uppercase px-4 py-2 bg-white hover:font-bold transition-all text-black rounded-full"
                >
                  Sign in
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="uppercase px-4 py-2 bg-[#0AA9EF] hover:font-bold transition-all text-white rounded-full m-0"
                >
                  Sign up
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="custom-navbar-menu-toggle" onClick={handleShow}>
          &#9776;
        </div>
      </nav>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        backdrop="true"
        className="custom-offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* <Link className="custom-offcanvas-link" to="/" onClick={handleClose}>
            Home
          </Link> */}
          {!loggedIn ? (
            <>
              <Link
                className="custom-offcanvas-link"
                to="/modules"
                onClick={handleClose}
              >
                MODULES
              </Link>
              <Link
                className="custom-offcanvas-link"
                to="/themes"
                onClick={handleClose}
              >
                THEMES
              </Link>
              <Link
                className="custom-offcanvas-link"
                to="/leads"
                onClick={handleClose}
              >
                LEADS
              </Link>
              <Link
                className="custom-offcanvas-link"
                to="/capital"
                onClick={handleClose}
              >
                CAPITAL
              </Link>

              <Link
                className="custom-offcanvas-link"
                to="/career"
                onClick={handleClose}
              >
                CAREER
              </Link>
            </>
          ) : null}

          {/* <Link
            className="custom-offcanvas-link"
            to="/contact"
            onClick={handleClose}>
            Contact
          </Link> */}
          {loggedIn ? (
            <Link className="custom-offcanvas-link" to={"/dashboard"}>
              Activating Soon
            </Link>
          ) : null}
          {loggedIn ? (
            <div className="user-profile">
              <div
                className="profile-container"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <img
                  src={ProfileImage}
                  alt={"ProfileImage"}
                  className="profile-image"
                />
                <span>{username}</span>
                <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* <Link to="/login" onClick={handleClose} className="login-button">
                SIGN IN
              </Link> */}
              <a
                href="https://wonofe.vercel.app/"
                className="login-button"
                onClick={handleClose}
              >
                SIGN IN
              </a>
              <button className="register-button" onClick={handleRegister}>
                SIGN UP
              </button>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>

      {loading && <Spinners animation={"border"} variant={"dark"} />}
    </>
  );
};

export default NavBar;
