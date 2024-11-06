import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Component for each node in the tree
const TreeNode = ({ node }) => {
  // State to track if the node is expanded or collapsed
  const [isExpanded, setIsExpanded] = useState(true);

  // Toggle function for expanding/collapsing the node
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-start mb-4">
      <div
        className="flex items-center border border-gray-300 rounded-lg p-4 shadow-md w-64 mb-2 cursor-pointer"
        onClick={toggleExpand}
      >
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-full text-white font-bold mr-3 ${getNodeColor(
            node.id
          )}`}
        >
          {getInitials(node.name)}
        </div>
        <div className="flex-1">
          <div className="font-semibold">
            {node.name} ({node.id})
          </div>
          <div className="text-gray-600">{node.role}</div>
          <div className="text-sm text-gray-500">
            Direct Reports: {node.directReports}
          </div>
        </div>
        {/* Arrow icon for expand/collapse */}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-gray-500 ml-2"
        >
          ▲
        </motion.div>
      </div>
      {/* Animate expanding/collapsing of child nodes */}
      <AnimatePresence>
        {isExpanded && node.reports.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="pl-6 border-l-2 border-gray-300 overflow-hidden"
          >
            {node.reports.map((report) => (
              <TreeNode key={report.id} node={report} />
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
        <TreeNode key={node.id} node={node} />
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

// Helper function to set color based on ID (for simplicity, using static colors)
const getNodeColor = (id) => {
  const colors = [
    "bg-orange-600", // #B86E4B equivalent
    "bg-purple-600", // #6E4BB8 equivalent
    "bg-yellow-600", // #B8A84B equivalent
    "bg-green-600", // #4BB86E equivalent
  ];
  const index = parseInt(id.slice(-1), 10) % colors.length;
  return colors[index];
};
