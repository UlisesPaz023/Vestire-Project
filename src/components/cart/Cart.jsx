import { useState, useEffect } from "react";
import "./cart.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import { BsFillCartFill } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
const Cart = ({
  productsToCart,
  setProductsToCart,
  priceCartItem,
  setPriceCartItem,
  totalCartPrice,
  setTotalCartPrice,
  totalCartItems,
  setTotalCartItems,
}) => {
  const [show, setShow] = useState(false);
  //const { resumenDescripcion } = productsToCart;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const cartOnLocalStorage = JSON.parse(localStorage.getItem("cart"));
      console.log(cartOnLocalStorage);
      setProductsToCart(cartOnLocalStorage);
    }
  }, []);

  useEffect(() => {
    let total = 0;
    let precioTotal = 0;
    productsToCart.map((product) => {
      console.log(product.cantidad);
      total += product.cantidad;
      precioTotal = precioTotal + product.precio * product.cantidad;
    });

    setTotalCartPrice(precioTotal);
    setTotalCartItems(total);
  }, [productsToCart]);

  const deleteItem = (product) => {
    const noDeletedItems = productsToCart.filter(
      (item) => item._id + item.talle !== product._id + product.talle
    );
    setProductsToCart([...noDeletedItems]);
    localStorage.setItem("cart", JSON.stringify(noDeletedItems));

    // localStorage.setItem("cart", JSON.stringify(productsToCart));
    // if (productsToCart.length === 0) localStorage.clear("cart");
  };

  const handleBuy = () => {
    // localStorage.setItem("cart", JSON.stringify(productsToCart));
    setShow(false);
    navigate(`/buying-page`);
  };

  const handleClear = () => {
    Swal.fire({
      title: "Advertencia",
      text: `¿Está seguro que desea vaciar el carrito?`,
      icon: "error",
      showDenyButton: true,
      denyButtonText: "No",
      confirmButtonText: "Sí",
    }).then((res) => {
      if (res.isConfirmed) {
        setProductsToCart([]);
        localStorage.clear("cart");
      }
    });
  };

  return (
    <>
      <div className="dropstart">
        <div
          className="icon-container dropdown-toggle"
          style={{
            position: "relative",
            display: "inline-block",
            cursor: "pointer",
          }}
          onClick={handleShow}
        >
          <BsFillCartFill className="fs-3" />
        </div>
        <div
          className="number-circle"
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
          <span>{totalCartItems}</span>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Carrito de Compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {totalCartItems ? (
            <>
              <div className="table-responsive">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Producto</th>
                      <th scope="col">Imagen</th>
                      <th scope="col">Talle</th>
                      <th scope="col">Precio unit.</th>
                      <th scope="col">Sub-total</th>
                      <th scope="col">Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productsToCart.map((product) => (
                      <tr
                        key={product._id + product.talle}
                        className="align-middle"
                      >
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
                        <td>${product.precio.toLocaleString()}</td>
                        <td>
                          $
                          {(product.precio * product.cantidad).toLocaleString()}
                        </td>
                        <td>
                          <button
                            style={{ border: "none", backgroundColor: "white" }}
                            onClick={() => deleteItem(product)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-trash3-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="row fw-bold mt-3 text-end me-3">
                <p>
                  TOTAL: <span>${totalCartPrice.toLocaleString()}</span>
                </p>
              </div>
            </>
          ) : (
            <h4 className="text-center">El carrito está vacio.</h4>
          )}
        </Modal.Body>
        <Modal.Footer>
          <div className="container">
            <div className="row text-end">
              <div className="col">
                <Button variant="outline-secondary" onClick={handleClose}>
                  Seguir comprando
                </Button>
                {!totalCartItems ? (
                  ""
                ) : (
                  <>
                    <Button variant="outline-danger" onClick={handleClear}>
                      Vaciar Carrito
                    </Button>
                    <Button variant="outline-primary" onClick={handleBuy}>
                      Finalizar compra
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
