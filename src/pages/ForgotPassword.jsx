import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
  const url = import.meta.env.VITE_BACKEND_USERS_URL
  const forgotPassword = async (body) => {
    try {
      const { data } = await axios.post(`${url}/forgot-password`, body)
      if (data) {
        Swal.fire({
          icon: 'success',
          title: 'Reestablecer contraseña',
          text: 'Revise su casilla de correo, recibió un email con los pasos a seguir.',
        })
      }
      //redirigir al home
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

  const navigate = useNavigate()

  const resetPassword = () => {
    navigate('/reset-password-page')
  }

  const handleForgotPassword = (e) => {
    e.preventDefault()
    const email = e.target.emailForgot.value
    const body = { email }
    forgotPassword(body)
    // resetPassword();
  }

  return (
    <div className="container col d-flex justify-content-center align-items-center mt-5 mb-5">
      <form
        onSubmit={handleForgotPassword}
        className="row col-lg-8 col-12 g-4 needs-validation form"
      >
        <div className="col-md-12 mx-2">
          <label htmlFor="emailForgot" className="form-label fw-bold">
            Correo electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="emailForgot"
            placeholder="Ingresa tu correo electrónico"
            pattern="^[^@]+@[^@]+\.[a-zA-Z]{2,}$"
          />
          <div className="invalid-feedback">ingrese un mail correcto</div>
        </div>

        <button type="submit" className="btn btn-dark mx-2">
          Enviar codigo para restablecer contraseña
        </button>
      </form>
    </div>
  )
}

export default ForgotPassword
