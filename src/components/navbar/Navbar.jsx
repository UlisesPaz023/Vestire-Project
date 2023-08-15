import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from '../img/vestiree.png'
import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import ModalLogin from '../modal/ModalLogin'
import Cart from '../cart/Cart'
import { useNavigate, Link } from 'react-router-dom'
import Swal from 'sweetalert2'

function NavBar({
  productsToCart,
  setProductsToCart,
  totalCartPrice,
  setTotalCartPrice,
  totalCartItems,
  setTotalCartItems,
  productsToShow,
  setProductsToShow,
  productsToShowAux,
  setGridTitle,
}) {
  const [search, setSearch] = useState('')
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
    let resault = productsToShow.filter(
      (product) =>
        quitarTildes(product.resumenDescripcion)
          .toLowerCase()
          .includes(search.toLowerCase().trim()) ||
        quitarTildes(search.toLowerCase().trim())
          .toLowerCase()
          .includes(
            quitarTildes(product.resumenDescripcion.toLowerCase().split(' ')[0])
          )
    )
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

  const showFav = () => {
    if (localStorage.getItem('userToken')) navigate('/favorite-page')
    else {
      Swal.fire({
        title: '¡Atención!',
        text: 'Debe iniciar sesión para ver los favoritos',
        icon: 'warning',
        timer: 2000,
      })
      return
    }
  }

  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        fixed="top"
        className="p-1"
        collapseOnSelect
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo vestire" />
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
                  <Nav.Link
                    eventKey="1"
                    onClick={() => showFav()}
                    style={{ color: 'gray' }}
                  >
                    Favoritos
                  </Nav.Link>

                  <Nav.Link as={Link} to="/contact-page" eventKey="2">
                    Contacto
                  </Nav.Link>
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
                          <Nav.Link eventKey="3" href="/admin">
                            Ir al sitio Administrador
                          </Nav.Link>

                          <NavDropdown.Divider />
                          <NavDropdown.Item
                            eventKey="4"
                            onClick={() => {
                              handleLogout()
                              navigate('/')
                            }}
                          >
                            Cerrar sesión
                          </NavDropdown.Item>
                        </>
                      ) : (
                        <NavDropdown.Item
                          eventKey="5"
                          onClick={() => {
                            handleLogout()
                            navigate('/')
                          }}
                        >
                          Cerrar sesión
                        </NavDropdown.Item>
                      )}
                    </NavDropdown>
                  ) : (
                    <Nav.Link href="" onClick={handleShow} eventKey="6">
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
