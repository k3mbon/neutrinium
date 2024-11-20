import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Neutrinium from '../assets/neutrinium-logo.png'; // Adjust the path if needed
import '../styles/Footer.css'; // Import the CSS file

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <img src={Neutrinium} alt="Brand Logo" className="footer-logo" />
      </div>
      <div className="footer-column">
        <h3>About</h3>
        <ul>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/open-source">Open Source</Link></li>
          <li><Link to="/academic">Academic</Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Support</h3>
        <ul>
          <li><Link to="/paypal">Paypal</Link></li>
          <li><Link to="/bitcoin">Bitcoin</Link></li>
          <li><Link to="/bank-transfer">Bank Transfer</Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Help Center</h3>
        <ul>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/terms-conditions">Terms and Conditions</Link></li>
          <li><Link to="/license-agreement">License Agreement</Link></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; Neutrinium {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
