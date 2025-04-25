import React from "react";
import "../styles/bodyThemes.css";
import "../styles/specialClasses.css";
import CafeImage from "../assets/WONO_images/img/website-builder/new-layout/cafe.png";
import BiznestImage from "../assets/WONO_images/img/products-images/biznestImage.webp";
import BiznestImageMockup from "../assets/WONO_images/img/website-builder/new-layout/mobile/mockups/biznest-mockup.webp";
import Cafe_2 from "../assets/WONO_images/img/website-builder/new-layout/cafe-2.webp";
import Cafe2Mockup from "../assets/WONO_images/img/website-builder/new-layout/mobile/mockups/cafe-mockup-2.png";
import Cafe_3 from "../assets/WONO_images/img/website-builder/new-layout/cafe-3.webp";
import Cafe3Mockup from "../assets/WONO_images/img/website-builder/new-layout/mobile/mockups/cafe-mockup-3.png";
import CoWorkingImage from "../assets/WONO_images/img/website-builder/new-layout/co-working.webp";
import CoWorkingImageMockup from "../assets/WONO_images/img/website-builder/new-layout/mobile/mockups/co-working-mockup-bg.webp";
import CoLivingImage from "../assets/WONO_images/img/website-builder/new-layout/co-living.webp";
import CoLivingImageMockup from "../assets/WONO_images/img/website-builder/new-layout/mobile/mockups/co-living-mockup.webp";
import CoWorkingImage_2 from "../assets/WONO_images/img/website-builder/new-layout/co-working-2.webp";
import CoWorkingNomad from "../assets/WONO_images/img/website-builder/new-layout/mobile/mockups/co-living-nomad.png";
import CoWorkingImage_3 from "../assets/WONO_images/img/website-builder/new-layout/co-working-3.webp";
import CoWorkingImage_3_Mockup from "../assets/WONO_images/img/website-builder/new-layout/mobile/mockups/co-working-3.png";
import Featured from "../assets/WONO_images/img/website-builder/new-layout/featured/featured-1.png";
import Boutique from "../assets/WONO_images/img/website-builder/new-layout/boutique.webp";
import BoutiqueMockup from "../assets/WONO_images/img/website-builder/new-layout/mobile/mockups/boutique-mockup.webp";
import CoWorkingMewo from "../assets/WONO_images/img/website-builder/new-layout/co-working-mewo.webp";
import CoWorkingMewoMockup from "../assets/WONO_images/img/website-builder/new-layout/mobile/mockups/co-working-mewo-mockup.webp";
import BizNestMockup from "../assets/WONO_images/img/website-builder/new-layout/Macbook-mockup.webp";
import Hostels from "../assets/WONO_images/img/website-builder/new-layout/hostels.png";
import Hostels_mockup from "../assets/WONO_images/img/website-builder/new-layout/mobile/mockups/hostels.png";
import { useNavigate } from "react-router-dom";
import { ReactFitty } from "react-fitty";

const Themes = () => {
  const navigate = useNavigate();

  const themeImages = [
    {
      src: BiznestImage,
      mockup: BiznestImageMockup,
      alt: "BiznestImage",
      tag: "co-working",
    },
    {
      src: CoWorkingMewo,
      mockup: CoWorkingMewoMockup,
      alt: "CoWorkingMewo",
      tag: "co-working",
    },
    {
      src: CoWorkingImage,
      mockup: CoWorkingImageMockup,
      alt: "Co-Working Image",
      tag: "co-working",
    },
    {
      src: Boutique,
      mockup: BoutiqueMockup,
      alt: "Boutique Image",
      tag: "boutique",
    },
    {
      src: CoLivingImage,
      mockup: CoLivingImageMockup,
      alt: "Co-Living Image",
      tag: "co-living",
    },
    {
      src: CoWorkingImage_2,
      mockup: CoWorkingNomad,
      alt: "CoLivingImage_2",
      tag: "co-working",
    },
    {
      src: CoWorkingImage_3,
      mockup: CoWorkingImage_3_Mockup,
      alt: "CoLivingImage_3",
      tag: "co-working",
    },
    { src: Cafe_2, mockup: Cafe2Mockup, alt: "Cafe_2", tag: "cafe" },
    { src: Cafe_3, mockup: Cafe3Mockup, alt: "Cafe_3", tag: "cafe" },
    { src: Hostels, mockup: Hostels_mockup, alt: "Hostels", tag: "hostels" },
  ];

  const themeWebsiteGridData = [
    {
      title: "Faster loading",
      description: "WoNo is designed for performance so your site loads faster",
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
          <h1>Choose the best Responsive Website Theme for your business</h1>
        </div>

        <div className="themePage-content">
          <div className="themePage-content-header">
            <h3>Top Theme Recommendations</h3>
            <span>
              Cherry pick features or ask us to customize anything for your
              business growth. Fully tech ready, integrated and responsive.
            </span>
          </div>

          <div className="themePage-content-grid">
            {themeImages.map((image, index) => (
              <div className="theme-grid" key={index}>
                <img
                  onClick={() => {
                    navigate("/themes/products", { state: { image } });
                    window.scrollTo({ top: 0, behavior: "instant" });
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
                    <li>1000's advanced web capabilities</li>
                    <li>Intuitive drag and drop website editor</li>
                    <li>Powerful AI features for smart customization</li>
                    <li>Full-stack web dev tools for custom functionality</li>
                  </ul>
                </div>
                <div
                  className="themePage-featured-button"
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  <button
                    className="get-started-main-button"
                    onClick={() => {
                      navigate("/register");
                      window.scrollTo({ top: 0, behavior: "instant" });
                    }}
                  >
                    Get started
                  </button>
                </div>
              </div>

              <div className="themePage-featured-grid-2">
                <img src={BizNestMockup} alt="coWorking" />
              </div>
            </div>
          </div>
          <div className="px-[2rem] md:px-[3rem] lg:px-[7rem]">
            <hr />
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
                    className={`themePage-website-features-grid-${index + 1}`}
                  >
                    <h4>
                      <>{item.title}</>
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
                    window.scrollTo({ top: 0, behavior: "instant" });
                  }}
                >
                  Get started
                </button>
              </div>
            </div>
          </div>

          <div className="px-[7rem]">
            <hr />
          </div>
          <div className="themePage-website-support-section">
            <div className="themePage-website-support">
              <div className="themePage-website-support-header">
                <h1>We're here for you</h1>
              </div>
              <div className="themePage-website-support-grid">
                <div className="themePage-website-support-grid-1">
                  <h2>
                    <>Get answers</>
                  </h2>
                  <p>
                    Watch tutorials and read detailed articles in Wono help
                    center
                  </p>
                  <span
                    onClick={() => {
                      navigate("/faqs");
                      window.scrollTo({ top: 0, behavior: "instant" });
                    }}
                  >
                    Go to FAQ →
                  </span>
                </div>
                <div className="themePage-website-support-grid-1">
                  <h2>
                    <>Contact Us</>
                  </h2>
                  <p>
                    Get support by chat or schedule a call with a Customer Care
                    Expert
                  </p>
                  <span
                    onClick={() => {
                      navigate("/contact");
                      window.scrollTo({ top: 0, behavior: "instant" });
                    }}
                  >
                    Connect With us →
                  </span>
                </div>
                <div className="themePage-website-support-grid-1">
                  <h2>
                    <>Hire a pro</>
                  </h2>
                  <p>
                    Get help at any stage -- from site creation to online growth
                  </p>
                  <span
                    onClick={() => {
                      navigate("/modules");
                      window.scrollTo({ top: 0, behavior: "instant" });
                    }}
                  >
                    Browse all services →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Themes;
