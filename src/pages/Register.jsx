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
    <div className="container m-0 row d-flex justify-content-center align-items-center">
      <form
        onSubmit={handleRegister}
        className="row col-lg-11 col-12 g-3 mt-0 needs-validation justify-content-center"
      >
        <div className="d-flex justify-content-between p-0">
          <div className="col me-1">
            <label htmlFor="firstname" className="form-label fw-bold">
              Nombre
            </label>
            <input
              type="text"
              style = {{
                backgroundColor : "#e3e3e1"
              }}
              className="form-control rounded-0"
              name="firstname"
              id="firstname"
              placeholder="Ingresa tu nombre"
            />
          </div>
          <div className="col ms-1">
            <label htmlFor="lastname" className="form-label fw-bold">
              Apellido
            </label>
            <input
              type="text"
              style = {{
                backgroundColor : "#e3e3e1"
              }}
              className="form-control rounded-0"
              name="lastname"
              id="lastname"
              placeholder="Ingresa tu apellido"
            />
          </div>
        </div>
        <div className="col-md-12 p-0">
          <label htmlFor="username" className="form-label fw-bold">
            Nombre de usuario
          </label>
          <input
            type="text"
            style = {{
              backgroundColor : "#e3e3e1"
            }}
            className="form-control rounded-0"
            name="username"
            id="username"
            placeholder="Nombre de usuario"
          />
        </div>
        <div className="col-md-12 p-0">
          <label htmlFor="correo" className="form-label fw-bold">
            Correo electrónico
          </label>
          <input
            type="email"
            style = {{
              backgroundColor : "#e3e3e1"
            }}
            className="form-control rounded-0"
            id="email"
            placeholder="Ingresa tu correo electrónico"
            pattern="^[^@]+@[^@]+\.[a-zA-Z]{2,}$"
          />
          <div className="invalid-feedback">ingrese un mail correcto</div>
        </div>

        <div className="col-md-12 p-0">
          <label htmlFor="password" className="form-label fw-bold">
            Contraseña
          </label>
          <input
            type="password"
            style = {{
              backgroundColor : "#e3e3e1"
            }}
            className="form-control rounded-0"
            id="password"
            placeholder="Ingresa tu contraseña"
          />
          <div className="invalid-feedback">Debe ingresar una contraseña</div>
        </div>

        <div className="col-md-12 p-0">
          <label htmlFor="repass" className="form-label fw-bold">
            Repetir contraseña
          </label>
          <input
            type="password"
            style = {{
              backgroundColor : "#e3e3e1"
            }}
            className="form-control rounded-0"
            id="repass"
            placeholder="Repita la contraseña"
          />
          <div className="invalid-feedback">Debe repetir la contraseña</div>
        </div>

        <button type="submit" className="fw-bolder btn btn-dark mx-2 py-3 mt-4 rounded-0">
          REGISTRAR
        </button>

        <button
          onClick={() => props.onFormSwitch('login')}
          type="button"
          className="btn btn-link mt-0 mb-4"
        >
          ¿Ya estás registrado? Ingresa aquí.
        </button>
      </form>
    </div>
  )
}

export default Register
