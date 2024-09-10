// src/components/PartnersSection.js
import React from 'react';
import '../styles/PartnersSection.css';

const PartnersSection = () => {
  const partners = [
    '/path/to/partner1.png',
    '/path/to/partner2.png',
    '/path/to/partner3.png',
    '/path/to/partner4.png',
    // Add more partner images here
  ];

  return (
    <div className="partners-section">
      <h2 className="partners-title">Our Partners</h2>
      <div className="marquee">
        <div className="marquee-content">
          {partners.map((partner, index) => (
            <img key={index} src={partner} alt={`Partner ${index + 1}`} className="partner-image" />
          ))}
          {partners.map((partner, index) => (
            <img key={index + partners.length} src={partner} alt={`Partner ${index + 1}`} className="partner-image" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
