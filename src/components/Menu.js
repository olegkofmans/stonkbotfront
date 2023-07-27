import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/stock-search">StockAnalyzer</Link>
      </nav>
    </div>
  );
};

export default Menu;
