import React from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function Toasts({ position, toastMessage, show, onClose }) {
  return (
    <ToastContainer
      className="p-3"
      position={position}
      style={{ zIndex: 9999, position: 'fixed', top: 20, right: 20 }} // Adjust top and right for desired positioning
    >
      <Toast onClose={onClose} show={show} delay={2000} autohide>
        <Toast.Header>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded me-2"
            alt=""
          />
          <strong className="me-auto">Notification</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default Toasts;
