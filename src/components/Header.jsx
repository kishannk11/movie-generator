import React from 'react';
import './Header.css';
import logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo">
          <a href="/" className="logo-text">
           <img src={logo} alt="Logo" />
          </a>
        </div>
      </div>
      
      <nav>
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="/contact" className="nav-link">
              Feedback
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
