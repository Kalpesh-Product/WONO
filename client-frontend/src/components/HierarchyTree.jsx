import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import EmployeeProfile from "./AccessTabViewModel/EmployeeProfile";
import AccessHierarchyTab from "./AccessTabViewModel/AccessHierarchyTab";

const TreeNode = ({ node }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("tab-1");

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-start mb-6 space-y-4 w-full max-w-[600px]">
      {/* Modal to show the user's details */}
      <Modal open={showModal} onClose={closeModal}>
        <div className="relative w-full max-w-4xl h-[90vh] overflow-hidden p-6 bg-white rounded-lg shadow-lg">
          <div className="flex items-center p-4 bg-white rounded-lg shadow-md justify-between mb-4">
            <div className="flex flex-row gap-3">
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-full text-white font-bold mr-3 ${getNodeColor(
                  node.name
                )}`}
              >
                {getInitials(node.name)}
              </div>
              <div>
                <h2 className="text-xl font-semibold">{node.name}</h2>
                <p className="text-gray-500">Active</p>
              </div>
            </div>
          </div>

          {/* Tab view */}
          <div className="mx-auto">
            <ul className="flex justify-center border-b mb-4">
              <li className="w-1/2 text-center" role="presentation">
                <button
                  className={`text-md py-2 w-full ${
                    activeTab === "tab-1"
                      ? "border-b-4 border-blue-500 text-blue-600"
                      : ""
                  }`}
                  onClick={() => setActiveTab("tab-1")}
                >
                  PROFILE
                </button>
              </li>
              <li className="w-1/2 text-center" role="presentation">
                <button
                  className={`text-md py-2 w-full ${
                    activeTab === "tab-2"
                      ? "border-b-4 border-blue-500 text-blue-600"
                      : ""
                  }`}
                  onClick={() => setActiveTab("tab-2")}
                >
                  ACCESS
                </button>
              </li>
            </ul>
            <div className="overflow-y-auto max-h-[70vh]">
              {activeTab === "tab-1" && (
                <div className="flex flex-col items-center justify-center mt-3">
                  <EmployeeProfile data={node} />
                </div>
              )}
              {activeTab === "tab-2" && (
                <div className="flex flex-col items-center justify-center mb-10">
                  <AccessHierarchyTab />
                </div>
              )}
            </div>
          </div>
        </div>
      </Modal>

      <div
        className="flex items-center border border-gray-300 rounded-lg p-4 shadow-md w-full cursor-pointer transition-transform duration-300 ease-in-out"
        onClick={openModal}
      >
        <div
          className={`flex items-center justify-center w-12 h-12 rounded-full text-white font-bold mr-3 ${getNodeColor(
            node.name
          )}`}
        >
          {getInitials(node.name)}
        </div>
        <div className="flex-1">
          <div className="font-semibold text-lg">
            {node.name} - {node.department}
          </div>
          <div className="text-gray-600 text-sm">{node.designation}</div>
        </div>
        {node.reports.length > 0 && (
          <motion.div
            onClick={(e) => {
              e.stopPropagation();
              toggleExpand();
            }}
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-gray-500 ml-2"
          >
            ▲
          </motion.div>
        )}
      </div>
      <AnimatePresence>
        {isExpanded && node.reports.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="pl-4 sm:pl-8 md:pl-12 border-l-2 border-gray-300 overflow-hidden"
          >
            {node.reports.map((report) => (
              <TreeNode key={report.name} node={report} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function OrgTree({ data }) {
  return (
    <div className="flex flex-col items-start p-4 w-full">
      {data.map((node) => (
        <TreeNode key={node.name} node={node} />
      ))}
    </div>
  );
}

const getInitials = (name) => {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
};

const getNodeColor = (name) => {
  const colors = [
    "bg-orange-600",
    "bg-purple-600",
    "bg-yellow-600",
    "bg-green-600",
    "bg-blue-600",
    "bg-red-600",
    "bg-teal-600",
    "bg-pink-600",
  ];
  const hash = Array.from(name).reduce(
    (acc, char) => acc + char.charCodeAt(0),
    0
  );
  return colors[hash % colors.length];
};
