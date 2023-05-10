import { React, useEffect, useState } from "react";

import Subcat from "../components/Subcat";

const ProductForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const initProduct = {
    codigo: "",
    clase: [],
    categoria: "",
    subCategoria: "",
    marca: "",
    resumenDescripcion: "",
    descripcion: "",
    imagen: "",
    color: "",
    destacado: false,
    cantidadPorTalle: {
      xs: 0,
      s: 0,
      m: 0,
      l: 0,
      xl: 0,
    },
    precio: 0,
  };

  const [product, setProduct] = useState(initProduct);
  const {
    codigo,
    clase,
    categoria,
    subCategoria,
    marca,
    resumenDescripcion,
    descripcion,
    color,
    destacado,
    imagen,
    cantidadPorTalle,
    precio,
  } = product;

  let [coleccion, sastreria, calzado, accesorios] = clase;

  useEffect(() => {
    if (dataToEdit) setProduct(dataToEdit);
    else setProduct(initProduct);
  }, [dataToEdit]);

  const handleChangeInt = (e) => {
    setProduct({
      ...product,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleChecked = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.checked });
  };

  const handleCheckedClase = (e) => {
    if (e.target.checked) {
      if (!clase.includes(e.target.name)) clase.push(e.target.name);
    } else {
      const index = clase.indexOf(e.target.name);
      if (index > -1) clase.splice(index, 1);
    }
    setProduct({ ...product, ["clase"]: clase });
  };

  const handleChange = (e) => {
    if (e.target.name === "cantidadPorTalle") {
      cantidadPorTalle[e.target.id] = Number(e.target.value);
      setProduct({ ...product, cantidadPorTalle });
    } else {
      console.log(e.target.name, e.target.value);
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product._id) createData(product);
    else {
      console.log("por editar", product);
      updateData(product);
    }
    setProduct(initProduct);
    setDataToEdit(null);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row mb-2">
          <label htmlFor="codigo" className="form-label">
            Código
          </label>
          <input
            type="text"
            className="form-control"
            id="codigo"
            placeholder="Ingrese código del producto"
            name="codigo"
            value={codigo}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="row ">
          <span className="mb-1">Seleccione la/s clase/s del producto</span>
          <div className="card card-body mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="Coleccion"
              value={coleccion}
              checked={clase.includes("Coleccion")}
              id="coleccion"
              onChange={handleCheckedClase}
              required
            />
            <label className="form-check-label" htmlFor="coleccion">
              Colección
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              name="Sastreria"
              value={sastreria}
              checked={clase.includes("Sastreria")}
              id="sastreria"
              onChange={handleCheckedClase}
            />
            <label className="form-check-label" htmlFor="sastreria">
              Sastrería
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              name="Accesorios"
              value={accesorios}
              checked={clase.includes("Accesorios")}
              id="accesorios"
              onChange={handleCheckedClase}
            />
            <label className="form-check-label" htmlFor="accesorios">
              Accesorios
            </label>
          </div>
        </div>
        <div className="row">
          <select
            className="form-select mb-2"
            aria-label="Default select example"
            name="categoria"
            value={categoria}
            onChange={handleChange}
          >
            <option selected>Categoria</option>
            <option value="Camisa">Camisa</option>
            <option value="Pantalon">Pantalon</option>
            <option value="Ambo">Ambo</option>
            <option value="Accesorios">Accesorios</option>
          </select>
        </div>
        <div className="row">
          {categoria && (
            <Subcat
              categoria={categoria}
              handleChange={handleChange}
              subCategoria={subCategoria}
            />
          )}
        </div>

        <div className="row mb-2">
          <label htmlFor="marca" className="form-label">
            Marca
          </label>
          <input
            type="text"
            className="form-control"
            id="marca"
            placeholder="Ingrese marca o fabricante"
            name="marca"
            value={marca}
            onChange={handleChange}
          ></input>
        </div>
        <div className="row mb-2">
          <label htmlFor="imagen" className="form-label">
            Imagen
          </label>
          <input
            type="text"
            className="form-control"
            id="imagen"
            placeholder="Ingrese URL de imagen"
            name="imagen"
            value={imagen}
            onChange={handleChange}
          ></input>
        </div>
        <div className="row mb-2">
          <label htmlFor="resumenDescripcion" className="mb-2">
            Resumen de descripción
          </label>
          <textarea
            className="form-control"
            placeholder="Resumen del producto"
            id="resumenDescripcion"
            name="resumenDescripcion"
            value={resumenDescripcion}
            style={{ height: "50px" }}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="row mb-2">
          <label htmlFor="descripcion" className="mb-2">
            Descripción
          </label>
          <textarea
            className="form-control"
            placeholder="Descripción del producto"
            id="descripcion"
            name="descripcion"
            value={descripcion}
            style={{ height: "100px" }}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="row">
          <select
            className="form-select mb-2"
            aria-label="Default select example"
            name="color"
            value={color}
            onChange={handleChange}
          >
            <option selected>Color</option>
            <option value="Negro">Negro</option>
            <option value="Blanco">Blanco</option>
            <option value="Gris">Gris</option>
            <option value="Azul">Azul</option>
            <option value="Rojo">Rojo</option>
            <option value="Verde">Verde</option>
            <option value="Rosa">Rosa</option>
            <option value="Celeste">Celeste</option>
            <option value="Verde agua">Verde agua</option>
            <option value="Jean">Jean</option>
          </select>
        </div>
        <div className="row mb-2">
          <label htmlFor="precio" className="form-label">
            Precio
          </label>
          <input
            type="number"
            className="form-control"
            id="precio"
            placeholder="Precio del producto"
            name="precio"
            value={precio}
            onChange={handleChangeInt}
          ></input>
        </div>

        <div className="row">
          <span>Cantidad por talles</span>
          <div className="col">
            <label htmlFor="xs" className="form-label">
              xS
            </label>
            <input
              type="text"
              className="form-control"
              id="xs"
              placeholder="Cantidad xS"
              name="cantidadPorTalle"
              value={cantidadPorTalle.xs}
              onChange={handleChange}
            ></input>
          </div>
          <div className="col">
            <label htmlFor="s" className="form-label">
              S
            </label>
            <input
              type="text"
              className="form-control"
              id="s"
              placeholder="Cantidad S"
              name="cantidadPorTalle"
              value={cantidadPorTalle.s}
              onChange={handleChange}
            ></input>
          </div>
          <div className="col">
            <label htmlFor="m" className="form-label">
              M
            </label>
            <input
              type="text"
              className="form-control"
              id="m"
              placeholder="Cantidad M"
              name="cantidadPorTalle"
              value={cantidadPorTalle.m}
              onChange={handleChange}
            ></input>
          </div>
          <div className="col">
            <label htmlFor="l" className="form-label">
              L
            </label>
            <input
              type="text"
              className="form-control"
              id="l"
              placeholder="Cantidad L"
              name="cantidadPorTalle"
              value={cantidadPorTalle.l}
              onChange={handleChange}
            ></input>
          </div>
          <div className="col">
            <label htmlFor="xL" className="form-label">
              xL
            </label>
            <input
              type="text"
              className="form-control"
              id="xl"
              placeholder="Cantidad xL"
              name="cantidadPorTalle"
              value={cantidadPorTalle.xl}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className="row my-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="destacado"
              value={destacado}
              checked={destacado}
              id="destacado"
              onChange={handleChecked}
            />
            <label className="form-check-label" htmlFor="destacado">
              Producto Destacado
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </>
  );
};

export default ProductForm;
