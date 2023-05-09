import { useState } from "react";
import "./cart.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Cart = ({
  productsToCart,
  priceCartItem,
  setPriceCartItem,
  totalCartPrice,
  setTotalCartPrice,
}) => {
  const [show, setShow] = useState(false);
  const { resumenDescripcion } = productsToCart;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(productsToCart);
  return (
    <>
      <div className="dropstart">
        <div
          class="icon-container dropdown-toggle"
          style={{
            position: "relative",
            display: "inline-block",
            cursor: "pointer",
          }}
          onClick={handleShow}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="black"
            class="bi bi-bag-fill position-relative"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
          </svg>
        </div>
        <div
          class="number-circle"
          style={{
            position: "absolute",
            top: "-10px",
            right: "-10px",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: "#ffc107",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span>1</span>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Carrito de Compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Cantidad</th>
                <th scope="col">Producto</th>
                <th scope="col">Imagen</th>
                <th scope="col">Talle</th>
                <th scope="col">Sub-total</th>
              </tr>
            </thead>
            <tbody>
              {productsToCart.map((product) => (
                <tr key={product._id} class="align-middle">
                  <td>{product.cantidad}</td>
                  <td>{product.resumenDescripcionToCart}</td>
                  <td>
                    <img
                      src={product.imagen}
                      alt=""
                      width={"50px"}
                      height={"auto"}
                    />
                  </td>
                  <td>{product.talle.toUpperCase()}</td>
                  <td>${product.precio * product.cantidad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Seguir comprando
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Finalizar compra
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
