import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
//import ProductTable from "./components/ProductTable";
import axios from "axios";
import Swal from "sweetalert2";
// import { CircularProgress } from "@mui/material";
// import LoadProductForm from "./components/LoadProductForm";

const isAdmin = async () => {
  if (localStorage.getItem("userToken")) {
    const token = localStorage.getItem("userToken");
    const headers = { Authorization: `Bearer ${token}` };
    try {
      const resp = await axios.get(
        "https://vestire.onrender.com/users/check-user-admin",
        {
          headers,
        }
      );
      // if(resp)
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  } else {
    Swal.fire(
      "Acceso denegado",
      "Debe ser administrador para ingresar",
      "error"
    );
    setTimeout(() => {
      location.href = "/";
    }, 3000);
  }
};

const Admin = () => {
  useEffect(() => {
    isAdmin();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          <h2 className="text-center">
            Bienvenido al sitio Administrador de VESTIRE
          </h2>
        </div>
        <div className="row text-center mt-5">
          <div className="col">
            <Link to="/admin/product-table">
              <button className="btn btn-primary">ADMINISTRAR PRODUCTOS</button>
            </Link>
          </div>
          <div className="col">
            <button className="btn btn-primary">ADMINISTRAR USUARIOS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
