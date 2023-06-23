import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../card/card.module.css";
import styles2 from "../favoriteGrid/cardFavorite.module.css";
import axios from "axios";
import Swal from "sweetalert2";

const url = "https://vestire.onrender.com/users";

const Card = (props) => {
  const { _id, resumenDescripcion, imagen, precio } = props.product;
  const precioFormated = new Intl.NumberFormat("es-AR").format(precio);

  const [isActive, setIsActive] = useState(false);
  const [user, setUser] = useState({ favorites: [] });

  useEffect(() => {
    const getData = async () => {
      let endpoint = `${url}/get-user-by-token`;
      if (localStorage.getItem("userToken")) {
        const token = localStorage.getItem("userToken");
        const headers = { Authorization: `Bearer ${token}` };
        try {
          const resp = await axios.get(endpoint, {
            headers,
          });
          setUser(resp.data);
          // if(resp)
        } catch (error) {
          console.log(error);
        }
      }
    };
    getData();
  }, [user.favorites]);

  useEffect(() => {
    if (user && user.favorites !== undefined) {
      if (user.favorites.some((favorite) => favorite._id === _id)) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }
  }, [user.favorites, props.product]);

  const removeDuplicates = (favorites) => {
    const uniqueFavorites = [];
    const idTracker = {};

    for (const favorite of favorites) {
      if (!idTracker[favorite._id]) {
        idTracker[favorite._id] = true;
        uniqueFavorites.push(favorite);
      }
    }
    return uniqueFavorites;
  };

  const handleFavButton = async () => {
    if (localStorage.getItem("userName")) {
      const addToFavorites = !isActive;
      setIsActive(!isActive);
      let endpoint = `${url}/edit-user/${user._id}`;

      try {
        const updatedFavorites = [...user.favorites];
        if (addToFavorites) {
          updatedFavorites.push(props.product);
        } else {
          const index = updatedFavorites.findIndex(
            (favorite) => favorite._id === _id
          );
          if (index !== -1) {
            updatedFavorites.splice(index, 1);
          }
        }

        const uniqueFavorites = removeDuplicates(updatedFavorites);

        await axios.patch(endpoint, { favorites: uniqueFavorites });
        setUser({ ...user, favorites: uniqueFavorites });
        setIsActive(addToFavorites);
      } catch (error) {
        console.log(error);
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "¡Atención!",
        text: "Debe iniciar seseión para poder guardar favoritos",
      });
    }
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product-page/${_id}`, { state: props.product });
  };

  return (
    <div
      className={`card rounded-2 col-6 col-md-3 col-lg-2 p-0 my-3 mx-md-2 shadow `}
    >
      <button onClick={handleClick} className={`${styles.image}`}>
        <img src={imagen} className="card-img-top " alt={resumenDescripcion} />
      </button>
      <div
        className={` card-body d-flex flex-column align-items-center align-items-md-start p-0 mt-2 mb-4 mb-lg-3 justify-content-between`}
      >
        <div className={`card-title m-2 fw-bolder ${styles.title}`}>
          {resumenDescripcion}
        </div>
        <div className="card-text col-12 container">
          <div className="row">
            <button
              onClick={handleClick}
              className={`${styles.button} d-flex align-items-center justify-content-center btn btn-black rounded-5 p-0 ms-2`}
            >
              <div className={`${styles.buttonPoint} rounded-5 me-2`}></div>
              <p className={`m-0 ${styles.text}`}>VER</p>
            </button>
          </div>

          <div className="row justify-content-center">
            <div className="col">
              <div className=" fs-6">${precioFormated}</div>
            </div>
            <div className="col">
              <button
                onClick={handleFavButton}
                className={`${styles2.button} me-2 rounded-5 `}
              >
                <i className={`bi bi-heart${isActive ? "-fill" : ""}`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
