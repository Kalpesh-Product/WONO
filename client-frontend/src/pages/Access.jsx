import React, { useState } from "react";
import { OrganizationChart } from "primereact/organizationchart";

export default function Access() {
  const [data] = useState([
    {
      expanded: true,
      type: "person",
      className: "bg-indigo-600 text-white p-4 shadow-lg",
      style: { borderRadius: "8px" },
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
          className: "bg-purple-600 text-white p-4 shadow-lg",
          style: { borderRadius: "8px" },
          data: {
            image:
              "https://primefaces.org/cdn/primereact/images/avatar/annafali.png",
            name: "Anna Fali",
            title: "CMO",
          },
          children: [
            {
              label: "Sales",
              className: "bg-purple-400 text-white p-3 shadow-md",
              style: { borderRadius: "8px" },
            },
            {
              label: "Marketing",
              className: "bg-purple-400 text-white p-3 shadow-md",
              style: { borderRadius: "8px" },
            },
          ],
        },
        {
          expanded: true,
          type: "person",
          className: "bg-teal-600 text-white p-4 shadow-lg",
          style: { borderRadius: "8px" },
          data: {
            image:
              "https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png",
            name: "Stephen Shaw",
            title: "CTO",
          },
          children: [
            {
              label: "Development",
              className: "bg-teal-400 text-white p-3 shadow-md",
              style: { borderRadius: "8px" },
            },
            {
              label: "UI/UX Design",
              className: "bg-teal-400 text-white p-3 shadow-md",
              style: { borderRadius: "8px" },
            },
          ],
        },
      ],
    },
  ]);

  const nodeTemplate = (node) => {
    if (node.type === "person") {
      return (
        <div className="flex flex-col items-center text-center">
          <img
            alt={node.data.name}
            src={node.data.image}
            className="mb-3 rounded-full w-16 h-16 border-4 border-white"
          />
          <span className="font-semibold text-lg">{node.data.name}</span>
          <span className="text-sm text-gray-300">{node.data.title}</span>
        </div>
      );
    }

    return (
      <div className="p-3 text-center rounded-lg font-semibold w-full">
        {node.label}
      </div>
    );
  };

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Access</h1>
      <div className="card overflow-x-auto p-4">
        <OrganizationChart
          value={data}
          nodeTemplate={nodeTemplate}
          className="organization-chart"
        />
      </div>
    </main>
  );
}
