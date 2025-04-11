import React from "react";

const SaaSFeatureBlock = ({
  title,
  underlineImg,
  description1,
  description2,
  image,
  rowReverse = false,
}) => {
  return (
    <div
      style={{
        padding: "0rem 1rem",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: rowReverse ? "row-reverse" : "row",
          gap: "2rem",
          alignItems: "start",
          justifyContent: "space-between",
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
          <h1 style={{ padding: 0 }}>
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: `${"center"}`,
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1.5rem",
              }}
            >
              {title}
            </span>
            <hr />
          </h1>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {description1.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "white",
                  padding: "1rem",
                  display: "flex",
                  flexDirection: "row",
                  gap: "2rem",
                  alignItems: "start",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{ height: "2.5rem", width: "2.5rem", overflow: "hidden" }}
                >
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={item.image}
                    alt={`${item.title}`}
                  />
                </div>
                <span
                  style={{ fontSize: "1rem", fontFamily: "Popins-Regular" }}
                >
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Column (2/3 width) */}
        <div style={{ flex: 2, display: "flex", justifyContent: "center" }}>
          <img
            src={image}
            alt="feature"
            style={{
              width: "100%",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SaaSFeatureBlock;
