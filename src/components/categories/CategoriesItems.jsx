import React from 'react';
import styles from '../categories/categories.module.css';
import CategoriesItem from './CategoriesItem';

const CategoriesItems = ({products, clase, multiCollapseExample}) => {
  return (
    <div className={`col-3 d-flex flex-column ${styles.menuSize}`}>
      <div className="collapse collapse-horizontal" id={multiCollapseExample}>
        <div className={`${styles.menuSize2}`}>
            <CategoriesItem products={products} clase={clase}/>
        </div>
      </div>
    </div>
  );
};

export default CategoriesItems;