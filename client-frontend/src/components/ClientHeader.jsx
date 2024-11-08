import React, { useState } from "react";
import BiznestLogo from "../LandingPageImages/biz-nest.png";
import { useNavigate } from "react-router-dom";

const ClientHeader = () => {
  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [isModelOpen, setIsModalOpen] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result); // set the image to display in the container
      reader.readAsDataURL(file);
    }
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <>
      <header className="bg-black text-white py-4 px-6 flex justify-between items-center sticky top-0">
        {/* Logo Section */}
        {/* <div className="flex items-center">
        <span className="text-white text-xl font-semibold">
          <img
            src={BiznestLogo}
            onClick={() => {
              navigate("/");
            }}
            alt=""
            className="rounded cursor-pointer"
          />
        </span>
      </div> */}
        <div className="flex items-center">
          <span className="text-white text-xl font-semibold">
            <img
              src={image}
              onClick={() => setIsModalOpen(true)}
              alt="Add Logo"
              className="rounded cursor-pointer max-h-16 max-w-32"
            />
          </span>
        </div>
        {/* <div
          className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 cursor-pointer"
          onClick={() => setIsModalOpen(true)}>
          <img
            src={image}
            alt="Add Logo"
            class="w-16 h-16 rounded-full mr-4"></img>
        </div> */}

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <span
            className="text-white hover:text-gray-400 cursor-pointer"
            onClick={() => navigate("/")}>
            Home
          </span>
          <a
            onClick={handleLogout}
            className="text-white hover:text-gray-400 cursor-pointer">
            Logout
          </a>
        </nav>
      </header>
      {/* Modal for Image Upload */}

      {isModelOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-xl font-semibold mb-4">Upload Company Logo</h3>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
            />
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ClientHeader;
