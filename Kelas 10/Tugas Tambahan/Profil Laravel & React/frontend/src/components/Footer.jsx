import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            Mas <span>Rendi</span>
          </div>
          <p className="footer-copyright">
            &copy; {currentYear} Mas Rendi Robertho. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
