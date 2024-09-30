import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Toast, ToastContainer } from 'react-bootstrap';
import '../styles/bodyLogin.css'; // Ensure this file is correctly imported
import Batman from '../assets/batman.png'
import Spiderman from '../assets/spiderman.png'
import Slider from "react-slick";
import BookingEngine from '../assets/WONO_images/img/booking_engine_login.png'
import { TextField, Button, Grid, Typography } from '@mui/material';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [emailFormData, setEmailFormData] = useState({ email: '' });
    const [otpForm, setOtpForm] = useState({ otp: '' });
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [passwordReset, setPasswordReset] = useState(false);
    const [otpVerification, setOtpVerification] = useState(false)
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('info'); // 'info', 'success', or 'danger'
    const [overlayVisible, setOverlayVisible] = useState(false);

    const settings = {
        dots: true,
        infinite: true,
        dotsClass: 'login-slick-dots',
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailFormData.email)) {
            setError('Enter a valid email');
            return;
        }

        // Show toast and overlay indicating email is being sent
        setToastMessage('Sending email with OTP...');
        setToastType('info');
        setShowToast(true);
        setOverlayVisible(true);

        try {
            // Send the POST request with the email to the backend
            const response = await axios.post('/forgot-password', {
                email: emailFormData.email
            });

            // Log the response from the backend
            console.log('Backend Response:', response.data);

            if (response.status === 200) {
                setPasswordReset(true);
                setToastMessage('A password reset link has been sent to your email.');
                setToastType('success');
            }
        } catch (error) {
            console.error('Forgot Password Failed:', error);
            setError('Email does not exist');
            setToastMessage('Failed to send password reset email.');
            setToastType('danger');
        } finally {
            setOverlayVisible(false);
            setShowToast(false);
        }
    };

    const handleOTPsumbit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/verify-otp', {
                email: emailFormData.email,
                otp: otpForm.otp
            });

            if (response.status === 200) {
                setToastMessage('OTP verified successfully.');
                setToastType('success');
                setPasswordReset(true); // Show new password form
                setOtpVerification(true)
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            setError('Error verifying OTP');
            setToastMessage('Error verifying OTP.');
            setToastType('danger');
        } finally {
            setShowToast(true);
            setOverlayVisible(false);
        }
    };

    const handlePasswordSubmit = async (event) => {
        event.preventDefault();

        // Basic password validation
        if (newPassword.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        if (newPassword !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // Show toast and overlay indicating password is being reset
        setToastMessage('Resetting password...');
        setToastType('info');
        setShowToast(true);
        setOverlayVisible(true);

        try {
            const response = await axios.post('/reset-password', {
                email: emailFormData.email, // Ensure the email is included
                password: newPassword
            });

            if (response.status === 200) {
                setToastMessage('Password updated successfully.');
                setToastType('success');
                setSuccessMessage('Password updated successfully.');
                navigate('/login'); // Redirect to login page
            }
        } catch (error) {
            console.error('Error resetting password:', error);
            setError('Error resetting password');
            setToastMessage('Failed to update password.');
            setToastType('danger');
        } finally {
            setOverlayVisible(false);
            setShowToast(false);
        }
    };

    const handleEmailChange = (e) => {
        const { name, value } = e.target;
        setEmailFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleOtpChange = (e) => {
        const { name, value } = e.target;
        setOtpForm(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        if (name === 'newPassword') {
            setNewPassword(value);
        } else if (name === 'confirmPassword') {
            setConfirmPassword(value);
        }
    };

    return (
        <div className="forgot-password-container loginTopPadding loginBottomPadding">
            <div className="forgot-password-left-container">
                <h2 className="text-center mb-4">Password Reset</h2>

                {/* Email form */}
                {!passwordReset && (
                    <form className='forgot-password-form' onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    name="email"
                                    variant="outlined"
                                    type="email"
                                    value={emailFormData.email}
                                    onChange={handleEmailChange}
                                    error={!!error} // Displays error style if error exists
                                    helperText={error} // Displays error message
                                    aria-label="email"
                                />
                            </Grid>
                            <div className="forgot-password-button">

                                <button
                                    type="submit"
                                    className='submit-button'
                                >
                                    Send OTP
                                </button>

                            </div>
                        </Grid>
                    </form>
                )}

                {/* OTP form */}
                {passwordReset && !otpVerification && (
                    <form className="forgot-password-form" onSubmit={handleOTPsumbit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            required
                            label="Enter OTP"
                            name="otp"
                            value={otpForm.otp}
                            onChange={handleOtpChange}
                        />
                        <div className="forgot-password-button">

                            <button
                                type="submit"
                                className='submit-button'
                            >
                                Verify OTP
                            </button>

                        </div>
                    </form>
                )}

                {/* New password form */}
                {passwordReset && otpVerification && (
                    <form className='forgot-password-form' onSubmit={handlePasswordSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            required
                            type="password"
                            name="newPassword"
                            label="New Password"
                            value={newPassword}
                            onChange={handlePasswordChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            required
                            type="password"
                            name="confirmPassword"
                            label="Confirm New Password"
                            value={confirmPassword}
                            onChange={handlePasswordChange}
                        />
                        {error && <Typography color="error" variant="body2">{error}</Typography>}
                        {successMessage && <Typography color="success" variant="body2">{successMessage}</Typography>}
                        <div className="forgot-password-button">

                            <button
                                type="submit"
                                className='submit-button'
                            >
                                Change password
                            </button>

                        </div>
                    </form>
                )}

                <div className="text-center">
                    <span>Remembered your password ? <Link to="/login" className="">Login</Link></span>
                </div>
            </div>
            {/* <div className="forgot-password-right-container">
                <div className="container" style={{backgroundColor:'white', borderRadius:'20px'}}>
                    <div className="login-carousel-container">
                        <Slider {...settings}>
                            <div className='login-carousel-item'>

                                <img src={Batman} alt="Slide 1" />
                            </div>
                            <div className='login-carousel-item'>
                                <img src={Spiderman} alt="Slide 2" />
                            </div>
                            <div className='login-carousel-item'>
                                <h1>Booking Engine</h1>
                                <img src={BookingEngine} alt="Slide 3" />
                            </div>
                        </Slider>
                    </div>

                </div>
            </div> */}

            {/* Toast notifications */}
            <ToastContainer className="p-3" position="top-center">
                <Toast
                    bg={toastType}
                    show={showToast}
                    onClose={() => setShowToast(false)}
                    delay={3000}
                    autohide
                >
                    <Toast.Body>{toastMessage}</Toast.Body>
                </Toast>
            </ToastContainer>

            {/* Overlay */}
            {overlayVisible && (
                <div className="overlay">
                    <div className="overlay-content">
                        <p>Please wait...</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ForgotPassword;
