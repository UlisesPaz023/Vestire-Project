import Swal from "sweetalert2";
let finalCart = [];
let totalToPay = 0;
const BuyingPage = () => {
  finalCart = localStorage.getItem("cart");
  finalCart = JSON.parse(finalCart);
  finalCart.map((item) => {
    totalToPay = totalToPay + item.precio * item.cantidad;
  });

  const handleBuy = (e) => {
    e.preventDefault();
    localStorage.removeItem("shopingCart");
    Swal.fire("Éxito", "MUCHAS GRACIAS POR SU COMPRA", "success");
    setTimeout(() => {
      location.href = "/";
    }, 4000);
  };

  return (
    <>
      <div
        className="container  px-5 my-5"
        style={{ backgroundColor: "#FDBD56" }}
      >
        <div className="row">
          <div className="col text-center">
            <h2>USTED ESTÁ POR FINALIZAR SU COMPRA</h2>
            <h4>Por favor revise que la información mostrada sea correcta:</h4>
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
                {finalCart.map((product) => (
                  <tr key={product._id} className="align-middle">
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
                <div className="fw-bold mt-3">
                  <p>
                    TOTAL: <span>${totalToPay}</span>
                  </p>
                </div>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-8 order-2 order-md-1">
            <h4 className="mb-3">Direccion de envio</h4>
            <form action="">
              <div className="row">
                <div className="col-12 col-sm-6 mb-3">
                  <label for="nombre">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                  />
                </div>

                <div className="col-12 col-sm-6 mb-3">
                  <label for="apellido">Apellido</label>
                  <input
                    type="text"
                    className="form-control"
                    id="apellido"
                    name="apellido"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label for="usuario">Usuario</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">@</span>
                  </div>
                  <input
                    className="form-control"
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
                  className="form-control"
                  id="correo"
                  name="correo"
                  placeholder="nombre@correo.com"
                />
              </div>

              <div className="mb-3">
                <label for="direccion">Direccion</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Calle 1234"
                  name="direccion"
                  id="direccion"
                />
              </div>

              <div className="mb-3">
                <label for="direccion2">
                  Direccion 2 <span className="text-muted">(Opcional)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Informacion adicional"
                  name="direccion2"
                  id="direccion2"
                />
              </div>

              <div className="row">
                <div className="col-12 col-sm-4 mb-3">
                  <label for="pais">Pais</label>
                  <select className="form-control" name="pais" id="pais">
                    <option value="">Seleccionar Pais</option>
                    <option value="argentina">Argentina</option>
                    <option value="españa">España</option>
                    <option value="alemania">Alemania</option>
                    <option value="japon">Japon</option>
                    <option value="usa">USA</option>
                  </select>
                </div>

                <div className="col-12 col-sm-4 mb-3">
                  <label for="pais">Provincia o Estado</label>
                  <select className="form-control" name="pais" id="pais">
                    <option value="">Seleccionar Estado</option>
                    <option value="caba">
                      Ciudad Autonoma de Buenos Aires
                    </option>
                    <option value="bsas">Buenos Aires</option>
                    <option value="cordoba">Cordoba</option>
                    <option value="mendoza">Mendoza</option>
                    <option value="salta">Salta</option>
                  </select>
                </div>

                <div className="col-12 col-sm-4 mb-3">
                  <label for="codigo-postal">Codigo Postal</label>
                  <input
                    className="form-control"
                    type="text"
                    id="codigo-postal"
                  />
                </div>
              </div>

              <hr />

              <div className="custom-control custom-checkbox">
                <input
                  className="custom-control-input"
                  type="checkbox"
                  id="misma-direccion"
                />
                <label className="custom-control-label" for="misma-direccion">
                  Enviar a la misma direccion
                </label>
              </div>

              <div className="custom-control custom-checkbox">
                <input
                  className="custom-control-input"
                  type="checkbox"
                  id="guardar-informacion"
                />
                <label
                  className="custom-control-label"
                  for="guardar-informacion"
                >
                  Guardar informacion para la siguiente compra
                </label>
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
                    Tarjeta de Credito
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
                    Tarjeta de debito
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
                  <input type="text" id="tarjeta" className="form-control" />
                  <small className="text-muted">
                    Nombre completo como se ve en la tarjeta
                  </small>
                </div>

                <div className="col-12 col-sm-6 mb-3">
                  <label for="numero-tarjeta">Numero de tarjeta</label>
                  <input
                    type="text"
                    id="numero-tarjeta"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-6 col-sm-4 mb-3">
                  <label for="tarjeta-expiracion">Expiracion</label>
                  <input
                    type="text"
                    id="tarjeta-expiracion"
                    className="form-control"
                  />
                </div>

                <div className="col-6 col-sm-4 mb-3">
                  <label for="tarjeta-cvv">CVV</label>
                  <input
                    type="text"
                    id="tarjeta-cvv"
                    className="form-control"
                  />
                </div>
              </div>

              <hr className="mb-4" />

              <input
                type="submit"
                value="Continuar al pago"
                className="btn btn-block btn-lg btn-primary"
              />
            </form>
          </div>

          <div className="col-12 col-md-4 order-1 order-md-2">
            <h4 className="mb-3 d-flex justify-content-between align-items-center">
              <span className="text-muted">Tu Carrito</span>
              <span className="badge - badge-secondary badge-pill">3</span>
            </h4>

            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between">
                <div>
                  <h6 className="my-0">Nombre del producto</h6>
                  <small className="text-muted">Descripcion del producto</small>
                </div>
                <span className="text-muted">$12</span>
              </li>

              <li className="list-group-item d-flex justify-content-between">
                <div>
                  <h6 className="my-0">Segundo producto</h6>
                  <small className="text-muted">Descripcion del producto</small>
                </div>
                <span className="text-muted">$8</span>
              </li>

              <li className="list-group-item d-flex justify-content-between">
                <div>
                  <h6 className="my-0">Tercer producto</h6>
                  <small className="text-muted">Descripcion del producto</small>
                </div>
                <span className="text-muted">$5</span>
              </li>

              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Codigo de descuento</h6>
                  <small className="text-success">CUPONEJEMPLO99</small>
                </div>
                <span className="text-success">$5</span>
              </li>

              <li className="list-group-item d-flex justify-content-between bg-light">
                <span className="text-muted">Total (USD)</span>
                <strong>$20</strong>
              </li>
            </ul>

            <form action="" className="card p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Cupon"
                />
                <div className="input-group-append">
                  <button className="btn btn-secondary">Canjear</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyingPage;
