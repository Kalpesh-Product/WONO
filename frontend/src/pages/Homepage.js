import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import '../styles/bodyHome.css'
import RotatingGlobe from '../components/RotatingGlobe'
import { Link, useNavigate } from 'react-router-dom'
import Carousels from '../components/Carousels'
import Toasts from '../components/Toasts'
import Carousel1 from '../assets/WONO_images/img/hero-carousel/hero-carousel-1.webp'
import Carousel2 from '../assets/WONO_images/img/hero-carousel/hero-carousel-2.png'
import Carousel3 from '../assets/WONO_images/img/hero-carousel/hero-carousel-3.png'
import GlobalNomad from '../assets/WONO_images/img/icon_service/Birthday.webp'
import Homefeatures from '../components/Homefeatures'
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/componentStyle.css'
import { Modal, Button, Container, Row, Col, Nav } from 'react-bootstrap';
import WonoLogo from '../assets//WONO_images/img/WONO_LOGO_white _TP.png';
import WonoLogoBlack from '../assets//WONO_images/img/WONO_LOGO_Black_TP.png';
import Template1 from '../assets/WONO_images/img/website-builder/template-1.jpeg'
import Template1_2 from '../assets/WONO_images/img/website-builder/template-1-2.jpeg'
import Template1_3 from '../assets/WONO_images/img/website-builder/template-1-3.jpeg'
import Template1_4 from '../assets/WONO_images/img/website-builder/template-1-4.jpeg'
import Template2 from '../assets/WONO_images/img/website-builder/template-2.jpeg'
import Template2_2 from '../assets/WONO_images/img/website-builder/template-2-2.jpeg'
import Template2_3 from '../assets/WONO_images/img/website-builder/template-2-3.jpeg'
import Template2_4 from '../assets/WONO_images/img/website-builder/template-2-4.jpeg'
import Template3 from '../assets/WONO_images/img/website-builder/template-3.jpeg'
import Template3_2 from '../assets/WONO_images/img/website-builder/template-3-2.jpeg'
import Template3_3 from '../assets/WONO_images/img/website-builder/template-3-3.jpeg'
import Template3_4 from '../assets/WONO_images/img/website-builder/template-3-4.jpeg'
import DashboardBooking from './Dashboard-pages/DashboardBooking'
import DashboardAsset from './Dashboard-pages/DashboardAsset'
import DashboardHR from './Dashboard-pages/DashboardHR'
import DashboardTickets from './Dashboard-pages/DashboardTickets'
import DashboardVisitor from './Dashboard-pages/DashboardVisitor'
import DashboardProducts from './Dashboard-pages/DashboardProducts'
import GlobeWithMarkers from '../components/GlobeWithMarkers'
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import Slider from 'react-slick';
import { CustomNextArrow, CustomPrevArrow } from '../components/WebsiteBuilderArrows/CustomArrows'
import WebsiteCafe from './WebsiteBuilder/WebsiteCafe'
import WebsiteWorkation from './WebsiteBuilder/WebsiteWorkation'



const Homepage = () => {
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    //form fields on banner
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [isNameInvalid, setIsNameInvalid] = useState(false);
    const [isEmailInvalid, setIsEmailInvalid] = useState(false);
    const [isMobileInvalid, setIsMobileInvalid] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Type of partner');
    const [currentSlide, setCurrentSlide] = useState(0);

    //First section carousel

    const images = [Carousel1];


    const fadeVariants = {
        hidden: { opacity: 0.2 },
        visible: { opacity: 1 },
        exit: { opacity: 0.5 }
    };



    const handleSelect = (option) => {
        setSelectedOption(option);
    };


    const handleRegister = () => {
        navigate('/register');
    };
    const handleLogin = () => {
        navigate('/login');
    };

    const [showWebsiteModal, setShowWebsiteModal] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [selectedItem, setSelectedItem] = useState('dashboard-booking');
    const [selectedWeb, setSelectedWeb] = useState('website-cafe');
    const [selectedTemplate, setSelectedTemplate] = useState(null);


    //Template objects

    const templates = [
        { id: 1, name: "Template 1", images: [Template1] },
        { id: 2, name: "Template 2", images: [Template2] },
        { id: 3, name: "Template 3", images: [Template3] },
        { id: 4, name: "Template 4", images: [Template1_2] },
    ];


    const templateSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay: true,
        dotsClass: 'home-website-slick-dots',
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        // afterChange: handleAfterChange,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "20px",
        className: "center",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    autoplay: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const handleTemplateClick = (template) => {
        setSelectedTemplate(template);
        setShowWebsiteModal(true);
    };

    const handleClose = () => {
        setShowWebsiteModal(false);
        setSelectedTemplate(null);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        let valid = true;
        // Your form submission logic here
        // Set the message and show the Toast

        if (name.trim() === '') {
            setIsNameInvalid(true);
            valid = false

        } else {
            setIsNameInvalid(false);

        }

        if (email === '') {
            setIsEmailInvalid(true);
            valid = false

        } else {
            setIsEmailInvalid(false);

        }

        if (number.trim() === '') {
            setIsMobileInvalid(true);
            valid = false

        } else {
            setIsMobileInvalid(false);
        }
        if (valid) {
            setToastMessage('Form submitted successfully!');
            setShowToast(true);

            if (name && email && number) {
                try {
                    const response = await axios.post('http://localhost:5000/banner-email', {
                        name,
                        email,
                        number,
                        selectedOption
                    });
                    if (response.data.success) {
                        alert('Email sent successfully');
                    } else {
                        alert('Error sending email');
                    }

                    // Reset form
                    setname('');
                    setEmail('');
                    setNumber('');
                    setSelectedOption('Select an option');

                }
                catch (error) {
                    console.error('There was an error sending the email!', error);

                }
            }
        }
    };

    const handleToggle = () => {
        setCollapsed(!collapsed);
    };

    const menuTitles = {
        'dashboard-booking': 'Booking engine',
        'dashboard-products': 'Products',
        'dashboard-tickets': 'Ticket Management',
        'dashboard-hr': 'HR Management',
        'dashboard-visitor': 'Visitor Management',
        'dashboard-asset': 'Asset Management',
    };
    const website_menus = {
        'website-cafe': 'Cafe',
        'website-workation': 'Workation',
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
    const handleMenuSelect = (menu) => {
        setSelectedItem(menu);
    };
    const handleWebMenuSelect = (menu) => {
        setSelectedWeb(menu);
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


                        </div>
                    </div>
                    <div className="first-section-grid-item-2">
                        <h2>Register now</h2>
                        <button className='register-button' onClick={handleRegister}>REGISTER</button>
                    </div>
                </div>

            </div>

            <div className='Globe-N-Commerce' >
                <div className='Globe' style={{ textAlign: 'left' }}>
                    <Canvas camera={{ position: [0, 0, 20], fov: 40 }} className='globe3d'>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} />
                        <RotatingGlobe />
                        <OrbitControls enableZoom={false} />
                    </Canvas>
                </div>
                <div className='N-Commerce'>
                    <h3><strong>INTRODUCING N-COMMERCE</strong></h3>
                    <p > ( “NOMAD COMMERCE” ) </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <a data-aos-delay="200" href="contact.html">PARTNER NOW</a>
                    </div>
                </div>
            </div>

            <div className="backend-container-master" style={{ backgroundColor: 'white' }}>
                <div className="backend-panel-container">
                    <h2>SaaS platforms</h2>
                    <div className="backend-panel">
                        <div className="backend-panel-sidebar">
                            <div className="backend-sidebar-header">
                                <div className="backend-sidebar-logo">
                                    <img src={WonoLogoBlack} alt='' />
                                </div>
                            </div>
                            {!collapsed && (
                                <Nav id="backend-sidebar" className="flex-column p-0 backend-sidebar">
                                    {Object.keys(menuTitles).map((key) => (
                                        <Nav.Link key={key} onClick={() => handleMenuSelect(key)}>
                                            {menuTitles[key]}
                                        </Nav.Link>
                                    ))}
                                </Nav>
                            )}
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

                                        {renderContent()}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="website-container-master" style={{ backgroundColor: 'white' }}>
                <div className="website-panel-container">
                    <h2>SaaS platforms</h2>
                    <div className="website-panel">
                        <div className="website-panel-sidebar">
                            <div className="website-sidebar-header">
                                <div className="website-sidebar-logo">
                                    <img src={WonoLogoBlack} alt='' />
                                </div>
                            </div>
                            {!collapsed && (
                                <Nav id="website-sidebar" className="flex-column p-0 website-sidebar">
                                    {Object.keys(website_menus).map((key) => (
                                        <Nav.Link key={key} onClick={() => handleWebMenuSelect(key)}>
                                            {website_menus[key]}
                                        </Nav.Link>
                                    ))}
                                </Nav>
                            )}
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
                                        {renderWebContent()}
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
