import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Template1 from '../../assets/WONO_images/img/website-builder/template-1.jpeg';
import Template2 from '../../assets/WONO_images/img/website-builder/template-2.jpeg';

const WebsiteCafe = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const templates = [
    { id: 1, name: 'Template 1', image: Template1 },
    { id: 2, name: 'Template 2', image: Template2 },
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
          width: 250px;
          height: 350px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid #ddd;
        }
          @media (max-width: 768px) {
            .template-grid {
                flex-wrap : wrap;
              }
          }
        .template-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position : top;
        }
        .modal-image {
          width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default WebsiteCafe;

