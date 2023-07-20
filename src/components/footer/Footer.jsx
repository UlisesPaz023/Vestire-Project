import "./footer.css";
import insta from "../img/instagram.png";
import fb from "../img/facebook.png";
import wp from "../img/whatsapp.png";
import logo from "../img/LOGO.png";
import qr from "../img/data-fiscal.png";

const Footer = () => {
  return (
    <footer className="container-fluid px-0">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links w-100">
          <div className="logo col-10 col-lg-2 d-flex justify-content-center justify-content-lg-start">
            <img src={logo} alt="/" className="img-logo"></img>
          </div>
          <div className="sb_footer-links_div col-md-5 col-lg-2">
            <h4>LEGAL</h4>
            <a className="v" href="/Privacidad">
              <p>Privacidad</p>
            </a>
            <a className="v" href="/Terminos">
              <p>Terminos</p>
            </a>
          </div>

          <div className="sb_footer-links_div col-md-5 col-lg-2">
            <h4>ENLACES</h4>
            <a className="v" href="/Sobre-nosotros">
              <p>Sobre nosotros</p>
            </a>
            <a className="v" href="/Contacto">
              <p>Contacto</p>
            </a>
            <a className="v" href="/Informacion general">
              <p>Informacion general</p>
            </a>
          </div>

          <div className="sb_footer-links_div col-md-5 col-lg-2">
            <h4>CONTACTOS</h4>
            <a className="v" href="https://www.google.com/intl/es/gmail/about/">
              <p>info@vestire.com.ar</p>
            </a>
            <a className="v" href="https://web.whatsapp.com/">
              <p>+54 381 321 459</p>
            </a>
            <a
              className="v"
              href="https://www.google.com/maps/place/25+de+Mayo+777,+San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n/@-26.82069,-65.2045797,17z/data=!3m1!4b1!4m5!3m4!1s0x94225c22a9466e13:0xfac3a336eeb51b0b!8m2!3d-26.8206948!4d-65.2020048?hl=es"
            >
              <p>Tucuman-25 de mayo 777</p>
            </a>
          </div>

          <div className="sb_footer-links_div col-md-5 col-lg-2">
            <h4>SÍGUENOS</h4>
            <div className="socialmedia">
              <p>
                <a href="https://www.instagram.com/">
                  <img src={insta} alt=""></img>
                </a>
              </p>
              <p>
                <a href="https://www.facebook.com/">
                  <img src={fb} alt=""></img>
                </a>
              </p>
              <p>
                <a href="https://web.whatsapp.com/">
                  <img src={wp} alt=""></img>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-end">
          <a href="afip"></a>
          <img className="qr me-3" src={qr} alt="" />
        </div>
        <hr className="text-white"></hr>
        <div className="sb_footer-copyright">
          <div className="sb_footer-below">
            <p>
              <b>Copyright</b> © <b>2023</b> Vestire <b>S.R.L</b>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
