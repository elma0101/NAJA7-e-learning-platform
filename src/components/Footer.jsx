// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">FAQ</a>
          <a href="#">Terms of Service</a>
        </div>
        <div className="footer-socials">
          <a href="#" aria-label="Facebook"><FiFacebook /></a>
          <a href="#" aria-label="Twitter"><FiTwitter /></a>
          <a href="#" aria-label="Instagram"><FiInstagram /></a>
        </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()} Naja7 Online. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;