import React from 'react'
import "../styles/4-cardsContainer.css"
import TickmarkImg from "../assets/check.png"
import Frontend from '../assets/WONO_images/img/key-features/frontend.jpg'
import Finance from '../assets/WONO_images/img/key-features/finance.jpg'
import Customer from '../assets/WONO_images/img/key-features/crm.jpg'
import Analytics from '../assets/WONO_images/img/key-features/analytics.jpg'
import HR from '../assets/WONO_images/img/key-features/hr.jpg'
import Marketing from '../assets/WONO_images/img/key-features/marketing.jpg'
import { useNavigate } from 'react-router-dom'

const FourCardsComponents = () => {
    const navigate = useNavigate();
    const cardsData = [
      { icon: Frontend, title: "FRONTEND", features: ["Website/Booking Engine", "Payment Gateway", "Meeting Rooms", "Customer Profile & more"] },
      { icon: Finance, title: "FINANCE & ACCOUNTING", features: ["Automated Invoicing", "Cashflow & Projections", "Budget Management", "Working Capital & more"] },
      { icon: Customer, title: "CUSTOMER MANAGEMENT SERVICES", features: ["Ticket Raising & Logs", "Internal Booking Engine", "Internal Communication & Logs", "Customer Management & more"] },
      { icon: Analytics, title: "ANALYTICS", features: ["Key Business Trends", "Full Data Analysis", "Customer Reports", "Employee Reports & more"] },
      { icon: HR, title: "HR SUPPORT", features: ["Attendance & Engagements", "Task Allotment & Management", "Performance Analysis", "Employee Appraisals & more"] },
      { icon: Marketing, title: "MARKETING", features: ["Search Engine Optimization", "Search Engine Marketing", "Ad Network", "Lead Generation & more"] }
    ];
  
    return (
        <div className="four-cards-parent">
        <div className="four-cards-header">
          <h2>KEY MODULES FOR YOUR BUSINESS</h2>
        </div>
        
        {/* New Wrapper Container */}
        <div className="four-cards-wrapper">
          <div className="four-cards-content">
            {cardsData.concat(cardsData).map((card, index) => ( // Duplicating the cards for looping effect
              <div key={index} className="card_1 shadow">
                <div className="card-body">
                  <div className="card-icon">
                    <img src={card.icon} alt={card.title} />
                  </div>
                  <h5 className="card-title">{card.title}</h5>
                  <div className="card-text">
                    {card.features.map((feature, i) => (
                      <div className="Tickmark-text" key={i}>
                        <img src={TickmarkImg} alt="tick-mark" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="key-features-link-space">
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/services");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="key-features-link"
          >
            View All
          </span>
        </div>
      </div>
      
    );
  };
  
  export default FourCardsComponents;
  