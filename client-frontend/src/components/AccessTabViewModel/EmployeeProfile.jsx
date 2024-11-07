import React, { useState } from "react";

const EmployeeProfile = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Abrar Shaikh",
    role: "Master Admin",
  });
  return (
    <div className="flex flex-col space-y-7 w-full">
      <div className="flex items-center gap-20">
        <span className="w-24 font-semibold text-gray-600">Name:</span>
        <span className="text-gray-800">{data.name}</span>
      </div>
      <div className="flex items-center gap-20">
        <span className="w-24 font-semibold text-gray-600">Role:</span>
        <span className="text-gray-800">{data.role}</span>
      </div>
      <div className="flex items-center gap-20">
        <span className="w-24 font-semibold text-gray-600">Designation:</span>
        <span className="text-gray-800">{data.designation}</span>
      </div>
      <div className="flex items-center gap-20">
        <span className="w-24 font-semibold text-gray-600">Company:</span>
        <span className="text-gray-800">{data.company}</span>
      </div>
      <div className="flex items-center gap-20">
        <span className="w-24 font-semibold text-gray-600">Department:</span>
        <span className="text-gray-800">{data.department}</span>
      </div>
      <div className="flex items-center gap-20">
        <span className="w-24 font-semibold text-gray-600">Email:</span>
        <span className="text-gray-800">{data.email}</span>
      </div>
      <div className="flex items-center gap-20">
        <span className="w-24 font-semibold text-gray-600">Phone:</span>
        <span className="text-gray-800">{data.phone}</span>
      </div>
      <div className="flex items-center gap-20">
        <span className="w-24 font-semibold text-gray-600">Address:</span>
        <span className="text-gray-800">{data.address}</span>
      </div>
      <div className="flex items-center gap-20">
        <span className="w-24 font-semibold text-gray-600">DOB:</span>
        <span className="text-gray-800">{data.dateOfBirth}</span>
      </div>
    </div>
  );
};

export default EmployeeProfile;
