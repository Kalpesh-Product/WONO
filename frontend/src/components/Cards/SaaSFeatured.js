import React, { useEffect, useState } from "react";
import greenUnderLine from "../../assets/underline-bg/blue-line.png";
import "../../styles/component-styles/featurecard.css";
import FeatureCard from "./FeatureCard";

const SaaSFeatureBlock = ({
  title,
  underlineImg,
  description1,
  imagePosition,
  imageFit,
  image,
  height,
  rowReverse = false,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine layout based on screen width
  const isMobile = windowWidth <= 768;
  const isLaptop = windowWidth > 768 && windowWidth <= 1440;

  // Define dynamic height and objectFit
  const dynamicHeight = isMobile
    ? "15rem"
    : isLaptop
    ? "33rem"
    : height || "28rem";

  const dynamicFit = isMobile ? "contain" : imageFit || "cover";

  return (
    <div
    data-aos="fade-up"
      className="cursor-pointer"
      style={{
        padding: "0rem 0rem",
        backgroundColor: "#fff",
      }}
    >
      <div
        className="module-feature-card-grid ob"
        style={{
          flexDirection: rowReverse ? "row-reverse" : "row",
          flexWrap: "wrap",
        }}
      >
        {/* Description Column */}
        <div
          style={{
            flex: 1,
            fontSize: "1rem",
            lineHeight: "1.6",
            maxWidth: "100%",
          }}
        >
          <div className="module-feature-title">
            <h1 style={{ padding: 0 }}>
              <span className="module-feature-title-text uppercase">{title}</span>
            </h1>
            <div className="module-feature-underline-frame">
              <img
                style={{ width: "100%", height: "100%" }}
                src={greenUnderLine}
                alt="underline"
              />
            </div>
          </div>
          <div className="module-feature-card-main py-4 md:py-5">
            {description1.map((item, index) => (
              <FeatureCard key={index} icon={item.image} title={item.title} />
            ))}
          </div>
        </div>

        {/* Image Column */}
        <div
          style={{
            flex: 2,
            display: "flex",
            justifyContent: "center",
          }}
          className="border-[1px] border-gray-200 rounded-xl overflow-hidden w-[120%]"
        >
          <img
            src={image}
            alt="feature"
            style={{
              width: "100%",
              height: dynamicHeight,
              objectFit: dynamicFit,
              padding: "1rem",
              objectPosition: imagePosition ? imagePosition : "top",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SaaSFeatureBlock;
