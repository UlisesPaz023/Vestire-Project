import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'

const ResetPasswordPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [token, setToken] = useState('')
  console.log('token:', token)

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const token = searchParams.get('token')
    setToken(token)
  }, [location.search])

  const handleResetPassword = async (e) => {
    // Lógica para restablecer la contraseña utilizando el token
    e.preventDefault()
    const password = e.target.passwordReq1.value
    const repassword = e.target.repasswordReq2.value
    if (password === repassword) {
      //envia peticion al backend
      const headers = { Authorization: `Bearer ${token}` }
      const url = import.meta.env.VITE_BACKEND_USERS_URL
      try {
        let endpoint = `${url}/reset-password`
        const resp = await axios.post(endpoint, { password }, { headers })
        Swal.fire({
          icon: 'success',
          title: 'Restablecimiento exitoso. Ingresar al Login',
          showConfirmButton: false,
          timer: 2500,
        })
        //navigate("/login");
        navigate('/')
      } catch (error) {
        const { response } = error
        const { message } = response.data
        Swal.fire({
          icon: 'error',
          title: 'Opps..',
          text: message,
        })
      }
    } else {
      //error no coinciden la contresña ingresada
      Swal.fire({
        icon: 'error',
        title: 'Contraseña',
        text: 'No coinciden las contraseñas ingresadas.',
      })
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5 mb-5">
      <form
        onSubmit={handleResetPassword}
        className="row col-lg-8 col-12 g-4 needs-validation"
      >
        <h2>Restablecer contraseña</h2>
        <div className="col-md-12 mb-3">
          <label htmlFor="passwordReq1" className="form-label fw-bold">
            Nueva Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordReq1"
            placeholder="Ingresa tu nueva contraseña"
            required
          />
          <div className="invalid-feedback">Ingresa tu nueva contraseña</div>
        </div>

        <div className="col-md-12 mb-3">
          <label htmlFor="repasswordReq2" className="form-label fw-bold">
            Confirma Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="repasswordReq2"
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
  )
}

export default ResetPasswordPage
