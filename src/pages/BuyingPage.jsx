import Swal from "sweetalert2";
let finalCart = [];
let totalToPay = 0;
const BuyingPage = () => {
  finalCart = localStorage.getItem("shopingCart");
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
      <div className="container bg-warning px-5 my-5">
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
                <div className="fw-bold mt-3">
                  <p>
                    TOTAL: <span>${totalToPay}</span>
                  </p>
                </div>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row">
          <div class="col py-5 text-center">
            <h2>Formulario de Pago</h2>
            <p>
              Por favor, complete los campos a continuación para finalizar con
              su compra
            </p>
          </div>
        </div>
        <div className="row">
          <div class="col-12 col-md-8 order-2 order-md-1 mx-auto">
            <h5 class="mb-3">Direccion de envio</h5>
            <form action="">
              <div class="row">
                <div class="col-12 col-sm-6 mb-3">
                  Nombre
                  <input
                    type="text"
                    class="form-control"
                    id="nombre"
                    name="nombre"
                  />
                </div>

                <div class="col-12 col-sm-6 mb-3">
                  Apellido
                  <input
                    type="text"
                    class="form-control"
                    id="apellido"
                    name="apellido"
                  />
                </div>
              </div>

              <div class="mb-3">
                Usuario
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">@</span>
                  </div>
                  <input
                    class="form-control"
                    type="text"
                    id="usuario"
                    placeholder="Usuario"
                    name="usuario"
                  />
                </div>
              </div>

              <div class="mb-3">
                Correo <span class="text-muted">(Opcional)</span>
                <input
                  type="email"
                  class="form-control"
                  id="correo"
                  name="correo"
                  placeholder="nombre@correo.com"
                />
              </div>

              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Calle 1234"
                  name="direccion"
                  id="direccion"
                />
              </div>

              <div class="mb-3">
                Direccion 2 <span class="text-muted">(Opcional)</span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Informacion adicional"
                  name="direccion2"
                  id="direccion2"
                />
              </div>

              <div class="row">
                <div class="col-12 col-sm-4 mb-3">
                  <select class="form-control" name="pais" id="pais">
                    <option value="">Seleccionar Pais</option>
                    <option value="argentina">Argentina</option>
                  </select>
                </div>

                <div class="col-12 col-sm-4 mb-3">
                  <select class="form-control" name="pais" id="pais">
                    <option value="">Seleccionar Provincia</option>
                    <option value="caba">Tucuman</option>
                    <option value="bsas">Buenos Aires</option>
                    <option value="cordoba">Cordoba</option>
                    <option value="mendoza">Mendoza</option>
                    <option value="salta">Salta</option>
                  </select>
                </div>

                <div class="col-12 col-sm-4 mb-3">
                  <input
                    class="form-control"
                    type="text"
                    id="codigo-postal"
                    placeholder="Código postal"
                  />
                </div>
              </div>

              <hr />

              <div class="custom-control custom-checkbox">
                <input
                  class="custom-control-input"
                  type="checkbox"
                  id="misma-direccion"
                />
                Enviar a la misma direccion
              </div>

              <div class="custom-control custom-checkbox">
                <input
                  class="custom-control-input"
                  type="checkbox"
                  id="guardar-informacion"
                />
                Guardar informacion para la siguiente compra
              </div>

              <hr class="mb-4" />

              <div class="d-block mb-3">
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    name="metodo-pago"
                    id="tarjeta-credito"
                    class="custom-control-input"
                    checked
                  />
                  Tarjeta de Credito
                </div>

                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    name="metodo-pago"
                    id="tarjeta-debito"
                    class="custom-control-input"
                  />
                  Tarjeta de debito
                </div>

                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    name="metodo-pago"
                    id="paypal"
                    class="custom-control-input"
                  />
                  PayPal
                </div>
              </div>

              <div class="row">
                <div class="col-12 col-sm-6 mb-3">
                  <input type="text" id="tarjeta" class="form-control" />
                  <small class="text-muted">
                    Nombre completo como se ve en la tarjeta
                  </small>
                </div>

                <div class="col-12 col-sm-6 mb-3">
                  <input type="text" id="numero-tarjeta" class="form-control" />
                </div>
              </div>

              <div class="row">
                <div class="col-6 col-sm-4 mb-3">
                  <input
                    type="text"
                    id="tarjeta-expiracion"
                    class="form-control"
                  />
                </div>

                <div class="col-6 col-sm-4 mb-3">
                  <input type="text" id="tarjeta-cvv" class="form-control" />
                </div>
              </div>

              <hr class="mb-4" />

              <button
                type="submit"
                value=""
                class="btn btn-block btn-lg bg-black text-white fw-bold mb-3"
                onClick={handleBuy}
              >
                Continuar al pago
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyingPage;
