import React, { useState, useRef } from 'react'
import '../styles/bodyHome.css'
import RotatingGlobe from '../components/RotatingGlobe'
import {  useNavigate } from 'react-router-dom'
import Carousel1 from '../assets/WONO_images/img/hero-carousel/hero-carousel-1.webp'
// import Carousel2 from '../assets/WONO_images/img/hero-carousel/hero-carousel-2.png'
// import Carousel3 from '../assets/WONO_images/img/hero-carousel/hero-carousel-3.png'
// import GlobalNomad from '../assets/WONO_images/img/icon_service/Birthday.webp'
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/componentStyle.css'
import { Nav } from 'react-bootstrap';
// import WonoLogo from '../assets//WONO_images/img/WONO_LOGO_white _TP.png';
// import WonoLogoBlack from '../assets//WONO_images/img/WONO_LOGO_Black_TP.png';
import BiznestLogo from '../assets/BIZNest/biznest_logo.jpg'
// import Template1 from '../assets/WONO_images/img/website-builder/template-1.jpeg'
// import Template1_2 from '../assets/WONO_images/img/website-builder/template-1-2.jpeg'
// import Template1_3 from '../assets/WONO_images/img/website-builder/template-1-3.jpeg'
// import Template1_4 from '../assets/WONO_images/img/website-builder/template-1-4.jpeg'
// import Template2 from '../assets/WONO_images/img/website-builder/template-2.jpeg'
// import Template2_2 from '../assets/WONO_images/img/website-builder/template-2-2.jpeg'
// import Template2_3 from '../assets/WONO_images/img/website-builder/template-2-3.jpeg'
// import Template2_4 from '../assets/WONO_images/img/website-builder/template-2-4.jpeg'
// import Template3 from '../assets/WONO_images/img/website-builder/template-3.jpeg'
// import Template3_2 from '../assets/WONO_images/img/website-builder/template-3-2.jpeg'
// import Template3_3 from '../assets/WONO_images/img/website-builder/template-3-3.jpeg'
// import Template3_4 from '../assets/WONO_images/img/website-builder/template-3-4.jpeg'
import DashboardBooking from './Dashboard-pages/DashboardBooking'
import DashboardAsset from './Dashboard-pages/DashboardAsset'
import DashboardHR from './Dashboard-pages/DashboardHR'
import DashboardTickets from './Dashboard-pages/DashboardTickets'
import DashboardVisitor from './Dashboard-pages/DashboardVisitor'
import DashboardProducts from './Dashboard-pages/DashboardProducts'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
// import { CustomNextArrow, CustomPrevArrow } from '../components/WebsiteBuilderArrows/CustomArrows'
import FourCardsComponents from '../components/Four_cardsComponents'
import WebsiteCafe from './WebsiteBuilder/WebsiteCafe'
import WebsiteWorkation from './WebsiteBuilder/WebsiteWorkation'



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

    //First section carousel

    const images = [Carousel1];


    const handleRegister = () => {
        navigate('/register');
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
                return <WebsiteCafe />;
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
                            <span className='w'> W</span><span className='O'>O</span>RLDS<br />
                            <span className='n'>N</span><span className='O'>O</span>MAD<br />
                        </h2>
                        <span className='home-desc'>
                            The World’s only Nomad Community which is a curation of the best of platforms
                            for Living & Working from Aspiring Destinations across the world.
                        </span>
                        <div className='home-section-buttons'>
                        <div> 
                        <button className='register-button' onClick={handleRegister}>REGISTER</button>
                       </div>

                        </div>
                    </div>
                    <div className="first-section-grid-item-2">
                       <div style={{ borderRadius:'20px', marginTop:'20rem',width:'100%',textAlign:'center',paddingRight:'3rem'}}> 
                        <button style={{width:'80%', margin:'0', borderRadius:'20px'}} className='register-button' onClick={handleRegister}>REGISTER</button>
                       </div>
                    </div>
                </div>

            </div>

            <div className='Globe-N-Commerce' >
                <div className='Globe' style={{ textAlign: 'left' }}>
                    <Canvas camera={{ position: [0, 0, 25], fov: 40 }} className='globe3d' >
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} />
                        <RotatingGlobe />
                        <OrbitControls enableZoom={false}
                        minPolarAngle={Math.PI/3}
                        maxPolarAngle={2 * Math.PI / 3}/>
                    </Canvas>
                </div>
                <div className='N-Commerce'>
                    <h3><strong>INTRODUCING N-COMMERCE</strong></h3>
                    <p > ( “NOMAD COMMERCE” ) </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <button className='hero-button' data-aos-delay="200" onClick={()=>{
                            navigate('/register')
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                            }}>PARTNER NOW</button>
                    </div>
                </div>
            </div>
            <div className='four-cards-section' style={{padding: "0",marginBottom:"-60px",marginTop: "20px"}}>
                <FourCardsComponents/>
            </div>

            <div className="backend-container-master" style={{ backgroundColor: 'white' }}>
                <div ref={containerRef} className="backend-panel-container">
                    <h2>SaaS platforms</h2>
                    <div className="backend-panel">
                        <div className="backend-panel-sidebar">
                            <div className="backend-sidebar-header">
                                <div className="backend-sidebar-logo">
                                    <img src={BiznestLogo} alt='' />
                                </div>
                            </div>
                            
                                <Nav id="backend-sidebar" className="flex-column p-0 backend-sidebar">
                                    {Object.keys(menuTitles).map((key) => (
                                        <Nav.Link 
                                        key={key} 
                                        onClick={() => handleMenuSelect(key)}
                                        className={selectedMenuItem === key ? 'active' : ''}
                                        >
                                            
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
                                        transition={{ duration: 0.2 }}
                                    >

                                        {renderContent(selectedMenuItem)}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="website-container-master" style={{ backgroundColor: 'black' }}>
                <div className="website-panel-container">
                    <h2>Personalized template solutions</h2>
                    <div className="website-panel">
                        <div className="website-panel-sidebar">
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
                          
                        </div>
                        <div className="website-panel-right">
                            <div className="website-panel-header">
                            <h3>{website_menus[selectedWeb]}</h3>
                            </div>
                            <div className="website-panel-content">

                                <AnimatePresence>
                                    <motion.div
                                        key={selectedWeb}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {renderWebContent(selectedWeb)}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Homepage
