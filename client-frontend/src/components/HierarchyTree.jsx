import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import EmployeeProfile from "./AccessTabViewModel/EmployeeProfile";

const TreeNode = ({ node }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showModal, setShowModal] = useState(false);

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
    <div className="flex flex-col items-start mb-6 space-y-4">
      {/* Modal to show the user's details */}
      <Modal open={showModal} onClose={closeModal}>
        <EmployeeProfile data={node} />{" "}
        {/* Use EmployeeProfile with node data */}
      </Modal>

      <div
        className="flex items-center border border-gray-300 rounded-lg p-4 shadow-md w-full sm:w-72 md:w-96 mb-4 cursor-pointer transition-transform duration-300 ease-in-out"
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
              e.stopPropagation(); // Prevents modal from opening when expanding/collapsing
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
            className="pl-8 md:pl-12 border-l-2 border-gray-300 overflow-hidden"
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
    <div className="flex flex-col items-start p-4">
      {data.map((node) => (
        <TreeNode key={node.name} node={node} />
      ))}
    </div>
  );
}

// Helper function to get initials
const getInitials = (name) => {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
};

// Helper function to set color based on name
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
