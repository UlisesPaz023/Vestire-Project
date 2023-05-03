import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
//import ProductTable from "./components/ProductTable";
import axios from "axios";
// import { CircularProgress } from "@mui/material";
// import LoadProductForm from "./components/LoadProductForm";

const Admin = () => {
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
