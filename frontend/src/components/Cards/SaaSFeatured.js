import React from "react";
import greenUnderLine from "../../assets/underline-bg/blue-line.png";
import "../../styles/component-styles/featurecard.css";
import FeatureCard from "./FeatureCard";

const SaaSFeatureBlock = ({
  title,
  underlineImg,
  description1,
  description2,
  image,
  height,
  rowReverse = false,
}) => {
  return (
    <div
      className="cursor-pointer"
      style={{
        padding: "0rem 0rem",
        backgroundColor: "#fff",
      }}
    >
      <div
        className="module-feature-card-grid"
        style={{
          flexDirection: rowReverse ? "row-reverse" : "row",
        }}
      >
        {/* Description Column (1/3 width) */}
        <div
          style={{
            flex: 1,
            fontSize: "1rem",
            lineHeight: "1.6",
            maxWidth: "100%", // remove max 600px restriction
          }}
        >
          <div className="module-feature-title">
            <h1 style={{ padding: 0 }}>
              <span className="module-feature-title-text">{title}</span>
              <hr />
            </h1>
            <div className="module-feature-underline-frame">
              <img
                style={{ width: "100%", height: "100%" }}
                src={greenUnderLine}
                alt="underline"
              />
            </div>
          </div>
          <div className="module-feature-card-main">
            {description1.map((item, index) => (
              <FeatureCard key={index} icon={item.image} title={item.title} />
            ))}
          </div>
  
        </div>

        <div style={{ flex: 2, display: "flex", justifyContent: "center",  }} className="border-[1px] border-gray-200 rounded-xl overflow-hidden">
          <img
            src={image}
            alt="feature"
            style={{
              width: "100%",
              maxWidth: "100%",
              height: height ? `${height}` : "46vh",
              objectFit:'cover',
              padding:'1rem',
              objectPosition:'top'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SaaSFeatureBlock;
