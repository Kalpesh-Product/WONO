import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TextField from "@mui/material/TextField";

const EmployeeProfile = ({ data }) => {
  const location = useLocation();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Abrar Shaikh",
    role: "Master Admin",
    designation: "CEO",
    company: "Biznest",
    Department: "All Department",
    email: "John@gmail.com",
    phone: "2345634567",
    address: "Opposite to Shrama Shakti Bhavan , Patto , Plazza, Panajim, Goa",
    dateOfBirth: "5/05/1981",
  });

  const toggleEdit = () => {
    setIsEditing(!isEditing);

    // Optional: Save logic here, e.g., API call
    if (isEditing) {
      console.log("Saved Data:", formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isProfilePage = location.pathname === "/profile";
  const isAccessPage = location.pathname === "/access";

  return (
    <div className="flex flex-col space-y-7">
      <div className="flex justify-end space-x-4">
        {isProfilePage && (
          <button
            onClick={toggleEdit}
            className={`px-4 py-2 text-white rounded ${
              isEditing
                ? "bg-green-500 hover:bg-green-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        )}
      </div>
      <div className="flex items-center gap-20">
        <TextField
          label="Name"
          name="name"
          value={isAccessPage ? data?.name : isProfilePage ? formData.name : ""}
          onChange={handleChange}
          className={`text-gray-800 border ${
            isEditing
              ? "border-black bg-white"
              : "border-transparent bg-transparent"
          } rounded`}
          disabled={!isEditing}
          fullWidth
        />

        <TextField
          label="role"
          name="role"
          value={isAccessPage ? data?.role : isProfilePage ? formData.role : ""}
          onChange={handleChange}
          className={`text-gray-800 border ${
            isEditing
              ? "border-gray-400 bg-white"
              : "border-transparent bg-transparent"
          } rounded`}
          disabled={!isEditing}
          fullWidth
        />
        <TextField
          label="Designation"
          name="designation"
          value={
            isAccessPage
              ? data?.designation
              : isProfilePage
              ? formData.designation
              : ""
          }
          onChange={handleChange}
          className={`text-gray-800 border ${
            isEditing
              ? "border-gray-400 bg-white"
              : "border-transparent bg-transparent"
          } rounded`}
          disabled={!isEditing}
          fullWidth
        />
        <TextField
          label="Department"
          name="Department"
          value={
            isAccessPage
              ? data?.department
              : isProfilePage
              ? formData.Department
              : ""
          }
          onChange={handleChange}
          className={`text-gray-800 border ${
            isEditing
              ? "border-gray-400 bg-white"
              : "border-transparent bg-transparent"
          } rounded`}
          disabled={!isEditing}
          fullWidth
        />
      </div>
      <div className="flex items-center gap-20">
        <TextField
          label="Email"
          name="email"
          value={
            isAccessPage ? data?.email : isProfilePage ? formData.email : ""
          }
          onChange={handleChange}
          className={`text-gray-800 border ${
            isEditing
              ? "border-gray-400 bg-white"
              : "border-transparent bg-transparent"
          } rounded`}
          disabled={!isEditing}
          fullWidth
        />

        <TextField
          label="phone"
          name="phone"
          value={
            isAccessPage ? data?.phone : isProfilePage ? formData.phone : ""
          }
          onChange={handleChange}
          className={`text-gray-800 border ${
            isEditing
              ? "border-gray-400 bg-white"
              : "border-transparent bg-transparent"
          } rounded`}
          disabled={!isEditing}
          fullWidth
        />
        <TextField
          label="Address"
          name="address"
          value={
            isAccessPage ? data?.address : isProfilePage ? formData.address : ""
          }
          onChange={handleChange}
          className={`text-gray-800 border ${
            isEditing
              ? "border-gray-400 bg-white"
              : "border-transparent bg-transparent"
          } rounded`}
          disabled={!isEditing}
          fullWidth
        />
        <TextField
          label="DateOfBirth"
          name="dateOfBirth"
          value={
            isAccessPage
              ? data?.dateOfBirth
              : isProfilePage
              ? formData.dateOfBirth
              : ""
          }
          onChange={handleChange}
          className={`text-gray-800 border ${
            isEditing
              ? "border-gray-400 bg-white"
              : "border-transparent bg-transparent"
          } rounded`}
          disabled={!isEditing}
          fullWidth
        />
      </div>
      {/* <div className="flex items-center gap-20">
        <span className="w-24 font-semibold text-gray-600">Role:</span>
        <input
          name="role"
          value={isAccessPage? data?.role : isProfilePage ? formData.role:""}
          onChange={handleChange}
          className={`text-gray-800 border ${
            isEditing
              ? "border-gray-400 bg-white"
              : "border-transparent bg-transparent"
          } rounded`}
          disabled={!isEditing}></input>
      </div>
      <div className="flex items-center gap-20">
        <span className="w-24 font-semibold text-gray-600">Designation:</span>
        <input
          name="designation"
          value={isAccessPage? data?.designation : isProfilePage ? formData.designation:""}
          onChange={handleChange}
          className={`text-gray-800 border ${
            isEditing
              ? "border-gray-400 bg-white"
              : "border-transparent bg-transparent"
          } rounded`}
          disabled={!isEditing}></input>
      </div>
      <div className="flex items-center gap-20">
        <span className="w-24 font-semibold text-gray-600">Company:</span>
        <input
          name="company"
          value={isAccessPage? data?.company : isProfilePage ? formData.company:""}
          onChange={handleChange}
          className={`text-gray-800 border ${
            isEditing
              ? "border-gray-400 bg-white"
              : "border-transparent bg-transparent"
          } rounded`}
          disabled={!isEditing}></input>
      </div>
      <div className="flex items-center gap-20">
        <span className="w-24 font-semibold text-gray-600">Department:</span>
        <input
          name="department"
          value={isAccessPage? data?.department : isProfilePage ? formData.Department:""}
          onChange={handleChange}
          className={`text-gray-800 border ${
            isEditing
              ? "border-gray-400 bg-white"
              : "border-transparent bg-transparent"
          } rounded`}
          disabled={!isEditing}></input>
      </div>
      <div className="flex items-center gap-20">
        <span className="w-24 font-semibold text-gray-600">Email:</span>
        <span className="text-gray-800">{data?.email || formData.email}</span>
      </div>
      <div className="flex items-center gap-20">
        <span className="w-24 font-semibold text-gray-600">Phone:</span>
        <input
          name="phone"
          value={isAccessPage? data?.email : isProfilePage ? formData.email:""}
          onChange={handleChange}
          className={`text-gray-800 border ${
            isEditing
              ? "border-gray-400 bg-white"
              : "border-transparent bg-transparent"
          } rounded`}
          disabled={!isEditing}></input>
      </div>
      <div className="flex items-center gap-20">
        <span className="w-24 font-semibold text-gray-600">Address:</span>
        <input
          name="address"
          value={isAccessPage? data?.address: isProfilePage ? formData.address:""}
          onChange={handleChange}
          className={`text-gray-800 border ${
            isEditing
              ? "border-gray-400 bg-white"
              : "border-transparent bg-transparent"
          } rounded`}
          disabled={!isEditing}></input>
      </div>
      <div className="flex items-center gap-20">
        <span className="w-24 font-semibold text-gray-600">DOB:</span>
        <input
          name="dateOfBirth"
          value={isAccessPage? data?.dateOfBirth : isProfilePage ? formData.dateOfBirth:""}
          onChange={handleChange}
          className={`text-gray-800 border ${
            isEditing
              ? "border-gray-400 bg-white"
              : "border-transparent bg-transparent"
          } rounded`}
          disabled={!isEditing}></input>
      </div> */}
    </div>
  );
};

export default EmployeeProfile;
