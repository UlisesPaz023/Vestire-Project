import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import UserTableRow from '../components/UserTableRow'
import { useNavigate } from 'react-router-dom'

const UserTable = () => {
  const navigate = useNavigate()
  const url = import.meta.env.VITE_BACKEND_USERS_URL
  const [dbUsers, setDbUsers] = useState([])
  const [error, setError] = useState('')
  const isAdmin = async () => {
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
  useEffect(() => {
    isAdmin()
  }, [])

  useEffect(() => {
    const getData = async () => {
      try {
        let endpoint = `${url}/get-users`
        const resp = await axios.get(endpoint)
        setDbUsers(resp.data)
        setError('')
      } catch (error) {
        console.log(error.message)
        setError('Ha ocurrido un error, intente más tarde')
      }
    }
    getData()
  }, [])

  return (
    <>
      <h2 className="text-center my-5 pt-2">Listado de Usuarios Registrados</h2>{' '}
      <hr />
      <div className="container">
        <div className="table-responsive my-5">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">NOMBRE DE USUARIO</th>
                <th scope="col">EMAIL</th>
                <th scope="col">ADMINISTRADOR</th>
                <th scope="col">DESHABILITADO</th>
                <th scope="col">ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {dbUsers &&
                dbUsers.map((user) => (
                  <UserTableRow
                    key={user._id}
                    user={user}
                    dbUsers={dbUsers}
                    setDbUsers={setDbUsers}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default UserTable
