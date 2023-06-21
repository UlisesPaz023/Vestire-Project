import React from "react";

const FilterSubCategory = ({
  products,
  categoria,
  setProductsToShow,
  setGridTitle,
  setShow,
}) => {
  const handleClick = (subCategory) => {
    console.log(subCategory);
    const categoryToFilter = localStorage.getItem("category");
    const subCategoryToFilter = subCategory;
    const filteredProducts = products.filter(
      (product) =>
        product.subCategoria === subCategoryToFilter &&
        product.categoria === categoryToFilter
    );
    setProductsToShow(filteredProducts);
    setGridTitle(
      `${filteredProducts[0].categoria} | ${filteredProducts[0].subCategoria}`
    );
    setShow(false);
  };
  let categoryProducts = products.filter(
    (product) => product.categoria === categoria
  );
  let subCategories = categoryProducts.map((product) => product.subCategoria);
  let uniqueSubCategories = [...new Set(subCategories)];
  return (
    <>
      {uniqueSubCategories.map((subCategory) => (
        <p
          htmlFor={`idForFilter${subCategory}`}
          onClick={() => handleClick(subCategory)}
          style={{ cursor: "pointer" }}
        >
          {subCategory}
        </p>
      ))}
    </>
  );
};

export default FilterSubCategory;
