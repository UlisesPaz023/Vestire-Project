import { React, useState, useEffect } from "react";
import styles from "../categories/categories.module.css";

const CategoriesItem = ({
  products,
  setProducts,
  setProductsToShow,
  productsToShow,
  title,
  clase,
  setSelectedButtonIndex,
  setGridTitle,
}) => {
  const [showSubCat, setShowSubCat] = useState(false);
  const [categoryToFilter, setCategoryToFilter] = useState("");

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
    setCategoryToFilter(
      e.target.id[0] + e.target.id.slice(1, e.target.id.length).toLowerCase()
    );
    setShowSubCat(!showSubCat);
    setGridTitle(
      e.target.id[0] + e.target.id.slice(1, e.target.id.length).toLowerCase()
    );
    setSelectedButtonIndex(null);
    //console.log(filteredProducts[0].categoria);
  };

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.categoria === categoryToFilter
    );
    console.log(filteredProducts);
    setProductsToShow(filteredProducts);
  }, [categoryToFilter]);

  const handleFilterSubCategory = (e) => {
    const subCategoryToFilter = e.target.id;
    // e.target.id[0] + e.target.id.slice(1, e.target.id.length).toLowerCase();

    const filteredProducts = products.filter(
      (product) =>
        product.subCategoria === subCategoryToFilter &&
        product.categoria === categoryToFilter
    );
    setProductsToShow(filteredProducts);
    setSelectedButtonIndex(null);
    console.log(subCategoryToFilter);
    setGridTitle(
      `${filteredProducts[0].categoria} | ${filteredProducts[0].subCategoria}`
    );
  };

  return (
    <div
      className={`${styles.categoriesItem} d-${
        title != undefined ? "flex" : "none"
      } mx-5 col-1 flex-column`}
    >
      {
        <a
          href="#product-grid"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <div
            className="fw-bold"
            id={title}
            onClick={handleFilterCategory}
            style={{ cursor: "pointer" }}
          >
            {title}
          </div>
        </a>
      }

      {showSubCat &&
        uniqueCategories(products, title).map((x, i) => (
          <div
            id={x}
            key={x}
            style={{ cursor: "pointer" }}
            onClick={handleFilterSubCategory}
          >
            {x}
          </div>
        ))}
      {/* 
      {uniqueCategories(products, title).map((x, i) => (
        <div
          id={x}
          key={x}
          style={{ cursor: "pointer" }}
          onClick={handleFilterSubCategory}
        >
          {x}
        </div>
      ))} */}
    </div>
  );
};

export default CategoriesItem;
