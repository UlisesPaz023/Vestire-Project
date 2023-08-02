import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

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
        msgErrors = verErrores[0].msg + '\n'
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
    <div 
      className="container m-0 row d-flex justify-content-center align-items-center"
    >
      <form
        onSubmit={handleLogin}
        className="row col-lg-11 col-12 g-4 justify-content-center needs-validation"
      >
        <div className="col-md-12 mb-1 p-0">
          <label htmlfor="name" className="form-label fw-bold">
            Nombre de usuario
          </label>
          <input
            type="text"
            style = {{
              backgroundColor : "#e3e3e1"
            }}
            className="form-control rounded-0"
            name="name"
            id="name"
            placeholder="Nombre de usuario"
          />
        </div>
        <div className="col-md-12 mb-1 p-0">
          <label htmlFor="correo" className="form-label fw-bold">
            Correo electrónico
          </label>
          <input
            type="text"
            style = {{
              backgroundColor : "#e3e3e1"
            }}
            className="form-control rounded-0"
            id="email"
            placeholder="Ingresa tu correo electrónico"
            required
          />
        </div>

        <div className="col-md-12 mb-3 p-0">
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
            required
          />
          <div className="invalid-feedback">Debe ingresar una contraseña</div>
        </div>
        <button type="submit" className="fw-bolder btn btn-dark mx-2 py-3 rounded-0">
          INGRESAR
        </button>
        <button
          onClick={() => {
            location.href = '/forgot-password'
          }}
          type="button"
          className="btn btn-link mt-1 mb-0"
        >
          ¿Olvidaste la contraseña?
        </button>
        <p className='text-center p-0 mt-0 mb-5'>
          ¿No estás registrado? 
          <button
          onClick={() => props.onFormSwitch('register')}
          type="button"
          className="btn btn-link m-0 p-0"
          >
            Registrate aquí.
          </button>
          </p>
      </form>
    </div>
  )
}

export default Login
