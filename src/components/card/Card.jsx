import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../card/card.module.css";
import styles2 from "../favoriteGrid/cardFavorite.module.css";
import axios from "axios";

const url = "https://vestire.onrender.com/users";

const Card = (props) => {
  const { _id, resumenDescripcion, imagen, precio } = props.product;
  const [isActive, setIsActive] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    const getData = async () => {
      let endpoint = `${url}/get-user-by-id/6457aacf12996dc64bfdc4d2`;
      try {
        const { data } = await axios.get(endpoint);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (user && user.favorites !== undefined) {
      const foundFavorite = user.favorites.find(
        (favorite) => favorite._id === _id
      );
      setIsActive(foundFavorite !== undefined);
    }
  }, [user, _id]);

  const handleFavButton = async () => {
    const addToFavorites = !isActive;
    let endpoint = `${url}/edit-user/6457aacf12996dc64bfdc4d2`;
    try {
      if (addToFavorites) {
        const updatedFavorites = user.favorites.filter(
          (favorite) => favorite._id !== _id.toString()
        );
        await axios.patch(endpoint, { favorites: updatedFavorites });
        setUser({ ...user, favorites: updatedFavorites });
      } else {
        const { data } = await axios.patch(endpoint, {
          favorites: [...user.favorites, props.product],
        });
        setUser(data);
      }
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
      <button
        onClick={handleClick}
        className={`${styles.image}`}
        style={{
          border: "none",
          backgroundColor: "white",
        }}
      >
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

          <p>${precio}</p>
          <button
            onClick={handleFavButton}
            className={`${styles2.button} me-2 rounded-5`}
          >
            <i class={`bi bi-heart${isActive ? "-fill" : ""}`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
