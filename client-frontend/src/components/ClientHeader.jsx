import React from "react";
import BiznestLogo from "../LandingPageImages/BIZ Nest Logo png.png";

const ClientHeader = () => {
  return (
    <header className="bg-black text-white py-4 px-6 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        {/* Logo Text */}
        <span className="text-white text-xl font-semibold">
          {/* <span className="text-red-600">BIZ</span> Nest */}
          <img src={BiznestLogo} alt="" className="rounded" />
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6">
        <a href="#" className="text-white hover:text-gray-400">
          Home
        </a>
        <a href="#" className="text-white hover:text-gray-400">
          Logout
        </a>
      </nav>
    </header>
  );
};

export default ClientHeader;
