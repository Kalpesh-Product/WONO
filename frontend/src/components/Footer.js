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
        <div className="footer-master">
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
        <div className="footer-container">

          <div className="footer-section-3">
            <h5>SaaS</h5>
            <h5>Leads</h5>
            <h5>Themes</h5>
          </div>

          <div className="footer-section-3">
            <h5>Accounting</h5>
            <h5>Projections</h5>
            <h5>Capital</h5>
          </div>
          <div className="footer-section-3">
            <h5>About</h5>
            <Link
              to={"/career"}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Careers
            </Link>
            <Link
              to={"/contact"}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Contact
            </Link>
          </div>
          <div className="footer-section-3">
            <h5>FAQs</h5>
            <Link
              to={"/privacy"}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Privacy
            </Link>
            <Link
              to={"/termsandconditions"}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              T&C
            </Link>
          </div>
        </div>
        </div>

        <div className="mt-3 py-5">
          <div className="text-center px-1">
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
