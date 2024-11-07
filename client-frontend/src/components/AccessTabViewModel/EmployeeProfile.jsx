import React,{useState} from 'react'


const EmployeeProfile = () => {
  const [isEditing,setIsEditing] = useState(false);
  const [formData,setFormData] = useState({
    name:"Abrar Shaikh",
    role:"Master Admin"
  })
  return (
    <div class="flex flex-col space-y-7">
    <div class="flex items-center gap-20">
      <span class="w-24 font-semibold text-gray-600 ">Name:</span>
      <span class="text-gray-800">Abrar Shaikh</span>
    </div>
    <div class="flex items-center gap-20">
      <span class="w-24 font-semibold text-gray-600">Role:</span>
      <span class="text-gray-800">Master Admin</span>
    </div>
    <div class="flex items-center gap-20">
      <span class="w-24 font-semibold text-gray-600">Designation:</span>
      <span class="text-gray-800">Abrar Shaikh</span>
    </div>
    <div class="flex items-center gap-20">
      <span class="w-24 font-semibold text-gray-600">Company:</span>
      <span class="text-gray-800">Biznest</span>
    </div>
    <div class="flex items-center gap-20">
      <span class="w-24 font-semibold text-gray-600">Department:</span>
      <span class="text-gray-800">All Departments</span>
    </div>
    <div class="flex items-center gap-20">
      <span class="w-24 font-semibold text-gray-600">Email:</span>
      <span class="text-gray-800">john@gmail.com</span>
    </div>
    <div class="flex items-center gap-20">
      <span class="w-24 font-semibold text-gray-600">Phone:</span>
      <span class="text-gray-800">+1 234 567 890</span>
    </div>
    <div class="flex items-center gap-20">
      <span class="w-24 font-semibold text-gray-600">Address:</span>
      <span class="text-gray-800">1234 Main St, City, Country</span>
    </div>
    <div class="flex items-center gap-20">
      <span class="w-24 font-semibold text-gray-600">DOB:</span>
      <span class="text-gray-800">26/03/2000</span>
    </div>
    {/* <div class='flex flex-row gap-4 items-center justify-center'>
      
      <button class='bg-green-600 w-20 h-10 rounded-md' onClick={()=>setIsUpdateModalOpen(true)} >Update</button>
     
  </div> */}

  </div>
  )
}

export default EmployeeProfile