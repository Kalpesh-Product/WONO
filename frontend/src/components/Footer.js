import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../layout/footer.css";
import "../styles/componentStyle.css";
import WonoLogo from "../assets/WONO_images/img/WONO_LOGO_white _TP.png";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = ({ changeActiveTab }) => {
  const navigate = useNavigate();
  return (
    <>
      <footer className="black-background text-light">
        <div className="footer-master">
          <div className="footer-section-1">
            <img
              onClick={() => {
                navigate("/home");
                window.scrollTo({ top: "0", behavior: "instant" });
                changeActiveTab("Home");
              }}
              src={WonoLogo}
              style={{ cursor: "pointer" }}
              alt="logo"
            />
            <span>
              WONOCO PRIVATE LIMITED 10 ANSON ROAD #33-10
              <br />
              INTERNATIONAL PLAZA SINGAPORE - 079903
              <br />
              <span className="text-lowercase color-of-o">
                <Link
                  to="mailto:response@wono.co"
                  style={{ textDecoration: "none" }}>
                  response@wono.co
                </Link>
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
              <h5
                onClick={() => {
                  changeActiveTab("Services");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}>
                <Link to="/saas">SaaS</Link>
              </h5>
              <h5
                onClick={() => {
                  changeActiveTab("leads");
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}>
                <Link to={"/leads"}>Leads</Link>
              </h5>
              <h5
                onClick={() => {
                  changeActiveTab("themes");
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}>
                <Link to={"/themes"}>Themes</Link>
              </h5>
            </div>

            <div className="footer-section-3">
              <h5>
                <Link to="#">Accounting</Link>
              </h5>
              <h5>
                <Link to="#">Projections</Link>
              </h5>
              <h5
                onClick={() => {
                  changeActiveTab("capital");
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}>
                <Link to={"/capital"}>Capital</Link>
              </h5>
            </div>
            <div className="footer-section-3">
              <h5>
                <Link to="#">About</Link>
              </h5>
              <Link
                to={"/career"}
                onClick={() => {
                  changeActiveTab("Career");
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}>
                Careers
              </Link>
              <Link
                to={"/contact"}
                onClick={() => {
                  changeActiveTab("contact");
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}>
                Contact
              </Link>
            </div>
            <div className="footer-section-3">
              <h5>
                <Link
                  to={"/faqs"}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "instant" })
                  }>
                  FAQs
                </Link>
              </h5>
              <Link
                to={"/privacy"}
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "instant" })
                }>
                Privacy
              </Link>
              <Link
                to={"/termsandconditions"}
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "instant" })
                }>
                T&C
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="mt-3 py-5"> */}
        <div className="py-4">
          <div className="text-center px-1 footer-copyright">
            <p>
              &copy; Copyright 2024-25 by WONOCO PRIVATE LIMITED - SINGAPORE.
              All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
