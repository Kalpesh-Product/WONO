import React from "react";
import "../../styles/component-styles/featurecard.css";
const FeatureCard = ({ title, icon }) => {
  return (
    <div
      style={{
        padding: "1.5rem 0 1.5rem 0",
        width: "100%",
        borderRadius: "1rem",
      }}
    >
      <div className="feature-card-main">
        <div
          style={{
            width: "2.5rem",
            height: "2.5rem",
            overflow: "hidden",
            objectFit: "cover",
          }}
        >
          <img
            style={{ width: "100%", height: "100%" }}
            src={icon}
            alt="image"
          />
        </div>

        <p
          style={{
            fontSize: "0.875rem",
            fontWeight: 600,
            letterSpacing: "1px",
            color: "#1a1a1a",
            margin: 0,
            fontFamily: "Popins-Regular",
          }}
        >
          {title.toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
