// NavBar.js
import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/componentStyle.css';
import WonoLogo from '../assets/WONO_images/img/WONO_LOGO_white _TP.png';
import { Tab } from 'react-bootstrap';

const NavBar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeTab,setActiveTab] = useState('Home');

  const changeActiveTab = (activeTab)=>{
    setActiveTab(activeTab);
  }

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/logout', {}, { withCredentials: true });
      setUser(null); // Clear the user state
      navigate('/home');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleRegister = () => {
    navigate('/register');
    setShow(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav className="custom-navbar">
        <div className="custom-navbar-logo">
          <img style={{ cursor: 'pointer' }} onClick={() => { navigate('/') }} src={WonoLogo} alt='logo' />
        </div>
        <div className="custom-navbar-menu nav-tabss">
          <Link to='/' className={activeTab === 'Home'? 'active':''} onClick={()=>changeActiveTab('Home')}>Home</Link>
          <Link to='/services' className={activeTab === 'Services'? 'active':''} onClick={()=>changeActiveTab('Services')}>Services</Link>
          <Link to='/contact' className={activeTab === 'Contact'? 'active':''} onClick={()=>changeActiveTab('Contact')}>Contact</Link>
          <Link to='/career'  className={activeTab === 'Career'? 'active':''} onClick={()=>changeActiveTab('Career')}>Career</Link>
         
          {user ? (
            <Link to={'/dashboard' } className='active'>Dashboard</Link>
          ) : (null)}
        </div>
        <div className="custom-navbar-menu">
          {user ? (
            <div className="user-profile">
              <div className="profile-container" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <img src={user.picture} alt={user.name} className="profile-image" />
                <span>{user.name ? user.name : user.email}</span>
                <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            </div>
          ) : (
            <div style={{display:'flex', gap:'20px'}}>
              <Link to='/login' className='login-button'>LOGIN</Link>
              <Link style={{color:'black'}} className='register-button' to='/register'>REGISTER</Link>
            </div>
          )}
        </div>
        <div className="custom-navbar-menu-toggle" onClick={handleShow}>
          &#9776;
        </div>
      </nav>

      <Offcanvas show={show} onHide={handleClose} placement="start" backdrop="true" className="custom-offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Link className="custom-offcanvas-link" to='/' onClick={handleClose}>Home</Link>
          <Link className="custom-offcanvas-link" to='/services' onClick={handleClose}>Services</Link>
          <Link className="custom-offcanvas-link" to='/test' onClick={handleClose}>Testing</Link>
          <Link className="custom-offcanvas-link" to='/contact' onClick={handleClose}>Contact</Link>
          <Link className="custom-offcanvas-link" to='/career' onClick={handleClose}>Career</Link>
          {user ? (
            <Link className="custom-offcanvas-link" to={'/dashboard'}>Dashboard</Link>
          ) : (null)}
          {user ? (
            <div className="user-profile">
              <div className="profile-container" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <img src={user.picture} alt={user.name} className="profile-image" />
                <span>{user.name}</span>
                <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <Link to='/login' onClick={handleClose} className='login-button'>LOGIN</Link>
              <button className='register-button' onClick={handleRegister}>REGISTER</button>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavBar;
