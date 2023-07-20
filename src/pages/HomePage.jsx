import { React, useState, useEffect } from "react";
import ProductGrid from "../components/productGrid/ProductGrid";
import CustomSlider from "../components/slider/CustomSlider";
import { CircularProgress } from "@mui/material";
import FilterWithAcordion from "../components/filterWithAcordion/FilterWithAcordion";
import "./homepage.css";

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
    <div className="row h-100 justify-content-center align-items-center">
      <div className="text-center" style={{paddingTop : "13rem"}}>
        <CircularProgress />
      </div>
    </div>
  ) : (
    <section className="container-fluid">
      <div className="row justify-content-center">
        <div className="filters col-3 col-md-2 d-flex flex-column">
          <FilterWithAcordion
            products={products}
            setProductsToShow={setProductsToShow}
            setGridTitle={setGridTitle}
          />
        </div>
        <div className="col-10 col-lg-8">
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
        <div className="col-2 col-md-2 d-none d-lg-block d-xxl-block">
          <img
            class="img-fluid"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4a66f333332919.56a84344447ec.jpg"
            alt="publicidad"
            style={{ width: "100%", height: "50%", objectFit: "fill" }}
          />
          <img
            class="img-fluid"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4a66f333332919.56a84344447ec.jpg"
            alt="publicidad"
            style={{ width: "100%", height: "50%", objectFit: "fill" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
