import React, { useState, useRef } from 'react'
import '../styles/bodyHome.css'
import RotatingGlobe from '../components/RotatingGlobe'
import { useNavigate } from 'react-router-dom'
import Carousel1 from '../assets/WONO_images/img/hero-carousel/hero-carousel-1.webp'
// import Carousel2 from '../assets/WONO_images/img/hero-carousel/hero-carousel-2.png'
// import Carousel3 from '../assets/WONO_images/img/hero-carousel/hero-carousel-3.png'
// import GlobalNomad from '../assets/WONO_images/img/icon_service/Birthday.webp'
import { motion, AnimatePresence } from "framer-motion";
import "../styles/componentStyle.css";
import { Nav } from "react-bootstrap";
// import WonoLogo from '../assets//WONO_images/img/WONO_LOGO_white _TP.png';
// import WonoLogoBlack from '../assets//WONO_images/img/WONO_LOGO_Black_TP.png';
import BiznestLogo from '../assets/BIZNest/biznest_logo.jpg'
import CafeImage from '../assets/WONO_images/img/website-builder/new-layout/cafe.png'
import CoWorkingImage from '../assets/WONO_images/img/website-builder/new-layout/co-working.png'
import Hostels from '../assets/WONO_images/img/website-builder/new-layout/hostels.png'
import CoLivingImage from '../assets/WONO_images/img/website-builder/new-layout/co-living.png'
import CafeImageLong from '../assets/WONO_images/img/website-builder/new-layout/long/cafe-long.jpeg'
import CoWorkingImageLong from '../assets/WONO_images/img/website-builder/new-layout/long/co-working-long.jpeg'
import BoutiqueLong from '../assets/WONO_images/img/website-builder/new-layout/long/boutique-long.jpeg'
import CoLivingImageLong from '../assets/WONO_images/img/website-builder/new-layout/long/co-living-long.jpeg'
import Boutique from '../assets/WONO_images/img/website-builder/new-layout/boutique.png'
import DashboardBooking from './Dashboard-pages/DashboardBooking'
import DashboardAsset from './Dashboard-pages/DashboardAsset'
import DashboardHR from './Dashboard-pages/DashboardHR'
import DashboardTickets from './Dashboard-pages/DashboardTickets'
import DashboardVisitor from './Dashboard-pages/DashboardVisitor'
import DashboardProducts from './Dashboard-pages/DashboardProducts'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
// import { CustomNextArrow, CustomPrevArrow } from '../components/WebsiteBuilderArrows/CustomArrows'
import FourCardsComponents from "../components/Four_cardsComponents";
import WebsiteCafe from "./WebsiteBuilder/WebsiteCafe";
import WebsiteWorkation from "./WebsiteBuilder/WebsiteWorkation";
import "../styles/bodyPartners.css";
import BiznestTestimonial from "../assets/testimonials/BIZ Nest Testimonial.png";

const Homepage = () => {


  const menuTitles = {
    'dashboard-booking': 'Booking engine',
    'dashboard-tickets': 'Ticket Management',
    'dashboard-hr': 'HR Management',
  };
  const website_menus = {
    'website-cafe': 'Cafe',
    'website-workation': 'Workation',
  };
  const containerRef = useRef(null);
  const navigate = useNavigate();
  // const [collapsed, setCollapsed] = useState(false);
  const firstBackendKey = Object.keys(menuTitles)[0];
  const [selectedItem, setSelectedItem] = useState('dashboard-booking');
  const firstWebKey = Object.keys(website_menus)[0];
  const [selectedWeb, setSelectedWeb] = useState('website-cafe');
  const [selectedMenuItem, setSelectedMenuItem] = useState(firstBackendKey);
  const [selectedMenu, setSelectedMenu] = useState(firstWebKey);
  const [selectedId, setSelectedId] = useState(null);

  //First section carousel

  const images = [Carousel1];
  const webimages = [
    { id: 'cafe', src: CafeImage, alt: 'Cafe Image' },
    { id: 'coworking', src: CoWorkingImage, alt: 'CoWorking Image' },
    { id: 'coliving', src: CoLivingImage, alt: 'CoLiving Image' },
    { id: 'boutique', src: Boutique, alt: 'Boutique Image' },
  ];

  const webimagesClicked = [
    { id: 'cafe', src: CafeImageLong, alt: 'Cafe Image' },
    { id: 'coworking', src: CoWorkingImageLong, alt: 'CoWorking Image' },
    { id: 'coliving', src: CoLivingImageLong, alt: 'CoLiving Image' },
    { id: 'boutique', src: BoutiqueLong, alt: 'Boutique Image' },
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
      case 'dashboard-booking':
        return <DashboardBooking />;
      case 'dashboard-products':
        return <DashboardProducts />;
      case 'dashboard-tickets':
        return <DashboardTickets />;
      case 'dashboard-hr':
        return <DashboardHR />;
      case 'dashboard-visitor':
        return <DashboardVisitor />;
      case 'dashboard-asset':
        return <DashboardAsset />;
      default:
        return <DashboardBooking />;
    }
  };
  const renderWebContent = () => {
    switch (selectedWeb) {
      case 'website-cafe':
        return <WebsiteCafe />;
      case 'website-workation':
        return <WebsiteWorkation />;
      default:
        return <WebsiteWorkation />;
    }
  };
  const handleMenuSelect = (key) => {
    setSelectedItem(key);
    setSelectedMenuItem(key)
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const handleWebMenuSelect = (key) => {
    setSelectedWeb(key);  // Set the key as the selected web content
    setSelectedMenu(key); // Highlight the selected menu item

  };



  // mobile screen for globe responsiveness
  const ismobile = window.innerWidth < 769;

  return (
    <div className='master-container'>
      <div className='home-section'>
        <div className="home-page-container">
          <div className="background-div">
            <div>
              <img
                src={images[0]}
                alt={`Slide`}
                className="background-image"
              />
            </div>
            <div className="black-overlay"></div>
          </div>
          <div className="first-section-grid-item-1">
            <h2 className='home-main-title'>
              <span className='w'> W</span><span className='O'>O</span>RLD
              <span className='n'>N</span><span className='O'>O</span>MADS<br />
            </h2>

          </div>
          <div className="first-section-grid-item-2">
            <span className='home-desc'>
              We support Nomad Businesses for FREE!
              World’s Largest b2b SaaS platform which supports Nomad Lifestyle across 25+ countries !
            </span>
            <div className='home-section-buttons'>
              <div>
                <button className='home-section-register-button' onClick={handleRegister}>BUSINESS SIGN UP</button>
              </div>

            </div>
          </div>
        </div>

        <div className="Globe-N-Commerce">
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
        </div>
        <div
          className="four-cards-section">
          <FourCardsComponents />
        </div>

        <div className="partners-section body-partners-master">
          <div className="mt-5">
            {/* First div (1/2) */}
            <div className="">
              <div className="customMargin_top">
                <div>

                  <h2>One Partner Platform,</h2>
                  <h2>Infinite possibilities and opportunities!</h2>
                </div>
              </div>
            </div>
            <br />
            {/* <div className="bg-info pt-3 m-5"> */}
            <div className="container  text-left">
              <div className="row">
                <div className="col-lg-4 col-sm-12 col-xs-12 col-md-6 text-left">
                  <div className="m-1 border-top border-dark border-3">
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
                  <div className="m-1 border-top border-dark border-3">
                    <br />
                    <h3>Internal Systems & Processes</h3>
                    <br />
                    <p>
                      Our SaaS platform has everything covered for your business
                      requirements and we customize ourselves as per your needs.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 col-xs-12 col-md-6 text-left">
                  <div className="m-1 border-top border-dark border-3">
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
              </div>
              {/* <div className='four-cards-section' style={{ padding: "0", marginBottom: "-60px", marginTop: "20px" }}>
                <FourCardsComponents />
            </div> */}
            </div>
            {/* </div> */}
            <div className="">
              <div className="container my-3">
                <div className="row  border-bottom border-dark border-3 pb-5">
                  <div className="col-lg-4"></div>
                  <div className="col-lg-4"></div>
                  {/* <div className="col-lg-4 bg-danger"> */}
                  <div className="col-lg-4  d-flex justify-content-center align-items-center">
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
          </div>
          <br />
          <br />
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

        <div className="website-container-master" style={{ backgroundColor: 'black' }}>
          <div className="website-panel-container">
            <div className="website-panel-header">

              <h2>SELF-SERVE TRANSACTIONAL WEBSITE: FULL STACK!</h2>
              <h3>Tech that completes your business and has ZERO dependency with NO COST!</h3>
              <p>Free customizable website templates which are strategically tailored for managing Lifestyle Businesses like Co-Working, Co-Living, Hostels, Boutique Properties, Cafes
                etc</p>
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
              <div className={`website-panel-right ${selectedId ? 'modal-open' : ''}`}>
                <div className="website-panel-content">
                  {webimages.map((image) => (
                    <motion.div
                      className="template-preview-container"
                      key={image.id}
                      layoutId={image.id}
                      onClick={() => handleImageClick(image.id)}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.img src={image.src} alt={image.alt} />
                    </motion.div>
                  ))}
                </div>

                <AnimatePresence>
                  {selectedId && (
                    <>
                      {/* Backdrop Layer */}
                      <motion.div
                        className="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                      />
                      <motion.div
                        layoutId={selectedId}
                        className="selected-image-modal"
                        initial={{ opacity: 0, scale: 0.8 }} // Start smaller with opacity 0
                        animate={{ opacity: 1, scale: 1 }}  // Animate to full size and full opacity
                        exit={{ opacity: 0, scale: 0.8 }}    // Shrink and fade out on exit
                        transition={{ duration: 0.3 }}       // Adjust timing for smoother transition
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'end',
                            width: '100%',
                          }}
                        >
                          <motion.button
                            className="close-button"
                            onClick={() => setSelectedId(null)}
                          >
                            Close
                          </motion.button>
                        </div>
                        <motion.img
                          src={webimagesClicked.find((img) => img.id === selectedId).src}
                          alt={webimagesClicked.find((img) => img.id === selectedId).alt}
                        />
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial-section  body-partners-master">
          <div className=" mt-3">
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
                      data analytics, customer & employee management and due to an
                      extraordinary extended team like WoNo which integrated with
                      us and had no demands!”
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
        </div>

        <div className="last-section body-partners-master w-100 ">
          <div className="pt-5 customMargin">
            <div className="grow-your-business-color p-3">
              <h2>GROW YOUR BUSINESS WITH US</h2>
              <br />

              <p>
                We have you covered across … build website, manage bookings, sets
                processes, HR support, task management, ticket management,
                marketing, generating leads, accounting, finance, customer
                support, fundraising, and any customized requirements for managing
                your business to grow and become successful shall all be delivered
                by WoNo.
              </p>
              <div className="partner-button-space">
                <button
                  className="partner-submit-button "
                  onClick={handleRegister}>
                  Get Started
                </button>

              </div>
              <div className="">
                <div className="container my-3">
                  <div className="row">
                    {/* <div className="col-lg-4 bg-danger"> */}
                    <div className="col-lg-12  d-flex custom-justify align-items-center">

                    </div>
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
