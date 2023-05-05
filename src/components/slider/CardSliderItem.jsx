import React from 'react';
import styles from '../card/card.module.css';

const CardSliderItem = (props) => {
  const {id, marca, resumenDescripcion, descripcion, imagen} = props.x;
  
  console.log(id)


  return (
    <div className={`${styles.sliderContainer} col col-md-2 m-0 d-md-flex flex-column mx-md-2`}>
      <div className='position-relative'>
        <img src={imagen} className={`col m-0 img-fluid ${styles.sliderImage}`} alt={resumenDescripcion}/>
        <p className={`position-absolute ${styles.price} rounded-5 d-flex justify-content-center align-items-center col text-white ${styles.priceText}`}>20%</p>
      </div>
      <div className={`${styles.containerInfo} col card-body z-1 d-flex flex-column align-items-center align-items-md-start p-0 mt-2 mb-4 mb-lg-3`}>
        <div className={`${styles.containerInfo}`}>
          <h5 className={`${styles.cardSliderInfo} card-title my-2 fw-light`}>{resumenDescripcion.toUpperCase()}</h5>
        </div>
      </div>
    </div>
  );
};

export default CardSliderItem;