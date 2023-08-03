import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  const { handleClose } = props
  const navigate = useNavigate()
  const url = import.meta.env.VITE_BACKEND_USERS_URL
  const loginIn = async (body) => {
    try {
      let endpoint = `${url}/login`
      const { data } = await axios.post(endpoint, body)
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
          let endpoint = `${url}/check-user-admin`
          const resp = await axios.get(endpoint, { headers })

          if (resp.data) {
            navigate('/admin')
            handleClose()
          } else {
            navigate('/')
            handleClose()
          }
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
    const username = e.target.nameLogin.value
    const email = e.target.emailLogin.value
    const password = e.target.passwordLogin.value
    const body = { username, email, password }
    loginIn(body)
  }

  return (
    <div className="container m-0 row d-flex justify-content-center align-items-center">
      <form
        onSubmit={handleLogin}
        className="row col-lg-11 col-12 g-4 justify-content-center needs-validation form"
      >
        <div className="col-md-12 mb-1 p-0">
          <label htmlFor="nameLogin" className="form-label fw-bold">
            Nombre de usuario
          </label>
          <input
            type="text"
            style={{
              backgroundColor: '#e3e3e1',
            }}
            className="form-control rounded-0"
            name="name"
            id="nameLogin"
            placeholder="Nombre de usuario"
          />
        </div>
        <div className="col-md-12 mb-1 p-0">
          <label htmlFor="emailLogin" className="form-label fw-bold">
            Correo electrónico
          </label>
          <input
            type="email"
            style={{
              backgroundColor: '#e3e3e1',
            }}
            className="form-control rounded-0"
            id="emailLogin"
            placeholder="Ingresa tu correo electrónico"
            required
          />
        </div>

        <div className="col-md-12 mb-3 p-0">
          <label htmlFor="passwordLogin" className="form-label fw-bold">
            Contraseña
          </label>
          <input
            type="password"
            style={{
              backgroundColor: '#e3e3e1',
            }}
            className="form-control rounded-0"
            id="passwordLogin"
            placeholder="Ingresa tu contraseña"
            required
          />
          <div className="invalid-feedback">Debe ingresar una contraseña</div>
        </div>
        <button
          type="submit"
          className="fw-bolder btn btn-dark mx-2 py-3 rounded-0"
        >
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
        <p className="text-center p-0 mt-0 mb-5">
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
