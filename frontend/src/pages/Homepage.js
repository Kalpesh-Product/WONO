import React, { useState, useRef } from "react";
import "../styles/bodyHome.css";
import { Link } from "react-router-dom";
import RotatingGlobe from "../components/RotatingGlobe";
import { useNavigate } from "react-router-dom";
import "../styles/componentStyle.css";
import CafeImage from "../assets/WONO_images/img/website-builder/new-layout/cafe.webp";
import CoWorkingImage from "../assets/WONO_images/img/website-builder/new-layout/co-working.webp";
import Boutique from "../assets/WONO_images/img/website-builder/new-layout/boutique.webp";
import CoLivingImage from "../assets/WONO_images/img/website-builder/new-layout/co-living.webp";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "../styles/bodyPartners.css";
import greenUnderLine from "../assets/underline-bg/blue-line.png";
import greenRound from "../assets/underline-bg/blue-circle.png";
import BiznestTestimonial from "../assets/testimonials/Kashif_Edit.png";
import FeatureCard from "../components/Cards/FeatureCard";
import {
  FaGlobe,
  FaCreditCard,
  FaMoneyBillWave,
  FaChartLine,
  FaRobot,
  FaBoxes,
  FaDoorOpen,
  FaBed,
  FaCalendarCheck,
  FaCoffee,
  FaUsers,
  FaUserTie,
  FaRegClock,
  FaFileInvoiceDollar,
  FaBullhorn,
  FaBrain,
  FaUserShield,
  FaNetworkWired,
  FaLaptopHouse,
  FaTasks,
  FaUserFriends,
  FaCalendarAlt,
  FaBell,
  FaUserCircle,
  FaTicketAlt,
  FaChartPie,
} from "react-icons/fa";
import {
  androidAppSaas,
  bookingsSaas,
  chatSaas,
  customerProfile,
  customerService,
  events,
  iosApp,
  mobileSite,
  notifications,
  paymentGateway,
  tickets,
  website,
  analyticsFA,
  compliancesFA,
  taxesFA,
  followUpsFA,
  notificationsFA,
  collectionsFA,
  financialReportsFA,
  workingCapitalFA,
  budgetFA,
  projectionsFA,
  cashflowFA,
  invoicingFA,
  vlogsSM,
  blogsSM,
  referralsSM,
  livechatSM,
  whatsAppIntegrationSM,
  smsMarketingSM,
  emailMarketingSM,
  socialMediaSM,
  leadGenerationSM,
  adNetworksSM,
  personalisedSemSM,
  automatedSeoSM,
  eSignHR,
  templatesHR,
  appraisalsHR,
  performanceHR,
  taskManagementHR,
  policiesHR,
  sopsHR,
  holidaysHR,
  leavesHR,
  payslipsHR,
  payrollHR,
  attendanceHR,
  analyticsCM,
  reportsCM,
  autoresponseCM,
  customerServiceCM,
  customerRatingCM,
  feedbackCM,
  announcementsCM,
  visitorCM,
  cafeOrdersCM,
  meetingRoomsCM,
  complaintLogsCM,
  ticketRaisingCM,
  customisedReportsRA,
  taxesReportsRA,
  milestoneReportsRA,
  employeeReportsRA,
  customerReportsRA,
  fullDataAnalysisRA,
  keyNotificationsRA,
  cashflowRA,
  vendorPayoutsRA,
  businessTrendsRA,
  customerTrends,
  companyDashboard,
} from "../assets/WONO_images/img/icon_service_color";

const Homepage = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(null);

  //First section carousel
  const webimages = [
    { id: "cafe", src: CafeImage, alt: "Cafe Image" },
    { id: "coworking", src: CoWorkingImage, alt: "CoWorking Image" },
    { id: "coliving", src: CoLivingImage, alt: "CoLiving Image" },
    { id: "boutique", src: Boutique, alt: "Boutique Image" },
  ];

  const amenities = [
    { id: 1, title: "No Code Website", icon: website },
    { id: 2, title: "Payment Gateway", icon: paymentGateway },
    { id: 3, title: "Finance", icon: financialReportsFA },
    { id: 4, title: "Sales", icon: financialReportsFA },
    { id: 5, title: "Auto Leads", icon: workingCapitalFA },
    { id: 6, title: "Inventory", icon: invoicingFA },
    { id: 7, title: "Meeting Rooms", icon: meetingRoomsCM },
    { id: 8, title: "Stay Rooms", icon: cafeOrdersCM },
    { id: 9, title: "Events", icon: events },
    { id: 10, title: "Cafe", icon: cafeOrdersCM },
    { id: 12, title: "Human Resource", icon: employeeReportsRA },
    { id: 13, title: "Attendance", icon: attendanceHR },
    { id: 14, title: "Payroll", icon: payrollHR },
    { id: 15, title: "Marketing", icon: smsMarketingSM },
    { id: 17, title: "Admin", icon: customerProfile },
    { id: 18, title: "IT", icon: fullDataAnalysisRA },
    { id: 19, title: "Assets", icon: eSignHR },
    { id: 20, title: "Tasks", icon: taskManagementHR },
    { id: 21, title: "Visitors", icon: visitorCM },
    { id: 22, title: "Calendar", icon: events },
    { id: 23, title: "Notifications", icon: notifications },
    { id: 24, title: "Profile", icon: customerProfile },
    { id: 25, title: "Tickets", icon: ticketRaisingCM },
    { id: 26, title: "Analytics", icon: analyticsCM },
  ];
  const handleRegister = () => {
    navigate("/register");
  };
  // mobile screen for globe responsiveness
  const ismobile = window.innerWidth < 769;
  const isTablet = window.innerWidth < 1025;
  const isLaptop = window.innerWidth < 1441;

  return (
    <div className="master-container">
      <div className="home-section">
        <div className="home-page-container">
          <div className="background-div">
            <div>
              <img src={""} alt={`Slide`} className="background-image" />
              <img src={""} className="background-image" />
            </div>
            <div className="black-overlay"></div>
          </div>
          <div className="first-section-grid-item-1">
            <h2 className="home-main-title ">
              <span className="home-main-intro">
                Introducing{" "}
                <div className="home-main-title-svg">
                  {" "}
                  <img src={greenUnderLine} />
                  N-Commerce!{" "}
                </div>
              </span>
              <div className="" style={{ display: "flex" }}>
                <div style={{ width: "55%" }}></div>

                <div className=" home-main-tagline">
                  <span>"Nomad Commerce"</span>
                  <span>
                    <b
                      style={{
                        fontFamily: "Popins-Semibold",
                        fontWeight: "normal",
                      }}
                    >
                      Wo
                    </b>
                    rld{" "}
                    <b
                      style={{
                        fontFamily: "Popins-Semibold",
                        fontWeight: "normal",
                      }}
                    >
                      No
                    </b>
                    mad{" "}
                    <b
                      style={{
                        fontFamily: "Popins-Semibold",
                        fontWeight: "normal",
                      }}
                    >
                      Co
                    </b>
                    mmerce
                  </span>
                </div>
              </div>
            </h2>
            <div className="home-main-title-desc">
              <span style={{ fontWeight: "bold" }}>
                A simple NO CODE SaaS Platform.
              </span>
              <br />
              <span className="home-main-title-tagline">
                We support businesses in small and aspiring destinations which
                host Nomads!
                <br />
                SaaS Tech for Nomad supoorting businesses across the world.
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  (E.g.: Co-Working, Co-Living, Hostels, Workations, Resorts,
                  Cafes, Events etc)
                </span>
              </span>
            </div>
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/register")}
            className="first-section-grid-item-2"
          >
            <span className="home-desc">
              <img src={greenRound} alt="" />
              IT'S COMPLETLEY FREE
            </span>
          </div>
        </div>

        <div className="Globe-N-Commerce">
          <div className="Globe" style={{ textAlign: "left" }}>
            <Canvas
              className="canvas"
              camera={{
                position: [0, 0, ismobile ? 15 : 25],
                fov: ismobile ? 40 : isTablet ? 50 : isLaptop ? 35 : 30,
              }}
            >
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
              <strong>
                SUPPORTING THE FOUNDATION
                <br /> OF N-COMMERCE <br />
              </strong>
            </h3>
            <p> ( “NOMAD COMMERCE” ) </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                className="hero-button"
                data-aos-delay="200"
                onClick={() => {
                  navigate("/register");
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}
              >
                CONNECT
              </button>
            </div>
          </div>
        </div>

        <div className="module-feature-main-home">
          <div className="four-cards-header">
            <span>KEY MODULES FOR YOUR BUSINESS</span>
          </div>
          <div className="key-modules-grid">
            {amenities.map((item) => (
              <FeatureCard key={item.id} icon={item.icon} title={item.title} />
            ))}
          </div>
        </div>
        <div style={{ padding: "0 7rem" }}>
          <hr />
        </div>

        <div className="partners-section ">
          <div className="m-0 container  w-100 ">
            <div className="">
              <div className="customMargin_top">
                <div className="one-platform-section">
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
                    <div className="row   ">
                      <div className="col-lg-4"></div>
                      <div className="col-lg-4"></div>
                      <div className="col-lg-4  d-flex justify-content-center align-items-center">
                        <div className="">
                          <button
                            className="get-started-submit-button m-0"
                            onClick={handleRegister}
                          >
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="website-container-master"
          style={{ backgroundColor: "black" }}
        >
          <div className="website-panel-container">
            <div className="website-panel-header">
              <h2>NO CODE SELF SERVE </h2>
              <h3>TRANSACTIONAL WEBSITE & MOBILE SITE</h3>
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
                }`}
              >
                <div className="website-panel-content">
                  {webimages.map((image) => (
                    <div className="template-preview-container" key={image.id}>
                      <img src={image.src} alt={image.alt} />
                    </div>
                  ))}
                </div>
                <Link
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "instant" })
                  }
                  to="/themes"
                >
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
                <div className="col-lg-7 d-flex flex-column justify-content-between  p-0 ms-0">
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
                  <div className="testimonial-contact">
                    <h4
                      className="my-4"
                      style={{ fontFamily: "Amsterdam", fontSize: "2rem" }}
                    >
                      Kashif Shaikh
                    </h4>
                    <p className="m-0">Co-Founder & COO</p>
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

        {/* <div className="last-section   w-100 ">
          <div className="home-last-banner">
            <div className="grow-your-business-color grow-your-business-section">
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
                  onClick={handleRegister}
                >
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
        </div> */}
      </div>
    </div>
  );
};

export default Homepage;
