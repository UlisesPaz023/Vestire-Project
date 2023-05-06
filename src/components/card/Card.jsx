import React from "react";
import styles from "../card/card.module.css";

const Card = (props) => {
  const { _id, resumenDescripcion, descripcion, imagen } = props.x;
  const cardAmount = (amount) => {
    if (amount <= 15) {
      if (amount > 10) {
        if (amount > 12) {
          return `d-none d-lg-flex`;
        }
        return `d-none d-md-flex`;
      }
    } else {
      return `d-none`;
    }
  };

  return (
    <div
      className={`card col-6 col-md-3 col-lg-2 rounded-0 border-0 p-0 my-3 mx-md-2 shadow ${cardAmount(
        props.quantity
      )}`}
    >
      <div className={`${styles.image}`}>
        <img
          src={imagen}
          className="card-img-top rounded-2"
          alt={resumenDescripcion}
        />
      </div>
      <div
        className={` card-body d-flex flex-column align-items-center align-items-md-start p-0 mt-2 mb-4 mb-lg-3 justify-content-between`}
      >
        {/* <div className={`${styles.containerInfo}`}> */}
        <h6 className={`card-title m-2 fw-bolder ${styles.title}`}>
          {resumenDescripcion}
        </h6>
        {/* </div> */}
        {/* <a href="/#" className="btn p-0 fw-bold">COMPRAR AHORA</a> */}
        <div className="text-center">
          <button
            className={`${styles.button} d-flex align-items-center justify-content-center btn btn-black rounded-5 p-0 ms-2`}
          >
            <div className={`${styles.buttonPoint} rounded-5 me-2`}></div>
            <p className={`m-0 ${styles.text}`}>EXPLORAR</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
