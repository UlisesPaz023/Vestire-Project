import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../pages/productPage.module.css';

const ProductPage = () => {
  const location = useLocation();
  const {marca, descripcion, resumenDescripcion, imagen, precio, color, cantidadPorTalle} = location.state;
  return (
    <>
      <div className='container bg-warning px-5'>
        <div className={`${styles.desc} container bg-warning p-0 my-5`}>
          Home / {resumenDescripcion}
        </div>
        <div className='row col m-0'>
          <div className='m-0 p-0 col'>
            <img className='col-12' src={imagen} alt={resumenDescripcion} />
          </div>
          <div className='col-6 py-0 px-5'>
            <div className={`${styles.desContainer} pb-3 mb-4`}>
              <p className='fw-bold'>{resumenDescripcion.toUpperCase()}</p>
              <p className={`${styles.desc}`}>{descripcion}</p>
              <h3 className='fw-bold'>${precio}</h3>
            </div>
            <div className={`${styles.desContainer} pb-4 mb-4`}>
              <div className='d-flex align-items-center'>
                <p className={`${styles.desc} m-0 me-1`}>Color:</p>
                <div className={`${styles.color} bg-black m-0 me-1`}></div>
                <p className={`${styles.desc} m-0`}>{color.toUpperCase()}</p>
              </div>
              <div>
                <p className={`${styles.desc} fw-bold mt-3`}>Talle:</p>
                <div className={`${styles.talle} d-flex align-items-center justify-content-center`}>
                  XS
                </div>
              </div>
              <div className={`mt-4`}>
                <div className='bg-success'>

                </div>
                <button className='border-0 bg-black text-white fw-bold py-2 px-4'>
                  <p className={`m-0 ${styles.button}`}>AGREGAR AL CARRITO</p>
                </button>
                <a href=""></a>
              </div>
            </div>
            <button className='border-0 bg-black text-white fw-bold py-2 px-4'>
              <p className={`m-0 ${styles.button}`}>COMPRAR AHORA</p>
            </button>
          </div>
        </div>

      </div>
    </>
  );
};

export default ProductPage;