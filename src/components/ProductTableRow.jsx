import { React, useEffect, useState } from "react";

const ProductTableRow = ({ el, setDataToEdit, modalForm, deleteData }) => {
  const {
    _id,
    codigo,
    clase,
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
    <tr id={_id ? _id : ""}>
      <td>{codigo}</td>
      <td>
        {clase.map((text, idx) =>
          idx !== clase.length - 1 ? <div>{text}-</div> : <div>{text}</div>
        )}
      </td>
      <td>{subCategoria}</td>
      <td>{marca}</td>
      <td>{resumenDescripcion}</td>
      <td>
        {descripcion ? (
          <p>Con datos. Seleccionar EDITAR para ver</p>
        ) : (
          <p>Sin datos</p>
        )}
      </td>
      <td>{color}</td>
      <td className="text-center">
        <input type="checkbox" checked={destacado} disabled />
      </td>
      <td>{xs}</td>
      <td>{s}</td>
      <td>{m}</td>
      <td>{l}</td>
      <td>{xl}</td>
      <td>${precio}</td>
      <td>
        <button className="btn btn-primary btn-sm">Vista previa</button>

        <button
          className="btn btn-warning btn-sm"
          onClick={() => {
            setDataToEdit(el), modalForm.show(), console.log(el);
          }}
        >
          Editar
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteData(_id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default ProductTableRow;
