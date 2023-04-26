import React from 'react';
import styles from '../categories/categories.module.css'

const CategoriesItem = (props) => {

  const {id, categoria, subCategoria} = props.x;

  return (
    <div className='mx-5 col-3 d-flex flex-column'>  
      <a className={`mt-4 mb-1 text-decoration-none fw-bold ${styles.categoryItem}`} href='/#' >{categoria.toUpperCase()}</a>
      <a className={`ms-1 mb-1 text-decoration-none fw-light ${styles.categoryItem}`} href='/#' >{subCategoria}</a>
      <a className={`ms-1 mb-1 text-decoration-none fw-light ${styles.categoryItem}`} href='/#' >{subCategoria}</a>       
    </div>
  );
};

export default CategoriesItem;