import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import axios from "axios";
import style from "../productGrid/productgrid.module.css";

const ProductGrid = ({ products }) => {
  // const url = "https://vestire.onrender.com/product";
  // const [product, setProduct] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     let endpoint = `${url}/get-products`;
  //     try {
  //       const { data } = await axios.get(endpoint);
  //       setProduct(data);
  //     } catch (error) {
  //       alert("Ha ocurrido un problema.");
  //     }
  //   };
  //   getData();
  // }, []);
  console.log(products);
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="p-0">
          <h1 className={`fs-2 fw-bold text-center col m-3 pb-1 border-bottom`}>
            Nueva Colección
          </h1>
        </div>
        {products.map((product) => (
          <Card product={product} quantity={products.length} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
