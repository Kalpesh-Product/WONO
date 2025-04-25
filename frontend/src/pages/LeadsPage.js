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
import LeadsImagepng from "../assets/leads_images/leads-section-image-webp.webp";
import GoogleSheetsImage from "../assets/leads_images/google-sheets-image.webp";
import GoogleSheetsImagepng from "../assets/leads_images/google-sheets-image-webp.webp";
// import "../styles/bodyLastBanner.css";

// import TickmarkImg from "../assets/check.png";
import TickmarkImg from "../assets/blue-tick-no-bg-15.png";

import GoogleMyBusinessImage from "../assets/leads_images/google-my-business-image.webp";
import GoogleMapsImage from "../assets/leads_images/google-maps-logo.png";
import GoogleReviewsImage from "../assets/leads_images/google-reviews-logo.png";

import GoogleSeoImage from "../assets/leads_images/google-seo-logo.webp";
// import WebsiteImage from "../assets/leads_images/website-logo.png";
import WebsiteImage from "../assets/leads_images/website-logo.webp";
import LinkedinImage from "../assets/leads_images/linkedin-logo.png";

// import FacebookImage from "../assets/leads_images/facebook-logo.png";
import FacebookImage from "../assets/leads_images/facebook-logo.webp";
// import InstagramImage from "../assets/leads_images/instagram-logo.png";
import InstagramImage from "../assets/leads_images/instagram-logo.webp";
import FreeIntegrationsImage from "../assets/leads_images/free-integrations-icon.png";

import CrossPromotionsImage from "../assets/leads_images/cross-promotions-logo.png";
import DatabaseImage from "../assets/leads_images/database-icon.png";
import WhatsappImage from "../assets/leads_images/whatsapp-icon.png";

import RoiImage from "../assets/leads_images/roi.webp";
import CompleteViewImage from "../assets/leads_images/complete-view-image.webp";
import FinerPointsImage from "../assets/leads_images/finer-points-image.webp";

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
    window.scrollTo({ top: 0, behavior: "instant" });
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
        <div className="leads-heading-section  fontPoppinsRegular  topPaddingAboveFirstSection bottomPaddingBelowFirstSection">
          <h2 className="FFFF mt-2">
            Generate continuos structured leads for your business with the
            support of our automated platform and trained and experienced
            resources.
          </h2>

          <div>
            <div className="container p-0">
              {/* <div className="row  border-bottom border-dark border-3 pb-5 bg-primary"> */}
              <div className="row w-100 theSpecialRow">
                <div className="col-lg-9 col-md-9 ps-0">
                  <p className="automatedPlatformFontSize automatedPlatformPadding mb-0">
                   
                  </p>
                </div>
                {/* <div className="col-lg-4"></div> */}
                {/* <div className="col-lg-4 bg-danger"> */}
                <div className="col-lg-3 col-md-3  d-flex justify-content-lg-end justify-content-md-end justify-content-center justify-content-sm-center align-items-center SpecialPaddingX pe-0">
                  {/* <div className=""> */}
                  <button
                    // className="get-started-submit-button mb-0"
                    className="get-started-main-button mt-4 mb-0 hover:"
                    onClick={handleRegister}
                  >
                    Get Started
                  </button>
                  {/* </div> */}
                </div>
              </div>
              <br />
              {/* <hr /> */}
            </div>
          </div>
        </div>

        <div className="leads-image-section  fontPoppinsRegular ">
          <img src={LeadsImagepng} alt="" className="full-width-image" />
        </div>

        <div className="organic-leads-section container  topPaddingForSections bottomPaddingForSections  fontPoppinsRegular">
          {/* <br /> */}
          {/* <br /> */}
          <div className="extraBottomSpaceOurCoreFocus">
            <h2 className="googleSheetsHeading">
              Our core focus is to generate ORGANIC LEADS!
            </h2>
            <h2 className="googleSheetsHeading">With NO INVESTMENTS!</h2>
          </div>
          {/* <br /> */}
          <div className="bottom-container row">
            <div className="checklist col-lg-4">
              <div className="h-100">
                <p className="card-text h-100 d-flex flex-column justify-content-between checklistFont">
                  <div className="Tickmark-text">
                    {/* <img src={TickmarkImg} alt="tick-mark"></img> */}
                    <span className="wonoColor fw-bold">✔&nbsp;</span>
                    Google My Business
                  </div>
                  <div className="Tickmark-text">
                    {/* <img src={TickmarkImg} alt="tick-mark"></img> */}
                    <span className="wonoColor fw-bold">✔&nbsp;</span>
                    Google Maps
                  </div>
                  <div className="Tickmark-text">
                    {/* <img src={TickmarkImg} alt="tick-mark"></img> */}
                    <span className="wonoColor fw-bold">✔&nbsp;</span>
                    Google Reviews
                  </div>
                  <div className="Tickmark-text">
                    {/* <img src={TickmarkImg} alt="tick-mark"></img> */}
                    <span className="wonoColor fw-bold">✔&nbsp;</span>
                    Google SEO
                  </div>
                  <div className="Tickmark-text">
                    {/* <img src={TickmarkImg} alt="tick-mark"></img> */}
                    <span className="wonoColor fw-bold">✔&nbsp;</span>
                    Website
                  </div>
                  <div className="Tickmark-text">
                    {/* <img src={TickmarkImg} alt="tick-mark"></img> */}
                    <span className="wonoColor fw-bold">✔&nbsp;</span>
                    LinkedIn
                  </div>
                  <div className="Tickmark-text">
                    {/* <img src={TickmarkImg} alt="tick-mark"></img> */}
                    <span className="wonoColor fw-bold">✔&nbsp;</span>
                    Facebook
                  </div>
                  <div className="Tickmark-text">
                    {/* <img src={TickmarkImg} alt="tick-mark"></img> */}
                    <span className="wonoColor fw-bold">✔&nbsp;</span>
                    Instagram
                  </div>
                  <div className="Tickmark-text">
                    {/* <img src={TickmarkImg} alt="tick-mark"></img> */}
                    <span className="wonoColor fw-bold">✔&nbsp;</span>
                    Free Integrations
                  </div>
                  <div className="Tickmark-text">
                    {/* <img src={TickmarkImg} alt="tick-mark"></img> */}
                    <span className="wonoColor fw-bold">✔&nbsp;</span>
                    Cross Promotions
                  </div>
                  <div className="Tickmark-text">
                    {/* <img src={TickmarkImg} alt="tick-mark"></img> */}
                    <span className="wonoColor fw-bold">✔&nbsp;</span>
                    Database
                  </div>
                  <div className="Tickmark-text">
                    {/* <img src={TickmarkImg} alt="tick-mark"></img> */}
                    <span className="wonoColor fw-bold">✔&nbsp;</span>
                    WhatsApp
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
                    {/* <div className="WidthHeight2"> */}
                    <img
                      src={GoogleMyBusinessImage}
                      alt="tick-mark"
                      className="WidthHeight1"
                    ></img>
                    {/* </div> */}
                  </div>
                  <div className="top-second">
                    {" "}
                    <img
                      src={GoogleMapsImage}
                      alt="tick-mark"
                      className="WidthHeight1"
                    ></img>
                  </div>
                  <div className="top-third">
                    {/* <div className="CenterElement WidthHeight2"> */}
                    <img
                      src={GoogleSeoImage}
                      alt="tick-mark"
                      // className="smallerImageWidthHeight"></img>
                      className="widthHeight5"
                    ></img>
                    {/* </div> */}
                  </div>
                  <div className="top-fourth">
                    {/* <div className="CenterElement WidthHeight2"> */}
                    <img
                      src={FacebookImage}
                      alt="tick-mark"
                      // className="smallerImageWidthHeight"></img>
                      className="WidthHeight1"
                    ></img>
                    {/* </div> */}
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
                      className="WidthHeight3"
                    ></img>
                  </div>
                  <div className="middle-second">
                    {" "}
                    <img
                      src={GoogleReviewsImage}
                      alt="tick-mark"
                      className="WidthHeight3"
                    ></img>
                  </div>
                  <div className="middle-third">
                    {" "}
                    <img
                      src={LinkedinImage}
                      alt="tick-mark"
                      className="WidthHeight3"
                    ></img>
                  </div>
                  <div className="middle-fourth">
                    {" "}
                    <img
                      src={DatabaseImage}
                      alt="tick-mark"
                      className="WidthHeight1 leads-databseImage"
                    ></img>
                  </div>
                </div>
                {/* <div className="img-row-3  d-flex flex-row justify-content-around align-items-center w-100"> */}
                <div className="img-row-3  d-flex flex-row justify-content-between align-items-center w-100">
                  {/* <div className="img-row-3  d-flex flex-row justify-content-center align-items-center"> */}
                  <div className="bottom-first">
                    {/* <div className="CenterElement WidthHeight2"> */}
                    <img
                      src={InstagramImage}
                      alt="tick-mark"
                      // className="smallerImageWidthHeight"></img>
                      className="widthHeight4"
                    ></img>
                    {/* </div> */}
                  </div>
                  <div className="bottom-second">
                    {/* <div className="CenterElement WidthHeight2"> */}
                    <img
                      src={FreeIntegrationsImage}
                      alt="tick-mark"
                      // className="smallerImageWidthHeight"></img>
                      className="WidthHeight1"
                    ></img>
                    {/* </div> */}
                  </div>
                  <div className="bottom-third">
                    {" "}
                    <img
                      src={CrossPromotionsImage}
                      alt="tick-mark"
                      className="WidthHeight3"
                    ></img>
                  </div>
                  <div className="bottom-fourth">
                    {" "}
                    <img
                      src={WhatsappImage}
                      alt="tick-mark"
                      className="WidthHeight1"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="organic-leads-image"></div>
          </div>
        </div>

        {/* <div className="google-sheets-section fontPoppinsRegular spaceBetweenSections"> */}
        <div className="google-sheets-section fontPoppinsRegular   topPaddingForSections bottomPaddingForSections">
          <div>
            <div className="pb-4">
              <h2 className="googleSheetsHeading">
                Automated Google LEAD SHEET!
              </h2>
              <h2 className="googleSheetsHeading mb-0">
                Never miss any leads generated from our platform.
              </h2>
            </div>
            <div className="organic-leads-images-section OOOO  topSpaceBetweenSections h-[16rem] overflow-hidden rounded-lg">
              <img
                src={GoogleSheetsImagepng}
                alt=""
                className="full-width-image h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="marketing-section PPPP  fontPoppinsRegular  topPaddingForSections bottomPaddingForSections">
          <div className="marketing-header">
            {/* <div>
              <p className="mb-0">RUN & SCALE YOUR BUSINESS</p>
            </div> */}
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
                {/* <div className="container mb-3 pe-0 border-bottom border-secondary"> */}
                <div className="container pb-3 pe-0 border-bottom border-secondary">
                  {/* <div className="row  border-bottom border-dark border-3 pb-5 bg-primary"> */}
                  <div className="row ">
                    <div className="col-lg-4 ps-0">
                      <p className="mb-0">RUN & SCALE YOUR BUSINESS</p>
                      <h2 className="fs-1 pt-2">Marketing</h2>
                    </div>
                    <div className="col-lg-4"></div>
                    {/* <div className="col-lg-4 bg-danger"> */}
                    <div className="col-lg-4 d-flex justify-content-lg-end justify-content-md-center justify-content-center justify-content-sm-center align-items-center pe-0">
                      {/* <div className="">
                        <button
                          className="get-started-submit-button "
                          onClick={handleRegister}>
                          Get Started
                        </button>
                      </div> */}

                      <button
                        className="get-started-main-button mt-4 "
                        onClick={handleRegister}
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                  {/* <br /> */}
                  {/* <hr /> */}
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
                <h2 className="fs-4">Analytics</h2>
                <p>
                  Get reports with actionable insights and data about your site
                  and marketing activities.
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
              <div className=" individual-card">
                <h2 className="fs-4">Google Business Profile</h2>
                <p>
                  Attract the right customers and boost credibility by managing
                  your business’s presence on Google Maps, Search and more.
                </p>
              </div>
              <div className=" individual-card individual-card-front individual-card-last-row-no-bottom-spacing">
                <h2 className="fs-4">Facebook & Instagram Ads</h2>
                <p>
                  Launch targeted ad campaigns on Facebook and Instagram to
                  generate leads and drive traffic.
                </p>
              </div>
              <div className=" individual-card individual-card-last-row-no-bottom-spacing">
                <h2 className="fs-4">Marketing integrations</h2>
                <p>
                  Connect tools such as Google Analytics and Facebook Pixel and
                  CAPI to get insights on site traffic, visitor behavior and
                  more.
                </p>
              </div>
              <div className=" individual-card individual-card-last-row-no-bottom-spacing">
                <h2 className="fs-4">Social media marketing</h2>
                <p>
                  Design, schedule, and easily share your content across
                  multiple platforms to boost engagement.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="CenterElement zeroHeight">
          <hr className="hrStyling zeroHeight" />
        </div>

        <div className="better-roi-section PPPP wono-text-spacing fontPoppinsRegular topPaddingInsideSections bottomPaddingForSections">
          <div className="container px-0">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2">
                <img src={RoiImage} alt="" className="w-full" />
              </div>
              <div className="w-full lg:w-1/2 text-start flex flex-col justify-center pe-0">
                <div>
                  <h2 className="ROIFontSize fontPoppinsRegular m-0">
                    Get better ROI from your marketing.
                  </h2>
                </div>
                <div>
                  <p className="topPaddingInsideSections pFontAdjustment">
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

        <div className="CenterElement zeroHeight">
          <hr className="hrStyling zeroHeight" />
        </div>

        <div className="better-roi-section PPPP wono-text-spacing fontPoppinsRegular topPaddingInsideSections bottomPaddingForSections">
          <div className="container px-0">
            <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 text-start flex flex-col justify-center pe-0">
                <div>
                  <h2 className="ROIFontSize fontPoppinsRegular m-0">
                  Get a complete view.
                  </h2>
                </div>
                <div>
                  <p className="topPaddingInsideSections pFontAdjustment">
                  Analytics helps you get a more complete understanding of how
                    your customers engage with your business so you can deliver
                    better experiences and drive results.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <img src={CompleteViewImage} alt="" className="w-full" />
              </div>
         
            </div>
          </div>
        </div>

        <div className="CenterElement zeroHeight">
          <hr className="hrStyling zeroHeight" />
        </div>

        <div className="better-roi-section PPPP wono-text-spacing fontPoppinsRegular topPaddingInsideSections bottomPaddingForSections">
          <div className="container px-0">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2">
                <img src={FinerPointsImage} alt="" className="w-full" />
              </div>
              <div className="w-full lg:w-1/2 text-start flex flex-col justify-center pe-0">
                <div>
                  <h2 className="ROIFontSize fontPoppinsRegular m-0">
                  The finer points.
                  </h2>
                </div>
                <div>
                  <p className="topPaddingInsideSections pFontAdjustment">
                  Analytics helps you understand how people use your sites and
                    apps, so you can take action to improve their experience.
                    Discover what Google Analytics can do by checking out the
                    features listed below.
                  </p>
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
