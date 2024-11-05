import React, { useState } from "react";
import { OrganizationChart } from "primereact/organizationchart";
import Modal from "../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../redux/features/modalSlice";

export default function Access() {
  const open = useSelector((state) => state.modal.open);
  const dispatch = useDispatch();
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
    <main className="min-h-screen p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Access</h1>
        <button
          onClick={() => dispatch(openModal())}
          className="p-4 rounded-md text-white bg-violet-500 font-bold hover:bg-purple-600 transition"
        >
          Add Members
        </button>
        {open && (
          <Modal open={open}>
            <h1 className="text-xl font-bold">This is a modal</h1>
          </Modal>
        )}
      </div>
      <div className="overflow-x-auto p-8">
        <OrganizationChart
          value={data}
          nodeTemplate={nodeTemplate}
          selectionMode="multiple"
          className="organization-chart"
        />
      </div>
    </main>
  );
}
