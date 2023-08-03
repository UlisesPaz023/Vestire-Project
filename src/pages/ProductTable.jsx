import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductForm from './ProductForm'
import Swal from 'sweetalert2'
import TableByCategories from '../components/TableByCategories'
import { CircularProgress } from '@mui/material'
import './styles/productTable.css'
import ScrollButton from '../components/scrollbutton/ScrollButton'
import { useNavigate } from 'react-router-dom'

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
      navigate('/')
    }, 2000)
  }
}

const ProductTable = () => {
  const navigate = useNavigate()
  useEffect(() => {
    isAdmin()
  }, [])
  const [db, setDb] = useState([])
  const [dataToEdit, setDataToEdit] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [modalForm, setModalForm] = useState(null)
  const url = import.meta.env.VITE_BACKEND_PRODUCTS_URL

  useEffect(() => {
    setModalForm(new bootstrap.Modal(document.getElementById('exampleModal')))
    setLoading(true)
    const getData = async () => {
      try {
        let endpoint = `${url}/get-products`
        const resp = await axios.get(endpoint)
        setDb(resp.data)
        setError('')
        setLoading(false)
      } catch (error) {
        console.log(error.message)
        setLoading(false)
        setError('Ha ocurrido un error, intente más tarde')
      }
    }
    getData()
  }, [])

  const createData = async (data) => {
    try {
      let endpoint = `${url}/create-product`
      let resp = await axios.post(endpoint, data)
      modalForm.hide()
      setDb([...db, resp.data])
      Swal.fire('Éxito', 'El registro se creó correctamente', 'success')
      let idNewRow = resp.data._id
    } catch (error) {
      console.log(error.message)
    }
    let fila = await axios.get(`${url}/get-products`)
    let newRow = document.getElementById(fila.data[fila.data.length - 1]._id)
    newRow.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
    newRow.classList.add('resaltada')
    setTimeout(() => {
      newRow.classList.remove('resaltada')
    }, 4000)
  }

  const updateData = async (data) => {
    try {
      let endpoint = `${url}/edit-product/${data._id}`
      let resp = await axios.patch(endpoint, data)
      if (!resp.err) {
        let newProduct = db.map((el) => (el._id === data._id ? data : el))
        modalForm.hide()
        setDb(newProduct)
        Swal.fire('Éxito', 'El registro se editó correctamente', 'success')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const deleteData = async (_id) => {
    Swal.fire({
      title: 'Advertencia',
      text: `¿Está seguro que desea eliminar el producto con el id ${_id}?`,
      icon: 'error',
      showDenyButton: true,
      denyButtonText: 'No',
      confirmButtonText: 'Sí',
    }).then((res) => {
      if (res.isConfirmed) {
        let endpoint = `${url}/delete-product/${_id}`
        let resp = axios.delete(endpoint)
        if (!resp.err) {
          let newData = db.filter((el) => el._id !== _id)
          setDb(newData)
          Swal.fire('Éxito', 'El registro se eliminó correctamente', 'success')
        } else {
          setError(resp)
        }
      }
    })
  }

  let dbCamisas = db.filter((el) => el.categoria === 'Camisa')
  let dbPantalones = db.filter((el) => el.categoria === 'Pantalon')
  let dbAmbos = db.filter((el) => el.categoria === 'Ambo')
  let dbAccesorios = db.filter((el) => el.categoria === 'Accesorios')

  return (
    <>
      <h2 className="text-center my-5 pt-2">
        Listado de Productos Registrados
      </h2>
      <hr />
      {loading ? (
        <div className="row">
          <div className="col text-center">
            <CircularProgress />
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row mt-3">
            <div className="col-xs-3 px-0">
              <button
                className="agregarP fw-bolder px-4 py-2 btn btn-primary ms-2 rounded-0 border-0"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                AGREGAR PRODUCTO
              </button>
            </div>
          </div>
          {db[0] ? (
            <>
              <hr />
              <TableByCategories
                db={dbCamisas}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
                modalForm={modalForm}
              />
              <hr />
              <TableByCategories
                db={dbPantalones}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
                modalForm={modalForm}
              />
              <hr />
              <TableByCategories
                db={dbAmbos}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
                modalForm={modalForm}
              />
              <hr />
              <TableByCategories
                db={dbAccesorios}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
                modalForm={modalForm}
              />
            </>
          ) : (
            <h4 className="mt-2">No hay productos registrados</h4>
          )}
        </div>
      )}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {dataToEdit ? 'Editar producto' : 'Cargar Producto'}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setDataToEdit(null)
                }}
              ></button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <ProductForm
                  createData={createData}
                  updateData={updateData}
                  dataToEdit={dataToEdit}
                  setDataToEdit={setDataToEdit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollButton />
    </>
  )
}

export default ProductTable
