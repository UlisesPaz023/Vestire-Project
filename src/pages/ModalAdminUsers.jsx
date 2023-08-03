import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import Swal from 'sweetalert2'

function ModalAdminUsers({ show, setShow, user, id, dbUsers, setDbUsers }) {
  const url = import.meta.env.VITE_BACKEND_USERS_URL
  const [filteredUser, setFilteredUser] = useState(user)
  const [prevAdminState, setPrevAdminState] = useState(user.admin)
  const handleClose = () => setShow(false)

  useEffect(() => {
    setPrevAdminState(filteredUser.admin)
  }, [filteredUser.admin])

  const handleChange = (e) => {
    setFilteredUser({ ...filteredUser, [e.target.name]: e.target.checked })
  }

  const handleEditUser = async (e) => {
    e.preventDefault()
    let adminsQuantity = dbUsers.filter((user) => user.admin === true)
    if (adminsQuantity.length === 1 && user.admin === true) {
      if (prevAdminState === false) {
        Swal.fire({
          title: '¡Atención!',
          text: 'Debe haber al menos 1 administrador',
          icon: 'warning',
          showConfirmButton: false,
          timer: 3000,
        })
        handleClose()
        return
      } else {
        try {
          let endpoint = `${url}/edit-user/${id}`
          let resp = await axios.patch(endpoint, filteredUser)
          setDbUsers((prev) =>
            prev.map((User) => (User._id === id ? resp.data : User))
          )
          handleClose()
        } catch (error) {
          console.log(error)
        }
      }
    } else {
      try {
        let endpoint = `${url}/edit-user/${id}`
        let resp = await axios.patch(endpoint, filteredUser)
        setDbUsers((prev) =>
          prev.map((User) => (User._id === id ? resp.data : User))
        )
        handleClose()
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edición de Usuarios</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="form d-flex flex-column" onSubmit={handleEditUser}>
            <div className="form-check">
              <label className="form-check-label" htmlFor="adminCheck">
                ¿El usuario es Administrador?
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                checked={filteredUser.admin}
                value={filteredUser.admin}
                id="adminCheck"
                name="admin"
                onChange={handleChange}
              />
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="disabledCheck">
                ¿El usuario está deshabilitado?
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                checked={filteredUser.disable}
                value={filteredUser.disable}
                id="disabledCheck"
                name="disable"
                onChange={handleChange}
              />
            </div>
            <button
              variant="primary"
              type="submit"
              className="mt-3 btn btn-primary ms-auto"
              style={{ width: '150px' }}
            >
              Guardar Cambios
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalAdminUsers
