import React from "react";
import "./WebsiteFooter.css";

const WebsiteFooter = () => {
  return (
    <footer>
      <div className="footer">
        {/* <div className="row">
          <a href="#">
            <i className="fa fa-facebook" />
          </a>
          <a href="#">
            <i className="fa fa-instagram" />
          </a>
          <a href="#">
            <i className="fa fa-youtube" />
          </a>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>
        </div> */}
        <div className="row">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-youtube" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </li>
          </ul>
        </div>
        <div className="row">
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
        </div>
        <div className="row">
          <p className="text-center">
            BIZ Nest Copyright © 2024 - All rights reserved || Powered By WoNo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default WebsiteFooter;
