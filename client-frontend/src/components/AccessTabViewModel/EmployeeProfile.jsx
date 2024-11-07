import React, { useEffect, useState } from "react";
import { useLocation} from "react-router-dom";

const EmployeeProfile = ({ data }) => {
  const location = useLocation();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Abrar Shaikh",
    role: "Master Admin",
    designation: "CEO",
    company:"Biznest",
    Department:"All Department",
    email:"John@gmail.com",
    phone:"2345634567",
    address:"Opposite to Shrama Shakti Bhavan , Patto , Plazza, Panajim, Goa",
    dateOfBirth:"5/05/1981"
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
  return (
    <div className="flex flex-col space-y-7">
       <div className="flex justify-end space-x-4">
        { isProfilePage && (<button
          onClick={toggleEdit}
          className={`px-4 py-2 text-white rounded ${
            isEditing ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isEditing ? "Save" : "Edit"}
        </button>)}
        
      </div>
      <div className="flex items-center gap-20">
     
        <span className="w-24 font-semibold text-gray-600">Name:</span>
        <input
          name="name"
          value={data?.name || formData.name}
          onChange={handleChange}
          className={`text-gray-800 border ${
            isEditing
              ? "border-gray-400 bg-white"
              : "border-transparent bg-transparent"
          } rounded`}
          disabled={!isEditing}></input>
      </div>
      <div className="flex items-center gap-20">
        <span className="w-24 font-semibold text-gray-600">Role:</span>
        <input
          name="role"
          value={data?.role || formData.role}
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
          value={data?.designation || formData.designation}
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
          value={data?.company || formData.company}
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
          value={data?.department || formData.Department}
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
          value={data?.phone || formData.phone}
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
          value={data?.address || formData.address}
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
          value={data?.dateOfBirth || formData.dateOfBirth}
          onChange={handleChange}
          className={`text-gray-800 border ${
            isEditing
              ? "border-gray-400 bg-white"
              : "border-transparent bg-transparent"
          } rounded`}
          disabled={!isEditing}></input>
      </div>
    </div>
  );
};

export default EmployeeProfile;
