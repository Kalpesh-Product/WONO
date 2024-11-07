import React, { useState } from 'react'

const AccessHierarchyTab = () => {
  const [checkedItems,setCheckedItems] = useState({});
  const modules = {
    "HR": ["Attendance", "Leave Management", "Payroll","Payslips","Leaves","Holidays","SOPs","Policies","Task Management","Performance","Appraisals","Templates","e-Signs"],
    "Sales": ["Automated SEO","Personalized SEMs","Ad Networks","Lead Generation","Social Media","Email Marketing","Whatssapp Integration","Live chats","Refferals","Blogs","Vlogs"],
    "Finance": ["Invoices", "Cashflow","Projections","Budgets","Working Capital","Financial Reports","Collections","Notifications","FollowUps","Taxes","Compliances","Analytics"],
    "Marketing": ["Campaigns", "Analytics", "Social Media", "Email Marketing","SMS Marketing","Whatssapp Integration","Live chat","Refferals","Blogs","Vlogs"],
    "Tickets": ["Open Tickets", "Resolved Tickets", "Escalations"],
    "Meeting Room": ["Booking", "Schedule", "Calendar"]
  };

  const handleCheckboxChange = (module, submodule = null) => {
    setCheckedItems((prevState) => {
      const newState = { ...prevState };

      if (submodule) {
        newState[module] = { ...newState[module], [submodule]: !newState[module]?.[submodule] };
      } else {
        const allSelected = !newState[module]?.all;
        newState[module] = {
          all: allSelected,
          ...Object.fromEntries(modules[module].map(sub => [sub, allSelected])),
        };
      }

      return newState;
    });
  };
  return (
    <div className="mb-4">
            {Object.keys(modules).map((module) => (
              <div key={module} className="mb-4">
                {/* Module checkbox */}
                <label className="flex items-center space-x-2 mb-2">
                  <input
                    type="checkbox"
                    checked={checkedItems[module]?.all || false}
                    onChange={() => handleCheckboxChange(module)}
                    className="cursor-pointer"
                  />
                  <span className="font-semibold">{module}</span>
                </label>

                {/* Submodule checkboxes arranged in rows of 3 */}
                <div className="grid grid-cols-3 gap-2 ml-6">
                  {modules[module].map((submodule) => (
                    <label key={submodule} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={checkedItems[module]?.[submodule] || false}
                        onChange={() => handleCheckboxChange(module, submodule)}
                        className="cursor-pointer"
                      />
                      <span>{submodule}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
  )
}

export default AccessHierarchyTab