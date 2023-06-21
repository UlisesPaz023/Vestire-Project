import React from "react";
import { useNavigate } from 'react-router-dom';
import styles2 from "../favoriteGrid/cardFavorite.module.css";
import styles from "../card/card.module.css";
import axios from 'axios';

const url = "https://vestire.onrender.com/users";

const CardFavorite = (props) => {
  const { _id, resumenDescripcion, imagen } = props.product;
  const usuario = props.user;

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

  const handleDeleteButton = async () => {
    let endpoint = `${url}/edit-user/${usuario._id}`;
    try {
      const updatedFavorites = [...usuario.favorites];
      const index = updatedFavorites.findIndex(
        (favorite) => favorite._id === _id
      );
      if (index !== -1) {
        updatedFavorites.splice(index, 1);
      }
      await axios.patch(endpoint, { favorites: updatedFavorites });
    } catch (error) {
      console.log(error);
    }
  }


  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product-page/${_id}`, { state: props.product });
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
          <button onClick={handleDeleteButton} className={`${styles2.button} me-2 rounded-5`}>
            <i className="bi bi-trash-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardFavorite;
