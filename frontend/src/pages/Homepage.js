import React, { useState, useRef } from "react";
import "../styles/bodyHome.css";
import { Link } from "react-router-dom";
import RotatingGlobe from "../components/RotatingGlobe";
import { useNavigate } from "react-router-dom";
import Carousel1 from "../assets/WONO_images/img/hero-carousel/hero-carousel-1.webp";
// import Carousel2 from '../assets/WONO_images/img/hero-carousel/hero-carousel-2.png'
// import Carousel3 from '../assets/WONO_images/img/hero-carousel/hero-carousel-3.png'
// import GlobalNomad from '../assets/WONO_images/img/icon_service/Birthday.webp'
import { motion, AnimatePresence } from "framer-motion";
import "../styles/componentStyle.css";
import { Nav } from "react-bootstrap";
// import WonoLogo from '../assets//WONO_images/img/WONO_LOGO_white _TP.png';
// import WonoLogoBlack from '../assets//WONO_images/img/WONO_LOGO_Black_TP.png';
import BiznestLogo from "../assets/BIZNest/biznest_logo.jpg";
import CafeImage from "../assets/WONO_images/img/website-builder/new-layout/cafe.webp";
import CoWorkingImage from "../assets/WONO_images/img/website-builder/new-layout/co-working.webp";
import Hostels from "../assets/WONO_images/img/website-builder/new-layout/hostels.png";
import CoLivingImage from "../assets/WONO_images/img/website-builder/new-layout/co-living.webp";
import CafeImageLong from "../assets/WONO_images/img/website-builder/new-layout/long/cafe-long.jpeg";
import CoWorkingImageLong from "../assets/WONO_images/img/website-builder/new-layout/long/co-working-long.jpeg";
import BoutiqueLong from "../assets/WONO_images/img/website-builder/new-layout/long/boutique-long.jpeg";
import CoLivingImageLong from "../assets/WONO_images/img/website-builder/new-layout/long/co-living-long.jpeg";
import Boutique from "../assets/WONO_images/img/website-builder/new-layout/boutique.webp";
import DashboardBooking from "./Dashboard-pages/DashboardBooking";
import DashboardAsset from "./Dashboard-pages/DashboardAsset";
import DashboardHR from "./Dashboard-pages/DashboardHR";
import DashboardTickets from "./Dashboard-pages/DashboardTickets";
import DashboardVisitor from "./Dashboard-pages/DashboardVisitor";
import DashboardProducts from "./Dashboard-pages/DashboardProducts";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import { CustomNextArrow, CustomPrevArrow } from '../components/WebsiteBuilderArrows/CustomArrows'
import FourCardsComponents from "../components/Four_cardsComponents";
import WebsiteCafe from "./WebsiteBuilder/WebsiteCafe";
import WebsiteWorkation from "./WebsiteBuilder/WebsiteWorkation";
import "../styles/bodyPartners.css";
// import BiznestTestimonial from "../assets/testimonials/kashif-image.jpg";
import greenUnderLine from "../assets/underline-bg/blue-line.png";
import greenRound from "../assets/underline-bg/blue-circle.png";
import BiznestTestimonial from "../assets/testimonials/kashif-image.webp";
// import "../styles/bodyLastBanner.css";

const Homepage = () => {
  const menuTitles = {
    "dashboard-booking": "Booking engine",
    "dashboard-tickets": "Ticket Management",
    "dashboard-hr": "HR Management",
  };
  const website_menus = {
    "website-cafe": "Cafe",
    "website-workation": "Workation",
  };
  const containerRef = useRef(null);
  const navigate = useNavigate();
  // const [collapsed, setCollapsed] = useState(false);
  const firstBackendKey = Object.keys(menuTitles)[0];
  const [selectedItem, setSelectedItem] = useState("dashboard-booking");
  const firstWebKey = Object.keys(website_menus)[0];
  const [selectedWeb, setSelectedWeb] = useState("website-cafe");
  const [selectedMenuItem, setSelectedMenuItem] = useState(firstBackendKey);
  const [selectedMenu, setSelectedMenu] = useState(firstWebKey);
  const [selectedId, setSelectedId] = useState(null);

  //First section carousel

  const images = [Carousel1];
  const webimages = [
    { id: "cafe", src: CafeImage, alt: "Cafe Image" },
    { id: "coworking", src: CoWorkingImage, alt: "CoWorking Image" },
    { id: "coliving", src: CoLivingImage, alt: "CoLiving Image" },
    { id: "boutique", src: Boutique, alt: "Boutique Image" },
  ];

  const webimagesClicked = [
    { id: "cafe", src: CafeImageLong, alt: "Cafe Image" },
    { id: "coworking", src: CoWorkingImageLong, alt: "CoWorking Image" },
    { id: "coliving", src: CoLivingImageLong, alt: "CoLiving Image" },
    { id: "boutique", src: BoutiqueLong, alt: "Boutique Image" },
  ];

  //for website section
  const handleImageClick = (id) => {
    setSelectedId(id);
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const renderContent = () => {
    switch (selectedItem) {
      case "dashboard-booking":
        return <DashboardBooking />;
      case "dashboard-products":
        return <DashboardProducts />;
      case "dashboard-tickets":
        return <DashboardTickets />;
      case "dashboard-hr":
        return <DashboardHR />;
      case "dashboard-visitor":
        return <DashboardVisitor />;
      case "dashboard-asset":
        return <DashboardAsset />;
      default:
        return <DashboardBooking />;
    }
  };
  const renderWebContent = () => {
    switch (selectedWeb) {
      case "website-cafe":
        return <WebsiteCafe />;
      case "website-workation":
        return <WebsiteWorkation />;
      default:
        return <WebsiteWorkation />;
    }
  };
  const handleMenuSelect = (key) => {
    setSelectedItem(key);
    setSelectedMenuItem(key);
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const handleWebMenuSelect = (key) => {
    setSelectedWeb(key); // Set the key as the selected web content
    setSelectedMenu(key); // Highlight the selected menu item
  };

  // mobile screen for globe responsiveness
  const ismobile = window.innerWidth < 769;
  const isTablet = window.innerWidth < 1025;

  return (
    <div className="master-container">
      <div className="home-section">
        <div className="home-page-container">
          <div className="background-div">
            <div>
              <img src={""} alt={`Slide`} className="background-image" />

              {/* <img src={''} className="background-image" /> */}
              <img src={""} className="background-image" />
            </div>
            <div className="black-overlay"></div>
          </div>
          <div className="first-section-grid-item-1">
            <h2 className="home-main-title ">
              {/* <span className="w"> W</span>
              <span className="O">o</span>rld
              <span className="n">N</span>
              <span className="O">o</span>mads */}
              <span
                style={{
                  display: "flex",
                  columnGap: "1rem",
                  padding: "0rem 0 2rem ",
                }}>
                Introducing{" "}
                <div className="home-main-title-svg">
                  {" "}
                  <img src={greenUnderLine} />
                  N-Commerce!{" "}
                </div>
              </span>
              {/* <div style={{display:'flex', flexDirection:'column', textAlign:'end', paddingRight:'5rem'}}>
              <span style={{ fontSize: '1rem' }}>"Nomad Commerce"</span>
              <span style={{ fontSize: '1rem', marginLeft:"5rem", display:'flex', justifyContent:'end', width:'100%', fontWeight:'200' }}>WoNo.Co = <b>Wo</b>rld <b>No</b>mad <b>Co</b>mmerce</span>
              </div> */}
              <div className="row">
                <div className="col-6"></div>
                <div
                  className="col-6"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}>
                  <span style={{ fontSize: "1.8rem", fontWeight: "200" }}>
                    "Nomad Commerce"
                  </span>
                  <span style={{ fontSize: "1.8rem", fontWeight: "200" }}>
                    WoNo.Co = <b style={{ fontWeight: "800" }}>Wo</b>rld{" "}
                    <b style={{ fontWeight: "800" }}>No</b>mad{" "}
                    <b style={{ fontWeight: "800" }}>Co</b>mmerce
                  </span>
                </div>
              </div>
            </h2>
            <span className="home-main-title-desc">
              A simple no code instant SaaS software platform that supports
              businesses in remote and aspiring destinations!
              <br />
              Provide services to nomads across the world. (Example: Co-Working,
              Co-Living, Hostels, Resorts, Cafes, Events etc)
            </span>
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/register")}
            className="first-section-grid-item-2">
            <span className="home-desc">
              <img src={greenRound} alt="" />
              IT'S FREE
            </span>
            {/* <div className="home-section-buttons">
              <div className="home-section-register-button-space">
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/register");
                    window.scrollTo({ top: 0, behavior: "instant" });
                  }}
                  className="its-free-container">
                  <svg
                    fill="none"
                    // viewBox="0 0 390 97"
                    className="its-free-svg"
                    viewBox="190 -5 400 120">
                    <path
                      stroke-width="10"
                      width="800"
                      height="40"
                      stroke="#28a745"
                      d="M2,76.26c16.11,4.95,31.91,3.84,48.58,3.84,20.39,0,40.67,0,61,1,18,.87,36-1,53.94-1,15.79,0,31.51,1.81,47.31,1.21,24.51-.93,49.17-2.18,73.68-2.49,19.45-.25,39.4,1.59,58.76-.64,15-1.73,29-2.29,39.75-14.79C387.89,60.1,390.5,48.5,386.5,40c-5.69-12.09-12.63-18.68-23.67-25.17C341.68,2.4,314.67,1.82,291.09,2c-21.31.2-55.45,3.62-68.52,24.46C212.14,43.1,212,59.57,227.79,72.77c24.81,20.81,63.45,26.8,93.41,18.85"></path>
                  </svg>

                  <span style={{ zIndex: 10 }}>it's free</span>
                </div>
                {/* <button
                  className="home-section-register-button"
                  onClick={handleRegister}>
                  BUSINESS SIGN UP
                </button>
              </div>
            </div> */}
          </div>
        </div>

        <div className="Globe-N-Commerce">
          <div className="Globe" style={{ textAlign: "left" }}>
            <Canvas
              camera={{
                position: [0, 0, ismobile ? 15 : 25],
                fov: ismobile ? 40 : isTablet ? 60 : 30,
              }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <RotatingGlobe />
              <OrbitControls
                enableZoom={false}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={(2 * Math.PI) / 3}
              />
            </Canvas>
          </div>
          <div className="N-Commerce">
            <h3>
              <strong>INTRODUCING N-COMMERCE</strong>
            </h3>
            <p> ( “NOMAD COMMERCE” ) </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <button
                className="hero-button"
                data-aos-delay="200"
                onClick={() => {
                  navigate("/register");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}>
                PARTNER NOW
              </button>
            </div>
          </div>
        </div>
        <div className="four-cards-section">
          <FourCardsComponents />
        </div>

        <div className="partners-section ">
          {/* <div className="mt-5 container"> */}
          <div className="m-0 container  w-100 ">
            {/* First div (1/2) */}
            <div className="">
              <div className="customMargin_top">
                <div>
                  <h2>One Partner Platform,</h2>
                  <h2>Infinite possibilities and opportunities!</h2>
                </div>
              </div>
            </div>
            <div className="text-left customMargin_bottom  pt-0">
              <div className="row  ">
                <div className="col-lg-4 col-sm-12 col-xs-12 col-md-6 text-left">
                  <div className="m-1 border-top border-dark border-2">
                    <br />
                    <h3>Global Bookings</h3>
                    <br />
                    <p>
                      Become a globally acceptable business where customers can
                      book your offerings seamlessly and with great experience.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-12 col-xs-12 col-md-6 text-left">
                  <div className="m-1 border-top border-dark border-2">
                    <br />
                    <h3>Systems & Processes</h3>
                    <br />
                    <p>
                      Our SaaS platform has everything covered for your business
                      requirements and we customize ourselves as per your needs.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 col-xs-12 col-md-6 text-left">
                  <div className="m-1 border-top border-dark border-2">
                    <div>
                      <br />
                      <h3>Growth & Revenues</h3>
                      <br />
                      <p>
                        Our approach is based on data and analytics to help you
                        make decisions which will grow your business without
                        employee dependency.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="container mt-3 mb-0  ">
                    {/* <div className="row  border-bottom border-dark border-3 pb-5 bg-primary"> */}
                    <div className="row   ">
                      <div className="col-lg-4"></div>
                      <div className="col-lg-4"></div>
                      {/* <div className="col-lg-4 bg-danger"> */}
                      <div className="col-lg-4  d-flex justify-content-center align-items-center">
                        <div className="">
                          <button
                            className="get-started-submit-button m-0"
                            onClick={handleRegister}>
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className='four-cards-section' style={{ padding: "0", marginBottom: "-60px", marginTop: "20px" }}>
                <FourCardsComponents />
            </div> */}
            </div>
            {/* </div> */}
          </div>
        </div>

        {/* <div
        className="backend-container-master"
        style={{ backgroundColor: "white" }}>
        <div ref={containerRef} className="backend-panel-container">
          <h2>SaaS platforms</h2>
          <div className="backend-panel">
            <div className="backend-panel-sidebar">
              <div className="backend-sidebar-header">
                <div className="backend-sidebar-logo">
                  <img src={BiznestLogo} alt="" />
                </div>
              </div>

              <Nav
                id="backend-sidebar"
                className="flex-column p-0 backend-sidebar">
                {Object.keys(menuTitles).map((key) => (
                  <Nav.Link
                    key={key}
                    onClick={() => handleMenuSelect(key)}
                    className={selectedMenuItem === key ? "active" : ""}>
                    {menuTitles[key]}
                  </Nav.Link>
                ))}
              </Nav>
            </div>
            <div className="backend-panel-right">
              <div className="backend-panel-header">
                <h3>{menuTitles[selectedItem]}</h3>
              </div>
              <div className="backend-panel-content">
                <AnimatePresence>
                  <motion.div
                    key={selectedItem}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}>
                    {renderContent(selectedMenuItem)}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div> */}

        <div
          className="website-container-master"
          style={{ backgroundColor: "black" }}>
          <div className="website-panel-container">
            <div className="website-panel-header">
              <h2>SELF-SERVE TRANSACTIONAL WEBSITE: FULL STACK!</h2>
              <h3>
                Tech that completes your business and has ZERO dependency with
                NO COST!
              </h3>
              <p>
                Free customizable website templates which are strategically
                tailored for managing Lifestyle Businesses like Co-Working,
                Co-Living, Hostels, Boutique Properties, Cafes etc
              </p>
            </div>
            <div className="website-panel">
              {/* <div className="website-panel-sidebar">
                            <div className="website-sidebar-header">
                                <div className="website-sidebar-logo">
                                    <img src={BiznestLogo} alt='' />
                                </div>
                            </div>

                            <Nav id="website-sidebar" className="flex-column p-0 website-sidebar">
                                {Object.keys(website_menus).map((key) => (
                                    <Nav.Link
                                        key={key}
                                        onClick={() => handleWebMenuSelect(key)}
                                        className={selectedMenu === key ? 'active' : ''}
                                    >
                                        {website_menus[key]}
                                    </Nav.Link>
                                ))}
                            </Nav>

                        </div> */}
              <div
                className={`website-panel-right ${
                  selectedId ? "modal-open" : ""
                }`}>
                <div className="website-panel-content">
                  {webimages.map((image) => (
                    <div className="template-preview-container" key={image.id}>
                      <img src={image.src} alt={image.alt} />
                    </div>
                  ))}
                </div>
                <Link
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  to="/themes">
                  View more
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial-section  body-partners-master">
          <div className=" pt-5 pb-5">
            {/* <div className="container border-top border-dark border-2"> */}
            <div className="container p-0 ">
              <div className="row ">
                <div className="col-lg-7 d-flex flex-column  p-0 ms-0">
                  <div className=" ">
                    {/* <h4 className="bg-danger testimonial-right-spacing"> */}
                    <h3 className="testimonial-right-spacing">
                      “We went from managing 3,000 sq ft to 50,000+ sq ft in the
                      most efficient and seamless manner with tech, processes,
                      data analytics, customer & employee management and due to
                      an extraordinary extended team like WoNo which integrated
                      with us and had no demands!”
                    </h3>
                    {/* <br /> */}
                    {/* <br /> */}
                  </div>
                  {/* <div>
                    <div className=" border-top border-dark border-2 customWidth bg-danger">
                      a div
                    </div>
                  </div> */}
                  <div className="">
                    <h4 className="my-2">Kashif Shaikh</h4>
                    <p className="m-0">Co-founder & COO</p>
                    <p>BIZ Nest, Goa India </p>
                  </div>
                </div>
                {/* <div className="col-lg-5 mt-3 bg-warning d-flex flex-row justify-content-end"> */}
                <div className="col-lg-5 mt-3 custom-image-biznest-container d-flex flex-row justify-content-end px-0">
                  <img
                    src={BiznestTestimonial}
                    alt=""
                    className="custom-image-biznest"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="last-section  w-100 ">
          <div className="pt-5 customMargin pb-5">
            <div className="grow-your-business-color p-3">
              <h2>
                <b>GROW YOUR BUSINESS WITH US</b>
              </h2>
              <br />

              <p className="last-spacing">
                We have you covered across … build website, manage bookings,
                sets processes, HR support, task management, ticket management,
                marketing, generating leads, accounting, finance, customer
                support, fundraising, and any customized requirements for
                managing your business to grow and become successful shall all
                be delivered by WoNo.
              </p>
              <div className="partner-button-space">
                <button
                  className="partner-submit-button "
                  onClick={handleRegister}>
                  Get Started
                </button>
              </div>
              <div className="">
                <div className="container ">
                  <div className="row">
                    <div className="col-lg-12  d-flex custom-justify align-items-center"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
