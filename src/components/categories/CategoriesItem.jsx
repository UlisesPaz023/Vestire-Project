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
  //const [categoryToFilter, setCategoryToFilter] = useState("");

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
    //console.log(showSubCat);
    const categoryToFilter =
      e.target.id[0] + e.target.id.slice(1, e.target.id.length).toLowerCase();
    localStorage.setItem("category", categoryToFilter);
    setShowSubCat(!showSubCat);
    setGridTitle(
      e.target.id[0] + e.target.id.slice(1, e.target.id.length).toLowerCase()
    );
    const filteredProducts = products.filter(
      (product) => product.categoria === categoryToFilter
    );
    setProductsToShow(filteredProducts);
    //setSelectedButtonIndex(null);
    //console.log(filteredProducts[0].categoria);
  };

  // useEffect(() => {
  //   //console.log(filteredProducts);
  //   setProductsToShow(filteredProducts);
  //   //console.log(showSubCat);
  // }, [categoryToFilter]);

  const handleFilterSubCategory = (e) => {
    const categoryToFilter = localStorage.getItem("category");
    const subCategoryToFilter = e.target.id;
    // e.target.id[0] + e.target.id.slice(1, e.target.id.length).toLowerCase();

    const filteredProducts = products.filter(
      (product) =>
        product.subCategoria === subCategoryToFilter &&
        product.categoria === categoryToFilter
    );
    setProductsToShow(filteredProducts);
    setSelectedButtonIndex(null);
    console.log(filteredProducts);
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
            style={{ cursor: "pointer", color: "black" }}
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
