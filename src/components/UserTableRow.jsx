import React, { useState } from 'react'
import ModalAdminUsers from '../pages/ModalAdminUsers'
import axios from 'axios'
import Swal from 'sweetalert2'

const UserTableRow = ({ user, dbUsers, setDbUsers }) => {
  const url = import.meta.env.VITE_BACKEND_USERS_URL
  const { username, email, admin, disable, _id } = user
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)

  const handleDeleteUser = async () => {
    let adminsQuantity = dbUsers.filter((user) => user.admin === true)
    if (adminsQuantity.length === 1 && user.admin === true) {
      Swal.fire({
        title: '¡Atención!',
        text: 'Debe haber al menos 1 administrador',
        icon: 'warning',
        showConfirmButton: false,
        timer: 3000,
      })
      return
    } else {
      Swal.fire({
        title: 'Advertencia',
        text: `¿Está seguro que desea eliminar el usuario con el id ${_id}?`,
        icon: 'warning',
        showDenyButton: true,
        denyButtonText: 'No',
        confirmButtonText: 'Sí',
      }).then((res) => {
        if (res.isConfirmed) {
          let endpoint = `${url}/delete-user/${_id}`
          let resp = axios.delete(endpoint)
          if (!resp.err) {
            let newData = dbUsers.filter((el) => el._id !== _id)
            setDbUsers(newData)
            Swal.fire('Éxito', 'El usuario se eliminó correctamente', 'success')
          } else {
            setError(resp)
          }
        }
      })
    }
  }

  return (
    <>
      <tr className={disable ? 'table-danger' : ''}>
        <td>{username}</td>
        <td>{email}</td>
        <td>{admin ? 'Sí' : 'No'}</td>
        <td>{disable ? 'Sí' : 'No'}</td>
        <td>
          <div className="d-flex">
            <button
              className="btn btn-warning btn-sm me-2"
              onClick={handleShow}
            >
              Editar
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={handleDeleteUser}
            >
              Eliminar
            </button>
          </div>
        </td>
      </tr>
      {show && (
        <ModalAdminUsers
          show={show}
          setShow={setShow}
          id={_id}
          dbUsers={dbUsers}
          setDbUsers={setDbUsers}
          user={user}
        />
      )}
    </>
  )
}

export default UserTableRow
