import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductTableRow from "../components/ProductTableRow";
import ProductForm from "./ProductForm";
import Swal from "sweetalert2";
import TableByCategories from "../components/TableByCategories";
import { CircularProgress } from "@mui/material";
import { useRef } from "react";
import "./styles/productTable.css";
const ProductTable = () => {
  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalForm, setModalForm] = useState(null);
  const url = "https://vestire.onrender.com/product";

  useEffect(() => {
    setModalForm(new bootstrap.Modal(document.getElementById("exampleModal")));
    setLoading(true);
    const getData = async () => {
      try {
        let endpoint = `${url}/get-products`;
        const resp = await axios.get(endpoint);
        setDb(resp.data);
        setError("");
        // console.log(resp.data);
        // console.log(db);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
        setError("Ha ocurrido un error, intente más tarde");
      }
    };
    getData();
    // console.log(db);
    // let idNewRow = db[db.length - 1]._id;
    // let newRow = document.getElementById(idNewRow);
    // console.log(newRow);
  }, []);

  // useEffect(() => {
  //   if (newRow.current) {
  //     newRow.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //     });
  //   }
  // }, [newRow]);

  const createData = async (data) => {
    try {
      let endpoint = `${url}/create-product`;
      let resp = await axios.post(endpoint, data);
      console.log(resp.data);
      setDb([...db, resp.data]);
      Swal.fire("Éxito", "El registro se creó correctamente", "success");
      console.log(resp.data._id);
      let idNewRow = resp.data._id;
      let newRow = document.getElementById(idNewRow);
      console.log(newRow);
      modalForm.hide();
    } catch (error) {
      console.log(error.message);
    }
    let fila = await axios.get(`${url}/get-products`);
    console.log(fila.data[fila.data.length - 1]._id);
    console.log(document.getElementById(fila.data[fila.data.length - 1]._id));
    let newRow = document.getElementById(fila.data[fila.data.length - 1]._id);
    newRow.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    newRow.classList.add("resaltada");
    setTimeout(() => {
      newRow.classList.remove("resaltada");
    }, 4000);
    //location.reload();
  };

  const updateData = async (data) => {
    try {
      console.log(data._id);
      let endpoint = `${url}/edit-product/${data._id}`;
      let resp = await axios.patch(endpoint);
      if (!resp.err) {
        let newProduct = db.map((el) => (el._id === data._id ? data : el));
        modalForm.hide();
        setDb(newProduct);
        Swal.fire("Éxito", "El registro se editó correctamente", "success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (_id) => {
    Swal.fire({
      title: "Advertencia",
      text: `¿Está seguro que desea eliminar el producto con el id ${_id}?`,
      icon: "error",
      showDenyButton: true,
      denyButtonText: "No",
      confirmButtonText: "Sí",
    }).then((res) => {
      if (res.isConfirmed) {
        let endpoint = `${url}/delete-product/${_id}`;
        let resp = axios.delete(endpoint);
        if (!resp.err) {
          let newData = db.filter((el) => el._id !== _id);
          setDb(newData);
          Swal.fire("Éxito", "El registro se eliminó correctamente", "success");
        } else {
          setError(resp);
        }
      }
    });
  };

  let dbCamisas = db.filter((el) => el.categoria === "Camisa");
  let dbPantalones = db.filter((el) => el.categoria === "Pantalon");
  let dbAmbos = db.filter((el) => el.categoria === "Ambo");

  let dbCategorias = [...dbCamisas, ...dbPantalones, ...dbAmbos];

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
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              <TableByCategories
                db={dbCamisas}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
                modalForm={modalForm}
              />
              <hr />
              <TableByCategories
                db={dbPantalones}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
                modalForm={modalForm}
              />
              <hr />
              <TableByCategories
                db={dbAmbos}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
                modalForm={modalForm}
              />
            </>
          )}
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
