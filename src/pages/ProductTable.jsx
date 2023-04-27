import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductTableRow from "../components/ProductTableRow";
import ProductForm from "./ProductForm";

const ProductTable = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalForm, setModalForm] = useState(null);
  const url = "http://localhost:3000/productos";

  useEffect(() => {
    setModalForm(new bootstrap.Modal(document.getElementById("exampleModal")));
    setLoading(true);
    const getData = async () => {
      try {
        const resp = await axios.get(url);
        setDb(resp.data);
        setError("");
        setLoading(false);
        console.log(db);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError("Ha ocurrido un error, intente más tarde");
      }
    };
    getData();
  }, []);

  const createData = async (data) => {
    try {
      // let options = {
      //     method: "POST",
      //     headers: {
      //       "Content-type": "application/json; charset=utf-8",
      //     },
      //     data: JSON.stringify(data),
      //   },
      let resp = await axios.post(url, data);
      console.log(resp);
      //   json = await resp.data;
      // setDb([...db, json]);
    } catch (error) {
      console.log(error);
    }
    console.log(db);
    modalForm.hide();
    location.reload();
  };

  const updateData = async (data) => {
    try {
      let endpoint = `${url}/${data.id}`;
      let resp = await axios.put(endpoint);
      if (!resp.err) {
        let newProduct = db.map((el) => (el.id === data.id ? data : el));
        modalForm.hide();
        setDb(newProduct);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el producto con el id '${id}'?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let resp = await axios.delete(endpoint);
      if (!resp.err) {
        let newData = db.filter((el) => el.id !== id);
        setDb(newData);
      } else {
        setError(resp);
      }
    }
  };
  return (
    <>
      <h2 className="text-center">Listado de Productos Registrados</h2>
      <div className="container">
        <div className="row mt-3">
          <div className="col-xs-3 px-0">
            <button
              className="btn btn-primary mx-0"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Agregar Producto
            </button>
          </div>
        </div>
        <div className="row mt-3">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">CATEGORIA</th>
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
                  <td colSpan="3">Sin datos</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {dataToEdit ? "Editar producto" : "Cargar Producto"}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setDataToEdit(null);
                }}
              ></button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <ProductForm
                  createData={createData}
                  updateData={updateData}
                  dataToEdit={dataToEdit}
                  setDataToEdit={setDataToEdit}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => {
                  setDataToEdit(null);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTable;
