import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/about">About</Link>
      {/* Add other footer elements or links here */}
    </div>
  );
};


export default Footer;
