import React, { useState } from "react";
// import iconSrc from "../LandingPageImages/dummy-icon.png";
import dashboardIcon from "../LandingPageImages/dummy-icon.png";

const ClientLandingPage = () => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* //{" "}
      <div>
        //{" "}
        <div>
          // <h2>Welcome, Abrar Skaikh</h2>
          //{" "}
          <div>
            // <button>Edit</button>
            //{" "}
          </div>
          // <div>6 Icons</div>
          // <h2>Quick Launch</h2>
          // <div>4 Icons</div>
          //{" "}
        </div>
        //{" "}
      </div> */}
      <div className="bg-white p-8 ">
        {/* Welcome Section */}
        <div className="flex justify-between items-center mb-12 flex-wrap">
          <h1 className="text-3xl md:text-4xl font-bold ps-[7rem] uppercase">
            Welcome, Abrar Shaikh
          </h1>
          <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 mt-4 md:mt-0">
            Edit
          </button>
        </div>

        {/* Main Grid Section */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-12"> */}
        <div className="grid grid-cols-2 sm:grid-cols-3  gap-8 mb-12">
          {/* <Card title="Dashboard" iconSrc="dashboard-icon.png" /> */}
          {/* <Card title="Dashboard" iconSrc="../LandingPageImages/dummy-icon.png" /> */}
          <Card title="Dashboard" iconSrc={dashboardIcon} />
          <Card title="Services" iconSrc={dashboardIcon} />
          <Card title="Chat" iconSrc={dashboardIcon} />
          <Card title="Profile" iconSrc={dashboardIcon} />
          <Card title="Calendar" iconSrc={dashboardIcon} />
          <Card title="Access" iconSrc={dashboardIcon} />
        </div>

        {/* Quick Launch Section */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8 ps-[7rem] uppercase">
          Quick launch
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-12">
          <Card title="Tasks" iconSrc={dashboardIcon} />
          <Card title="Ticket" iconSrc={dashboardIcon} />
          <Card title="Meeting" iconSrc={dashboardIcon} />
          <Card title="Customer Service" iconSrc={dashboardIcon} />
        </div>

        {/* Add More Button */}
        <div className="flex justify-center">
          <button
            className="bg-red-500 text-white py-3 px-8 rounded-lg hover:bg-red-600"
            onClick={openModal}>
            Add More
          </button>
        </div>
      </div>
      {/* MODAL CODE */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Button to open the modal */}
        {/* <button
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
          onClick={openModal}>
          Open Modal
        </button> */}

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="absolute inset-0" onClick={closeModal}></div>

            <div className="bg-white w-11/12 max-w-md p-8 rounded-lg shadow-lg z-10 relative overflow-y-auto max-h-[80vh]">
              {/* Modal Content */}
              <h2 className="text-3xl font-bold mb-4 uppercase">
                Add Services
              </h2>
              <div className="mb-6">
                {/* This is a responsive modal. Click outside or the close button to
                dismiss it. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Eveniet provident at vel adipisci corrupti eum quae
                mollitia incidunt, perferendis officia necessitatibus! Nobis, at
                hic? Assumenda saepe dolore perferendis doloremque rerum
                delectus quod? Deserunt eum, aut harum ipsam rem dolorem
                facilis, odit inventore veniam sint eligendi libero repellat
                neque debitis numquam? */}
                {/* Quick Launch Section */}
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-8 ps-[7rem] uppercase">
                    Frontend
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-12">
                    <Card title="Tasks" iconSrc={dashboardIcon} />
                    <Card title="Ticket" iconSrc={dashboardIcon} />
                    <Card title="Meeting" iconSrc={dashboardIcon} />
                    <Card title="Customer Service" iconSrc={dashboardIcon} />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl  font-bold mb-8 ps-[7rem] uppercase">
                    HR
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-12">
                    <Card title="Tasks" iconSrc={dashboardIcon} />
                    <Card title="Ticket" iconSrc={dashboardIcon} />
                    <Card title="Meeting" iconSrc={dashboardIcon} />
                    <Card title="Customer Service" iconSrc={dashboardIcon} />
                  </div>
                </div>
              </div>

              {/* Close button */}
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

// Card Component
const Card = ({ title, iconSrc }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img src={iconSrc} alt={title} className="w-16 h-16 mb-4" />
      <p className="text-lg font-medium">{title}</p>
    </div>
  );
};

export default ClientLandingPage;
