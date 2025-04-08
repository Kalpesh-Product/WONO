import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import HR from '../../assets/WONO_images/img/backend-panel/hr-management.jpg'

const DashboardHR = () => {
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
      <div className='dashboard-hr-container'>
        <div
          className='dashboard-hr'
          onClick={() => handleShowModal(HR)}
          style={{ cursor: 'pointer' }}
        >
          <img src={HR} alt='Dashboard HR' />
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body>
          {selectedImage && <img src={selectedImage} alt="Selected Dashboard HR" className="modal-image" />}
        </Modal.Body>
      </Modal>

      <style jsx>{`
        .dashboard-hr-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 16px;
        }

        .dashboard-hr img {
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

export default DashboardHR
