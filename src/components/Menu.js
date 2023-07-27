import React from "react";
import { Link } from "react-router-dom";
import "../css/Menu.css";
const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/stock-analyzer">Stock Analyzer</Link>
        </li>
        {/* Add more menu items as needed */}
      </ul>
    </nav>
  );
};

export default Menu;
