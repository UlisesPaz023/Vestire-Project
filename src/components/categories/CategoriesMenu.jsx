import React, {useState, useEffect} from 'react';
import styles from '../categories/categories.module.css';
import CategoriesItems from './CategoriesItems';

const CategoriesMenu = (props) => {
  const clase = props.trueArrayClass;
  const {products} = props;

  return (
    <>
      <div className ='row'>
        <div className={`d-flex justify-content-center ${styles.color}`}>
          {
            clase.map((x,i)=>( 
              <div>
                <a 
                  className={`mx-4 mt-4 mb-5 text-decoration-none fw-bold ${styles.categoryItem}`}
                  role="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#multiCollapseExample${i+1}`}
                  aria-expanded="false"
                  aria-controls={`multiCollapseExample${i+1}`}>
                  {
                    x.toUpperCase()
                  }
                </a>
              </div>
            ))
         }
        </div>
      </div>
      {
        clase.map((x,i)=> (
          <CategoriesItems clase={x} multiCollapseExample= {`multiCollapseExample${i+1}`} products={products}/>
        ))
      }
    </>
  );
};

export default CategoriesMenu;