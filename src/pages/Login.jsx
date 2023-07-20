import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import ForgotPassword from './ForgotPassword'

const Login = (props) => {
  const loginIn = async (body) => {
    try {
      const urlBase = 'https://vestire.onrender.com/users/login'
      //const urlBase = "http://localhost:5000/users/login";
      const { data } = await axios.post(urlBase, body)
      localStorage.setItem('userToken', data.data.token)
      localStorage.setItem('userName', body.username)
      Swal.fire({
        icon: 'success',
        title: 'Sesión iniciada con exito.',
        showConfirmButton: false,
        timer: 1500,
      })
      if (localStorage.getItem('userToken')) {
        const token = localStorage.getItem('userToken')
        const headers = { Authorization: `Bearer ${token}` }
        try {
          //const urlBase = "http://localhost:5000/users/check-user-admin";
          const urlBase = 'https://vestire.onrender.com/users/check-user-admin'
          const resp = await axios.get(urlBase, { headers })

          if (resp.data) location.href = '/admin'
          else location.href = '/'
        } catch (error) {
          const { response } = error
          let msgErrors = response.statusText
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: msgErrors,
          })
        }
      }
      //redirigir al home
    } catch (error) {
      const { response } = error
      const verErrores = response.data.errors
      let msgErrors = ''
      verErrores.map((err, index) => {
        msgErrors = msgErrors + verErrores[index].msg + '\n'
      })
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: msgErrors,
      })
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const username = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    const body = { username, email, password }
    console.log(body)
    loginIn(body)
  }

  return (
    <div className="container row d-flex justify-content-center align-items-center">
      <form
        onSubmit={handleLogin}
        className="row col-lg-8 col-12 g-4 needs-validation"
      >
        <div className="col-md-12 mb-3">
          <label htmlfor="name" className="form-label fw-bold">
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
          <label htmlFor="correo" className="form-label fw-bold">
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
          <label htmlFor="password" className="form-label fw-bold">
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
        <button type="submit" className="btn btn-dark mx-2">
          Login
        </button>
        <button
          onClick={() => {
            location.href = '/forgot-password'
          }}
          type="button"
          className="btn btn-link mt-1"
        >
          Olvidaste la contraseña?
        </button>
        <button
          onClick={() => props.onFormSwitch('register')}
          type="button"
          className="btn btn-link my-0"
        >
          No estas registrado? Registrate aquí
        </button>
      </form>
    </div>
  )
}

export default Login
