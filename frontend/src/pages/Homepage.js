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
  aiSeoCM,
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
  maintenanceCM,
  CustomerService,
  cashflowRA,
  vendorPayoutsRA,
  businessTrendsRA,
  customerTrends,
  companyDashboard,
  sales,
  calendarLine,
  eventsLine,
  bookingEngineCM,
  stayRoom,
} from "../assets/WONO_images/img/icon_service_color";
import { ReactFitty } from "react-fitty";

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
    // Group 1
    { id: 1, title: "No Code Website", icon: website },
    { id: 11, title: "Booking Engine", icon: bookingEngineCM }, // Assuming you have this icon
    { id: 2, title: "Payment Gateway", icon: paymentGateway },
    { id: 5, title: "Leads Management", icon: leadGenerationSM },
    { id: 27, title: "AI SEO", icon: aiSeoCM }, // Assuming you have this icon
    { id: 23, title: "Notifications", icon: notifications },

    // Group 2
    { id: 25, title: "Tickets", icon: ticketRaisingCM },
    { id: 20, title: "Tasks", icon: taskManagementHR },
    { id: 7, title: "Meeting Rooms", icon: meetingRoomsCM },
    { id: 21, title: "Visitors", icon: visitorCM },
    { id: 19, title: "Assets", icon: eSignHR },
    { id: 22, title: "Calendar", icon: calendarLine },

    // Group 3
    { id: 4, title: "Sales", icon: sales },
    { id: 3, title: "Finance", icon: financialReportsFA },
    { id: 12, title: "Human Resource", icon: employeeReportsRA },
    { id: 18, title: "IT", icon: fullDataAnalysisRA },
    { id: 28, title: "Maintenance", icon: maintenanceCM }, // Assuming this icon
    { id: 17, title: "Admin", icon: customerProfile },

    // Group 4
    { id: 29, title: "Customer Service", icon: CustomerService }, // Assuming this icon
    { id: 15, title: "Marketing", icon: smsMarketingSM },
    { id: 10, title: "Cafe", icon: cafeOrdersCM },
    { id: 9, title: "Events", icon: eventsLine },
    { id: 24, title: "Profile", icon: customerProfile },
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
      <div className="flex flex-col">
        <div className="home-page-container flex flex-col gap-4 relative bg-[#f7feec]">
          <div className="first-section-grid-item-1">
            <h2 className="home-main-title ">
              <span className="home-main-intro">
                <div className="home-introduce-text">Introducing</div>
                <div className="home-main-title-svg">
                  {" "}
                  <img src={greenUnderLine} />
                  N-Commerce!{" "}
                </div>
              </span>
              <div className="" style={{ display: "flex" }}>
                <div
                  className="home-main-tagline-sentinel"
                  style={{ width: "55%" }}
                ></div>

                <div className="home-main-tagline">
                  <span className="text-[3rem] md:text-[2.5rem] lg:text-[3rem] 2xl:text-[3.2rem]">
                    <b
                      style={{
                        fontFamily: "Popins-Semibold",
                        fontWeight: "normal",
                      }}
                    >
                      "Wo
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
                    mmerce"
                  </span>
                </div>
              </div>
            </h2>
            <div className="home-main-title-desc flex flex-col gap-4 w-full">
              <div className="w-full gap-3 flex flex-col items-start justify-center text-start md:text-center lg:text-start">
                <p
                  className="text-start  w-full md:text-center md:text-[2.1rem] lg:text-start   "
                  style={{ fontWeight: "bold" }}
                >
                  A simple NO CODE SaaS Platform.
                </p>
                <div className="flex flex-col gap-2">
                  <span className="home-main-title-tagline text-[1rem] md:text-[1.09rem] 2xl:text-[1.18rem]">
                    We support businesses in small and aspiring destinations
                    which host Nomads!
                  </span>
                  <span className="text-[0.9rem] md:text-[1rem] 2xl:text-[1.18rem] ">
                    SaaS Tech for Nomad supoorting businesses across the world.
                    <span className="font-bold">
                      (Example: Co-Working, Co-Living, Hostels, Workations,
                      Resorts, Cafes, Events etc)
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/register")}
            className="first-section-grid-item-2  flex justify-center"
          >
            <div className="home-desc relative w-full flex items-center justify-center">
              <img src={greenRound} alt="" />
              IT'S COMPLETLEY FREE
            </div>
          </div>
        </div>

        <div className="Globe-N-Commerce h-[90vh]">
          <div className="Globe" style={{ textAlign: "left" }}>
            <Canvas
              className="canvas"
              camera={{
                position: [0, 0, ismobile ? 15 : 25],
                fov: ismobile ? 40 : isTablet ? 50 : isLaptop ? 38 : 30,
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
          <div className="N-Commerce pr-10">
            <h3>
              <strong>
                SUPPORTING THE FOUNDATION OF N-COMMERCE <br />
              </strong>
            </h3>
            <p> “NOMAD COMMERCE” </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <button
                className="hero-button mr-10"
                data-aos-delay="200"
                onClick={() => {
                  navigate("/register");
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}
              >
                CONNECT WITH US
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

        <div className="partners-section">
          {/* <div className=" flex flex-col px-4 py-4 lg:px-28 lg:py-20">
            <div className="flex flex-col gap-1 uppercase font-semibold">
              <div className="font-semibold">
                <ReactFitty>One Partner Platform</ReactFitty>
              </div>
              <div className="font-semibold">
                <ReactFitty>Infinite possibilities and opportunities!</ReactFitty>
              </div>
            </div>
          </div> */}
          <div className="m-0">
            <div className="">
              <div className="customMargin_top">
                <div className="platform-section w-full font-semibold uppercase flex flex-col">
                  <ReactFitty className="">One Partner Platform</ReactFitty>
                  <ReactFitty className="">
                    Infinite possibilities and opportunities!
                  </ReactFitty>
                </div>
              </div>
            </div>
            <div className="text-left customMargin_bottom  pt-0">
              <div className="row">
                <div className="col-lg-4 col-sm-12 col-xs-12 col-md-6 text-left">
                  <div className="m-1 border-t-2 border-black">
                    <br />
                    <h3 className="text-2xl">Global Bookings</h3>
                    <br />
                    <p>
                      Become a globally acceptable business where customers can
                      book your offerings seamlessly and with great experience.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-12 col-xs-12 col-md-6 text-left">
                  <div className="m-1 border-t-2 border-black">
                    <br />
                    <h3 className="text-2xl">Systems & Processes</h3>
                    <br />
                    <p>
                      Our SaaS platform has everything covered for your business
                      requirements and we customize ourselves as per your needs.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 col-xs-12 col-md-6 text-left">
                  <div className="m-1 border-t-2 border-black">
                    <div>
                      <br />
                      <h3 className="text-2xl">Growth & Revenues</h3>
                      <br />
                      <p>
                        Our approach is based on data and analytics to help you
                        make decisions which will grow your business without
                        employee dependency.
                      </p>
                    </div>
                  </div>
                </div>

                <div className=" mt-10 mb-0 pr-0 lg:pr-24 md:pr-40">
                  <div className="">
                    <div className="flex justify-center md:justify-center lg:justify-end items-center">
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
        <div
          className="website-container-master"
          style={{ backgroundColor: "black" }}
        >
          <div className="website-panel-container">
            <div className="website-panel-header flex flex-col gap-3">
              <div className="font-semibold">
                <ReactFitty>NO CODE SELF SERVE </ReactFitty>
              <ReactFitty className="transactional-section text-lg text-start md:text-start lg:text-center">
                TRANSACTIONAL WEBSITE & MOBILE SITE
              </ReactFitty>
              </div>
              <p className="transactional-section-desc text-sm md:text-[1.3rem] lg:text-[1.7rem] lg:leading-8 md:leading-8 text-start md:text-start lg:text-center">
                Free customizable website templates which are strategically
                tailored for managing Lifestyle Businesses like Co-Working,
                Co-Living, Hostels, Boutique Properties, Cafes etc
              </p>
            </div>
            <div className="website-panel">
              <div
                className={`website-panel-right ${
                  selectedId ? "modal-open" : ""
                }`}
              >
                <div className="website-panel-content">
                  {webimages.map((image) => (
                    <div
                      className="template-preview-container overflow-hidden rounded-xl"
                      key={image.id}
                    >
                      <img
                        className="rounded-xl"
                        src={image.src}
                        alt={image.alt}
                      />
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
              <div className="row">
                <h1 className="text-[2.2rem] md:text-5xl lg:text-[4.3rem] text-center mb-10 font-medium">
                  TESTIMONIAL
                </h1>
                <div className="col-lg-7 d-flex flex-column justify-content-between  p-0 ms-0">
                  <div className=" ">
                    {/* <h4 className="bg-danger testimonial-right-spacing"> */}
                    <h3 className="testimonial-right-spacing text-lg md:text-xl lg:text-2xl">
                      “We went from managing 3,000 sq ft to 50,000+ sq ft in the
                      most efficient and seamless manner with tech, processes,
                      data analytics, customer & employee management and due to
                      an extraordinary extended team like WoNo which integrated
                      with us and had no demands!”
                    </h3>
                    {/* <br /> */}
                    {/* <br /> */}
                  </div>
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
