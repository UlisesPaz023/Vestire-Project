import Swal from "sweetalert2";
import "./styles/buyingpage.css";
import React, { useRef, useState } from "react";

let finalCart = [];
let totalToPay = 0;

const BuyingPage = () => {
  finalCart = localStorage.getItem("cart");
  finalCart = JSON.parse(finalCart);
  finalCart.map((item) => {
    return totalToPay = totalToPay + item.precio * item.cantidad;
  });

  const containerRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startY, setStartY] = useState(0);

  const handleMouseDown = (event) => {
    setIsMouseDown(true);
    setStartY(event.clientY);
    totalToPay = 0;
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    totalToPay = 0;
  };

  const handleMouseMove = (event) => {
    if (isMouseDown) {
      const container = containerRef.current;
      const { clientY } = event;
      container.scrollTop += startY - clientY;
      setStartY(clientY);
      totalToPay = 0;
    }
  };

  const handleBuy = (e) => {
    e.preventDefault();
    localStorage.removeItem("shopingCart");
    Swal.fire("Éxito", "MUCHAS GRACIAS POR SU COMPRA", "success");
    setTimeout(() => {
      location.href = "/";
    }, 4000);
  };

  return (
      <div className="container-fluid container-lg buyingPageContainer p-0 py-5">
        <div className="row px-2 px-md-0 m-0">
          <div className="col text-center m-0">
            <h2 className="fw-bolder">¡USTED ESTÁ POR FINALIZAR SU COMPRA!</h2>
            <h4>Por favor revise que la información mostrada sea correcta.</h4>
          </div>
        </div>

        <div className="row m-0 px-3 px-lg-0 justify-content-center">
          <div className="col-12 col-md-7 order-2 order-md-1">
            <h4 className="mb-3 text-center text-lg-start fw-bold">Dirección de envío</h4>
            <hr />
            <form action="">
              <div className="row">
                <div className="col-12 col-sm-6 mb-3">
                  <label for="nombre">Nombre</label>
                  <input
                    type="text"
                    className="form-control rounded-0 input"
                    id="nombre"
                    name="nombre"
                  />
                </div>

                <div className="col-12 col-sm-6 mb-3">
                  <label for="apellido">Apellido</label>
                  <input
                    type="text"
                    className="form-control rounded-0 input"
                    id="apellido"
                    name="apellido"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label for="usuario">Usuario</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text rounded-0">@</span>
                  </div>
                  <input
                    className="form-control rounded-0 input"
                    type="text"
                    id="usuario"
                    placeholder="Usuario"
                    name="usuario"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label for="correo">
                  Correo <span className="text-muted">(Opcional)</span>
                </label>
                <input
                  type="email"
                  className="form-control rounded-0 input"
                  id="correo"
                  name="correo"
                  placeholder="nombre@correo.com"
                />
              </div>

              <div className="mb-3">
                <label for="direccion">Dirección</label>
                <input
                  type="text"
                  className="form-control rounded-0 input"
                  placeholder="Calle 1234"
                  name="direccion"
                  id="direccion"
                />
              </div>

              <div className="mb-3">
                <label for="direccion2">
                  Dirección 2 <span className="text-muted">(Opcional)</span>
                </label>
                <input
                  type="text"
                  className="form-control rounded-0 input"
                  placeholder="Informacion adicional"
                  name="direccion2"
                  id="direccion2"
                />
              </div>

              <div className="row">
                <div className="col-12 col-sm-4 mb-3">
                  <label for="pais">País</label>
                  <select className="form-control rounded-0 input" name="pais" id="pais">
                    <option value="">Seleccionar Pais</option>
                    <option value="argentina">Argentina</option>
                    <option value="españa">España</option>
                    <option value="alemania">Alemania</option>
                    <option value="japon">Japón</option>
                    <option value="usa">USA</option>
                  </select>
                </div>

                <div className="col-12 col-sm-4 mb-3">
                  <label for="pais">Provincia o Estado</label>
                  <select className="form-control rounded-0 input" name="pais" id="pais">
                    <option value="">Seleccionar Estado</option>
                    <option value="caba">
                      Ciudad Autónoma de Buenos Aires
                    </option>
                    <option value="bsas">Buenos Aires</option>
                    <option value="cordoba">Córdoba</option>
                    <option value="mendoza">Mendoza</option>
                    <option value="salta">Salta</option>
                  </select>
                </div>

                <div className="col-12 col-sm-4 mb-3">
                  <label for="codigo-postal">Código Postal</label>
                  <input
                    className="form-control rounded-0 input"
                    type="text"
                    id="codigo-postal"
                  />
                </div>
              </div>

              <hr className="mb-4" />

              <div className="d-block mb-3">
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    name="metodo-pago"
                    id="tarjeta-credito"
                    className="custom-control-input"
                    checked
                  />
                  <label className="custom-control-label" for="tarjeta-credito">
                    Tarjeta de Crédito
                  </label>
                </div>

                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    name="metodo-pago"
                    id="tarjeta-debito"
                    className="custom-control-input"
                  />
                  <label className="custom-control-label" for="tarjeta-debito">
                    Tarjeta de débito
                  </label>
                </div>

                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    name="metodo-pago"
                    id="paypal"
                    className="custom-control-input"
                  />
                  <label className="custom-control-label" for="paypal">
                    PayPal
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-6 mb-3">
                  <label for="tarjeta">Nombre en la tarjeta</label>
                  <input type="text" id="tarjeta" className="form-control rounded-0 input" />
                  <small className="text-muted">
                    Nombre completo como se ve en la tarjeta
                  </small>
                </div>

                <div className="col-12 col-sm-6 mb-3">
                  <label for="numero-tarjeta">Número de tarjeta</label>
                  <input
                    type="text"
                    id="numero-tarjeta"
                    className="form-control input rounded-0"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-6 col-sm-4 mb-3">
                  <label for="tarjeta-expiracion">Expiración</label>
                  <input
                    type="text"
                    id="tarjeta-expiracion"
                    className="form-control input rounded-0"
                  />
                </div>

                <div className="col-6 col-sm-4 mb-3">
                  <label for="tarjeta-cvv">CVV</label>
                  <input
                    type="text"
                    id="tarjeta-cvv"
                    className="form-control input rounded-0"
                  />
                </div>
              </div>

              <hr className="mb-4" />

              <input
                onClick = {handleBuy}
                type="submit"
                value="Continuar al pago"
                className="fw-bold w-100 py-3 button btn btn-block rounded-0"
              />
            </form>
          </div>

          <div className="px-5 px-md-2 col-12 col-md-4 order-1 order-md-2">
            <h4 className="mb-3 text-center text-lg-end">
              <span className="fs-4 fw-bolder">Carrito</span>
            </h4>
            <hr className="text-black"/>
            <div className={`text-white`}>              
              <ul 
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className={`yourCartContainer m-0 p-0`}
              >
                {finalCart.map((product) => (
                  <li>
                    <div key= {product._id} className="list-group-item d-flex justify-content-between align-items-center px-2 py-2 text-black">
                      <img className="pe-2 w-25" alt={product.resumenDescripcionToCart} src={product.imagen} />
                      <div className="p-1">
                        <h6 className="text-center my-0 w-5">{product.resumenDescripcionToCart} x{product.cantidad}</h6>
                      </div>
                      <span className="fw-light">${product.precio}</span>
                    </div>  
                    <hr className="m-0 text-black"/>
                  </li>
                ))}
              </ul>              
              <hr className="text-black"/>
              <li className="d-flex mt-3 justify-content-end">
                <span className="text-black fw-light me-1">Total (ARS):</span>
                <strong className="text-black">${totalToPay}</strong>
              </li>
            </div>
          </div>
        </div>
      </div>
  );
};

export default BuyingPage;
