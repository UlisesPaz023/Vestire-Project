import React from 'react';
import styles from '../card/card.module.css';

const Card = (props) => {
  const {id, resumenDescripcion, descripcion, imagen} = props.x;

  const cardAmount = (amount) => {
    if(amount<=15){
      if(amount>10){
        if(amount>12){
          return `d-none d-lg-flex`;
        }
        return `d-none d-md-flex`;
      }
    } else {
      return `d-none`;
    }
  };

  return (
    <div className={`card col-6 col-md-2 col-lg-2 rounded-0 border-0 p-0 text-center m-0 m-md-2 ${styles.size} ${cardAmount(id)}`}>
      <div className={`${styles.image}`}>
        <img src={imagen} className={`card-img-top rounded-0`} alt={resumenDescripcion}/>
      </div>
      <div className={`card-body z-1`}>
        <h5 className="card-title">{resumenDescripcion}</h5>
        <p className="card-text">{descripcion}</p>
        {/* <a href="/#" className="btn p-0 fw-bold">COMPRAR AHORA</a> */}
      </div>
    </div>
  );
};

export default Card;