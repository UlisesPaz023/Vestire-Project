import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
  const loginIn = async (body) => {
    try {
      //console.log(body)
      const { data } = await axios.post(
        "https://vestire.onrender.com/users/login",
        body
      );
      console.log(data.data.token);
      localStorage.setItem("userToken", data.data.token);
      localStorage.setItem("userName", document.getElementById("name").value);
      Swal.fire({
        icon: "success",
        title: "Sesión iniciada con exito.",
        showConfirmButton: false,
        timer: 1500,
      });

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
          if (resp.data) location.href = "/admin";
          else location.href = "/";
        } catch (error) {
          const { response } = error;
          const verErrores = response.data.errors;
          let msgErrors = "";
          verErrores.map((error, index) => {
            msgErrors = msgErrors + verErrores[index].msg + "\n";
          });
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: msgErrors,
          });
        }
      }
      //redirigir al home
    } catch (error) {
      const { response } = error;
      const verErrores = response.data.errors;
      let msgErrors = "";
      verErrores.map((error, index) => {
        msgErrors = msgErrors + verErrores[index].msg + "\n";
      });
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: msgErrors,
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const body = { username, email, password };
    loginIn(body);
  };

  const handleRegister = async (e) => {
    const username = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const body = { username, email, password };
    try {
      const { data } = await axios.post(
        "https://vestire.onrender.com/users/create-user",
        body
      );
      Swal.fire({
        icon: "success",
        title: "Usuario registrado con exito, presione Login para continuar",
        showConfirmButton: false,
        timer: 3000,
      });
      // console.log(data);
    } catch (error) {
      const { response } = error;
      const verErrores = response.data.errors;
      let msgErrors = "";
      verErrores.map((error, index) => {
        msgErrors = msgErrors + verErrores[index].msg + "\n";
      });
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: msgErrors,
      });
    }
  };

  return (
    <div className="container row d-flex justify-content-center align-items-center">
      <form
        onSubmit={handleLogin}
        className="row col-lg-8 col-12 g-3 needs-validation"
      >
        <div className="col-md-12 mb-3">
          <label for="name" className="form-label fw-bold">
            Nombre de usuario
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            placeholder="Nombre de usuario"
          />
        </div>
        <div className="col-md-12 mb-3">
          <label for="correo" className="form-label fw-bold">
            Correo electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Ingresa tu correo electrónico"
            pattern="^[^@]+@[^@]+\.[a-zA-Z]{2,}$"
          />
          <div className="invalid-feedback">ingrese un mail correcto</div>
        </div>

        <div className="col-md-12 mb-3">
          <label for="password" className="form-label fw-bold">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Ingresa tu contraseña"
          />
          <div className="invalid-feedback">Debe ingresar una contraseña</div>
        </div>

        <button type="submit" className="btn btn-primary mx-2">
          Login
        </button>

        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleRegister}
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Login;
