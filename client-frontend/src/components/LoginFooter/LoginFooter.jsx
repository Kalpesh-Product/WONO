import React from "react";

const Footer = ({ changeActiveTab }) => {
  return (
    <footer className="bg-black text-gray-200 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          {/* Logo and Company Info */}
          <div className="flex flex-col items-start space-y-4">
            <img
              src={''}
              alt="Wono Logo"
              className="w-32 cursor-pointer"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                changeActiveTab("Home");
              }}
            />
            <address className="not-italic text-sm leading-6">
              WONOCO PRIVATE LIMITED<br />
              10 ANSON ROAD #33-10<br />
              INTERNATIONAL PLAZA SINGAPORE - 079903
            </address>
            <p className="text-blue-400">
              response@wono.co
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-center items-center h-[100%]">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full md:w-auto place-items-center">
            <div className="space-y-4">
            
              <ul className="space-y-5">
                <li className="cursor-pointer hover:text-blue-400">Sign In</li>
                <li className="cursor-pointer hover:text-blue-400">Sign Up</li>
                <li className="cursor-pointer hover:text-blue-400">Contact</li>
              </ul>
            </div>
            <div className="space-y-4">
              
              <ul className="space-y-5">
                <li className="cursor-pointer hover:text-blue-400">SaaS</li>
                <li className="cursor-pointer hover:text-blue-400">Themes</li>
                <li className="cursor-pointer hover:text-blue-400">Leads</li>
              </ul>
            </div>
            <div className="space-y-4">
              
              <ul className="space-y-5">
                <li className="cursor-pointer hover:text-blue-400">Capital</li>
                <li className="cursor-pointer hover:text-blue-400">Career</li>
                <li className="cursor-pointer hover:text-blue-400">About</li>
              </ul>
            </div>
            <div className="space-y-4">
             
              <ul className="space-y-5">
                <li className="cursor-pointer hover:text-blue-400">FAQs</li>
                <li className="cursor-pointer hover:text-blue-400">Privacy</li>
                <li className="cursor-pointer hover:text-blue-400">T&C</li>
              </ul>
            </div>
          </div>
          </div>

          {/* Social Icons */}
          {/* <div className="flex space-x-4 mt-4 md:mt-0">
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-blue-400 hover:text-blue-500 cursor-pointer"
              size="lg"
            />
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-blue-400 hover:text-blue-500 cursor-pointer"
              size="lg"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-pink-500 hover:text-pink-600 cursor-pointer"
              size="lg"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-blue-700 hover:text-blue-800 cursor-pointer"
              size="lg"
            />
          </div> */}
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm text-gray-400 border-t border-gray-700 pt-4">
          <p>
            &copy; Copyright 2024-25 by WONOCO PRIVATE LIMITED - SINGAPORE.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
