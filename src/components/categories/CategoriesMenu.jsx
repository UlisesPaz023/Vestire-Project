import React, { useState } from "react";
import styles from "../categories/categories.module.css";
import CategoriesItems from "./CategoriesItems";

const CategoriesMenu = (props) => {
  const clase = props.trueArrayClass;
  const { products } = props;
  const { setProducts } = props;
  const { setProductsToShow } = props;
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
  console.log(clase);
  const handleButtonClick = (index) => {
    setSelectedButtonIndex(index === selectedButtonIndex ? null : index);
  };
  return (
    <>
      <div className="row border">
        <div
          className={`d-flex flex-column flex-md-row align-items-center justify-content-center ${styles.color} my-3`}
        >
          {clase.map((x, i) => (
            <>
              <a
                className={`col col-md-2 col-xl-1 my-3 text-center text-decoration-none fw-bold ${
                  styles.categoryItem
                } ${
                  `multiCollapseExample${i + 1}` === selectedButtonIndex
                    ? styles.active
                    : ""
                }`}
                // aria-current = {`${i === selectedButtonIndex ? 'true': 'false'}`}
                role="button"
                data-bs-toggle="collapse"
                data-bs-target={`#multiCollapseExample${i + 1}`}
                aria-expanded="false"
                aria-controls={`multiCollapseExample${i + 1}`}
                onClick={() =>
                  handleButtonClick(`multiCollapseExample${i + 1}`)
                }
              >
                {x.toUpperCase()}
              </a>
              <div
                key={i}
                className={`col-3 d-sm-flex d-md-none flex-column justify-content-center ${styles.menuSize}`}
              >
                {
                  <CategoriesItems
                    clase={x}
                    selectedButtonIndex={selectedButtonIndex}
                    multiCollapseExample={`multiCollapseExample${i + 1}`}
                    products={products}
                    setProducts={setProducts}
                    setProductsToShow={setProductsToShow}
                  />
                }
              </div>
            </>
          ))}
        </div>
      </div>
      {clase.map((x, i) => (
        <div
          key={i}
          className={`d-none d-md-flex flex-column justify-content-center ${styles.menuSize}`}
        >
          {
            <CategoriesItems
              clase={x}
              selectedButtonIndex={selectedButtonIndex}
              multiCollapseExample={`multiCollapseExample${i + 1}`}
              products={products}
              setProducts={setProducts}
              setProductsToShow={setProductsToShow}
            />
          }
        </div>
      ))}
    </>
  );
};

export default CategoriesMenu;
