import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const Register = (props) => {
  const handleRegister = async (e) => {
    e.preventDefault()
    const firstname = e.target.firstname.value
    const lastname = e.target.lastname.value
    const username = e.target.username.value
    const email = e.target.email.value
    const password = e.target.password.value
    const body = { firstname, lastname, username, email, password }
    try {
      const { data } = await axios.post(
        'https://vestire.onrender.com/users/create-user',
        body
      )
      Swal.fire({
        icon: 'success',
        title: 'Usuario registrado con exito. Ingrese al Login para continuar',
        showConfirmButton: false,
        timer: 3000,
      })
      props.onFormSwitch('login')
    } catch (error) {
      const { response } = error
      const verErrores = response.data.errors
      let msgErrors = ''
      if (verErrores) {
        verErrores.map((error, index) => {
          msgErrors = msgErrors + verErrores[index].msg + '\n'
        })
      } else {
        msgErrors = response.data
      }
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: msgErrors,
      })
    }
  }

  return (
    <div className="container row d-flex justify-content-center align-items-center">
      <form
        onSubmit={handleRegister}
        className="row col-lg-8 col-12 g-3 mt-0 needs-validation"
      >
        <div className="col-md-12 ">
          <label htmlFor="firstname" className="form-label fw-bold">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            name="firstname"
            id="firstname"
            placeholder="Nombre"
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="lastname" className="form-label fw-bold">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            name="lastname"
            id="lastname"
            placeholder="Apellido"
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="username" className="form-label fw-bold">
            Nombre de usuario
          </label>
          <input
            type="text"
            className="form-control"
            name="username"
            id="username"
            placeholder="Nombre de usuario"
          />
        </div>
        <div className="col-md-12">
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

        <div className="col-md-12">
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

        <div className="col-md-12">
          <label htmlFor="repass" className="form-label fw-bold">
            Repetir contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="repass"
            placeholder="Repita contraseña"
          />
          <div className="invalid-feedback">Debe repetir la contraseña</div>
        </div>

        <button type="submit" className="btn btn-dark mx-2">
          Registrarse
        </button>

        <button
          onClick={() => props.onFormSwitch('login')}
          type="button"
          className="btn btn-link"
        >
          Ya estas registrado? Ingresa aquí
        </button>
      </form>
    </div>
  )
}

export default Register
