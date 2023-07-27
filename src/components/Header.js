import React from "react";
import Menu from "./Menu";
import "../css/Header.css";

// The Header component displays the main header of the application.
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Replace this with your logo or text */}
        <h1>Stonkbot</h1>
      </div>
      <Menu /> {/* Render the Menu component */}
    </header>
  );
};

export default Header;
