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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
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
              height: isMobile ? "30vh" : height ? height : "60vh",
              objectFit: isMobile ? "contain" : imageFit ? imageFit : "cover",
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
