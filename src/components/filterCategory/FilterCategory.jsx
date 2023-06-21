import React from "react";
import { Accordion } from "react-bootstrap";
import FilterSubCategory from "../filterSubCategory/FilterSubCategory";

const FilterCategory = ({
  clase,
  products,
  setProductsToShow,
  setGridTitle,
  setShow,
}) => {
  const handleClick = (categoria) => {
    console.log(categoria);
    const categoryToFilter =
      categoria[0] + categoria.slice(1, categoria.length).toLowerCase();
    localStorage.setItem("category", categoryToFilter);
    setGridTitle(
      categoria[0] + categoria.slice(1, categoria.length).toLowerCase()
    );
    const filteredProducts = products.filter(
      (product) => product.categoria === categoryToFilter
    );
    setProductsToShow(filteredProducts);
  };

  let categoryProducts = products.filter((product) =>
    product.clase.includes(clase)
  );
  let categories = categoryProducts.map((product) => product.categoria);
  let uniqueCategories = [...new Set(categories)];
  return (
    <>
      {uniqueCategories.map((categoria) => (
        <Accordion>
          <Accordion.Item eventKey={categoria}>
            <Accordion.Header onClick={() => handleClick(categoria)}>
              {categoria}
            </Accordion.Header>
            <Accordion.Body>
              <FilterSubCategory
                products={products}
                categoria={categoria}
                setProductsToShow={setProductsToShow}
                setGridTitle={setGridTitle}
                setShow={setShow}
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </>
  );
};

export default FilterCategory;
