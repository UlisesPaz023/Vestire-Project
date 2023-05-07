import React from "react";
import axios from "axios";

const Login = () => {

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const body = { username, email, password };
  };

  const login = async (body) => {
    try {
      console.log(body)
      const { data } = await axios.post(
        "https://vestire.onrender.com/users/login",
        body
      );
      //console.log(data.data.token);
      localStorage.setItem("userToken", data.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = async (e) => {
    const username = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(username, email, password);
    const body = { username, email, password };
    try {
      const { data } = await axios.post(
        "https://vestire.onrender.com/users/create-user",
        body
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInfo = async () => {
    if (localStorage.getItem("userToken")) {
      const token = localStorage.getItem("userToken");
      const headers = { Authorization: `Bearer ${token}` };
      const resp = await axios.get("https://vestire.onrender.com/users/info", {
        headers,
      });
      console.log(resp);
    } else {
      alert("Usuario no logeado");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <div class="mb-3">
          <label for="exampleInputName1" class="form-label">
            Nombre de usuario
          </label>
          <input type="text" class="form-control" name="name" id="name" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            name="password"
            id="password"
          />
        </div>

        <button type="submit" className="btn btn-success mx-2">
          Login
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleRegister}
        >
          Registrarse
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleInfo}
        >
          Get Info
        </button>
      </form>
    </div>
  );
};

export default Login;
