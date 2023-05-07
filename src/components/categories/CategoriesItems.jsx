import React, { useState } from "react";
import styles from "../categories/categories.module.css";
import CategoriesItem from "./CategoriesItem";

const CategoriesItems = ({
  products,
  setProducts,
  clase,
  multiCollapseExample,
  selectedButtonIndex,
  setProductsToShow,
}) => {
  const showCategories = (array) => {
    const categoriesArray = array.map((x, i) => {
      if (x.clase.includes(clase)) {
        return x.categoria.toUpperCase();
      }
    });
    return [...new Set(categoriesArray)];
  };

  const showTrueCategories = showCategories(products);

  return (
    <div
      id={`collapseOpacityParent${multiCollapseExample}`}
      className={`collapse ${styles.collapseOpacityParent} ${
        selectedButtonIndex === multiCollapseExample ? "show" : "hide"
      }`}
    >
      <div
        id={`collapseOpacity${multiCollapseExample}`}
        className={`${styles.collapseOpacity} d-flex flex-wrap py-4 justify-content-center ${styles.menuSize2}`}
      >
        {showTrueCategories.map((category, i) => (
          <CategoriesItem
            setProducts={setProducts}
            setProductsToShow={setProductsToShow}
            key={i}
            title={category}
            {...{ products, clase, title: category }}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesItems;
