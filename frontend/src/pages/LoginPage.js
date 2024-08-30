import React, { useState, useContext } from 'react';
import '../styles/bodyLogin.css';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { UserContext } from '../components/UserContext';
import Modals from '../components/Modals';
import axios from 'axios';
import Carousels from '../components/Carousels'
import Batman from '../assets/batman.png'
import Spiderman from '../assets/spiderman.png'
// import "../styles/slick-style/slick.css";
// import "../styles/slick-style/slick-theme.css";
import Slider from "react-slick";
import BookingEngine from '../assets/WONO_images/img/booking_engine_login.png'


const LoginPage = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [error, setError] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [userNameError, setUserNameError] = useState('');
    const [showModal, setShowModal] = useState(false); // Control modal visibility
    const [modalTitle, setModalTitle] = useState('Error'); // Modal title
    const [modalMessage, setModalMessage] = useState('');
    axios.defaults.withCredentials = true;

    const settings = {
        dots: true,
        infinite: true,
        dotsClass: 'login-slick-dots',
        prevArrow: <div className="login-slick-prev" />,
        nextArrow: <div className="login-slick-next" />,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        // username validation using regex
        const usernameRegex = /^.{2,}$/; // At least 2 characters long
        if (!usernameRegex.test(username)) {
            setModalTitle('Invalid Username');
            setModalMessage('Enter a valid username');
            setShowModal(true); // Show the modal for the error
            return; // Exit the function if the username is invalid
        }

        try {
            const response = await axios.post('http://localhost:5000/login', {
        username,
        password
      });

      const { user } = response.data;
      setUser(user);
      navigate('/dashboard');
        } catch (error) {
            setModalTitle('Login Failed');
            setModalMessage('Invalid username or password');
            setShowModal(true); // Show the modal for the error
            console.error('Login Failed:', error);
        }

        setUserName('');
        setPassword('');
    };

    

    const handleUsernameChange = (e) => {
        const value = e.target.value;
        setUserName(value);
    
        // Username validation using regex (at least 2 characters long)
        const usernameRegex = /^.{2,}$/; // At least 2 characters
        if (!usernameRegex.test(value)) {
            setUserNameError('Enter a valid username');
        } else {
            setUserNameError(''); // Clear error if username is valid
        }
    }

    const handleLoginSuccess = (credentialResponse) => {
        const decoded = jwtDecode(credentialResponse?.credential);
        setUser(decoded); // Set the user's profile information
        console.log(decoded);
        navigate('/dashboard'); // Redirect after successful login
    };

    const handleLoginError = () => {
        console.log('Login Failed');
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="login-container">
            <div className="login-left-container">
            <h2 className="text-center mb-4">Login to your account</h2>
            <form className='loginForm' onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Username"
                                    aria-label="username"
                                    value={username}
                                    onChange={handleUsernameChange}  // Updated onChange handler
                                    required
                                />
                                {username && userNameError && <div className="text-danger">{userNameError}</div>}
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    aria-label="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <div className="forgot-password" style={{textAlign:'end', marginBottom:8}}>
                                    <span style={{cursor:'pointer'}} onClick={()=>navigate('/forgot-password')}>Forgot passoword</span>
                                </div>
                                <button type="submit" className="login-page-button w-100">
                                    Log-in
                                </button>
                            </div>
                            <div className="text-center mt-3">
                                <span>Don't have an account? <a href="/register" className="text-primary">Register</a></span>
                            </div>
                        </form>
            </div>

            <div className="login-right-container">
            <div className="container">
                <div className="login-carousel-container">
                    <Slider {...settings}>
                        <div className='login-carousel-item'>
                            
                            <img  src={Batman} alt="Slide 1" />
                        </div>
                        <div className='login-carousel-item'>
                            <img  src={Spiderman} alt="Slide 2" />
                        </div>
                        <div className='login-carousel-item'>
                        <h1>Booking Engine</h1>
                            <img src={BookingEngine} alt="Slide 3" />
                        </div>
                    </Slider>
                </div>
                
            </div>
        </div>
            <Modals 
                show={showModal} 
                handleClose={handleCloseModal} 
                title={modalTitle} 
            >
                {modalMessage}
            </Modals>
        </div>
    );
};

export default LoginPage;
