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
}) => {
  // const [products, setProducts] = useState([]);
  // const [productsToShow, setProductsToShow] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const getData = async () => {
  //     let endpoint = `${url}/get-products`;
  //     try {
  //       const { data } = await axios.get(endpoint);
  //       setProducts(data);
  //       setProductsToShow(data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getData();
  // }, []);

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
      />
    </section>
  );
};

export default HomePage;
