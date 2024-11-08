import React, { useState } from "react";
import EmployeeProfile from "../components/AccessTabViewModel/EmployeeProfile";
import AccessHierarchyTab from "../components/AccessTabViewModel/AccessHierarchyTab";
import ClientSidebar from "../components/ClientSidebar";

const Profile = () => {
  const [image, setImage] = useState("");
  const [isModelOpen, setIsModalOpen] = useState(false);
  const [IsAccessModalOpen, setIsAccessModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const [activeTab, setActiveTab] = useState("tab-1");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result); // set the image to display in the container
      reader.readAsDataURL(file);
    }
    setIsModalOpen(false);
  };

  const modules = {
    HR: [
      "Attendance",
      "Leave Management",
      "Payroll",
      "Payslips",
      "Leaves",
      "Holidays",
      "SOPs",
      "Policies",
      "Task Management",
      "Performance",
      "Appraisals",
      "Templates",
      "e-Signs",
    ],
    Sales: [
      "Automated SEO",
      "Personalized SEMs",
      "Ad Networks",
      "Lead Generation",
      "Social Media",
      "Email Marketing",
      "Whatssapp Integration",
      "Live chats",
      "Refferals",
      "Blogs",
      "Vlogs",
    ],
    Finance: [
      "Invoices",
      "Cashflow",
      "Projections",
      "Budgets",
      "Working Capital",
      "Financial Reports",
      "Collections",
      "Notifications",
      "FollowUps",
      "Taxes",
      "Compliances",
      "Analytics",
    ],
    Marketing: ["Campaigns", "Analytics", "Social Media"],
    Tickets: ["Open Tickets", "Resolved Tickets", "Escalations"],
    "Meeting Room": ["Booking", "Schedule", "Calendar"],
  };

  const handleCheckboxChange = (item) => {
    setCheckedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };
  return (
    <div class="flex min-h-screen">
      {/* Sidebar */}
      <ClientSidebar/>
      {/* <div class="w-64 bg-gray-800 text-white flex flex-col">
        <div class="p-4 text-center font-bold text-2xl border-b border-gray-700">
          Sidebar
        </div>
        <nav class="flex-1 p-4">
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md">
                <span class="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md">
                <span class="ml-3">Profile</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md">
                <span class="ml-3">Settings</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md">
                <span class="ml-3">Logout</span>
              </a>
            </li>
          </ul>
        </nav>
      </div> */}

      {/* Main Content */}
      <div class="flex-1 p-6 bg-gray-100">
        <h1 class="text-3xl font-bold mb-4">Profile</h1>
        <div class="flex items-center p-4 bg-white rounded-lg shadow-md justify-between">
          <div class="flex flex-row gap-3">
            <div
              className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 cursor-pointer"
              onClick={() => setIsModalOpen(true)}>
              <img
                src={image}
                alt="Profile Logo"
                class="w-16 h-16 rounded-full mr-4"></img>
            </div>

            <div>
              <h2 class="text-xl font-semibold">Abrar Shaikh</h2>
              <p class="text-gray-500">Active</p>
            </div>
          </div>
          <div class="flex j">
            <button
              class="bg-blue-500 w-20 h-10 rounded-md"
              onClick={() => setIsAccessModalOpen(true)}>
              Access
            </button>
          </div>
        </div>
        {/* <!-- Horizontal Divider --> */}
        <hr class="border-t border-gray-300 my-4" />

        <div className="mx-auto">
          <ul className="flex  border-b mb-4 gap-4">
            <li className=" text-center w-1/2" role="presentation">
              <button
                className={`text-md py-2 w-full hover:bg-gray-100  ${
                  activeTab === "tab-1"
                    ? "border-b-4 border-blue-500 text-blue-600"
                    : ""
                }`}
                onClick={() => setActiveTab("tab-1")}>
                Bio
              </button>
            </li>
            <li className=" text-center w-1/2" role="presentation">
              <button
                className={`text-md py-2 w-full hover:bg-gray-100 ${
                  activeTab === "tab-2"
                    ? "border-b-4 border-blue-500 text-blue-600"
                    : ""
                }`}
                onClick={() => setActiveTab("tab-2")}>
                Access
              </button>
            </li>
          </ul>
          <div className="tab-content">
            {activeTab === "tab-1" && (
              <div
                className="tab-pane fade show active"
                id="tab-1"
                role="tabpanel">
                <div
                  className="flex flex-col  mt-3"
                  data-aos="fade-up"
                  data-aos-delay="100">
                  <EmployeeProfile
                    data={{
                      name: "Abrar Shaikh",
                      role: "Manager",
                      designation: "TopManagement",
                      email: "abrar.shaikh@example.com",
                      company: "ABC Corp",
                      department: "TopManagement",
                      phone: "+1234567890",
                      address: "123 Main St, Cityville",
                      dateOfBirth: "1975-02-15",
                    }}
                  />
                </div>
              </div>
            )}
            {activeTab === "tab-2" && (
              <div className="tab-pane fade show" id="tab-2" role="tabpanel">
                <div
                  className="flex flex-col  mt-3"
                  data-aos="fade-up"
                  data-aos-delay="100">
                  {/* Tab 2 Content */}
                  <AccessHierarchyTab />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal for Image Upload */}

      {isModelOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-xl font-semibold mb-4">Upload Profile Image</h3>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
            />
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Close
            </button>
          </div>
        </div>
      )}

      {/* modal for service access */}
      {IsAccessModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-100">
            <div className="mx-auto">
              <ul className="flex justify-center border-b mb-4">
                <li className="w-1/2 text-center" role="presentation">
                  <button
                    className="text-lg py-2 w-full font-semibold hover:bg-gray-100 focus:bg-gray-200 "
                    onClick={() => setActiveTab("tab-1")}>
                    PROFILE
                  </button>
                </li>
                <li className="w-1/2 text-center" role="presentation">
                  <button
                    className="text-lg py-2 w-full font-semibold hover:bg-gray-100 focus:bg-gray-200 "
                    onClick={() => setActiveTab("tab-2")}>
                    ACCESS
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                {activeTab === "tab-1" && (
                  <div
                    className="tab-pane fade show active"
                    id="tab-1"
                    role="tabpanel">
                    <div
                      className="flex flex-col items-center justify-center mt-3"
                      data-aos="fade-up"
                      data-aos-delay="100">
                      <EmployeeProfile />
                    </div>
                  </div>
                )}
                {activeTab === "tab-2" && (
                  <div
                    className="tab-pane fade show"
                    id="tab-2"
                    role="tabpanel">
                    <div
                      className="flex flex-col items-center justify-center mt-3"
                      data-aos="fade-up"
                      data-aos-delay="100">
                      {/* Tab 2 Content */}
                      <p>Your Apply Now content here...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => setIsAccessModalOpen(false)}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Save & Close
            </button>
          </div>
        </div>
      )}
      {/* modal for update profile */}
      {isUpdateModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-xl font-bold text-center mb-4">
              Update Profile
            </h3>
            <button
              onClick={() => setIsUpdateModalOpen(false)}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Save & Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
