// import { Link } from "react-router-dom";
// import React from "react";
import "../navbar/navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../img/LOGO.png";
import { useState } from "react";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar-bg">
      <div className="sb_navbar">
        <div className="sb_navbar-link">
          <div className="sb_navbar-links_logo"></div>
          <a href="www.google.com">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="sb_navbar-links_container">
          <p>
            <a href="www.google.com">HOME</a>
          </p>
          <p>
            <a href="www.google.com">DESTACADO</a>
          </p>
          <p>
            <a href="www.google.com">CONTACTO</a>
          </p>
        </div>
      </div>
      <div className="sb-navbar-button">
        <a href="www.google.com">
          <button type="button">JOIN US</button>
        </a>
      </div>
      <div className="sb_navbar-manu">
        {toggleMenu ? (
          <RiCloseLine
            color="#067"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="sb_navbar-menu_container scale-up-center">
            <div className="sb_navbar-menu_container-links">
              <p>
                <a href="www.google.com">HOME</a>
              </p>
              <p>
                <a href="www.google.com">DESTACADO</a>
              </p>
              <p>
                <a href="www.google.com">CONTACTO</a>
              </p>
            </div>
            <div className="sb_navbar-menu_container-links-sign">
              <a href="www.google.com">
                <button type="button">JOIN US</button>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
