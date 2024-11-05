import React, { useState } from "react";
import { OrganizationChart } from "primereact/organizationchart";

export default function Access() {
  const [data] = useState([
    {
      expanded: true,
      type: "person",
      data: {
        image:
          "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
        name: "Amy Elsner",
        title: "CEO",
      },
      children: [
        {
          expanded: true,
          type: "person",
          data: {
            image:
              "https://primefaces.org/cdn/primereact/images/avatar/annafali.png",
            name: "Anna Fali",
            title: "CMO",
          },
          children: [
            {
              label: "Sales",
            },
            {
              label: "Marketing",
            },
          ],
        },
        {
          expanded: true,
          type: "person",
          data: {
            image:
              "https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png",
            name: "Stephen Shaw",
            title: "CTO",
          },
          children: [
            {
              label: "Development",
            },
            {
              label: "UI/UX Design",
            },
          ],
        },
      ],
    },
  ]);

  const nodeTemplate = (node) => {
    if (node.type === "person") {
      return (
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg max-w-sm text-center">
          <img
            alt={node.data.name}
            src={node.data.image}
            className="mb-4 w-20 h-20 rounded-full border-4 border-indigo-500"
          />
          <span className="font-semibold text-lg text-indigo-800 mb-2">
            {node.data.name}
          </span>
          <span className="text-base text-gray-600">{node.data.title}</span>
        </div>
      );
    }

    return (
      <div className="bg-gray-100 text-gray-800 px-4 py-3 rounded-lg shadow-sm text-center text-lg font-medium">
        {node.label}
      </div>
    );
  };

  return (
    <div className="card overflow-x-auto p-8">
      <OrganizationChart
        value={data}
        nodeTemplate={nodeTemplate}
        selectionMode="multiple"
        className="organization-chart"
      />
    </div>
  );
}
