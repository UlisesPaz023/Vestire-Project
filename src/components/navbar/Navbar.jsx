import "../navbar/navbar.css";
import logo from "../img/vestiree.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar">
      <span className="nav-logo">
        <img src={logo} alt="" />
      </span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a className="a" href="/">
          Home
        </a>
        <a className="a" href="destacado">
          Destacado
        </a>
        <a className="a" href="contacto">
          Contaco
        </a>
        <a className="a" href="favoritos">
          Favoritos
        </a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default NavBar;
