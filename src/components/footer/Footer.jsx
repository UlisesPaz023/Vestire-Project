// import React from "react";
import "./footer.css";
import insta from "../img/instagram.png";
import fb from "../img/facebook.png";
import wp from "../img/whatsapp.png";
import logo from "../img/LOGO.png";
import qr from "../img/QR.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="logo">
            <img src={logo} alt="/" className="img-logo"></img>
          </div>
          <div className="sb_footer-links_div">
            <h4>LEGAL</h4>
            <a href="/Privacidad">
              <p>Privacidad</p>
            </a>
            <a href="/Terminos">
              <p>Terminos</p>
            </a>
          </div>

          <div className="sb_footer-links_div">
            <h4>ENLACES</h4>
            <a href="/Sobre nosotros">
              <p>Sobre nosotros</p>
            </a>
            <a href="/Contacto">
              <p>Contacto</p>
            </a>
            <a href="/Informacion general">
              <p>Informacion general</p>
            </a>
          </div>

          <div className="sb_footer-links_div">
            <h4>CONTACTOS</h4>
            <a href="/Gmail">
              <p>info@vestire.com.ar</p>
            </a>
            <a href="/wp">
              <p>+54 381 321 459</p>
            </a>
            <a href="/Ubicacion">
              <p>Tucuman-25 de mayo 777</p>
            </a>
          </div>

          <div className="sb_footer-links_div">
            <h4>REDES SOCIALES</h4>
            <div className="socialmedia">
              <a href="/"></a>
              <p>
                <img src={insta} alt=""></img>
              </p>
              <p>
                <img src={fb} alt=""></img>
              </p>
              <p>
                <img src={wp} alt=""></img>
              </p>
              <p>
                <img src={qr} alt=""></img>
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="sb_footer-copyright">
          <div className="sb_footer-below">
            <p>
              {/* @{new Date().getFullYear()} */}
              <b>Copyright</b> © <b>2023</b> vestire <b>S.R.L</b>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
