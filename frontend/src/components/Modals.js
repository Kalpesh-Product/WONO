import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Modals = ({ show, handleClose, title, children, closeText }) => {
  return (
    <Modal className='services' show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={handleClose}>
          {closeText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modals;
