import React from "react";
import "./WebsiteBuilder.css";
import biznestLogo from "./images/BIZ Nest Rectangle.webp";
import { Link } from "react-router-dom";

const WebsiteHeader = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
      data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {/* Navbar */}
          <img src={biznestLogo} className="biznestLogoDimensions" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/website">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/website-login">
                Login
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default WebsiteHeader;
