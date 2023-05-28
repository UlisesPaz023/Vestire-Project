import React from "react";
import styles from "../categories/categories.module.css";

const CategoriesItem = ({
  products,
  setProducts,
  setProductsToShow,
  title,
  clase,
}) => {
  const uniqueCategories = (products, category) => {
    const trueUniqueCategories = products.map((x, i) => {
      if (category !== undefined && x.categoria !== undefined) {
        if (x.clase.includes(clase)) {
          if (x.categoria.toUpperCase() === category) {
            return x.subCategoria;
          }
        }
      }
    });
    return [...new Set(trueUniqueCategories)];
  };
  const handleFilterCategory = (e) => {
    const categoryToFilter =
      e.target.id[0] + e.target.id.slice(1, e.target.id.length).toLowerCase();

    const filteredProducts = products.filter(
      (product) => product.categoria === categoryToFilter
    );
    setProductsToShow(filteredProducts);
  };

  const handleFilterSubCategory = (e) => {
    const subCategoryToFilter =
      e.target.id[0] + e.target.id.slice(1, e.target.id.length).toLowerCase();

    const filteredProducts = products.filter(
      (product) => product.subCategoria === subCategoryToFilter
    );
    setProductsToShow(filteredProducts);
  };

  return (
    <div
      className={`${styles.categoriesItem} d-${
        title != undefined ? "flex" : "none"
      } mx-5 col-1 flex-column`}
    >
      {
        <div
          className="fw-bold"
          id={title}
          onClick={handleFilterCategory}
          style={{ cursor: "pointer" }}
        >
          {title}
        </div>
      }
      {uniqueCategories(products, title).map((x, i) => (
        <div
          id={x}
          key={x}
          style={{ cursor: "pointer" }}
          onClick={handleFilterSubCategory}
        >
          {x}
        </div>
      ))}
    </div>
  );
};

export default CategoriesItem;
