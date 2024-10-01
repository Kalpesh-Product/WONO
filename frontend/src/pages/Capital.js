import React from "react";
import "../styles/capital.css";
import "../styles/specialClasses.css";
import DashboardImage from "../assets/ipadcopy.png";
import { Link } from "react-router-dom";

const Capital = () => {
  return (
    <div className="capital-master">
      <div className="headingContainer">
        <h1 className="capital-heading">
          We
          <span className="hero_animation-container">
            help the daring
            <svg
              fill="none"
              viewBox="0 0 390 97"
              className="hero__animation hero__animation--standard">
              <path d="M2,76.26c16.11,4.95,31.91,3.84,48.58,3.84,20.39,0,40.67,0,61,1,18,.87,36-1,53.94-1,15.79,0,31.51,1.81,47.31,1.21,24.51-.93,49.17-2.18,73.68-2.49,19.45-.25,39.4,1.59,58.76-.64,15-1.73,29-2.29,39.75-14.79C387.89,60.1,390.5,48.5,386.5,40c-5.69-12.09-12.63-18.68-23.67-25.17C341.68,2.4,314.67,1.82,291.09,2c-21.31.2-55.45,3.62-68.52,24.46C212.14,43.1,212,59.57,227.79,72.77c24.81,20.81,63.45,26.8,93.41,18.85"></path>
            </svg>
          </span>{" "}
          build{" "}
        </h1>
        <h1 className="capital-heading-sub">legandary Companies.</h1>
        <Link to="/register">
          <button className="connect-with-us-btn">CONNECT WITH US</button>
        </Link>
      </div>
      <div className="capital-cards-section">
        <div className="cards-with-text">
          <h3>Investor Management</h3>
          <div className="capital-img">
            <img
              src="https://cdn.sanity.io/images/q8bht0jl/production/9d6463d6289e7fc2c3b2a276459c70c8e84a6134-864x1151.jpg?auto=format&fit=max&q=100&w=432"
              alt="capital-img-1"></img>
          </div>
          <div className="plus-icon"></div>
          <p>
            <b>Investor relations reimagined.</b>
            <span>
              {" "}
              Leverage software to drive meaningful,actionable engagement.
            </span>
          </p>
          <hr className="line-seperation-cards-capitalpage"></hr>
        </div>

        <div className="cards-with-text">
          <h3>Financial Service</h3>
          <div className="capital-img">
            <img
              src="https://cdn.sanity.io/images/q8bht0jl/production/231a71aafbef445f1f288a4af09ab3478ce36adf-864x1151.jpg?auto=format&fit=max&q=100&w=432"
              alt="capital-img-2"></img>
          </div>
          <div className="plus-icon">+</div>
          <p>
            <b>Consolidate Your Capital Management</b>
            <span> with seamless, flexible and secure banking solutions</span>
          </p>
        </div>
        <div className="cards-with-text">
          <h3>Full Service Funds</h3>
          <div className="capital-img">
            <img
              src="https://cdn.sanity.io/images/q8bht0jl/production/a3a1a5ef1c4d2a1d5b61cb69788ad0e44d60c21f-696x928.jpg?auto=format&fit=max&q=100&w=348"
              alt="capital-img-2"></img>
          </div>
          <div className="plus-icon">+</div>
          <p>
            <b>Access 50+ Services</b>
            <span>
              {" "}
              that removes friction from fund management for venture funds and
              syndicates.
            </span>
          </p>
        </div>
        <div className="cards-with-text">
          <h3>Equity Management</h3>
          <div className="capital-img">
            <img
              src="https://cdn.sanity.io/images/q8bht0jl/production/c7fea715cb9887d72855b536004d6a464f2a5b2c-864x1151.jpg?auto=format&fit=max&q=100&w=432"
              alt="capital-img-2"></img>
          </div>
          <div className="plus-icon">+</div>
          <p>
            <b>Modern cab tables for high-growth companies</b>
            <span> Unmatched automations turn equity into an advantage.</span>
          </p>
        </div>
      </div>
      <div className="capital-big-text">
        <h1>
          Our software suite amplifies opportunity for venture, private equity
          firms and debt firms, regardless of stage or provider and helps you
          secure the accurate INVESTOR!
        </h1>
      </div>
      <div className="three-card-images">
        <div className="card-img-1">
          <img
            src="https://media.istockphoto.com/id/660743390/photo/angel-investor.jpg?s=612x612&w=0&k=20&c=bMCsPyNz0LLMVYmFh0Kn2f0prRikRbjyNzc9dfvjGcY="
            alt="card-img-1"></img>
        </div>
        <div className="card-img-1">
          <img
            src="https://assets.smfgindiacredit.com/sites/default/files/Venture-Capital.jpg?VersionId=YDGq4VyQQAdW2x57A5ucusQkZbmffKwh"
            alt="card-img-2"></img>
        </div>
        <div className="card-img-1">
          <img
            src="https://www.techfunnel.com/wp-content/uploads/2021/07/debt-financing.png"
            alt="card-img-3"></img>
        </div>
      </div>
      {/* Raise Frictionless fundressing for startup*/}
      <div className="big-end-image">
        <div className="frictionless-heading-with-btns">
          <h1>
            <span>Raise</span> - Frictionless fundraising for startups
          </h1>
          <div className="frictionless-btns">
            <Link to="/register">
              <button className="capital-start-for-free-btn btn1">
                Start for free
              </button>
            </Link>
            <Link to="/register">
              <button className="capital-start-for-free-btn btn2">
                Contact sales
              </button>
            </Link>
          </div>
        </div>
        <div className="big-end-dashboard-img">
          <img src={DashboardImage} alt="end-image"></img>
          <div className="back-wrapper-dashboard-img"></div>
        </div>
      </div>
      <div className="capital-last-button-section">
        <h2>LET THE FUNDRAISE BEGIN!</h2>
        <Link
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          to="/register">
          <button className="get-started-main-button">
            CONNECT WITH US TODAY
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Capital;
