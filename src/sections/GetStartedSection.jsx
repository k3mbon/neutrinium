// src/components/GetStartedSection.js
import React from 'react';
import '../styles/GetStartedSection.css';

const GetStartedSection = () => {
  return (
    <div className="get-started-section">
      <div className="content">
        <div className="text-content">
          <h1 className="title">Get Started</h1>
          <p className="description">
            Begin your journey with us today! Explore our wide range of courses and programs
            designed to help you achieve your goals.
          </p>
          <button className="study-now-button">Study Now</button>
        </div>
        <div className="image-content">
          <img
            src="/path/to/your/image.png"
            alt="Get Started"
            className="get-started-image"
          />
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
