import React from 'react';

const CategoriesItem = ({products, clase}) => {
  // const arrayCategories = products.reduce((stack, prod) => {
  //   return stack.concat(prod.categoria);
  // }, []);

  // let trueArrayCategories = arrayCategories.filter((x, i) => {
  //   return arrayCategories.indexOf(x) === i;
  // });
  
  return (
    <div>
      {
      products.map((x,i)=> (
        
        x.clase.includes(clase)
        &&
        x.categoria
      ))
      }
    </div>
  );
};

export default CategoriesItem;