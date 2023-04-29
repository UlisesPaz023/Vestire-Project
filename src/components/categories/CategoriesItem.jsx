import React from 'react';

const CategoriesItem = ({products, clase}) => {
  const arrayCategories = products.reduce((stack, prod) => {
    return stack.concat(prod.categoria);
  }, []);

  let trueArrayCategories = arrayCategories.filter((x, i) => {
    return arrayCategories.indexOf(x) === i;
  });

  const arraySubcategories = products.reduce((stack, prod)=>{
    return stack.concat(prod.subcategories);
  })

  
  // let removeDuplicatesCategories = trueArrayCategories.map((x,i)=> {
  //   if(products[i].clase.includes(x)){
  //     return x;
  //   }
  // })

  console.log(trueArrayCategories)
  
  return (
    <div>
      {
      trueArrayCategories.map((x,i)=> (
        products.forEach((x,i)=> (
          products[i].clase.includes(x)
        ))
        &&
        x.categoria
      ))
      // products.map((x,i)=> (
      //   x.clase.includes(clase)
      //   &&
      //   x.categoria
      // ))
      }
    </div>
  );
};

export default CategoriesItem;