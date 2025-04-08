import React from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import { useState } from 'react';

const Template1 = ({ content, onContentChange }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="template1-container">
        <aside className="sidebar">
          <h2>Sidebar</h2>
          <button onClick={handleShow}>Edit Content</button>
        </aside>
        <main className="content">
          <h1>{content.header}</h1>
          <p>{content.body}</p>
          <footer>{content.footer}</footer>
        </main>
      </div>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Edit Content</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <label>Header:</label>
            <input
              type="text"
              value={content.header}
              onChange={(e) => onContentChange({ ...content, header: e.target.value })}
            />
          </div>
          <div>
            <label>Body:</label>
            <textarea
              value={content.body}
              onChange={(e) => onContentChange({ ...content, body: e.target.value })}
            />
          </div>
          <div>
            <label>Footer:</label>
            <input
              type="text"
              value={content.footer}
              onChange={(e) => onContentChange({ ...content, footer: e.target.value })}
            />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Template1;
