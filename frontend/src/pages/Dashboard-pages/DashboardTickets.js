import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Ticket from '../../assets/WONO_images/img/backend-panel/ticket-management.png';

const DashboardTickets = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleShowModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <div className='dashboard-ticket-container'>
        <div
          className='dashboard-ticket'
          onClick={() => handleShowModal(Ticket)}
          style={{ cursor: 'pointer' }}
        >
          <img src={Ticket} alt='Dashboard Ticket' />
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body>
          {selectedImage && <img src={selectedImage} alt="Selected Dashboard Ticket" className="modal-image" />}
        </Modal.Body>
      </Modal>

      <style jsx>{`
        .dashboard-ticket-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 16px;
        }

        .dashboard-ticket h1 {
          margin-bottom: 16px;
        }

        .dashboard-ticket img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-image {
          width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default DashboardTickets;
