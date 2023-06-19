import "./navbar.module.css";
import Button from "react-bootstrap/Button";
import Button2 from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../img/vestiree.png";
import { useState, useEffect } from "react";

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
  totalCartItems,
  setTotalCartItems,
  productsToShow,
  setProductsToShow,
  productsToShowAux,
  setProductsToShowAux,
  //productGrid,
}) {
  const productGrid = document.getElementById("product-grid");
  const [search, setSearch] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSearch = (e) => {
    if (e.target.value.length > 3) {
      productGrid.scrollIntoView({ behavior: "smooth" });

      console.log(productGrid);
      setSearch(e.target.value);
      searchFilter(e.target.value);
    } else {
      setSearch(e.target.value);
    }
    if (e.target.value === "") setProductsToShow(productsToShowAux);
  };
  // useEffect(() => {
  //   window.scrollTo(0, 450);
  // }, [search]);

  const searchFilter = (item) => {
    productGrid.scrollIntoView({ behavior: "smooth" });
    let searchResault = productsToShowAux.filter((elem) => {
      if (
        elem.resumenDescripcion
          .toString()
          .toLowerCase()
          .includes(item.toLowerCase().trim())
      )
        return elem;
    });
    setProductsToShow(searchResault);
  };

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userToken");
    location.href = "/";
  };

  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
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
              <Nav.Link href="/favorite-page">Favortios</Nav.Link>
              <Nav.Link href="/contact-page">Contacto</Nav.Link>
              <NavDropdown title="V" id="navbarScrollingDropdown">
                <NavDropdown.Item onClick={handleShow}>Login</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
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
                value={search}
                onChange={handleSearch}
              />
              <Button
                variant="outline-success"
                onClick={() =>
                  productGrid.scrollIntoView({ behavior: "smooth" })
                }
              >
                Buscar
              </Button>
              <Cart
                productsToCart={productsToCart}
                setProductsToCart={setProductsToCart}
                quantity={quantity}
                setQuantity={setQuantity}
                priceCartItem={priceCartItem}
                setPriceCartItem={setPriceCartItem}
                totalCartPrice={totalCartPrice}
                setTotalCartPrice={setTotalCartPrice}
                totalCartItems={totalCartItems}
                setTotalCartItems={setTotalCartItems}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Button variant="secondary" className="d-lg-none">
        Filtros
      </Button>
      <ModalLogin
        handleShow={handleShow}
        show={show}
        handleClose={handleClose}
      />
    </>
  );
}

export default NavBar;
