import React from 'react';
import '../styles/steppersStyle.css';

const TestingPage = () => {
  return (
    <div className="grid-container">
      <img
        src="https://via.placeholder.com/800x400"
        alt="covering both grids"
        className="cover-image"
      />
      <div className="test-grid-1">
        <h1>Hello</h1>
      </div>
      <div className="test-grid-2">
        <div className="test-form">
        <h2>World</h2>
        </div>
      </div>
    </div>
  );
};

export default TestingPage;
