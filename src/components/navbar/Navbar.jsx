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
        <a className="a" as={Link} to="/">
          Home
        </a>
        <a className="a" as={Link} to="/destacado">
          Destacado
        </a>
        <a className="a" as={Link} to="/contacto">
          Contaco
        </a>
        <a className="a" as={Link} to="/favoritos">
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
