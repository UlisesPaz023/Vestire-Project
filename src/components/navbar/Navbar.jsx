import "./navbar.css";
import Button from "react-bootstrap/Button";
import Button2 from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../img/vestiree.png";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <img src={logo} alt="" />
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Favortios</Nav.Link>
            <Nav.Link href="#action3">Contacto</Nav.Link>
            <NavDropdown title="V" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Carrito ()</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">Cerrar sesion</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar producto"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
            <Button2 variant="outline-success2">Carrito</Button2>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

// import React, { useState } from "react";
// import "../navbar/navbar.css";
// function NavBar() {
//   const [active, setActive] = useState("nav_menu");
//   const [ToggleIcon, setToggleIcon] = useState("nav_toggler");

//   const navToggle = () => {
//     active === "nav_menu"
// ? setActive("nav_menu nav_active")
//       : setActive("nav_manu");

//     ToggleIcon === "nav_toggler"
//       ? setToggleIcon("nav_toggler toggle")
//       : setToggleIcon("nav_toggler");
//   };
//   return (
//     <nav className="nav">
//       <a href="#" className="nav_brand">
//         VESTIRE
//       </a>
//       <ul className={active}>
//         <li className="nav-item">
//           <a href="#" className="nav_link">
//             Home
//           </a>
//         </li>
//         <li className="nav-item">
//           <a href="#" className="nav_link">
//             Contacto
//           </a>
//         </li>
//         <li className="nav-item">
//           <a href="#" className="nav_link">
//             Favoritos
//           </a>
//         </li>
//         <li className="nav-item">
//           <a href="#" className="nav_link">
//             Compras
//           </a>
//         </li>
//       </ul>
//       <div onClick={navToggle} className={ToggleIcon}>
//         <div className="line1"></div>
//         <div className="line2"></div>
//         <div className="line3"></div>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;
