import React from 'react';
import '../css/Header.css';

const Header = () => {
  return (
    <div className="header">
      <nav>
        <a href="/pricing">Pricing</a>
        <a href="/login">Login</a>
        <a href="/features">Features</a>
      </nav>
    </div>
  );
};

export default Header;
