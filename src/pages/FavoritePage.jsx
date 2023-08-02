import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteGrid from "../components/favoriteGrid/FavoriteGrid";
import axios from "axios";
import Swal from "sweetalert2";

const url = "https://vestire.onrender.com/users";

const FavoritePage = () => {
  const navigate = useNavigate();
  const [userFavorites, setUserFavorites] = useState({ favorites: [] });
  if (!localStorage.getItem("userName")) {
    Swal.fire({
      title: "¡Atención!",
      text: "Debe iniciar sesión para ver los favoritos",
      icon: "warning",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) navigate("/");
    });
  }

  useEffect(() => {
    const getData = async () => {
      let endpoint = `${url}/get-user-by-token`;
      if (localStorage.getItem("userToken")) {
        const token = localStorage.getItem("userToken");
        const headers = { Authorization: `Bearer ${token}` };
        try {
          const { data } = await axios.get(endpoint, {
            headers,
          });
          setUserFavorites(data);
          // if(resp)
        } catch (error) {
          console.log(error);
        }
      }
      // } else {
      //   Swal.fire(
      //     "Acceso denegado",
      //     "Debe ser administrador para ingresar",
      //     "error"
      //   );
      //   setTimeout(() => {
      //     location.href = "/";
      //   }, 3000);
      // }
    };
    getData();
  }, [userFavorites.favorites]);

  return (
    <div>
      {
        userFavorites.favorites.length === 0 ? (
        <div
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div>
            <h3 className="mt-3 mb-4"> No hay favoritos para mostrar.</h3>
          </div>
          <button
            className="col-2 btn btn-dark rounded-0 fw-bolder px-5 py-2"
            onClick={() => {
              location.href = '/'
            }}
          >
            VOLVER ATRÁS
          </button>
        </div>
      ) :
      (
        userFavorites !== undefined && (
          <FavoriteGrid
            userFavorites={userFavorites}
            setUserFavorites={setUserFavorites}
          />
  
  
        )
      )
      }
    </div>
  );
};

export default FavoritePage;
