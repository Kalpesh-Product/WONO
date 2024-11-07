import React from "react";
import BiznestLogo from "../LandingPageImages/biz-nest.png";
import { useNavigate } from "react-router-dom";

const ClientHeader = () => {
  const navigate = useNavigate()

  const handleLogout = ()=>{
    localStorage.removeItem("user")
    navigate('/login')
  }
  return (
    <header className="bg-black text-white py-4 px-6 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        {/* Logo Text */}
        <span className="text-white text-xl font-semibold">
          {/* <span className="text-red-600">BIZ</span> Nest */}
          <img src={BiznestLogo} onClick={()=>{
            navigate('/')
            }} alt="" className="rounded cursor-pointer" />
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6">
        <a href="#" className="text-white hover:text-gray-400">
          Home
        </a>
        <a onClick={handleLogout} href="#" className="text-white hover:text-gray-400">
          Logout
        </a>
      </nav>
    </header>
  );
};

export default ClientHeader;
