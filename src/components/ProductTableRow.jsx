import { React, useEffect, useState } from "react";

const ProductTableRow = ({ el, setDataToEdit, modalForm, deleteData }) => {
  const {
    id,
    categoria,
    subCategoria,
    marca,
    resumenDescripcion,
    descripcion,
    precio,
    color,
    destacado,
    cantidadPorTalle,
  } = el;
  const { xs, s, m, l, xl } = cantidadPorTalle;

  return (
    <tr>
      <td>{id}</td>
      <td>{categoria}</td>
      <td>{subCategoria}</td>
      <td>{marca}</td>
      <td>{resumenDescripcion}</td>
      <td>{descripcion}</td>
      <td>{color}</td>
      {/* <td>{destacado}</td> */}
      <td>
        <input type="checkbox" checked={destacado} disabled />
      </td>
      <td>{xs}</td>
      <td>{s}</td>
      <td>{m}</td>
      <td>{l}</td>
      <td>{xl}</td>
      <td>{precio}</td>
      <td>
        <button className="btn btn-primary btn-sm">Vista previa</button>
        {/* {console.log(el)} */}
        <button
          className="btn btn-warning btn-sm"
          onClick={() => {
            setDataToEdit(el), modalForm.show();
          }}
        >
          Editar
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteData(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default ProductTableRow;
