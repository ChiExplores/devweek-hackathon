import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Outbreak Map</h1>
      <img src="../public/logo192.png" className="avatar" />
    </header>
  );
};

export default Header;
