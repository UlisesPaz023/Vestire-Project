import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FavoriteGrid from '../components/favoriteGrid/FavoriteGrid'
import axios from 'axios'
import Swal from 'sweetalert2'
import { CircularProgress } from '@mui/material'

const url = import.meta.env.VITE_BACKEND_USERS_URL

const FavoritePage = () => {
  const navigate = useNavigate()
  const [userFavorites, setUserFavorites] = useState({ favorites: [] })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('userName')) {
      Swal.fire({
        title: '¡Atención!',
        text: 'Debe iniciar sesión para ver los favoritos',
        icon: 'warning',
        timer: 2000,
      })
    }
  }, [])

  useEffect(() => {
    const getData = async () => {
      let endpoint = `${url}/get-user-by-token`
      if (localStorage.getItem('userToken')) {
        const token = localStorage.getItem('userToken')
        const headers = { Authorization: `Bearer ${token}` }
        try {
          setLoading(true)
          const { data } = await axios.get(endpoint, {
            headers,
          })
          setUserFavorites(data)
          setLoading(false)
        } catch (error) {
          console.log(error)
        }
      }
    }
    getData()
  }, [])
  return (
    <div>
      {loading ? (
        <div className="row h-100 justify-content-center align-items-center">
          <div className="text-center" style={{ paddingTop: '13rem' }}>
            <CircularProgress />
          </div>
        </div>
      ) : userFavorites.favorites.length === 0 ? (
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
          <div>
            <h3 className="mt-3 mb-4"> No hay favoritos para mostrar.</h3>
          </div>
          <button
            className="col-2 btn btn-dark rounded-0 fw-bolder px-5 py-2 d-flex justify-content-center mb-5"
            onClick={() => {
              navigate('/')
            }}
          >
            VOLVER ATRÁS
          </button>
        </div>
      ) : (
        userFavorites !== undefined && (
          <FavoriteGrid
            userFavorites={userFavorites}
            setUserFavorites={setUserFavorites}
          />
        )
      )}
    </div>
  )
}

export default FavoritePage
