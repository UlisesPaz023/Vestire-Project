import { React, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import styles from "../pages/productPage.module.css";
import axios from "axios";
const url = "https://vestire.onrender.com/product";
const ProductPage = ({
  productsToCart,
  setProductsToCart,
  quantity,
  setQuantity,
  priceCartItem,
  setPriceCartItem,
  totalCartPrice,
  setTotalCartPrice,
}) => {
  const location = useLocation();
  const {
    codigo,
    _id,
    marca,
    descripcion,
    resumenDescripcion,
    imagen,
    precio,
    color,
    cantidadPorTalle,
    categoria,
    subCategoria,
  } = location.state;
  const stock = useRef(0);
  const talle = useRef("");
  const resumenDescripcionToCart = resumenDescripcion
    .split(" ")
    .map((palabra) => {
      return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    })
    .join(" ");

  const initProductToCart = {
    _id,
    imagen,
    resumenDescripcionToCart,
    precio,
    talle: talle.current,
    cantidad: quantity,
  };
  const { xs, s, m, l, xl } = cantidadPorTalle;

  const handleCheck = (e) => {
    stock.current = e.target.value;
    talle.current = e.target.name;
    setDisableCartButton(!disableCartButton);
  };

  const handleSubsProduct = () => {
    if (quantity === 0) setQuantity(0);
    else setQuantity(quantity - 1);
  };

  const handleAddProduct = () => {
    if (quantity >= stock.current) alert("no hay suficiente stock");
    else setQuantity(quantity + 1);
  };

  const hanldeAddToCart = () => {
    setProductsToCart((prevState) => [...prevState, initProductToCart]);
  };

  const [disableCartButton, setDisableCartButton] = useState(false);
  return (
    <>
      <div className="container bg-warning px-5 mb-5">
        <div className={`${styles.desc} container bg-warning p-0 my-5`}>
          {categoria} / {subCategoria} / {resumenDescripcion}
        </div>
        <div className="row col m-0">
          <div className="m-0 p-0 col">
            <img className="col-12" src={imagen} alt={resumenDescripcion} />
          </div>
          <div className="col-6 py-0 px-5">
            <div className={`${styles.desContainer} pb-3 mb-4`}>
              <p className="fw-bold">
                {resumenDescripcion.toUpperCase()} | Marca: {marca}
              </p>
              <p className={`${styles.desc}`}>{descripcion}</p>
              <h3 className="fw-bold">${precio}</h3>
            </div>
            <div className={`${styles.desContainer} pb-4 mb-4`}>
              <div className="d-flex align-items-center">
                <p className={`${styles.desc} m-0 me-1`}>Color:</p>
                <div className={`${styles.color} bg-black m-0 me-1`}></div>
                <p className={`${styles.desc} m-0`}>{color.toUpperCase()}</p>
              </div>

              <p className={`${styles.desc} fw-bold mt-3`}>Talle:</p>

              {/* <div
                  className={`${styles.talle} d-flex align-items-center justify-content-center`}
                > 
                 </div>  */}
              <div className="row">
                <div className="col-6 col-xs-12 d-flex justify-content-evenly">
                  {xs ? (
                    <>
                      <input
                        type="checkbox"
                        id="talleXs"
                        onClick={handleCheck}
                        value={xs}
                        name="xS"
                      />
                      <label htmlFor="talleXs">xS</label>
                    </>
                  ) : (
                    ""
                  )}
                  {s ? (
                    <>
                      <input
                        type="checkbox"
                        id="talleS"
                        onClick={handleCheck}
                        value={s}
                        name="s"
                      />
                      <label htmlFor="talleS">S</label>
                    </>
                  ) : (
                    ""
                  )}
                  {m ? (
                    <>
                      <input
                        type="checkbox"
                        id="talleM"
                        onClick={handleCheck}
                        value={m}
                        name="m"
                      />
                      <label htmlFor="talleM">M</label>
                    </>
                  ) : (
                    ""
                  )}
                  {l ? (
                    <>
                      <input
                        type="checkbox"
                        id="talleL"
                        onClick={handleCheck}
                        value={l}
                        name="l"
                      />
                      <label htmlFor="talleL">L</label>
                    </>
                  ) : (
                    ""
                  )}
                  {xl ? (
                    <>
                      <input
                        type="checkbox"
                        id="talleXl"
                        onClick={handleCheck}
                        value={xl}
                        name="xL"
                      />
                      <label htmlFor="talleXl">xL</label>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="mt-4 row">
                <div className="col d-flex">
                  <div className="bg-black">
                    <button
                      className="text-white bg-black fw-bold"
                      style={{ border: "none" }}
                      onClick={handleSubsProduct}
                    >
                      -
                    </button>
                    <span className="text-white bg-black fw-bold">
                      {quantity}
                    </span>
                    <button
                      className="text-white bg-black fw-bold"
                      style={{ border: "none" }}
                      onClick={handleAddProduct}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="border-0 bg-black text-white fw-bold py-2 px-4 ms-5"
                    onClick={hanldeAddToCart}
                    disabled={!disableCartButton}
                  >
                    <p className={`m-0 ${styles.button}`}>AGREGAR AL CARRITO</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
