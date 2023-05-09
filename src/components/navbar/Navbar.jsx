import "./navbar.css";
import Button from "react-bootstrap/Button";
import Button2 from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../img/vestiree.png";
import { useState } from "react";

import ModalLogin from "../modal/ModalLogin";
import Cart from "../cart/Cart";

function NavBar({
  allproducts,
  productsToCart,
  setProductsToCart,
  quantity,
  setQuantity,
  priceCartItem,
  setPriceCartItem,
  totalCartPrice,
  setTotalCartPrice,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
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
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="">Favortios</Nav.Link>
              <Nav.Link href="/contacto">Contacto</Nav.Link>
              <NavDropdown title="V" id="navbarScrollingDropdown">
                <NavDropdown.Item onClick={handleShow}>Login</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Carrito ()</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action6">
                  Cerrar sesion
                </NavDropdown.Item>
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
              <Cart
                productsToCart={productsToCart}
                setProductsToCart={setProductsToCart}
                quantity={quantity}
                setQuantity={setQuantity}
                priceCartItem={priceCartItem}
                setPriceCartItem={setPriceCartItem}
                totalCartPrice={totalCartPrice}
                setTotalCartPrice={setTotalCartPrice}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ModalLogin
        handleShow={handleShow}
        show={show}
        handleClose={handleClose}
      />
    </>
  );
}

export default NavBar;
