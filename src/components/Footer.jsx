import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">      
        <p className="copyright">© {new Date().getFullYear()} DumbCharades Movie Generator. All rights reserved by Kishan Nayak.</p>
    </footer>
  );
};

export default Footer;
