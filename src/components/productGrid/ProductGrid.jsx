import React from "react";
import Card from "../card/Card";
import style from "../productGrid/productgrid.module.css";

const ProductGrid = ({ products, productsToShow }) => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="p-0">
          <h1 className={`fs-2 fw-bold text-center col m-3 pb-1 border-bottom`}>
            Nueva Colección
          </h1>
        </div>
        {productsToShow.map((product) => (
          <Card product={product} quantity={productsToShow.length} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
