import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h2 className="header-title">Outbreak Map</h2>
      <img src="./logo.svg" className="avatar" alt="avatar" />
    </header>
  );
};

export default Header;
