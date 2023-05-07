import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
//import ProductTable from "./components/ProductTable";
import axios from "axios";
// import { CircularProgress } from "@mui/material";
// import LoadProductForm from "./components/LoadProductForm";

const Admin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isAdmin = async () => {
      try {
        if (localStorage.getItem("userToken")) {
          const token = localStorage.getItem("userToken");
          const headers = { Authorization: `Bearer ${token}` };
          const resp = await axios.get(
            "https://vestire.onrender.com/users/check-user-admin",
            { headers }
          );
          if (!resp.data) {
            alert("Acceso denegado");
            navigate("/");
          }
          console.log(resp);
        } else {
          //alert("Usuario no logeado");
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    };
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
