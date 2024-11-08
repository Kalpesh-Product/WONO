import React, { useState, useEffect } from "react";
import ClientSidebar from "../components/ClientSidebar"; // Import the Sidebar component
import RecurringClientsWidget from "../Widgets/RecurringClientsWidget";
import SalesProgressWidget from "../Widgets/SalesProgressWidget";
import SalesTargetWidget from "../Widgets/SalesTargetWidget";
import RevenueVsExpensesWidget from "../Widgets/RevenueVsExpensesWidget";
import ProgressDoughnutWidget from "../Widgets/ProgressDoughnutWidget";
import BarGraphWidget from "../Widgets/BarGraphWidget";
import WelcomeWidget from "../Widgets/WelcomeWidget";

const WidgetSection = ({ heading, widgets }) => (
  <div>
    <h2 className="text-2xl font-semibold">{heading}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {widgets.map((Widget, index) => (
        <div
          key={index}
          className="bg-white p-0 shadow-md rounded-lg h-[100%] overflow-auto"
        >
          {Widget}
        </div>
      ))}
    </div>
  </div>
);

const Dashboard = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
    console.log(user); // Log the user object on component mount
    console.log(user.name);
  }); // Empty dependency array ensures this only runs once on mount

  const allWidgets = {
    Sales: [
      <RecurringClientsWidget />,
      <SalesProgressWidget />,
      <SalesTargetWidget />,
    ],
    Finance: [
      <RevenueVsExpensesWidget />,
      <ProgressDoughnutWidget />,
      <BarGraphWidget />,
    ],
    Other: [
      <WelcomeWidget />,
      "Widget 8", // Add actual widgets here
    ],
  };

  return (
    <div className="flex ">
      {/* Sidebar */}
      <ClientSidebar className="sticky top-0"/>

      {/* Main Dashboard Content */}
      {/* <div className="flex-1 p-6  bg-gray-100 space-y-8">

        <h1 className="text-3xl">Welcome {user.name}</h1>
        <h2>Wono-{user.role}-{user.department}</h2>
        <h2 className="text-2xl font-semibold">Sales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <div className="bg-white  p-0 shadow-md rounded-lg h-[230px] overflow-auto">
            <RecurringClientsWidget />
          </div>
          <div className="bg-white p-0 shadow-md rounded-lg">
            <SalesProgressWidget />
          </div>
          <div className="bg-white p-0 shadow-md rounded-lg">
            <SalesTargetWidget />
          </div>
        </div>


        <h2 className="text-2xl font-semibold">Finance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <RevenueVsExpensesWidget />
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <ProgressDoughnutWidget />
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <BarGraphWidget />
          </div>
        </div>

    
        <h2 className="text-2xl font-semibold">Heading - 3</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <WelcomeWidget />
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            Widget 8
          </div>
        </div>
      </div> */}

      <div className="flex-1 p-6 bg-gray-100 space-y-8">
        {/* Heading 1 */}
        <h1 className="text-3xl">Welcome {user.name}</h1>
        <h2>
          Wono-{user.role}-{user.department}
        </h2>

        {/* Conditionally render widgets based on user role */}
        {(user.role === "Master Admin" || user.role === "Super Admin") && (
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            {/* Sales Widget */}
            <div className="bg-white p-4  rounded-lg h-[100%] ">
              <WidgetSection heading="Sales" widgets={allWidgets.Sales} />
            </div>

            {/* Finance Widget */}
            <div className="bg-white p-4  rounded-lg h-[100%] ">
              <WidgetSection heading="Finance" widgets={allWidgets.Finance} />
            </div>

            {/* Other Widgets */}
            <div className="bg-white p-4  rounded-lg h-[100%] ">
              <WidgetSection heading="Heading - 3" widgets={allWidgets.Other} />
            </div>
          </div>
        )}

        {/* For Admin or Employee, display only Sales section */}
        {user.department === "Sales" && (
          <div className="bg-white p-4 rounded-lg h-[100%] ">
            <WidgetSection heading="Sales" widgets={allWidgets.Sales} />
          </div>
        )}

        {user.department === "Finance" && (
          <div className="bg-white p-4 rounded-lg h-[100%] ">
            <WidgetSection heading="Finance" widgets={allWidgets.Finance} />
          </div>
        )}

        {user.department === "HR" && (
          <div className="bg-white p-4 rounded-lg h-[100%] ">
            <WidgetSection heading="HR" widgets={allWidgets.HR} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
