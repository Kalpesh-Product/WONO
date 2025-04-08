import React from "react";
import WebsiteHeader from "../components/WebsiteBuilderComponents/WebsiteHeader";
import WebsiteHero from "../components/WebsiteBuilderComponents/WebsiteHero";
import WebsiteAbout from "../components/WebsiteBuilderComponents/WebsiteAbout";
import WebsiteLogin from "../components/WebsiteBuilderComponents/WebsiteLogin";
import WebsiteFooter from "../components/WebsiteBuilderComponents/WebsiteFooter";
import WebsiteServices from "../components/WebsiteBuilderComponents/WebsiteServices";

const WebsitePage = () => {
  return (
    <>
      <WebsiteHeader />

      {/* Website Body */}
      <div>
        <WebsiteHero />

        <WebsiteAbout />
        <WebsiteServices />
        {/* <WebsiteLogin /> */}
      </div>
      <WebsiteFooter />
    </>
  );
};

export default WebsitePage;
