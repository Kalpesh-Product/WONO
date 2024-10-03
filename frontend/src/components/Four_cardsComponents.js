import React from 'react';
import Slider from 'react-slick';
import "../styles/4-cardsContainer.css";
import TickmarkImg from "../assets/check.png";
import Frontend from '../assets/WONO_images/img/key-features/website.png';
import Finance from '../assets/WONO_images/img/key-features/finance.png';
import Customer from '../assets/WONO_images/img/key-features/CustomerLatest.png';
import Analytics from '../assets/WONO_images/img/key-features/dashboard.png';
import HR from '../assets/WONO_images/img/key-features/HR.png';
import Marketing from '../assets/WONO_images/img/key-features/seo.png';
import { useNavigate } from 'react-router-dom';

const FourCardsComponents = () => {


  // Custom arrow components
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={`slick-prev ${className}`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        &#10094; {/* Left arrow symbol */}
      </button>
    );
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={`slick-next ${className}`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        &#10095; {/* Right arrow symbol */}
      </button>
    );
  };
  const navigate = useNavigate();
  
  const cardsData = [
    { icon: Frontend, title: "FRONTEND", features: ["Website/Native-apps", "Payment Gateway", "Meeting Rooms", "Customer Profile "] },
    { icon: Finance, title: "FINANCE & ACCOUNTING", features: ["Automated Invoicing", "Cashflow & Projections", "Budget Management", "Working Capital "] },
    { icon: Customer, title: "CUSTOMER MANAGEMENT", features: ["Ticket Raising & Logs", "Internal Booking Engine", "Internal Communication", "Customer Management "] },
    { icon: Analytics, title: "ANALYTICS", features: ["Key Business Trends", "Full Data Analysis", "Customer Reports", "Employee Reports "] },
    { icon: HR, title: "HR SUPPORT", features: ["Attendance & Engagements", "Task Allotment & Management", "Performance Analysis", "Employee Appraisals "] },
    { icon: Marketing, title: "MARKETING", features: ["Search Engine Optimization", "Search Engine Marketing", "Ad Network", "Lead Generation "] }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjust for how many cards to show at once
    prevArrow: <PrevArrow />, // Custom previous arrow
    nextArrow: <NextArrow />, // Custom next arrow
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="four-cards-parent">
      <div className="four-cards-header">
        <span>KEY MODULES FOR YOUR BUSINESS</span>
      </div>

      <Slider {...settings} className="four-cards-wrapper">
        {cardsData.map((card, index) => (
          <div key={index} className="card_1 shadow">
            <div className="card-body">
              <div className="card-icon" >
                <img src={card.icon} alt={card.title} style={{boxShadow:"10px solid grey"}} />
              </div>
              <h5 className="card-title">{card.title}</h5>
              <div className="card-text">
                {card.features.map((feature, i) => (
                  <div className="card-subtext" key={i}>
                    <img src={TickmarkImg} alt="tick-mark" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="key-features-link-space">
        <span
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/services");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="key-features-link">
          View more
        </span>
      </div>
    </div>
  );
};

export default FourCardsComponents;
