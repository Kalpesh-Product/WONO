import React from "react";
import "../styles/capital.css";
import "../styles/specialClasses.css";
import DashboardImage from "../assets/WONO_images/img/capital/finance-usd-3.png";
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
              className="hero__animation hero__animation--standard"
            >
              <path d="M2,76.26c16.11,4.95,31.91,3.84,48.58,3.84,20.39,0,40.67,0,61,1,18,.87,36-1,53.94-1,15.79,0,31.51,1.81,47.31,1.21,24.51-.93,49.17-2.18,73.68-2.49,19.45-.25,39.4,1.59,58.76-.64,15-1.73,29-2.29,39.75-14.79C387.89,60.1,390.5,48.5,386.5,40c-5.69-12.09-12.63-18.68-23.67-25.17C341.68,2.4,314.67,1.82,291.09,2c-21.31.2-55.45,3.62-68.52,24.46C212.14,43.1,212,59.57,227.79,72.77c24.81,20.81,63.45,26.8,93.41,18.85"></path>
            </svg>
          </span>{" "}
          build{" "}
        </h1>
        <h1 className="capital-heading-sub">legandary Companies.</h1>
        <Link to="/register">
          <button className="connect-with-us-btn mt-4 md:mt-0 lg:mt-0">CONNECT WITH US</button>
        </Link>
      </div>
      <div data-aos="fade-up" className="capital-cards-section">
        <div className="cards-with-text">
          <h3 className="mb-4 md:mb-0 lg:mb-0">Investor Management</h3>
          <div className="capital-img">
            <img
              src="https://cdn.sanity.io/images/q8bht0jl/production/9d6463d6289e7fc2c3b2a276459c70c8e84a6134-864x1151.jpg?auto=format&fit=max&q=100&w=432"
              alt="capital-img-1"
            ></img>
          </div>
          <div className="plus-icon"></div>
          <p>
            <span>
              {" "}
              Get identified and introduced within our network and ecosystem of
              investors who can support your growth an ambitions.
            </span>
          </p>
          <hr className="line-seperation-cards-capitalpage"></hr>
        </div>
        <hr className="text-white bg-white" />
        <div className="cards-with-text">
          <h3 className="mb-4 md:mb-0 lg:mb-0">Financial Service </h3>
          <div className="capital-img">
            <img
              src="https://cdn.sanity.io/images/q8bht0jl/production/231a71aafbef445f1f288a4af09ab3478ce36adf-864x1151.jpg?auto=format&fit=max&q=100&w=432"
              alt="capital-img-2"
            ></img>
          </div>
          <div className="plus-icon">+</div>
          <p>
            <span>
              {" "}
              We have curated the best financial services partners for your
              business who can seamlessly manage your business operations.
            </span>
          </p>
        </div>
        <hr className="text-white bg-white" />
        <div className="cards-with-text">
          <h3 className="mb-4 md:mb-0 lg:mb-0">PERSONAL FUND MANAGER</h3>
          <div className="capital-img">
            <img
              src="https://cdn.sanity.io/images/q8bht0jl/production/a3a1a5ef1c4d2a1d5b61cb69788ad0e44d60c21f-696x928.jpg?auto=format&fit=max&q=100&w=348"
              alt="capital-img-2"
            ></img>
          </div>
          <div className="plus-icon">+</div>
          <p>
            <span>
              {" "}
              Once you are ready to move to the next level, we have a team of
              talented and experiences Fund Managers who can be your team.
            </span>
          </p>
        </div>
        <hr className="text-white bg-white" />
        <div className="cards-with-text">
          <h3 className="mb-4 md:mb-0 lg:mb-0">VENTURE FUNDING & DEBT</h3>
          <div className="capital-img">
            <img
              src="https://cdn.sanity.io/images/q8bht0jl/production/c7fea715cb9887d72855b536004d6a464f2a5b2c-864x1151.jpg?auto=format&fit=max&q=100&w=432"
              alt="capital-img-2"
            ></img>
          </div>
          <div className="plus-icon">+</div>
          <p>
            <span>
              {" "}
              Our automated analytics platform will help you identify trends
              when you may need funds and what type of funds which will help
              your growth.{" "}
            </span>
          </p>
        </div>
      </div>
      <div data-aos="fade-up" className="capital-big-text">
        <h1>
          Our software suite amplifies the opportunity for the correct investor
          such as angel investors, venture capital firms and debt firms to
          integrate with your company at the most appropriate time regardless of
          the stage you are which ensure the company does not slow its growth
          strategy.{" "}
        </h1>
      </div>
      <div  className="three-card-images">
        <div data-aos="fade-up" className="card-img-1">
          <img
            src="https://media.istockphoto.com/id/660743390/photo/angel-investor.jpg?s=612x612&w=0&k=20&c=bMCsPyNz0LLMVYmFh0Kn2f0prRikRbjyNzc9dfvjGcY="
            alt="card-img-1"
          ></img>
        </div>
        <div data-aos="fade-up" className="card-img-1">
          <img
            src="https://assets.smfgindiacredit.com/sites/default/files/Venture-Capital.jpg?VersionId=YDGq4VyQQAdW2x57A5ucusQkZbmffKwh"
            alt="card-img-2"
          ></img>
        </div>
        <div data-aos="fade-up" className="card-img-1">
          <img
            src="https://www.techfunnel.com/wp-content/uploads/2021/07/debt-financing.png"
            alt="card-img-3"
          ></img>
        </div>
      </div>
      {/* Raise Frictionless fundressing for startup*/}
      <div data-aos="fade-up" className="big-end-image">
        <div className="frictionless-heading-with-btns gap-4">
          <h1>
            <span>Systematic & seamless</span> fundraising with accurate
            projections and cashflow trends.
          </h1>
          <div className="flex items-center justify-center gap-4 flex-wrap md:flex-nowrap w-full">
            <Link to="/register">
              <button className="px-4 py-2 bg-white rounded-full text-black">
                Start for free
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-4 py-2 bg-black rounded-full text-white border-[1px] border-gray-200 ">
                Contact sales
              </button>
            </Link>
          </div>
        </div>
        <div className="big-end-dashboard-img w-full h-[80vh] overflow-hidden rounded-xl">
          <img
            src={DashboardImage}
            className="w-full h-full object-contain lg:object-cover object-top rounded-xl"
            alt="end-image"
          />
          <div className="back-wrapper-dashboard-img"></div>
        </div>
      </div>
    </div>
  );
};

export default Capital;
