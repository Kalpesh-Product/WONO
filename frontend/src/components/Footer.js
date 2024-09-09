import React from "react";
import { Link } from "react-router-dom";
import "../layout/footer.css";
import WonoLogo from "../assets/WONO_images/img/WONO_LOGO_white _TP.png";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="black-background text-light py-4">
        <div className="footer-container">
          <div className="footer-section-1">
            <img src={WonoLogo} alt="logo" />
            <span>
              WONOCO PRIVATE LIMITED 10 ANSON ROAD #33-10
              <br />
              INTERNATIONAL PLAZA SINGAPORE - 079903
              <br />
              <span className="text-lowercase color-of-o">
                response@wono.co
              </span>
            </span>
            <div className="icons-section">
              <FontAwesomeIcon
                icon={faTwitter}
                className="bg-dark m-1 p-1 rounded-1"
                size="1x"
              />
              <FontAwesomeIcon
                icon={faFacebook}
                className="bg-dark m-1 p-1 rounded-1"
                size="1x"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="bg-dark m-1 p-1 rounded-1"
                size="1x"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="bg-dark m-1 p-1 rounded-1"
                size="1x"
              />
            </div>
          </div>

          <div className="footer-section-2">
            <h5>Home</h5>
            <h5>Services</h5>
            <h5>Careers</h5>
          </div>

          <div className="footer-section-3">
            <h5>Contact</h5>
            <Link
              to={"/privacy"}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Privacy policy
            </Link>
            <Link
              to={"/termsandconditions"}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Terms and Condtions
            </Link>
          </div>
        </div>

        <div className="mt-3 py-5">
          <div className="text-center">
            <p>
              &copy; Copyright 2024-25 by WONOCO PRIVATE LIMITED - SINGAPORE.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
