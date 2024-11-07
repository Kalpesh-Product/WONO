import { useState } from "react";
import HierarchyTree from "../components/HierarchyTree";
import Modal from "../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../redux/features/modalSlice";
import MemberForm from "../components/MemberForm";
import { data } from "../utils/data";
import { motion } from "framer-motion";
import DepartmentForm from "../components/DepartmentForm";

export default function Access() {
  const open = useSelector((state) => state.modal.open);
  const dispatch = useDispatch();
  const [activeModal, setActiveModal] = useState(null);

  const handleOpenModal = (type) => {
    setActiveModal(type);
    dispatch(openModal());
  };

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">Access</h1>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleOpenModal("department")}
            className="px-6 py-2 rounded-lg text-white bg-purple-500 hover:bg-purple-600 transition-shadow shadow-md hover:shadow-lg active:shadow-inner"
          >
            Add Department
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleOpenModal("employee")}
            className="px-6 py-2 rounded-lg text-white bg-purple-500 hover:bg-purple-600 transition-shadow shadow-md hover:shadow-lg active:shadow-inner"
          >
            Add Employee
          </motion.button>
        </div>
      </div>

      <Modal open={open} onClose={() => dispatch(closeModal())}>
        {activeModal === "employee" ? (
          <>
            <h1 className="text-xl text-center my-2 font-bold">
              Enter Employee Details
            </h1>
            <MemberForm />
          </>
        ) : activeModal === "department" ? (
          <>
            <h1 className="text-xl text-center my-2 font-bold">
              Enter Department Details
            </h1>
            <DepartmentForm />
          </>
        ) : null}
      </Modal>

      <div className="overflow-x-auto p-4 md:p-8 flex justify-center">
        <div className="max-w-4xl w-full">
          <HierarchyTree data={data} />
        </div>
      </div>
    </main>
  );
}
