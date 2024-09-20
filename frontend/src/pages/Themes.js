import React from "react";
import "../styles/bodyThemes.css";
import "../styles/specialClasses.css";
import CafeImage from "../assets/WONO_images/img/website-builder/new-layout/cafe.png";
import BiznestImage from "../assets/WONO_images/img/products-images/biznestImage.png";
import BiznestImageMockup from "../assets/WONO_images/img/website-builder/new-layout/mobile/mockups/biznest-mockup.png";
import Cafe_2 from "../assets/WONO_images/img/website-builder/new-layout/cafe-2.png";
import Cafe_3 from "../assets/WONO_images/img/website-builder/new-layout/cafe-3.png";
import CoWorkingImage from "../assets/WONO_images/img/website-builder/new-layout/co-working.png";
import CoWorkingImageMockup from "../assets/WONO_images/img/website-builder/new-layout/mobile/mockups/co-working-mockup-bg.png";
import CoLivingImage from "../assets/WONO_images/img/website-builder/new-layout/co-living.png";
import CoWorkingImage_2 from "../assets/WONO_images/img/website-builder/new-layout/co-working-2.png";
import CoWorkingImage_3 from "../assets/WONO_images/img/website-builder/new-layout/co-working-3.png";
import Featured from "../assets/WONO_images/img/website-builder/new-layout/featured/featured-1.png";
import Boutique from "../assets/WONO_images/img/website-builder/new-layout/boutique.png";
import BoutiqueMockup from "../assets/WONO_images/img/website-builder/new-layout/mobile/mockups/boutique-mockup.png";
import CoWorkingMewo from "../assets/WONO_images/img/website-builder/new-layout/co-working-mewo.png";
import BizNestMockup from "../assets/WONO_images/img/website-builder/new-layout/Macbook-mockup.png";
import Hostels from "../assets/WONO_images/img/website-builder/new-layout/hostels.png";
import { useNavigate } from "react-router-dom";

const Themes = () => {
  const navigate = useNavigate();

  const themeImages = [
    { src: BiznestImage, mockup: BiznestImageMockup, alt: "BiznestImage", tag: "co-working" },
    { src: CoWorkingImage,mockup: CoWorkingImageMockup, alt: "Co-Working Image", tag: "co-working" },
    { src: CoLivingImage, alt: "Co-Living Image", tag: "co-living" },
    { src: Boutique,mockup: BoutiqueMockup, alt: "Boutique Image", tag: "boutique" },
    { src: CoWorkingImage_2, alt: "CoLivingImage_2", tag: "co-working" },
    { src: CoWorkingImage_3, alt: "CoLivingImage_3", tag: "co-working" },
    { src: Cafe_2, alt: "Cafe_2", tag: "cafe" },
    { src: Cafe_3, alt: "Cafe_3", tag: "cafe" },
    { src: CoWorkingMewo, alt: "CoWorkingMewo", tag: "co-working" },
    { src: Hostels, alt: "Hostels", tag: "hostels" },
  ];

  const themeWebsiteGridData = [
    {
      title: "Faster loading",
      description: "Wix is designed for performance so your site loads faster",
    },
    {
      title: "Built with SEO in mind",
      description:
        "Get the SEO capabilities you need to optimize your site for search visibility.",
    },
    {
      title: "Enterprise-grade security",
      description: "We keep your site and visitors data protected, 24/7.",
    },
    {
      title: "Resilient infrastructure",
      description:
        "Multi-cloud hosting ensures 99.9% uptime, even during traffic spikes.",
    },
    {
      title: "Accessible for everyone",
      description:
        "Make your own website inclusive with built-in accessibility tools.",
    },
    {
      title: "Easy customization",
      description:
        "Personalize your website effortlessly by using  customizable templates.",
    },
  ];
  

  return (
    <div>
      <div className="themePage-master">
        <div className="themePage-header">
          <h2>
            Choose the best business Website & Native Apps theme for your
            business{" "}
          </h2>
          <p>
            Cherry pick the features you want or ask us to customize anything
            for you for your business growth.
          </p>
        </div>

        <div className="themePage-content">
          <div className="themePage-content-header">
            <h3>Top Theme Recommendations</h3>
            <span>
              Fully tech ready, integrated and responsive updated and latest
              WoNo themes
            </span>
          </div>

          <div className="themePage-content-grid">
            {themeImages.map((image, index) => (
              <div className="theme-grid" key={index}>
                <img
                  onClick={() => {
                    navigate("/themes/products", { state: { image } });
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>

          <div className="themePage-featured">
            <div className="themePage-featured-grid">
              <div className="themePage-featured-grid-1">
                <div className="themePage-featured-header">
                  <h1>Customize it your way</h1>
                </div>
                <div className="themePage-featured-content">
                  <ul>
                    <li>Intuitive drag and drop website editor</li>
                    <li>1000's advanced web capabilities</li>
                    <li>Powerful AI features for smart customization</li>
                    <li>Full-stack web dev tools for custom functionality</li>
                  </ul>
                </div>
                <div className="themePage-featured-button ">
                  <button
                    className="get-started-main-button"
                    onClick={() => {
                      navigate("/register");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}>
                    Get started
                  </button>
                </div>
              </div>

              <div className="themePage-featured-grid-2">
                <img src={BizNestMockup} alt="coWorking" />
              </div>
            </div>
          </div>

          <div className="themePage-website-features-section">
            <div className="themePage-website-features">
              <div className="themePage-website-header">
                <h1>A website builder engineered for growth</h1>
              </div>
              <div className="themePage-website-features-grid">
                {themeWebsiteGridData.map((item, index) => (
                  <div
                    key={index}
                    className={`themePage-website-features-grid-${index + 1}`}>
                    <h4>
                      <b>{item.title}</b>
                    </h4>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
              <div style={{ padding: 0 }} className="themePage-featured-button">
                <button
                  className="get-started-main-button"
                  onClick={() => {
                    navigate("/register");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}>
                  Get started
                </button>
              </div>
            </div>
          </div>

          <div className="themePage-website-support-section">
            <div className="themePage-website-support">
              <div className="themePage-website-support-header">
                <h1>We're here for you</h1>
              </div>
              <div className="themePage-website-support-grid">
                <div className="themePage-website-support-grid-1">
                  <h2>
                    <b>Get answers</b>
                  </h2>
                  <p>
                    Watch tutorials and read detailed articles in Wono help
                    center
                  </p>
                  <span>Go to FAQ →</span>
                </div>
                <div className="themePage-website-support-grid-1">
                  <h2>
                    <b>Contact Us</b>
                  </h2>
                  <p>
                    Get support by chat or schedule a call with a Customer Care
                    Expert
                  </p>
                  <span onClick={()=>{
                    navigate('/contact')
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}>Connect With us →</span>
                </div>
                <div className="themePage-website-support-grid-1">
                  <h2>
                    <b>Hire a pro</b>
                  </h2>
                  <p>
                    Get help at any stage -- from site creation to online growth
                  </p>
                  <span onClick={()=>{
                    navigate('/services')
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}>Browse all services →</span>
                </div>
              </div>
            </div>
          </div>

          <div className="themePage-website-success-section">
            <div className="themePage-website-success ">
              <h1>Tomorrow's success starts today</h1>
              <div
                style={{
                  padding: "2rem 0 0 0",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "45%",
                }}
                className="themePage-featured-button">
                <button
                  className="get-started-main-button"
                  onClick={() => {
                    navigate("/register");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}>
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Themes;
