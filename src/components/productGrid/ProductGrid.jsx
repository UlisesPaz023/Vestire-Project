import React from "react";
import Card from "../card/Card";
import style from "../productGrid/productgrid.module.css";
import Pagination from "../pagination/Pagination";
import { useState } from "react";

const ProductGrid = ({ products, productsToShow, setProductsToShow }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(15);
  const totalProducts = productsToShow.length;

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
      <Pagination
        totalProducts={totalProducts}
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ProductGrid;
