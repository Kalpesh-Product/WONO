import React, { useState } from 'react'
import axios from 'axios'
import '../styles/bodyHome.css'
import World_map from '../assets/World_map.svg'
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
import Slider from 'react-slick';
import { CustomNextArrow, CustomPrevArrow } from '../components/WebsiteBuilderArrows/CustomArrows'



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

    const handleSelect = (option) => {
        setSelectedOption(option);
      };


    const handleRegister = () => {
        navigate('/register');
    };

    const [showWebisteModal, setShowWebsiteModal] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [selectedItem, setSelectedItem] = useState('dashboard-booking');


    //Template objects

    const templates = [
        { id: 1, name: "Template 1", images: [Template1] },
        { id: 2, name: "Template 2", images: [Template2] },
        { id: 3, name: "Template 3", images: [Template3] },
    ];
    const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);

    const handleAfterChange = (index) => {
        setSelectedTemplate(templates[index]);
    };
    const templateSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay :true,
        dotsClass: 'home-website-slick-dots',
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        vertical: true,
        verticalSwiping: true,
        // afterChange: handleAfterChange,
        slidesToScroll: 1,
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
                    autoplay :true,
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

    const handleSubmit = async(event) => {
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
        if(valid){
        setToastMessage('Form submitted successfully!');
        setShowToast(true);

        if(name && email && number)
        {
            try{
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
            catch(error){
                console.error('There was an error sending the email!', error);

            }
        }
        }
    };

    const handleToggle = () => {
        setCollapsed(!collapsed);
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
    const handleMenuSelect = (menu) => {
        setSelectedItem(menu);
        // handleToggle(); 
    };


    return (
        <div className='master-container'>
            <div className='home-section'>
                <div className='home-item' style={{ position: 'relative' }}>
                    <div className='carousel-section'>
                        <div className='carousel-background'>
                            <Carousels image1={Carousel1} image2={Carousel2} image3={Carousel3} />
                            {/* <img src='src="https://via.placeholder.com/800x400"' /> */}
                        </div>
                    </div>
                    <div className='overlay-container'>
                        <div className='text-overlay'>
                            <h2 className='main-title'>
                                W<span className='O'>O</span>RLDS
                                N<span className='O'>O</span>MAD
                                C<span className='O'>O</span>MMUNITY
                            </h2>
                            <span className='home-desc'>The World’s only Nomad Community which is a curation of the best of platforms for Living & Working from Aspiring Destinations across the world.</span>
                            {/* <div style={{ display: 'flex', marginTop: '1rem' }} className='Nomads-list-bussiness' >
                        <p
                            style={{
                                fontFamily: 'Popins-Regular',
                                marginBottom: '1rem',
                                color: 'black',
                                borderRight: '1px solid #000',
                                marginRight: '0px',
                                padding: '1rem'
                            }} className='Nomad-List-Your-Bussiness login-button'
                        >
                            LOGIN
                        </p>
                        <span
                            style={{
                                fontFamily: 'Popins-Regular',
                                marginBottom: '1rem',
                                color: 'black',
                                marginRight: '0px',
                                padding: '1rem'
                            }} className='Nomad-List-Your-Bussiness register-button'
                        >
                            REGISTER
                        </span>
                    </div>
                     */}
                       <div className='login-registration' style={{marginTop:"20px"}}>
                          <Link to='/login'  className='login-button'>LOGIN</Link>
                          <button className='register-button' onClick={handleRegister}>REGISTER</button>
                      </div>
                    
                    
</div>
<div className='form-card'>
                    <div className='form-section '> 
                        <div className="container mt-4">
                            <form onSubmit={handleSubmit} className='needs-validation' noValidate>
                
                                {/* First Row */}
                                <div className="col-md-12">
                                    <div className="col-md-12 mb-3">
                                        
                                        <input
                                            type="text"
                                            className={`form-control ${isNameInvalid ? 'is-invalid':''}`}
                                            placeholder="Name"
                                            aria-label="name"
                                            id="validationCustom05"
                                            value={name}
                                            required
                                            onChange={(e)=>setname(e.target.value)}
                                            
                                        />
                                        <div className="invalid-feedback">
                                            Please provide a name
                                        </div>
     
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <input
                                            type="text"
                                            className={`form-control ${isEmailInvalid ? 'is-invalid':''}`}
                                            placeholder="Email"
                                            aria-label="email"
                                            id="validationCustom01"
                                            value={email}
                                            required
                                            onChange={(e)=>setEmail(
                                                e.target.value
                                            )}
                                        />
                                        <div className="invalid-feedback">
                                            Please provide an email
                                        </div>

                                            </div>
                                            <div className="col-md-12 mb-3">
                                                <input
                                                    type="text"
                                                    className={`form-control ${isMobileInvalid ? 'is-invalid' : ''}`}
                                                    placeholder="Mobile-number"
                                                    aria-label="mobile-number"
                                                    value={number}
                                                    required
                                                    onChange={(e) => setNumber(e.target.value)}
                                                />
                                                <div className="invalid-feedback">
                                                    Please provide a mobile number
                                                </div>

                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <div className="dropdown">
                                            <button
                                                className="btn  dropdown-toggle w-100"
                                                type="button"
                                                id="dropdownMenuButton"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                style={{border:"1px solid #e0e0e0",margin:"0",textAlign:"left"}}
                                                
                                                required
                                                
                                            >
                                               {selectedOption}
                                            </button>
                                            <div className="invalid-feedback">
                                            Please select one option
                                        </div>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{backgroundColor:'white'}}>
                                                <li><Link className="dropdown-item custom-dropdown-item" to="/" onClick={() => handleSelect('B2B Saas Technology Licensing')}>B2B Saas Technology Licensing</Link></li>
                                                <li><Link className="dropdown-item custom-dropdown-item" to="/" onClick={() => handleSelect('B2C Workation/Co-Working Booking')}>B2C Workation/Co-Working Booking</Link></li>
                                                <li><Link className="dropdown-item custom-dropdown-item" to="/" onClick={() => handleSelect('Landlord Partnership')}>Landlord Partnership</Link></li>
                                                <li><Link className="dropdown-item custom-dropdown-item" to="/" onClick={() => handleSelect('Investment Related')}>Investment Related</Link></li>
                                                <li><Link className="dropdown-item custom-dropdown-item" to="/" onClick={() => handleSelect('Coffee Meeting to know us better')}>Coffee Meeting to know us better</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="button_space">
                                    <button type="submit" className="submit-button">
                                        Connect
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
                    
                        <Toasts
                            position="top-end"
                            toastMessage={toastMessage}
                            show={showToast}
                            onClose={() => setShowToast(false)}
                        />

                </div>
            </div>

            <div className='Globe-N-Commerce' style={{ display: 'flex', backgroundColor: 'black', padding: '20px' }}>
              <div className='Globe' style={{ textAlign: 'left' }}>
                {/* <GlobeWithMarkers/> */}
                <img alt="Shopify Globe" src="https://cdn.shopify.com/b/shopify-brochure2-assets/9a8a27ff99bce89686730d3bc42b9bf4.png?width=636&amp;height=636, https://cdn.shopify.com/b/shopify-brochure2-assets/9a8a27ff99bce89686730d3bc42b9bf4.png x2" 
                ></img>  
              </div>
              <div className='N-Commerce'>
                <h3><strong>INTRODUCING N-COMMERCE</strong></h3>
                <p > ( “NOMAD COMMERCE” ) </p>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <a data-aos-delay="200" href="contact.html">PARTNER NOW</a>
                </div>
              </div>
            </div>
            <div className="backend-panel-container">
                <div className="backend-panel">

                            <div className="backend-panel-sidebar">
                                <div className="backend-sidebar-header">
                                    <div className="backend-sidebar-logo">
                                        <img src={WonoLogo} alt='' />
                                    </div>
                                </div>
                                {!collapsed && (
                                    <Nav id="backend-sidebar" className="flex-column p-0 backend-sidebar">
                                        <Nav.Link onClick={() => handleMenuSelect('dashboard-booking')}>
                                            Booking engine
                                        </Nav.Link>
                                        <Nav.Link onClick={() => handleMenuSelect('dashboard-tickets')}>
                                            Ticket Management
                                        </Nav.Link>
                                        <Nav.Link onClick={() => handleMenuSelect('dashboard-hr')}>
                                            HR Management
                                        </Nav.Link>
                                        <Nav.Link onClick={() => handleMenuSelect('dashboard-asset')}>
                                            Asset Management
                                        </Nav.Link>
                                        <Nav.Link onClick={() => handleMenuSelect('dashboard-products')}>
                                            Products
                                        </Nav.Link>
                                        <Nav.Link onClick={() => handleMenuSelect('dashboard-visitor')}>
                                            Visitor Management
                                        </Nav.Link>
                                    </Nav>
                                )}
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

            <div className="website-builder">
                <div className="website-builder-grid-1">
                    <Container className='template-container'>
                        <Slider {...templateSliderSettings}>
                            {templates.map((template, index) => (
                                <div className="template-slide" key={index}>
                                    <div
                                        className="template-card"
                                        onClick={() => handleTemplateClick(template)}
                                    >
                                        <img src={template.images[0]} alt={template.name} />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </Container>
                </div>
                <div className="website-builder-grid-2">
                    {selectedTemplate && selectedTemplate.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`${selectedTemplate.name} Image ${index + 1}`}
                            style={{ width: '100%', marginBottom: '10px' }}
                            className='template-content-image'
                        />
                    ))}
                </div>
            </div>

            {/* <div className="type-parent">
                <div className="type-grid-2">
                    <h2 style={{ textAlign: 'center' }}>FOR BUSINESSES</h2>
                    <hr></hr>
                    <div style={{ borderBottom: '1px solid black', padding: '1rem 0 1rem' }}>
                        <span>
                            Our Business2Business (B2B) Software As A Service (SaaS) Licensed tools are being developed post discussions with 100's of businesses who are trying to develop and evolve the Nomads & Remote Working Ecosystem via their own niche concepts in the most aspiring destinations of the world. We are currently in our BETA stage and are partnering and listening to everyone who wants to partner with us and we are provide them with our SaaS Tools FREE of Cost in our Testing Phase.
                        </span>
                    </div>
                    <div className="nomad-features">
                        <div className="nomad-1">
                            <img src={GlobalNomad} alt='nomad' /><br />
                            <span>Global nomadship</span>
                        </div>
                        <div className="nomad-2"><img src={GlobalNomad} alt='nomad' /><br /><span>Global nomadship</span></div>
                        <div className="nomad-3"><img src={GlobalNomad} alt='nomad' /><br /><span>Global nomadship</span></div>
                        <div className="nomad-4"><img src={GlobalNomad} alt='nomad' /><br /> <span>Global nomadship</span></div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className='view-all-underline'>
                            <span className='view-all'>VIEW ALL</span>
                            <hr style={{
                                margin: 0,
                                border: '4px solid #0875e2',
                                opacity: 1,
                                padding: 0
                            }}></hr>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className='world-map'>
                <div className="world-title">
                    <h2 style={{width:'100%',backgroundColor:"#000",color:"#fff"}}>FEATURES</h2>
                </div>
                <div className='image-space' >
                    <Homefeatures />
                </div>
            </div> */}

        </div>
    )
}

export default Homepage
