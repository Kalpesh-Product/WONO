import React, {useState, useEffect} from "react";
import ClientSidebar from "../components/ClientSidebar"; // Import the Sidebar component
import RecurringClientsWidget from "../Widgets/RecurringClientsWidget";
import SalesProgressWidget from "../Widgets/SalesProgressWidget";
import SalesTargetWidget from "../Widgets/SalesTargetWidget";
import RevenueVsExpensesWidget from "../Widgets/RevenueVsExpensesWidget";
import ProgressDoughnutWidget from "../Widgets/ProgressDoughnutWidget";
import BarGraphWidget from "../Widgets/BarGraphWidget";
import WelcomeWidget from "../Widgets/WelcomeWidget";



const Dashboard = () => {

  const [user, setUser] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
    console.log(user); // Log the user object on component mount
    console.log(user.name)
  }); // Empty dependency array ensures this only runs once on mount


  
  return (
    <div className="flex">
      {/* Sidebar */}
      <ClientSidebar />

      {/* Main Dashboard Content */}
      <div className="flex-1 p-6  bg-gray-100 space-y-8">
        {/* Heading 1 */}
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

        {/* Heading 2 */}
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

        {/* Heading 3 */}
        <h2 className="text-2xl font-semibold">Heading - 3</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <WelcomeWidget />
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            Widget 8
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
