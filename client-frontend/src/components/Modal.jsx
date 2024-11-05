import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { closeModal } from "../redux/features/modalSlice";

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
    // Close the modal only if the click is on the backdrop
    if (e.target === dialogRef.current) {
      dispatch(closeModal());
    }
  };

  return createPortal(
    <dialog
      onClick={handleBackdropClick}
      onKeyDown={handleEscKeyPress}
      ref={dialogRef}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-[90vw] max-h-[80vh] overflow-auto p-4 bg-white rounded-md flex flex-col items-center"
      >
        {children}
      </div>
    </dialog>,
    document.getElementById("modal")
  );
}
