import React from "react";
import ProductTableRow from "./ProductTableRow";

const TableByCategories = ({ db, setDataToEdit, deleteData, modalForm }) => {
  return (
    <div>
      {db[0] ? (
        <>
          <h4>Categoria: {db[0].categoria}</h4>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">CÓDIGO</th>
                <th scope="col">CLASE/S</th>
                <th scope="col">SUB-CATEGORIA</th>
                <th scope="col">MARCA</th>
                <th scope="col">RESUMEN DESCRIPCION</th>
                <th scope="col">DESCRIPCION</th>
                <th scope="col">COLOR</th>
                <th scope="col">DESTACADO</th>
                <th scope="col" colSpan={5}>
                  CANT. POR TALLE
                </th>
                <th scope="col">PRECIO</th>
                <th scope="col">ACCIONES</th>
              </tr>
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">xS</th>
                <th scope="col">S</th>
                <th scope="col">M</th>
                <th scope="col">L</th>
                <th scope="col">xL</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {db ? (
                db.map((el) => (
                  <ProductTableRow
                    key={el.id}
                    el={el}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                    modalForm={modalForm}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="11">Sin datos</td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      ) : (
        <h3>Sin productos para mostrar</h3>
      )}
    </div>
  );
};

export default TableByCategories;
