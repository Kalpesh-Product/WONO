import React, { useState } from 'react';
import Template1 from './Templates/Template1';
import Template2 from './Templates/Template2';
import '../../styles/website-builder/website-builder.css'

const WebsiteBuilder = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [content, setContent] = useState({
    header: 'Default Header',
    body: 'Default Body',
    footer: 'Default Footer',
  });

  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template);
  };

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <div>
      {!selectedTemplate ? (
        <div>
          <h2>Select a Template</h2>
          <button onClick={() => handleSelectTemplate('template1')}>Template 1</button>
          <button onClick={() => handleSelectTemplate('template2')}>Template 2</button>
        </div>
      ) : (
        <div>
          {selectedTemplate === 'template1' && (
            <Template1 content={content} onContentChange={handleContentChange} />
          )}
          {selectedTemplate === 'template2' && (
            <Template2 content={content} onContentChange={handleContentChange} />
          )}
          <button onClick={() => setSelectedTemplate(null)}>Back to Template Selection</button>
        </div>
      )}
    </div>
  );
};

export default WebsiteBuilder;
