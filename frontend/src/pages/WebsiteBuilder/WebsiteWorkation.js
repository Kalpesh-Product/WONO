import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Template3 from '../../assets/WONO_images/img/website-builder/template-3.jpeg';
import Template2 from '../../assets/WONO_images/img/website-builder/template-2.jpeg';

const WebsiteWorkation = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const templates = [
    { id: 1, name: 'Template 1', image: Template3 },
  ];

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
          <div>
      <div className="template-grid">
        {templates.map((template) => (
          <div
            key={template.id}
            className="template-container"
            onClick={() => handleShowModal(template.image)}
          >
            <img src={template.image} alt={template.name} className="template-image" />
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body>
          {selectedImage && <img src={selectedImage} alt="Selected Template" className="modal-image" />}
        </Modal.Body>
      </Modal>

      <style jsx>{`
        .template-grid {
          display: flex;
          gap: 16px;
        }
        .template-container {
          width: 200px;
          height: 350px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid #ddd;
        }
        .template-image {
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
    </div>
  )
}

export default WebsiteWorkation
