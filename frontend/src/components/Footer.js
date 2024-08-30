import React from 'react'
import { Link } from 'react-router-dom'
import "../layout/footer.css"
import WonoLogo from '../assets/WONO_images/img/WONO_LOGO_white _TP.png'

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-light py-4">

        <div className='footer-container'>


          <div className='footer-section-1'>
            <img src={WonoLogo} alt='logo' />
            <span>
              WONOCO PRIVATE LIMITED 10 ANSON ROAD #33-10<br />
              INTERNATIONAL PLAZA SINGAPORE - 079903<br />
              response@wono.co
            </span>
          </div>


          <div className='footer-section-2'>
            <h5>Home</h5>
            <h5>Services</h5>
            <h5>Careers</h5>
          </div>


          <div className='footer-section-3'>
            <h5>Contact</h5>
            <Link to={'/privacy'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Privacy policy</Link>
            <Link to={'/termsandconditions'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Terms and Condtions</Link>
          </div>
        </div>


        <div className="mt-3 py-5">
          <div className="text-center">
            <p>&copy; 2024 Your Company. All Rights Reserved.</p>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer