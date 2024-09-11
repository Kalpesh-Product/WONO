import React, { useState, useRef } from "react";
import "../styles/bodyHome.css";

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
import CafeImage from "../assets/WONO_images/img/website-builder/new-layout/cafe.png";
import CoWorkingImage from "../assets/WONO_images/img/website-builder/new-layout/co-working.png";
import Hostels from "../assets/WONO_images/img/website-builder/new-layout/hostels.png";
import CoLivingImage from "../assets/WONO_images/img/website-builder/new-layout/co-living.png";
import CafeImageLong from "../assets/WONO_images/img/website-builder/new-layout/long/cafe-long.jpeg";
import CoWorkingImageLong from "../assets/WONO_images/img/website-builder/new-layout/long/co-working-long.jpeg";
import BoutiqueLong from "../assets/WONO_images/img/website-builder/new-layout/long/boutique-long.jpeg";
import CoLivingImageLong from "../assets/WONO_images/img/website-builder/new-layout/long/co-living-long.jpeg";
import Boutique from "../assets/WONO_images/img/website-builder/new-layout/boutique.png";
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
import BiznestTestimonial from "../assets/testimonials/BIZ Nest Testimonial.png";
import LeadsImage from "../assets/leads_images/leads-section-image.webp";
import GoogleSheetsImage from "../assets/leads_images/google-sheets-image.webp";
// import "../styles/bodyLastBanner.css";

import TickmarkImg from "../assets/check.png";

import GoogleMyBusinessImage from "../assets/leads_images/google-my-business-image.webp";
import GoogleMapsImage from "../assets/leads_images/google-maps-logo.png";
import GoogleReviewsImage from "../assets/leads_images/google-reviews-logo.png";

import GoogleSeoImage from "../assets/leads_images/google-seo-logo.png";
import WebsiteImage from "../assets/leads_images/website-logo.png";
import LinkedinImage from "../assets/leads_images/linkedin-logo.png";

import FacebookImage from "../assets/leads_images/facebook-logo.png";
import InstagramImage from "../assets/leads_images/instagram-logo.png";
import FreeIntegrationsImage from "../assets/leads_images/free-integrations-icon.png";

import CrossPromotionsImage from "../assets/leads_images/cross-promotions-logo.png";
import DatabaseImage from "../assets/leads_images/database-icon.png";
import WhatsappImage from "../assets/leads_images/whatsapp-icon.png";

import RoiImage from "../assets/leads_images/roi.jpg";
import CompleteViewImage from "../assets/leads_images/complete-view-image.jpg";
import FinerPointsImage from "../assets/leads_images/finer-points-image.jpg";

import "../styles/specialClasses.css";
import "../styles/leadsPage.css";

const LeadsPage = () => {
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

  return (
    <div className="master-container">
      <div className="home-section">
        {/* <div className="home-page-container">
          <div className="background-div">
            <div>
              <img src={images[0]} alt={`Slide`} className="background-image" />
            </div>
            <div className="black-overlay"></div>
          </div>
          <div className="first-section-grid-item-1">
            <h2 className="home-main-title">
              <span className="w"> W</span>
              <span className="O">o</span>rld
              <span className="n">N</span>
              <span className="O">o</span>mads
              <br />
            </h2>
          </div>
          <div className="first-section-grid-item-2">
            <span className="home-desc">
              We support Nomad Businesses for FREE! World’s Largest b2b SaaS
              platform which supports Nomad Lifestyle across 25+ countries !
            </span>
            <div className="home-section-buttons">
              <div>
                <button
                  className="home-section-register-button"
                  onClick={handleRegister}>
                  BUSINESS SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="Globe-N-Commerce">
          <div className="Globe" style={{ textAlign: "left" }}>
            <Canvas
              camera={{
                position: [0, 0, ismobile ? 15 : 25],
                fov: ismobile ? 90 : 40,
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
        </div> */}

        {/* <div className="four-cards-section">
          <FourCardsComponents />
        </div> */}

        <div className="leads-heading-section  wono-text-spacing fontPoppinsRegular">
          <br />
          <br />
          <h2 className="FFFF">
            Generate continues structured leads for your business with the
            support of our automated platform and trained and experienced
            resources.
          </h2>
          <br />
          {/* <p className="automatedPlatformFontSize">
            Automated platform and our resources are FREE .. you pay only if you
            start paid ads!
          </p> */}
          {/* <div>
            <div className="">
              <div className="container my-3 ">
          
                <div className="row   ">
                  <div className="col-lg-9">
                    <p className="automatedPlatformFontSize">
                      Automated platform and our resources are FREE .. you pay
                      only if you start paid ads!
                    </p>
                  </div>
              
                  <div className="col-lg-3  d-flex justify-content-center align-items-center">
                    <div className="">
                      <button
                        className="get-started-submit-button "
                        onClick={handleRegister}>
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div> */}

          <div>
            <div className="">
              <div className="container my-3 pe-0">
                {/* <div className="row  border-bottom border-dark border-3 pb-5 bg-primary"> */}
                <div className="row ">
                  <div className="col-lg-9 ps-0">
                    <p className="automatedPlatformFontSize automatedPlatformPadding">
                      Automated platform and our resources are FREE .. you pay
                      only if you start paid ads!
                    </p>
                  </div>
                  {/* <div className="col-lg-4"></div> */}
                  {/* <div className="col-lg-4 bg-danger"> */}
                  <div className="col-lg-3  d-flex justify-content-end align-items-center">
                    <div className="">
                      <button
                        className="get-started-submit-button "
                        onClick={handleRegister}>
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
                <br />
                {/* <hr /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="leads-image-section  fontPoppinsRegular">
          <img src={LeadsImage} alt="" className="full-width-image" />
        </div>

        <div className="organic-leads-section   container wono-text-spacing spaceBetweenSections fontPoppinsRegular">
          {/* <br /> */}
          <br />
          <h2 className="googleSheetsHeading">
            Our core focus is to generate ORGANIC LEADS!
          </h2>
          <h2 className="googleSheetsHeading">With NO INVESTMENTS!</h2>
          <br />
          <div className="bottom-container row">
            <div className="checklist col-lg-4">
              <div>
                <p className="card-text">
                  <div className="Tickmark-text">
                    <img src={TickmarkImg} alt="tick-mark"></img>
                    Google My Business
                  </div>
                  <div className="Tickmark-text">
                    <img src={TickmarkImg} alt="tick-mark"></img>
                    Google Maps
                  </div>
                  <div className="Tickmark-text">
                    <img src={TickmarkImg} alt="tick-mark"></img>
                    Google Reviews
                  </div>
                  <div className="Tickmark-text">
                    <img src={TickmarkImg} alt="tick-mark"></img>
                    Google SEO
                  </div>
                  <div className="Tickmark-text">
                    <img src={TickmarkImg} alt="tick-mark"></img>
                    Website
                  </div>
                  <div className="Tickmark-text">
                    <img src={TickmarkImg} alt="tick-mark"></img>
                    LinkedIn
                  </div>
                  <div className="Tickmark-text">
                    <img src={TickmarkImg} alt="tick-mark"></img>
                    Facebook
                  </div>
                  <div className="Tickmark-text">
                    <img src={TickmarkImg} alt="tick-mark"></img>
                    Instagram
                  </div>
                  <div className="Tickmark-text">
                    <img src={TickmarkImg} alt="tick-mark"></img>
                    Free Integrations
                  </div>
                  <div className="Tickmark-text">
                    <img src={TickmarkImg} alt="tick-mark"></img>
                    Cross Promotions
                  </div>
                  <div className="Tickmark-text">
                    <img src={TickmarkImg} alt="tick-mark"></img>
                    Database
                  </div>
                  <div className="Tickmark-text">
                    <img src={TickmarkImg} alt="tick-mark"></img>
                    What's App
                  </div>
                </p>
              </div>
            </div>
            <div className="organic-leads-images-section  col-lg-8 pe-0">
              {/* <div className="organic-leads-images-section  col-lg-8 "> */}
              <div className="image-grid d-flex flex-column justify-content-center align-items-center ">
                {/* <div className="image-grid d-flex flex-column justify-content-center align-items-center "> */}
                {/* <div className="img-row-1  d-flex flex-row justify-content-around align-items-center w-100"> */}
                <div className="img-row-1  d-flex flex-row justify-content-between align-items-center w-100">
                  {/* <div className="img-row-1  d-flex flex-row justify-content-center align-items-center"> */}
                  <div className="top-first">
                    <div className="WidthHeight2">
                      <img
                        src={GoogleMyBusinessImage}
                        alt="tick-mark"
                        className="WidthHeight1"></img>
                    </div>
                  </div>
                  <div className="top-second">
                    {" "}
                    <img
                      src={GoogleMapsImage}
                      alt="tick-mark"
                      className="WidthHeight1"></img>
                  </div>
                  <div className="top-third">
                    {" "}
                    <img
                      src={GoogleSeoImage}
                      alt="tick-mark"
                      className="WidthHeight1"></img>
                  </div>
                  <div className="top-fourth">
                    {" "}
                    <img
                      src={FacebookImage}
                      alt="tick-mark"
                      className="WidthHeight1"></img>
                  </div>
                </div>
                {/* <div className="img-row-2  d-flex flex-row justify-content-around align-items-center w-100"> */}
                <div className="img-row-2  d-flex flex-row justify-content-between align-items-center w-100">
                  {/* <div className="img-row-2  d-flex flex-row justify-content-center align-items-center"> */}
                  <div className="middle-first">
                    {" "}
                    <img
                      src={WebsiteImage}
                      alt="tick-mark"
                      className="WidthHeight1"></img>
                  </div>
                  <div className="middle-second">
                    {" "}
                    <img
                      src={GoogleReviewsImage}
                      alt="tick-mark"
                      className="WidthHeight1"></img>
                  </div>
                  <div className="middle-third">
                    {" "}
                    <img
                      src={LinkedinImage}
                      alt="tick-mark"
                      className="WidthHeight1"></img>
                  </div>
                  <div className="middle-fourth">
                    {" "}
                    <img
                      src={DatabaseImage}
                      alt="tick-mark"
                      className="WidthHeight1"></img>
                  </div>
                </div>
                {/* <div className="img-row-3  d-flex flex-row justify-content-around align-items-center w-100"> */}
                <div className="img-row-3  d-flex flex-row justify-content-between align-items-center w-100">
                  {/* <div className="img-row-3  d-flex flex-row justify-content-center align-items-center"> */}
                  <div className="bottom-first">
                    {" "}
                    <img
                      src={InstagramImage}
                      alt="tick-mark"
                      className="WidthHeight1"></img>
                  </div>
                  <div className="bottom-second">
                    {" "}
                    <img
                      src={FreeIntegrationsImage}
                      alt="tick-mark"
                      className="WidthHeight1"></img>
                  </div>
                  <div className="bottom-third">
                    {" "}
                    <img
                      src={CrossPromotionsImage}
                      alt="tick-mark"
                      className="WidthHeight1"></img>
                  </div>
                  <div className="bottom-fourth">
                    {" "}
                    <img
                      src={WhatsappImage}
                      alt="tick-mark"
                      className="WidthHeight1"></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="organic-leads-image"></div>
          </div>
        </div>

        {/* <div className="google-sheets-section fontPoppinsRegular spaceBetweenSections"> */}
        <div className="google-sheets-section fontPoppinsRegular ">
          <div>
            <div className="py-4  wono-text-spacing ">
              <h2 className="googleSheetsHeading">
                Automated Google LEAD SHEET!
              </h2>
              <h2 className="googleSheetsHeading">
                Never miss any leads generated from our platform.
              </h2>
            </div>
            <div className="organic-leads-images-section wono-text-spacing spaceBetweenSections">
              <img
                src={GoogleSheetsImage}
                alt=""
                className="full-width-image"
              />
            </div>
          </div>
        </div>

        <div className="marketing-section  wono-text-spacing fontPoppinsRegular spaceBetweenSections">
          <div className="marketing-header  pt-5">
            <div>
              <p>RUN & SCALE YOUR BUSINESS</p>
            </div>
            {/* <div className="d-flex justify-content-between">
              <div className="bg-secondary">
                <h2>Marketing</h2>
              </div>
              <div>
                <button
                  className="get-started-submit-button "
                  onClick={handleRegister}>
                  Get Started
                </button>
              </div>
            </div> */}

            <div>
              <div className="">
                <div className="container my-3 pe-0">
                  {/* <div className="row  border-bottom border-dark border-3 pb-5 bg-primary"> */}
                  <div className="row ">
                    <div className="col-lg-4 ps-0">
                      <h2 className="fs-1">Marketing</h2>
                    </div>
                    <div className="col-lg-4"></div>
                    {/* <div className="col-lg-4 bg-danger"> */}
                    <div className="col-lg-4  d-flex justify-content-end align-items-center">
                      <div className="">
                        <button
                          className="get-started-submit-button "
                          onClick={handleRegister}>
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <br /> */}
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="marketing-body">
            <div className="cards flexForCards">
              <div className=" individual-card individual-card-front">
                <h2 className="fs-4">SEO tools</h2>
                <p>
                  Use a complete suite of advanced SEO tools to optimize your
                  site for search and increase your organic traffic.
                </p>
              </div>
              <div className=" individual-card">
                <h2 className="fs-4">Google Ads with WoNo</h2>
                <p>
                  Launch a Google Ads campaign to reach your site's target
                  audience and appear high up in Google search results.
                </p>
              </div>
              <div className=" individual-card">
                <h2 className="fs-4">Email marketing</h2>
                <p>
                  Create and customize strong email marketing campaigns to
                  engage your audience, send promotions and increase traffic.
                </p>
              </div>
              <div className=" individual-card individual-card-front">
                <h2 className="fs-4">Analytics</h2>
                <p>
                  Get reports with actionable insights and data about your site
                  and marketing activities.
                </p>
              </div>
              <div className=" individual-card">
                <h2 className="fs-4">Google Business Profile</h2>
                <p>
                  Attract the right customers and boost credibility by managing
                  your business’s presence on Google Maps, Search and more.
                </p>
              </div>
              <div className=" individual-card">
                <h2 className="fs-4">Logo Maker</h2>
                <p>
                  Create a custom logo for your brand in minutes with our AI
                  logo generator.
                </p>
              </div>
              <div className=" individual-card individual-card-front">
                <h2 className="fs-4">Facebook & Instagram Ads</h2>
                <p>
                  Launch targeted ad campaigns on Facebook and Instagram to
                  generate leads and drive traffic.
                </p>
              </div>
              <div className=" individual-card">
                <h2 className="fs-4">Marketing integrations</h2>
                <p>
                  Connect tools such as Google Analytics and Facebook Pixel and
                  CAPI to get insights on site traffic, visitor behavior and
                  more.
                </p>
              </div>
              <div className=" individual-card">
                <h2 className="fs-4">Social media marketing</h2>
                <p>
                  Design, schedule, and easily share your content across
                  multiple platforms to boost engagement.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="better-roi-section  wono-text-spacing fontPoppinsRegular spaceBetweenSections">
          {/* <div className="better-roi h-5  wono-text-spacing "> */}
          <div className="container paddingRight0">
            <div className="row ">
              <div className="col-lg-6 ">
                <img src={RoiImage} alt="" className="w-100" />
              </div>
              <div className="col-lg-6 text-start  d-flex flex-column justify-content-center pe-0">
                {/* <div className="col-lg-6 text-end  d-flex flex-column justify-content-center"> */}
                <div className="">
                  {/* <div className=""> */}
                  <h2 className="fs-1 fontPoppinsRegular">
                    Get better ROI from your marketing.
                  </h2>
                </div>
                <div className="">
                  {/* <div className=""> */}
                  <p className="pt-3">
                    Discover all the ways that Analytics surfaces helpful
                    insights for a complete understanding of your customers —
                    from built-in automation and customized reporting, to
                    cross-platform attribution and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="complete-view-section h-5 wono-text-spacing fontPoppinsRegular topSpaceBetweenSections">
          {" "}
          <div className="container pe-0">
            <div className="row ">
              <div className="col-lg-6 text-start  d-flex flex-column justify-content-center">
                {/* <div className="col-lg-6 text-end  d-flex flex-column justify-content-center"> */}
                <div className="">
                  {/* <div className=""> */}
                  <h2 className="fontSizeCompleteView fontPoppinsRegular">
                    Get a complete view.
                  </h2>
                </div>
                <div className="">
                  {/* <div className=""> */}
                  <p className="pt-3">
                    Analytics helps you get a more complete understanding of how
                    your customers engage with your business so you can deliver
                    better experiences and drive results.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 pe-0">
                <img src={CompleteViewImage} alt="" className="w-100" />
              </div>
            </div>
          </div>
        </div>

        <div className="finer-points-section h-5 wono-text-spacing fontPoppinsRegular bottomSpaceBetweenSections">
          {" "}
          <div className="container pe-0">
            <div className="row ">
              <div className="col-lg-6 text-start  d-flex flex-column justify-content-center">
                {/* <div className="col-lg-6 text-end  d-flex flex-column justify-content-center"> */}
                <div className="">
                  {/* <div className=""> */}
                  <h2 className="fontSizeCompleteView fontPoppinsRegular">
                    The finer points.
                  </h2>
                </div>
                <div className="">
                  {/* <div className=""> */}
                  <p className="pt-3">
                    Analytics helps you understand how people use your sites and
                    apps, so you can take action to improve their experience.
                    Discover what Google Analytics can do by checking out the
                    features listed below.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 pe-0">
                <img src={FinerPointsImage} alt="" className="w-100" />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="leads-call-to-action h-5">Leads Call To Action</div> */}

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

        {/* <div
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
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="testimonial-section  body-partners-master">
          <div className=" pt-3">
            <br />
            <br />
            <br />
            <div className="container border-top border-dark border-3">
              <div className="row">
                <div className="col-lg-7 d-flex flex-column justify-content-between">
                  <div className=" border-bottom border-dark border-3">
                    <br />
                    <h3>
                      “We went from managing 3,000 sq ft to 50,000+ sq ft in the
                      most efficient and seamless manner with tech, processes,
                      data analytics, customer & employee management and due to
                      an extraordinary extended team like WoNo which integrated
                      with us and had no demands!”
                    </h3>
                    <br />
                    <br />
                  </div>
                  <div>
                    <h4 className="my-2">Kashif Shaikh</h4>
                    <p className="m-0">Co-founder & COO</p>
                    <p>BIZ Nest, Goa India </p>
                  </div>
                </div>
                <div className="col-lg-5 mt-3">
                  <img
                    src={BiznestTestimonial}
                    alt=""
                    className="custom-image-biznest"
                  />
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
          </div>
        </div> */}

        <div className="last-section body-partners-master w-100 fontPoppinsRegular">
          <div className="pt-5 customMargin pb-5">
            <div className="grow-your-business-color p-3">
              <h2>
                <b className="leadsCtafontSize">
                  Now that’s how we generate continues leads for you!
                </b>
              </h2>
              <br />

              <p className="last-spacing leadsCtaTextFont">
                This takes a lot of effort, time and patience … need to start
                soon!
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

export default LeadsPage;
