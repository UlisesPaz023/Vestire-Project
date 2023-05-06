import { React, useState, useEffect } from "react";
import ProductGrid from "../components/productGrid/ProductGrid";
import Slider from "../components/slider/Slider";
import Categories from "../components/categories/Categories";
import axios from "axios";

const url = "https://vestire.onrender.com/product";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [productsToShow, setProductsToShow] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let endpoint = `${url}/get-products`;
      try {
        const { data } = await axios.get(endpoint);
        setProducts(data);
        setProductsToShow(data);
      } catch (error) {
        alert("Ha ocurrido un problema.");
      }
    };
    getData();
  }, []);

  return (
    <section>
      <Categories
        products={products}
        setProducts={setProducts}
        setProductsToShow={setProductsToShow}
      />
      {/* <Slider /> */}
      <ProductGrid productsToShow={productsToShow} />
    </section>
  );
};

export default HomePage;
