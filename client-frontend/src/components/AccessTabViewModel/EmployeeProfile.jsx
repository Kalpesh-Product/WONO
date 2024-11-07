import React,{useState} from 'react'


const EmployeeProfile = () => {
  const [isEditing,setIsEditing] = useState(false);
  const [formData,setFormData] = useState({
    name:"Abrar Shaikh",
    role:"Master Admin",
    designation:"CEO",
    company:"Biznest",
    department:"All Departments",
    email:"john@gmail.com",
    phone:"1234567854",
    Address:"",
    DOB:""
  })

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);

    // Optional: Save logic here, e.g., API call
    if (isEditing) {
      console.log("Saved Data:", formData);
    }
  };
  return (
    <div class="flex flex-col space-y-7">
    <div class="flex items-center gap-20">
      <span class="w-24 font-semibold text-gray-600 ">Name:</span>
      <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`text-gray-800 border ${
            isEditing
              ? "border-gray-400 bg-white"
              : "border-transparent bg-transparent"
          } rounded`}
          disabled={!isEditing}
        />
    </div>
    <div class="flex items-center gap-20">
      <span class="w-24 font-semibold text-gray-600">Role:</span>
      <input
          name="role"
          value={formData.role}
          onChange={handleChange}
          className={`text-gray-800 border ${
            isEditing
              ? "border-gray-400 bg-white"
              : "border-transparent bg-transparent"
          } rounded`}
          disabled={!isEditing}
        />
    </div>
    <div class="flex items-center gap-20">
      <span class="w-24 font-semibold text-gray-600">Designation:</span>
      <input
          name="role"
          value={formData.designation}
          onChange={handleChange}
          className={`text-gray-800 border ${
            isEditing
              ? "border-gray-400 bg-white"
              : "border-transparent bg-transparent"
          } rounded`}
          disabled={!isEditing}
        />
    </div>
    <div class="flex items-center gap-20">
      <span class="w-24 font-semibold text-gray-600">Company:</span>
      <input
          name="role"
          value={formData.company}
          onChange={handleChange}
          className={`text-gray-800 border ${
            isEditing
              ? "border-gray-400 bg-white"
              : "border-transparent bg-transparent"
          } rounded`}
          disabled={!isEditing}
        />
    </div>
    <div class="flex items-center gap-20">
      <span class="w-24 font-semibold text-gray-600">Department:</span>
      <input
          name="role"
          value={formData.department}
          onChange={handleChange}
          className={`text-gray-800 border ${
            isEditing
              ? "border-gray-400 bg-white"
              : "border-transparent bg-transparent"
          } rounded`}
          disabled={!isEditing}
        />
    </div>
    <div class="flex items-center gap-20">
      <span class="w-24 font-semibold text-gray-600">Email:</span>
      <input
          name="role"
          value={formData.email}
          onChange={handleChange}
          className={`text-gray-800 border ${
            isEditing
              ? "border-gray-400 bg-white"
              : "border-transparent bg-transparent"
          } rounded`}
          disabled={!isEditing}
        />
    </div>
    <div class="flex items-center gap-20">
      <span class="w-24 font-semibold text-gray-600">Phone:</span>
      <input
          name="role"
          value={formData.phone}
          onChange={handleChange}
          className={`text-gray-800 border ${
            isEditing
              ? "border-gray-400 bg-white"
              : "border-transparent bg-transparent"
          } rounded`}
          disabled={!isEditing}
        />
    </div>
    <div class="flex items-center gap-20">
      <span class="w-24 font-semibold text-gray-600">Address:</span>
      <input
          name="role"
          value={formData.Address}
          onChange={handleChange}
          className={`text-gray-800 border ${
            isEditing
              ? "border-gray-400 bg-white"
              : "border-transparent bg-transparent"
          } rounded`}
          disabled={!isEditing}
        />
    </div>
    <div class="flex items-center gap-20">
      <span class="w-24 font-semibold text-gray-600">DOB:</span>
      <input
          name="role"
          value={formData.DOB}
          onChange={handleChange}
          className={`text-gray-800 border ${
            isEditing
              ? "border-gray-400 bg-white"
              : "border-transparent bg-transparent"
          } rounded`}
          disabled={!isEditing}
        />
    </div>
    
  <div className="flex justify-end space-x-4">
        <button
          onClick={toggleEdit}
          className={`px-4 py-2 text-white rounded ${
            isEditing ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>

  </div>
  )
}

export default EmployeeProfile