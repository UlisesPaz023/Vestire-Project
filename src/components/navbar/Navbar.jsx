import moduleStyles from "./navbar.module.css";
import Button from "react-bootstrap/Button";
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
  setGridTitle,
  //productGrid,
}) {
  const productGrid = document.getElementById("product-grid");
  const [search, setSearch] = useState();
  const [searchResault, setSearchResault] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSearch = (e) => {
    //console.log(e.target.value);
    setSearch(e.target.value);
    //console.log(search);
    // let resault = productsToShow.filter(
    //   (elem) =>
    //     search.trim() ===
    //     elem.resumenDescripcion.toString().toLowerCase().trim()
    // );
    //console.log(resault);
    //searchFilter(e.target.value);

    if (e.target.value === "") {
      setProductsToShow(productsToShowAux);
      setGridTitle("Nueva Colección");
    }
  };

  // useEffect(() => {

  //   let resault = productsToShow.filter((product) => product.includes(search));
  //   console.log(resault);
  // }, [search]);

  // const searchFilter = (item) => {
  //   let searchResault = productsToShowAux.filter((elem) => {
  //     if (
  //       elem.resumenDescripcion
  //         .toString()
  //         .toLowerCase()
  //         .includes(item.toLowerCase().trim())
  //     )
  //       return elem;
  //   });
  //   setProductsToShow(searchResault);
  // };

  const quitarTildes = (cadena) => {
    const tildes = {
      á: "a",
      é: "e",
      í: "i",
      ó: "o",
      ú: "u",
      Á: "A",
      É: "E",
      Í: "I",
      Ó: "O",
      Ú: "U",
    };

    return cadena.replace(/[áéíóúÁÉÍÓÚ]/g, (match) => tildes[match]);
  };

  const showSearch = () => {
    let resault = productsToShow.filter((product) =>
      quitarTildes(product.resumenDescripcion).toLowerCase().includes(search)
    );
    console.log(resault);
    if (resault.length > 0) {
      setProductsToShow(resault);
      setGridTitle("Resultados de su búsqueda");
    } else {
      setGridTitle("Su búsqueda no produjo resultados");
      setProductsToShow([]);
    }
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
              <Button variant="outline-success" onClick={showSearch}>
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
      <ModalLogin
        handleShow={handleShow}
        show={show}
        handleClose={handleClose}
      />
    </>
  );
}

export default NavBar;
