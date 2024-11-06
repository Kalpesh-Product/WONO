import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { closeModal } from "../redux/features/modalSlice";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ children, open }) {
  const dispatch = useDispatch();
  const dialogRef = useRef();

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [open]);

  const handleEscKeyPress = (e) => {
    if (e.key === "Escape") {
      dispatch(closeModal());
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      dispatch(closeModal());
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.dialog
          className="fixed inset-0 flex items-center justify-center bg-opacity-50 p-4 rounded-md"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          transition={{ duration: 0.3, ease: "easeInOut" }} // Adjusted duration
          onClick={handleBackdropClick}
          onKeyDown={handleEscKeyPress}
          ref={dialogRef}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-auto max-w-xl max-h-[80vh] overflow-auto p-4 bg-white rounded-md custom-scrollbar"
          >
            {children}
          </div>
        </motion.dialog>
      )}
    </AnimatePresence>,
    document.getElementById("modal")
  );
}
