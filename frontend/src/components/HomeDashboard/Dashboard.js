import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
// import "../../layout/DashboardStyle/dashboard.css";
import "../../layout/DashboardStyle/Ticker.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Ticker from "./Ticker";

const Dashboard = () => {
  const navigate = useNavigate();
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  // axios.defaults.withCredentials = true;
  // useEffect(() => {
  //   axios
  //     .post("/")
  //     .then((response) => {
  //       console.log(response);
  //       if (!response.data.valid) {
  //         navigate("/login");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error checking session:", error);
  //       navigate("/login");
  //     });
  // }, [navigate]);

  const openSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <>
      {/* <Header openSidebar={openSidebar} />
      <div className='dashboard-container'>
        <div style={{ width: '100%' }}>
          <Sidebar openSidebarToggle={openSidebarToggle} openSidebar={openSidebar} />
        </div>
        <div style={{ width: '100%', padding: 0 }}>
          <Home />
        </div>
      </div> */}
      {/* <Header openSidebar={openSidebar} /> */}
      <div className="">
        {/* <div style={{ width: '100%' }}>
          <Sidebar openSidebarToggle={openSidebarToggle} openSidebar={openSidebar} />
        </div> */}
        <div
          className="cont"
          // style={{ width: "100%", padding: 0, height: "25rem" }}>
          style={{ width: "100%", padding: 0, height: "70vh" }}>
          <Ticker />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
