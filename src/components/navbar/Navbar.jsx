import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from '../img/vestiree.png'
import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import ModalLogin from '../modal/ModalLogin'
import Cart from '../cart/Cart'
import { useNavigate } from 'react-router-dom'

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
}) {
  const productGrid = document.getElementById('product-grid')
  const [search, setSearch] = useState()
  const [searchResault, setSearchResault] = useState()
  const [show, setShow] = useState(false)
  const [disableButton, setDisableButton] = useState(true)
  const navigate = useNavigate()
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setDisableButton(false)
    if (e.target.value === '') {
      setDisableButton(true)
      setProductsToShow(productsToShowAux)
      setGridTitle('Nueva Colección')
    }
  }

  const quitarTildes = (cadena) => {
    const tildes = {
      á: 'a',
      é: 'e',
      í: 'i',
      ó: 'o',
      ú: 'u',
      Á: 'A',
      É: 'E',
      Í: 'I',
      Ó: 'O',
      Ú: 'U',
    }

    return cadena.replace(/[áéíóúÁÉÍÓÚ]/g, (match) => tildes[match])
  }

  const showSearch = () => {
    let resault = productsToShow.filter((product) =>
      quitarTildes(product.resumenDescripcion).toLowerCase().includes(search)
    )
    console.log(resault)
    if (resault.length > 0) {
      setProductsToShow(resault)
      setGridTitle('Resultados de su búsqueda')
    } else {
      setGridTitle('Su búsqueda no produjo resultados')
      setProductsToShow([])
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('userName')
    localStorage.removeItem('userToken')
    localStorage.removeItem('isAdmin')
    navigate('/')
  }

  let userLoged = localStorage.getItem('userName')
  return (
    <>
      <ModalLogin show={show} handleClose={handleClose} />
      <Navbar bg="light" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="container">
              <div className="row">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link href="/favorite-page">Favoritos</Nav.Link>
                  <Nav.Link href="/contact-page">Contacto</Nav.Link>
                  {userLoged ? (
                    <NavDropdown
                      className="me-auto"
                      title={
                        <>
                          <FaUser className="me-1" />
                          {userLoged}
                        </>
                      }
                      id="navbarScrollingDropdown"
                    >
                      {localStorage.getItem('isAdmin') ? (
                        <>
                          <Nav.Link href="/admin">
                            Ir al sitio Administrador
                          </Nav.Link>

                          <NavDropdown.Divider />
                          <NavDropdown.Item onClick={handleLogout}>
                            Cerrar sesión
                          </NavDropdown.Item>
                        </>
                      ) : (
                        <NavDropdown.Item onClick={handleLogout}>
                          Cerrar sesión
                        </NavDropdown.Item>
                      )}
                    </NavDropdown>
                  ) : (
                    <Nav.Link href="" onClick={handleShow}>
                      Login | Registrarse
                    </Nav.Link>
                  )}
                </Nav>
              </div>
            </div>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Buscar..."
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={handleSearch}
              />
              <Button
                variant="outline-success"
                onClick={showSearch}
                disabled={disableButton}
                href="#product-grid-section"
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
      <ModalLogin
        handleShow={handleShow}
        show={show}
        handleClose={handleClose}
      />
    </>
  )
}

export default NavBar
