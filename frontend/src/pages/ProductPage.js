import React, { useState } from "react";
import CafeImage from "../assets/WONO_images/img/website-builder/new-layout/cafe.png";
import BiznestImage from "../assets/WONO_images/img/products-images/biznestImage.webp";
import BiznestImageMockup from "../assets/WONO_images/img/website-builder/new-layout/mobile/mockups/biznest-mockup.webp";
import BiznestImageOverlay from "../assets/WONO_images/img/products-images/biznestImage-overlay.png";
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
import Hostels from "../assets/WONO_images/img/website-builder/new-layout/hostels.png";
import Hostels_mockup from "../assets/WONO_images/img/website-builder/new-layout/mobile/mockups/hostels.png";
import TickmarkImg from "../assets/check.png";
import blueTickmarkImg from "../assets/blue-tick-no-bg-15.png";
import "../styles/bodyProduct.css";
import { useNavigate, useLocation } from "react-router-dom";

const ProductPage = () => {
  const [showAll, setShowAll] = useState(false);
  const perks = [
    {
      icon: "fa-regular fa-circle-check",
      title: "Works with latest wono changes",
      description:
        "Themes on the Wono Theme Store are guaranteed to stay up to date and work with Wono's ever-growing feature set.",
    },
    {
      icon: "fa-solid fa-gauge-simple-high",
      title: "Speed tested and approved",
      description:
        "Every theme in the Theme Store meets Wono's performance standards, ensuring a faster shopping experience for your buyers.",
    },
    {
      icon: "fa-regular fa-clock",
      title: "Unlimited free trial",
      description:
        "Try the theme for free with your own products, brand colors, and customizations. One-time payment of $300 if you publish the theme to your store.",
    },
    {
      icon: "fa-solid fa-images",
      title: "Free high resolution photos",
      description:
        "Demo stores aren't included, but you can get free stock photos from Wono Burst.",
    },
    {
      icon: "fa-solid fa-window-maximize",
      title: "Free theme updates",
      description:
        "Get the latest theme features and fixes from the Theme Store. You can redownload your purchase at any time.",
    },
    {
      icon: "fa-regular fa-id-card",
      title: "Non-expiring license for one store",
      description:
        "Your payment entitles you to use the theme on a single store, and keep it as long as you like.",
    },
  ];

  const features = [
    "Website/ Native Apps",
    "Payment Gateway",
    "Booking Engine",
    "Customer Profile",
    "No code & Self-serve",
  ];
  const recommendations = [
    {
      src: BiznestImage,
      mockup: BiznestImageMockup,
      alt: "BiznestImage",
      tag: "co-working",
    },
    {
      src: CoWorkingImage,
      mockup: CoWorkingImageMockup,
      alt: "Co-Working Image",
      tag: "co-working",
    },
    {
      src: CoLivingImage,
      mockup: CoLivingImageMockup,
      alt: "Co-Living Image",
      tag: "co-living",
    },
    {
      src: CoWorkingMewo,
      mockup: CoWorkingMewoMockup,
      alt: "CoWorkingMewo",
      tag: "co-working",
    },
    {
      src: Boutique,
      mockup: BoutiqueMockup,
      alt: "Boutique Image",
      tag: "boutique",
    },
    { src: CoWorkingImage_2,mockup:CoWorkingNomad, alt: "CoLivingImage_2", tag: "co-working" },
    { src: CoWorkingImage_3,mockup:CoWorkingImage_3_Mockup, alt: "CoLivingImage_3", tag: "co-working" },
    { src: Cafe_2,mockup:Cafe2Mockup, alt: "Cafe_2", tag: "cafe" },
    { src: Cafe_3,mockup: Cafe3Mockup, alt: "Cafe_3", tag: "cafe" },
    { src: Hostels,mockup: Hostels_mockup, alt: "Hostels", tag: "hostels" },
  ];

  const navigate = useNavigate();

  const location = useLocation();
  const { image: initialImage } = location.state || {
    image: { src: BiznestImage, tag: "co-working", alt: "Product Image" },
  };

  const [currentImage, setCurrentImage] = useState(initialImage);

  // Filter the recommendations based on the current image's tag
  const filteredRecommendations = recommendations.filter(
    (rec) => rec.tag === currentImage.tag
  );

  const handleViewMore = () => {
    setShowAll(true); // Show all recommendations
  };
  // Handle image click in the recommendations grid
  const handleImageClick = (newImage) => {
    setCurrentImage(newImage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="product-page-master">
        <div className="product-page-section">
          <div className="product-page">
            <div className="product-page-header">
              {/* <h1>Product Page</h1> */}
            </div>
            <div className="product-page-content">
              <div className="product-page-grid">
                <div className="product-page-left-container">
                  <div className="product-page-grid-item">
                    <h1>Inclusions</h1>
                    <div className="product-page-feature">
                      {features.map((feature, index) => (
                        <div key={index} className="product-page-features">
                          {/* <img src={TickmarkImg} alt="tick-mark" /> */}
                          <img
                            className="blut-tick-img"
                            src={blueTickmarkImg}
                            alt="tick-mark"
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="product-page-button-space">
                      <button
                        style={{
                          backgroundColor: "white",
                          color: "black",
                          marginBottom: "2rem",
                          marginLeft: "0",
                        }}
                        onClick={() => navigate("/login")}
                        className="product-page-button">
                        Try theme
                      </button>
                    </div>
                    <div className="product-page-update-text">
                      <span>Last updated on Sep 11, 2024</span>
                      <span>Version 1.0</span>
                    </div>
                  </div>
                </div>

                <div className="product-page-image-container">
                  {/* <img src={currentImage.src} alt={currentImage.alt} /> */}
                  <img src={currentImage.mockup} alt={currentImage.alt} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-page-perks-section">
          <div className="product-page-perks">
            <div className="product-page-perks-grid">
              <div className="product-page-perks-grid-1">
                <span>
                  Built with confidence &#x2014; <br /> The theme store promise
                </span>
              </div>
              <div className="product-page-perks-grid-2">
                {perks.map((perk, index) => (
                  <div key={index} className="product-page-perks-grid-2-item">
                    <div className="product-page-perks-grid-2-item-layout">
                      <i className={perk.icon}></i>
                      <div className="product-page-perks-description">
                        <h4>{perk.title}</h4>
                        <span>{perk.description}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="product-page-reccomendations-section">
          <div className="product-page-reccomendations">
            <div className="product-page-reccomendations-header">
              <h2>Few more suggestions for you</h2>
            </div>
            <div className="product-page-reccomendations-grid">
              {filteredRecommendations
                .slice(0, showAll ? filteredRecommendations.length : 4)
                .map((rec, index) => (
                  <div
                    key={index}
                    className="product-page-reccomendations-grid-image"
                    onClick={() => handleImageClick(rec)}>
                    <img src={rec.src} alt={rec.alt} />
                  </div>
                ))}
            </div>
            <div className="themes-view-button">
              {filteredRecommendations.length > 4 && !showAll && (
                <button onClick={handleViewMore} className="submit-button">
                  Load More
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="product-page-build-section">
          <div className="product-page-build">
            <span>
              BUILD FAST, SELL MORE AND GROW MORE REVENUES IMMEDIATELY WITH WoNo
            </span>
            <div className="product-page-build-button-space">
              <button onClick={() => {
                navigate("/register");
                window.scrollTo({ top: 0, behavior: "instant" });
              }} className="product-page-button">It's FREE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
