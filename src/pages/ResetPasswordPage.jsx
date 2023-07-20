import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import ModalLogin from "../components/modal/ModalLogin";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState("");
  console.log("token:", token);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get("token");
    setToken(token);
  }, [location.search]);

  const handleResetPassword = async (e) => {
    // Lógica para restablecer la contraseña utilizando el token
    e.preventDefault();
    const password = e.target.password.value;
    const repassword = e.target.repassword.value;
    if (password === repassword) {
      //envia peticion al backend
      const headers = { Authorization: `Bearer ${token}` };
      const urlBase = "https://vestire.onrender.com/users/reset-password";
      // const urlLocal = "http://localhost:5000/users/reset-password";
      try {
        const resp = await axios.post(urlBase, { password }, { headers });
        Swal.fire({
          icon: "success",
          title: "Restablecimiento exitoso. Ingresar al Login",
          showConfirmButton: false,
          timer: 1500,
        });
        //navigate("/login");
        navigate("/");
      } catch (error) {
        const { response } = error;
        const { message } = response.data;
        Swal.fire({
          icon: "error",
          title: "Opps..",
          text: message,
        });
      }
    } else {
      //error no coinciden la contresña ingresada
      Swal.fire({
        icon: "error",
        title: "Contraseña",
        text: "No coinciden las contraseñas ingresadas.",
      });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5 mb-5">
      <form
        onSubmit={handleResetPassword}
        className="row col-lg-8 col-12 g-4 needs-validation"
      >
        <h2>Restablecer contraseña</h2>
        <div className="col-md-12 mb-3">
          <label for="password" className="form-label fw-bold">
            Nueva Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Ingresa tu nueva contraseña"
            required
          />
          <div className="invalid-feedback">Ingresa tu nueva contraseña</div>
        </div>

        <div className="col-md-12 mb-3">
          <label for="repassword" className="form-label fw-bold">
            Confirma Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="repassword"
            placeholder="Repite tu nueva contraseña"
            required
          />
          <div className="invalid-feedback">"Repite nueva contraseña"</div>
        </div>

        <button type="submit" className="btn btn-dark mx-2">
          Restablecer contraseña
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
