// // NavBar.js
// import React, { useContext, useState } from "react";
// import { UserContext } from "./UserContext";
// import { useNavigate, useLocation } from "react-router-dom";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "../styles/componentStyle.css";
// import WonoLogo from "../assets/WONO_images/img/WONO_LOGO_white _TP.png";
// // import ProfileImage from "../assets/WONO_images/img/profile-image-wono.png";
// // import ProfileImage from "../assets/WONO_images/img/user-profile.webp";
// import ProfileImage from "../assets/WONO_images/img/wono-img-profile.png";

// const NavBar = ({ activeTab, changeActiveTab }) => {
//   const navigate = useNavigate();

//   const location = useLocation();
//   const isAuthPage =
//     location.pathname === "/login" || location.pathname === "/register";
//   const isthempage = location.pathname === "/themes";
//   const isservices = location.pathname === "/services";
//   const isleadspage = location.pathname === "/leads";
//   const iscareerpage = location.pathname === "/career";
//   const iscapitalpage = location.pathname === "/capital";
//   const { user, setUser } = useContext(UserContext);
//   const [show, setShow] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   // const [activeTab, setActiveTab] = useState("Home");

//   // const changeActiveTab = (activeTab) => {
//   //   setActiveTab(activeTab);
//   // };

//   const handleLogout = async () => {
//     try {
//       await axios.post(
//         "/logout",
//         {},
//         { withCredentials: true }
//       );
//       setUser(null); // Clear the user state
//       navigate("/home");
//     } catch (error) {
//       console.error("Error logging out:", error);
//     }
//   };

//   const handleRegister = () => {
//     navigate("/register");
//     setShow(false);
//   };

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <nav className="custom-navbar">
//         <div className="custom-navbar-logo">
//           <img
//             style={{ cursor: "pointer" }}
//             onClick={() => {
//               navigate("/");
//               changeActiveTab("Home");
//               window.scrollTo({ top: 0, behavior: "instant" });
//             }}
//             src={WonoLogo}
//             alt="logo"
//           />
//         </div>
//         <div className="custom-navbar-menu nav-tabss">
//           {!user ? (
//             <>
//               <Link
//                 to="/services"
//                 className={
//                   (!isAuthPage && isservices) || activeTab === "Services"
//                     ? "active"
//                     : ""
//                 }
//                 onClick={() => {
//                   changeActiveTab("Services");
//                   window.scrollTo({ top: 0, behavior: "instant" });
//                 }}>
//                 SaaS
//               </Link>
//               <Link
//                 to="/capital"
//                 className={
//                   (!isAuthPage && iscapitalpage && !isservices) ||
//                   activeTab === "capital"
//                     ? "active"
//                     : ""
//                 }
//                 onClick={() => {
//                   changeActiveTab("capital");
//                   window.scrollTo({ top: 0, behavior: "instant" });
//                 }}>
//                 Capital
//               </Link>
//               <Link
//                 to="/themes"
//                 onClick={() => {
//                   changeActiveTab("themes");
//                   window.scrollTo({ top: 0, behavior: "instant" });
//                 }}
//                 className={
//                   (!isAuthPage && isthempage) || activeTab === "themes"
//                     ? "active"
//                     : ""
//                 }>
//                 Theme
//               </Link>
//               <Link
//                 to="/leads"
//                 onClick={() => {
//                   changeActiveTab("leads");
//                   window.scrollTo({ top: 0, behavior: "instant" });
//                 }}
//                 className={
//                   (!isAuthPage && !isservices && isleadspage) ||
//                   activeTab === "leads"
//                     ? "active"
//                     : ""
//                 }>
//                 Leads
//               </Link>
//               <Link
//                 to="/career"
//                 className={
//                   !isAuthPage && activeTab === "Career" ? "active" : ""
//                 }
//                 onClick={() => {
//                   changeActiveTab("Career");
//                   window.scrollTo({ top: 0, behavior: "instant" });
//                 }}>
//                 Career
//               </Link>
//             </>
//           ) : null}

//           {user ? (
//             <Link to={"/dashboard"} className="active">
//               {/* Dashboard */}
//               Activating Soon
//             </Link>
//           ) : null}
//         </div>
//         <div className="custom-navbar-menu">
//           {user ? (
//             <div className="user-profile">
//               <div
//                 className="profile-container"
//                 onClick={() => setDropdownOpen(!dropdownOpen)}>
//                 <img
//                   // src={user.picture}
//                   src={ProfileImage}
//                   alt={user.name}
//                   className="profile-image"
//                 />
//                 <span>{user.name ? user.name : user.email}</span>
//                 <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
//                   <button onClick={handleLogout}>Logout</button>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="custom-navbar-buttons">
//               <Link
//                 onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
//                 to="/login"
//                 className="login-button">
//                 SIGN IN
//               </Link>
//               <Link
//                 onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
//                 className="register-button"
//                 to="/register">
//                 SIGN UP
//               </Link>
//             </div>
//           )}
//         </div>
//         <div className="custom-navbar-menu-toggle" onClick={handleShow}>
//           &#9776;
//         </div>
//       </nav>

//       <Offcanvas
//         show={show}
//         onHide={handleClose}
//         placement="start"
//         backdrop="true"
//         className="custom-offcanvas">
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Menu</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           {/* <Link className="custom-offcanvas-link" to="/" onClick={handleClose}>
//             Home
//           </Link> */}
//           <Link
//             className="custom-offcanvas-link"
//             to="/services"
//             onClick={handleClose}>
//             SaaS
//           </Link>
//           <Link
//             className="custom-offcanvas-link"
//             to="/capital"
//             onClick={handleClose}>
//             Capital
//           </Link>
//           <Link
//             className="custom-offcanvas-link"
//             to="/themes"
//             onClick={handleClose}>
//             Themes
//           </Link>
//           <Link
//             className="custom-offcanvas-link"
//             to="/leads"
//             onClick={handleClose}>
//             Leads
//           </Link>
//           <Link
//             className="custom-offcanvas-link"
//             to="/career"
//             onClick={handleClose}>
//             Career
//           </Link>
//           {/* <Link
//             className="custom-offcanvas-link"
//             to="/contact"
//             onClick={handleClose}>
//             Contact
//           </Link> */}
//           {user ? (
//             <Link className="custom-offcanvas-link" to={"/dashboard"}>
//               Dashboard
//             </Link>
//           ) : null}
//           {user ? (
//             <div className="user-profile">
//               <div
//                 className="profile-container"
//                 onClick={() => setDropdownOpen(!dropdownOpen)}>
//                 <img
//                   src={user.picture}
//                   alt={user.name}
//                   className="profile-image"
//                 />
//                 <span>{user.name}</span>
//                 <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
//                   <button onClick={handleLogout}>Logout</button>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <>
//               <Link to="/login" onClick={handleClose} className="login-button">
//                 SIGN IN
//               </Link>
//               <button className="register-button" onClick={handleRegister}>
//                 SIGN UP
//               </button>
//             </>
//           )}
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// };

// export default NavBar;
