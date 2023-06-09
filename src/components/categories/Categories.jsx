import React from "react";
import styles from "../categories/categories.module.css";
import CategoriesMenu from "./CategoriesMenu";

const Categories = ({ products, setProducts, setProductsToShow }) => {
  const arrayClass = products.reduce((stack, prod) => {
    return stack.concat(prod.clase);
  }, []);

  let trueArrayClass = arrayClass.filter((x, i) => {
    return arrayClass.indexOf(x) === i;
  });
  trueArrayClass.unshift("Todos");
  const isNotUndefined = (products, trueArrayClass) => {
    if (products !== undefined && trueArrayClass !== undefined) {
      return true;
    }
  };
  return (
    <section className="container-fluid border">
      {isNotUndefined(products, trueArrayClass) && (
        <CategoriesMenu
          products={products}
          trueArrayClass={trueArrayClass}
          setProducts={setProducts}
          setProductsToShow={setProductsToShow}
        />
      )}
    </section>
  );
};

export default Categories;
