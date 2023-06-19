import { React, useState, useEffect } from "react";
import ProductGrid from "../components/productGrid/ProductGrid";
import Slider from "../components/slider/Slider";
import Categories from "../components/categories/Categories";
import { CircularProgress } from "@mui/material";
import Filter from "../components/filter/Filter";

const HomePage = ({
  products,
  setProducts,
  productsToShow,
  setProductsToShow,
  loading,
  estadoPrueba,
  setEstadoPrueba,
}) => {
  const [gridTitle, setGridTitle] = useState("Nueva Colección");

  //console.log(window.innerWidth);
  return loading ? (
    <div className="row">
      <div className="col text-center">
        <CircularProgress />
      </div>
    </div>
  ) : (
    <section>
      {/* <Categories
        products={products}
        setProducts={setProducts}
        setProductsToShow={setProductsToShow}
        productsToShow={productsToShow}
        setGridTitle={setGridTitle}
      /> */}
      <Filter
        products={products}
        setProducts={setProducts}
        setProductsToShow={setProductsToShow}
        productsToShow={productsToShow}
        setGridTitle={setGridTitle}
        setEstadoPrueba={setEstadoPrueba}
      />
      <Slider products={products} />
      <ProductGrid
        products={products}
        productsToShow={productsToShow}
        setProductsToShow={setProductsToShow}
        setGridTitle={setGridTitle}
        gridTitle={gridTitle}
        estadoPrueba={estadoPrueba}
      />
    </section>
  );
};

export default HomePage;
