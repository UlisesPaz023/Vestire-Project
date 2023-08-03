import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import './admin.css'

const isAdmin = async () => {
  const url = import.meta.env.VITE_BACKEND_USERS_URL
  if (localStorage.getItem('userToken')) {
    const token = localStorage.getItem('userToken')
    const headers = { Authorization: `Bearer ${token}` }
    try {
      let endpoint = `${url}/check-user-admin`
      const resp = await axios.get(endpoint, {
        headers,
      })
      localStorage.setItem('isAdmin', resp.data)
    } catch (error) {
      console.log(error)
    }
  } else {
    Swal.fire(
      'Acceso denegado',
      'Debe ser administrador para ingresar',
      'error'
    )
    setTimeout(() => {
      location.href = '/'
    }, 2000)
  }
}

const Admin = () => {
  useEffect(() => {
    isAdmin()
  }, [])
  return (
    <section className="container">
      <div className="row m-5 text-center">
        <div className="mb-5 row justify-content-center">
          <h2 className="text-center  fs-2 p-0">
            ¡Bienvenido al sitio Administrador de{' '}
            <span style={{ letterSpacing: '5px' }} className="fw-bold">
              VESTIR<span style={{ color: '#d4af37' }}>E</span>!
            </span>
          </h2>
        </div>
        <div className="col">
          <Link to="/admin/product-table">
            <button className="mb-5 mb-lg-0 boton fw-bold btn btn-primary mt-1">
              ADMINISTRAR <br />
              PRODUCTOS
            </button>
          </Link>
        </div>
        <div className="col">
          <Link to="/admin/user-table">
            <button className="mb-5 mb-lg-0 boton fw-bold btn btn-primary mt-1">
              ADMINISTRAR <br />
              USUARIOS
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Admin
