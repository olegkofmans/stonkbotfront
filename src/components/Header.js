import React from "react";
import Menu from "./Menu";
import "../css/Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Replace this with your logo or text */}
        <h1>Stonkbot</h1>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
