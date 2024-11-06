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
    if (e.target === dialogRef.current) {
      dispatch(closeModal());
    }
  };

  return createPortal(
    <dialog
      className="p-4 rounded-md bg-opacity-0 flex items-center justify-center"
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
    </dialog>,
    document.getElementById("modal")
  );
}
