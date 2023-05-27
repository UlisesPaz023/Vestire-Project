import { React, useState, useEffect } from "react";
import ProductGrid from "../components/productGrid/ProductGrid";
import Slider from "../components/slider/Slider";
import Categories from "../components/categories/Categories";
import axios from "axios";
import Login from "./Login";
import { CircularProgress } from "@mui/material";

const url = "https://vestire.onrender.com/product";

const HomePage = ({
  products,
  setProducts,
  productsToShow,
  setProductsToShow,
  loading,
  logedUserId,
  setLogedUserId,
  favList,
  setFavList,
}) => {
  return loading ? (
    <div className="row">
      <div className="col text-center">
        <CircularProgress />
      </div>
    </div>
  ) : (
    <section>
      <Categories
        products={products}
        setProducts={setProducts}
        setProductsToShow={setProductsToShow}
      />
      <Slider products={products} />
      <ProductGrid
        productsToShow={productsToShow}
        setProductsToShow={setProductsToShow}
        logedUserId={logedUserId}
        setLogedUserId={setLogedUserId}
        favList={favList}
        setFavList={setFavList}
      />
    </section>
  );
};

export default HomePage;
