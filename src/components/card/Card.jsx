import React , { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styles from "../card/card.module.css";
import styles2 from "../favoriteGrid/cardFavorite.module.css";
import axios from "axios";

const url = "https://vestire.onrender.com/users";

const Card = (props) => {
  const { _id, resumenDescripcion, imagen } = props.product;

  const [isActive,setIsActive] = useState(false);
  const [user, setUser] = useState({favorites:[]});

  useEffect(() => {
    const getData = async () => {
      let endpoint = `${url}/get-user-by-token`;
      if (localStorage.getItem("userToken")) {
        const token = localStorage.getItem("userToken");
        const headers = { Authorization: `Bearer ${token}` };
        try {
          const resp = await axios.get(
            endpoint,
            {
              headers,
            }
          );
          setUser(resp.data);
          // if(resp)
        } catch (error) {
          console.log(error);
        }
      } else {
        Swal.fire(
          "Acceso denegado",
          "Debe ser administrador para ingresar",
          "error"
        );
        setTimeout(() => {
          location.href = "/";
        }, 3000);
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
    };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product-page/${_id}`, { state: props.product });
  };

  const cardAmount = (amount) => {
    if (amount <= 15) {
      if (amount > 10) {
        if (amount > 12) {
          return `d-none d-lg-flex`;
        }
        return `d-none d-md-flex`;
      }
    }
    // } else {
    //   return `d-none`;
    // }
  };
  
  return (
    <div
      className={`card rounded-2 col-6 col-md-3 col-lg-2 rounded-0 border-0 p-0 my-3 mx-md-2 shadow ${cardAmount(
        props.quantity
      )}`}
    >
      <button onClick={handleClick} className={`${styles.image}`}>
        <img src={imagen} className="card-img-top " alt={resumenDescripcion} />
      </button>
      <div
        className={` card-body d-flex flex-column align-items-center align-items-md-start p-0 mt-2 mb-4 mb-lg-3 justify-content-between`}
      >
        {/* <div className={`${styles.containerInfo}`}> */}
        <h6 className={`card-title m-2 fw-bolder ${styles.title}`}>
          {resumenDescripcion}
        </h6>
        {/* </div> */}
        {/* <a href="/#" className="btn p-0 fw-bold">COMPRAR AHORA</a> */}
        <div className="text-center d-flex col-12 justify-content-between">
          <button
            onClick={handleClick}
            className={`${styles.button} d-flex align-items-center justify-content-center btn btn-black rounded-5 p-0 ms-2`}
          >
            <div className={`${styles.buttonPoint} rounded-5 me-2`}></div>
            <p className={`m-0 ${styles.text}`}>EXPLORAR</p>
          </button>
          <button 
            onClick={handleFavButton}
            className={`${styles2.button} me-2 rounded-5`}
          >
            <i className={`bi bi-heart${isActive ? '-fill' : ''}`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

