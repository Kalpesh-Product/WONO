import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const AccessHierarchyTab = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const location = useLocation();
  const modules = {
    HR: [
      "Attendance",
      "Leave Management",
      "Payroll",
      "Payslips",
      "Leaves",
      "Holidays",
      "SOPs",
      "Policies",
      "Task Management",
      "Performance",
      "Appraisals",
      "Templates",
      "e-Signs",
    ],
    Sales: [
      "Automated SEO",
      "Personalized SEMs",
      "Ad Networks",
      "Lead Generation",
      "Social Media",
      "Email Marketing",
      "Whatssapp Integration",
      "Live chats",
      "Refferals",
      "Blogs",
      "Vlogs",
    ],
    Finance: [
      "Invoices",
      "Cashflow",
      "Projections",
      "Budgets",
      "Working Capital",
      "Financial Reports",
      "Collections",
      "Notifications",
      "FollowUps",
      "Taxes",
      "Compliances",
      "Analytics",
    ],
    Marketing: [
      "Campaigns",
      "Analytics",
      "Social Media",
      "Email Marketing",
      "SMS Marketing",
      "Whatssapp Integration",
      "Live chat",
      "Refferals",
      "Blogs",
      "Vlogs",
    ],
    Frontend: [
      "Website",
      "Booking",
      "Mobile Site",
      "IOS App",
      "Android App",
      "Payment Gateway",
      "Customer Profile",
      "Notifications",
      "Chat",
      "Tickets",
      "Events",
      "Customer Service",
    ],
    "Finance & Accounting": [
      "Invoicing",
      "Cashflow",
      "Projections",
      "Budgets",
      "Working Capital",
      "Financial Reports",
      "Collections",
      "Notifications",
      "Follow Ups",
      "Taxes",
      "Compliances",
      "Analytics",
    ],
    "Customer Management Services": [
      "Ticket Raising",
      "Complaint Logs",
      "Meeting Rooms",
      "Cafe Orders",
      "Visitors",
      "Announcements",
      "Feedback",
      "Customer Ratings",
      "Customer Service",
      "Auto Responses",
      "Reports",
      "Analytics",
    ],
    "Reports and Analytics": [
      "Company Dashboard",
      "Company Trends",
      "Bussiness Trends",
      "Vendor Payouts",
      "Cashflow",
      "Key Notifications",
      "Full Data analysis",
      "Customer Reports",
      "Employee Reports",
      "Milesstone Reports",
      "Taxes Reports",
      "Customised Reports",
    ],
  };

  const handleCheckboxChange = (module, submodule = null) => {
    setCheckedItems((prevState) => {
      const newState = { ...prevState };

      if (submodule) {
        newState[module] = {
          ...newState[module],
          [submodule]: !newState[module]?.[submodule],
        };
        const allChecked = modules[module].every(
          (sub) => newState[module][sub]
        );
        newState[module].all = allChecked;
      } else {
        const allSelected = !newState[module]?.all;
        newState[module] = {
          all: allSelected,
          ...Object.fromEntries(
            modules[module].map((sub) => [sub, allSelected])
          ),
        };
      }

      return newState;
    });
  };

  const isAccessPage = location.pathname === "/access";
  return (
    <div className="mb-4">
      {Object.keys(modules).map((module) => (
        <div key={module} className="mb-4">
          <label className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              checked={checkedItems[module]?.all || false}
              onChange={() => handleCheckboxChange(module)}
              className="cursor-pointer"
            />
            <span className="font-semibold">{module}</span>
          </label>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 ml-6">
            {modules[module].map((submodule) => (
              <label key={submodule} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={checkedItems[module]?.[submodule] || false}
                  onChange={() => handleCheckboxChange(module, submodule)}
                  className="cursor-pointer"
                />
                <span>{submodule}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      {isAccessPage && (
        <div className="flex items-center justify-center">
          <button className="bg-green-800 w-24 h-10 rounded-md mt-6">
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default AccessHierarchyTab;
