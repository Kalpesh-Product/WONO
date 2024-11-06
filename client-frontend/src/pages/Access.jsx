import React from "react";
import HierarchyTree from "../components/HierarchyTree";
import Modal from "../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../redux/features/modalSlice";
import MemberForm from "../components/MemberForm";
import { data } from "../utils/data";
import { motion } from "framer-motion";

export default function Access() {
  const open = useSelector((state) => state.modal.open);
  const dispatch = useDispatch();

  return (
    <main className="min-h-screen p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Access</h1>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => dispatch(openModal())}
            className="px-6 py-2 rounded-lg text-white bg-purple-500 hover:bg-purple-600 transition-shadow shadow-md hover:shadow-lg active:shadow-inner"
          >
            Add Department
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => dispatch(openModal())}
            className="px-6 py-2 rounded-lg text-white bg-purple-500 hover:bg-purple-600 transition-shadow shadow-md hover:shadow-lg active:shadow-inner"
          >
            Add Employees
          </motion.button>
        </div>

        <Modal open={open}>
          <h1 className="text-xl text-center my-2 font-bold">
            Enter employee details
          </h1>
          <MemberForm />
        </Modal>
      </div>
      <div className="overflow-x-auto p-8 flex items-center justify-center">
        <HierarchyTree data={data} />
      </div>
    </main>
  );
}
