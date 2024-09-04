// src/components/WelcomeSection.js
import React from 'react';
import '../styles/WelcomeSection.css'; // Import the CSS file for styling

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="text-container">
        <h1>Welcome to Our Platform!</h1>
        <p>
          We are delighted to have you here. Our platform offers a variety of features to help you manage and track your academic activities effortlessly. Explore the various sections and enjoy a seamless experience tailored for educators and students alike.
        </p>
      </div>
      <div className="image-container">
        <img src="/path/to/your/image.jpg" alt="Welcome" />
      </div>
    </section>
  );
};

export default WelcomeSection;
