import React from "react";
import { FaBus } from "react-icons/fa";
import "../App.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <FaBus className="logo-icon" />
          <span>Sri Lanka Express</span>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#routes">Routes</a>
          <a href="#amenities">Amenities</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
