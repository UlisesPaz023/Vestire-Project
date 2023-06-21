import { React, useState, useEffect } from "react";
import ProductGrid from "../components/productGrid/ProductGrid";
import CustomSlider from "../components/slider/CustomSlider";
import { CircularProgress } from "@mui/material";
import FilterWithAcordion from "../components/filterWithAcordion/FilterWithAcordion";

const HomePage = ({
  products,
  setProducts,
  productsToShow,
  setProductsToShow,
  loading,
  estadoPrueba,
  setGridTitle,
  gridTitle,
}) => {
  //console.log(window.innerWidth);
  return loading ? (
    <div className="row">
      <div className="col text-center">
        <CircularProgress />
      </div>
    </div>
  ) : (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 col-md-2 d-flex flex-column">
            <FilterWithAcordion
              products={products}
              setProductsToShow={setProductsToShow}
              setGridTitle={setGridTitle}
            />
          </div>
          <div className="col-9 col-md-10">
            <CustomSlider products={products} />
            <ProductGrid
              products={products}
              productsToShow={productsToShow}
              setProductsToShow={setProductsToShow}
              setGridTitle={setGridTitle}
              gridTitle={gridTitle}
              estadoPrueba={estadoPrueba}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
