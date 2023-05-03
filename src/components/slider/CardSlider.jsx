import React from 'react';
import styles from '../card/card.module.css';

const CardSlider = (props) => {
  const {id, resumenDescripcion, descripcion, imagen} = props.x;

  return (
    <div className={`carousel-item ${id === 1 ? 'active':''}`}>
      <div className='d-flex'>
        <div className={`${styles.sliderContainer} col`}>
          <img src={imagen} className={`col rounded-3 img-fluid rounded-0 ${styles.sliderImage}`} alt={resumenDescripcion}/>
          <div className={`${styles.containerInfo} col card-body z-1 d-flex flex-column align-items-center align-items-md-start p-0 mt-2 mb-4 mb-lg-3`}>
            <div className={`${styles.containerInfo}`}>
              <h5 className={`card-title my-2 fw-bolder`}>{resumenDescripcion}</h5>
            </div>
            {/* <a href="/#" className="btn p-0 fw-bold">COMPRAR AHORA</a> */}
            {/* <button className={`${styles.button} d-flex align-items-center justify-content-center btn btn-black rounded-5 p-0`}>
              <div className={`${styles.buttonPoint} rounded-5 me-2`}></div>
              <p className={`m-0 ${styles.text}`}>EXPLORAR</p>
            </button> */}
          </div>
        </div>
        <div className={`${styles.sliderContainer} col`}>
          <img src={imagen} className={`col rounded-3 img-fluid rounded-0 ${styles.sliderImage}`} alt={resumenDescripcion}/>
          <div className={`${styles.containerInfo} col card-body z-1 d-flex flex-column align-items-center align-items-md-start p-0 mt-2 mb-4 mb-lg-3`}>
            <div className={`${styles.containerInfo}`}>
              <h5 className={`card-title my-2 fw-bolder`}>{resumenDescripcion}</h5>
            </div>
            {/* <a href="/#" className="btn p-0 fw-bold">COMPRAR AHORA</a> */}
            {/* <button className={`${styles.button} d-flex align-items-center justify-content-center btn btn-black rounded-5 p-0`}>
              <div className={`${styles.buttonPoint} rounded-5 me-2`}></div>
              <p className={`m-0 ${styles.text}`}>EXPLORAR</p>
            </button> */}
          </div>
        </div>
        <div className={`${styles.sliderContainer} col`}>
          <img src={imagen} className={`col rounded-3 img-fluid rounded-0 ${styles.sliderImage}`} alt={resumenDescripcion}/>
          <div className={`${styles.containerInfo} col card-body z-1 d-flex flex-column align-items-center align-items-md-start p-0 mt-2 mb-4 mb-lg-3`}>
            <div className={`${styles.containerInfo}`}>
              <h5 className={`card-title my-2 fw-bolder`}>{resumenDescripcion}</h5>
            </div>
            {/* <a href="/#" className="btn p-0 fw-bold">COMPRAR AHORA</a> */}
            {/* <button className={`${styles.button} d-flex align-items-center justify-content-center btn btn-black rounded-5 p-0`}>
              <div className={`${styles.buttonPoint} rounded-5 me-2`}></div>
              <p className={`m-0 ${styles.text}`}>EXPLORAR</p>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;