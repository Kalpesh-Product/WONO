import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDepartmentsOpen, setIsDepartmentsOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Menu items array (without DASHBOARD)
  const menuItems = [
    { name: "REPORTS", icon: "https://via.placeholder.com/24" },
    { name: "TASKS", icon: "https://via.placeholder.com/24" },
    { name: "CALENDAR", icon: "https://via.placeholder.com/24" },
    { name: "CHAT", icon: "https://via.placeholder.com/24" },
    { name: "ACCESS", icon: "https://via.placeholder.com/24" },
    { name: "PROFILE", icon: "https://via.placeholder.com/24" },
  ];

  const departments = [
    { name: "FRONTEND", icon: "https://via.placeholder.com/24" },
    { name: "FINANCE & ACCOUNTING", icon: "https://via.placeholder.com/24" },
    { name: "SALES", icon: "https://via.placeholder.com/24" },
    { name: "HUMAN RESOURCE", icon: "https://via.placeholder.com/24" },
    { name: "CUSTOMER SERVICE", icon: "https://via.placeholder.com/24" },
    { name: "MARKETING", icon: "https://via.placeholder.com/24" },
    { name: "CAFE (F&B)", icon: "https://via.placeholder.com/24" },
    { name: "ADMINISTRATION", icon: "https://via.placeholder.com/24" },
    { name: "MAINTENANCE", icon: "https://via.placeholder.com/24" },
    { name: "LEGAL", icon: "https://via.placeholder.com/24" },
  ];

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const departmentMapping = {
    TopManagement: [
      "FRONTEND",
      "FINANCE & ACCOUNTING",
      "SALES",
      "HUMAN RESOURCE",
      "CUSTOMER SERVICE",
      "MARKETING",
      "CAFE (F&B)",
      "ADMINISTRATION",
      "MAINTENANCE",
      "LEGAL",
    ],
    Tech: ["FRONTEND"],
    Finance: ["FINANCE & ACCOUNTING"],
    Sales: ["SALES"],
    HR: ["HUMAN RESOURCE", "CUSTOMER SERVICE"],
    Marketing: ["MARKETING"],
    Cafe: ["CAFE (F&B)"],
    Admin: ["ADMINISTRATION"],
    Maintenance: ["MAINTENANCE"],
    Legal: ["LEGAL"],
  };

  // Filter departments based on user's department using departmentMapping
  const filteredDepartments = departments.filter((dept) =>
    (departmentMapping[user?.department] || []).includes(dept.name)
  );

  return (
    <div
      className={`flex flex-col bg-gray-800 text-white ${
        isCollapsed ? "w-20" : "w-64"
      } transition-width duration-300 `}
    >
      {/* Collapse button */}
      <div className="sticky top-20">

      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="p-4 flex items-center justify-between focus:outline-none hover:bg-gray-700"
      >
        {!isCollapsed && <span>Menu</span>}
        <motion.div
          className="ml-auto" // Push arrow to the far right
          animate={{ rotate: isCollapsed ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          ➤
        </motion.div>
      </button>

      {/* Menu items */}
      <nav className="flex flex-col space-y-2 mt-8  ">
        {/* Hardcoded DASHBOARD menu item */}
        <a href="#dashboard" className="p-4 hover:bg-gray-700 text-sm">
          {isCollapsed && (
            <img
              src="https://via.placeholder.com/24"
              alt="dashboard"
              className="mr-2 inline-block"
            />
          )}
          <span className={isCollapsed ? "hidden" : ""}>DASHBOARD</span>
        </a>

        {/* Departments Dropdown */}
        {!isCollapsed && (
          <div className="relative">
            <button
              onClick={() => setIsDepartmentsOpen(!isDepartmentsOpen)}
              className="p-4 w-full text-left hover:bg-gray-700 flex justify-between items-center"
            >
              <span>Departments</span>
              <motion.div
                animate={{ rotate: isDepartmentsOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ➤
              </motion.div>
            </button>

            {/* Dropdown content */}
            <div
              className={`${
                isDepartmentsOpen ? "max-h-screen" : "max-h-0"
              } overflow-hidden transition-all duration-300 ease-in-out bg-gray-700 pl-8 space-y-2`}
            >
              {filteredDepartments.map((dept, index) => (
                <a
                  key={index}
                  href={`#${dept.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex items-center p-4 hover:bg-gray-700"
                >
                  <img
                    src={dept.icon}
                    alt={`${dept.name} icon`}
                    className="mr-3"
                  />
                  <span>{dept.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Other Menu items */}
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={`#${item.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="p-4 hover:bg-gray-700 text-sm"
          >
            {isCollapsed && (
              <img
                src={item.icon}
                alt={item.name}
                className="mr-2 inline-block"
              />
            )}
            <span className={isCollapsed ? "hidden" : ""}>{item.name}</span>
          </a>
        ))}
      </nav>
      </div>
    </div>
  );
};

export default Sidebar;
