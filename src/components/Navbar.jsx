import React, { useState } from 'react';
import '../styles/Navbar.css'; // Import the CSS file for styling
import Neutrinium from '../assets/logo.png'

const Navbar = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <nav className="navbar">
      <button
        className={`navbar-button ${activeButton === 'left' ? 'active' : ''}`}
        onClick={() => handleClick('left')}
      >
        Start
      </button>
      <div className="navbar-logo">
        <img src={Neutrinium} alt="Logo" className="logo" />
      </div>
      <button
        className={`navbar-button ${activeButton === 'right' ? 'active' : ''}`}
        onClick={() => handleClick('right')}
      >
        Donate
      </button>
    </nav>
  );
};

export default Navbar;
