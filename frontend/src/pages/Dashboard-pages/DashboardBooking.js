import React, {useState} from 'react'
import { Modal } from 'react-bootstrap';
import '../../styles/dashboard-items/dashboard-items.css'
import Template1_3 from '../../assets/WONO_images/img/website-builder/template-1-3.jpeg'

const DashboardBooking = () => {

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
    <div className='dashboard-booking-container'>
    <div 
    className='dashboard-booking'
    onClick={() => handleShowModal(Template1_3)}
    style={{ cursor: 'pointer' }}
    >
      <img src={Template1_3} alt='booking' />
    </div>

    
    <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body>
          {selectedImage && <img src={selectedImage} alt="Selected Dashboard Booking" className="modal-image" />}
        </Modal.Body>
      </Modal>

      <style jsx>{`
        .dashboard-booking-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 16px;
        }

        .dashboard-booking img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .modal-image {
          width: 50%;
          height: 100px;
        }
      `}</style>
    </div>
  )
}

export default DashboardBooking
