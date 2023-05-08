import "./footer.css";
import insta from "../img/instagram.png";
import fb from "../img/facebook.png";
import wp from "../img/whatsapp.png";
import logo from "../img/LOGO.png";
import qr from "../img/data-fiscal.png";

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
            <a className="v" href="/Privacidad">
              <p>Privacidad</p>
            </a>
            <a className="v" href="/Terminos">
              <p>Terminos</p>
            </a>
          </div>

          <div className="sb_footer-links_div">
            <h4>ENLACES</h4>
            <a className="v" href="/Sobre nosotros">
              <p>Sobre nosotros</p>
            </a>
            <a className="v" href="/Contacto">
              <p>Contacto</p>
            </a>
            <a className="v" href="/Informacion general">
              <p>Informacion general</p>
            </a>
          </div>

          <div className="sb_footer-links_div">
            <h4>CONTACTOS</h4>
            <a
              className="v"
              href="https://accounts.google.com/v3/signin/identifier?dsh=S-1995676681%3A1683505004231264&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=Af_xneGMp07bsgM90VDZ5uctUGTLJghYgZafjcZYoy9w1R1YvVZvkr_fTPev35nd25vSqrFUZmmB&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
            >
              <p>info@vestire.com.ar</p>
            </a>
            <a className="v" href="https://www.whatsapp.com/?lang=es">
              <p>+54 381 321 459</p>
            </a>
            <a
              className="v"
              href="https://www.google.com/maps/place/25+de+Mayo+777,+San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n/@-26.82069,-65.2045797,17z/data=!3m1!4b1!4m5!3m4!1s0x94225c22a9466e13:0xfac3a336eeb51b0b!8m2!3d-26.8206948!4d-65.2020048?hl=es"
            >
              <p>Tucuman-25 de mayo 777</p>
            </a>
          </div>

          <div className="sb_footer-links_div">
            <h4>REDES SOCIALES</h4>
            <div className="socialmedia">
              <a href="/"></a>
              <p>
                <a href="https://www.instagram.com/">
                  <img src={insta} alt=""></img>
                </a>
              </p>
              <p>
                <a href="https://es-la.facebook.com/">
                  <img src={fb} alt=""></img>
                </a>
              </p>
              <p>
                <a href="https://www.whatsapp.com/?lang=es"></a>
                <img src={wp} alt=""></img>
              </p>
              <div className="qr">
                <a href="afip"></a>
                <img src={qr} alt="" />
              </div>
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
