// src/components/Footer.tsx
import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center gap-8 mb-6">
          <a href="#" className="text-medium-text hover:text-primary-green">About Us</a>
          <a href="#" className="text-medium-text hover:text-primary-green">Contact</a>
          <a href="#" className="text-medium-text hover:text-primary-green">FAQ</a>
          <a href="#" className="text-medium-text hover:text-primary-green">Terms of Service</a>
        </div>
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" aria-label="Facebook" className="text-2xl text-medium-text hover:text-primary-green"><FiFacebook /></a>
          <a href="#" aria-label="Twitter" className="text-2xl text-medium-text hover:text-primary-green"><FiTwitter /></a>
          <a href="#" aria-label="Instagram" className="text-2xl text-medium-text hover:text-primary-green"><FiInstagram /></a>
        </div>
        <p className="text-sm text-light-text">
          © {new Date().getFullYear()} Naja7 Online. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;