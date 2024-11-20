import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css'; // Import the CSS file for styling
import Neutrinium from '../assets/logo.png';

const Navbar = () => {
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleClick = (button) => {
    setActiveButton(button);

    // Navigate based on the clicked button
    if (button === 'left') {
      navigate('/dashboard'); // Navigate to /dashboard
    } else if (button === 'right') {
      navigate('/pricing'); // Navigate to /pricing
    }
  };

  const handleLogoClick = () => {
    setActiveButton(null); // Reset activeButton to remove 'active' style
    navigate('/'); // Navigate to /home when the logo is clicked
  };

  return (
    <nav className="navbar">
      <button
        className={`navbar-button ${activeButton === 'left' ? 'active' : ''}`}
        onClick={() => handleClick('left')}
      >
        Start
      </button>
      <div className="navbar-logo" onClick={handleLogoClick}>
        <img src={Neutrinium} alt="Logo" className="logo" />
      </div>
      <button
        className={`navbar-button ${activeButton === 'right' ? 'active' : ''}`}
        onClick={() => handleClick('right')}
      >
        Pricing
      </button>
    </nav>
  );
};

export default Navbar;
