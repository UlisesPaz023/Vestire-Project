import React from 'react';
import styles from '../card/card.module.css';

const Card = (props) => {
  const {id, resumenDescripcion, descripcion, imagen} = props.x;
  return (
    <div className="card col-2">
      <img src={imagen} className="card-img-top" alt={resumenDescripcion}/>
      <div className="card-body">
        <h5 className="card-title">{resumenDescripcion}</h5>
        <p className="card-text">{descripcion}</p>
        <a href="#" className="btn btn-primary">COMPRAR AHORA</a>
      </div>
    </div>
  );
};

export default Card;