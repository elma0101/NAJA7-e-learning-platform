// src/components/Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <a href="#" className="header__logo">Naja7 Online</a>
        <nav className="header__nav">
          <a href="#">Courses</a>
          <a href="#">Exercises</a>
          <a href="#">Live Sessions</a>
          <a href="#">Pricing</a>
        </nav>
        <div className="header__actions">
          <button className="btn btn-primary">Sign Up</button>
          <button className="btn btn-secondary">Log In</button>
        </div>
      </div>
    </header>
  );
};

export default Header;