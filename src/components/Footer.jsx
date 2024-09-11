import React from 'react';
import '../styles/Footer.css'; // Import the CSS file

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <img src="/path/to/your/logo.jpg" alt="Brand Logo" className="footer-logo" />
      </div>
      <div className="footer-column">
        <h3>About</h3>
        <ul>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/open-source">Open Source</a></li>
          <li><a href="/academic">Academic</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Support</h3>
        <ul>
          <li><a href="/paypal">Paypal</a></li>
          <li><a href="/bitcoin">Bitcoin</a></li>
          <li><a href="/bank-transfer">Bank Transfer</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Help Center</h3>
        <ul>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
          <li><a href="/license-agreement">License Agreement</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; Neutrinium {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
