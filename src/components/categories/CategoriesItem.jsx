import React from 'react';
import styles from '../categories/categories.module.css';

const CategoriesItem = ({products, title, clase}) => {

  const uniqueCategories = (products, category) => {
    const trueUniqueCategories = products.map((x,i)=>{
      if (category !== undefined  && x.categoria !== undefined){        
        if(x.clase.includes(clase)){
          if(x.categoria.toUpperCase() === category){
            return x.subCategoria;
          }
        }
      }
    });
    return [...new Set(trueUniqueCategories)];
  };

  return (
    <div className= {`${styles.categoriesItem} d-${title!=undefined ? 'flex' : 'none'} mx-5 col-1 flex-column`}>
      {
        <div className='fw-bold'>
          {title}
        </div>
      }
      {
        uniqueCategories(products, title).map((x,i)=>(
          <div key = {x}>
            {
              x
            }
          </div>
        ))
      }
    </div>
  );
};

export default CategoriesItem;