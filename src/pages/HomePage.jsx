import { React, useState, useEffect } from "react";
import ProductGrid from "../components/productGrid/ProductGrid";
import Slider from "../components/slider/Slider";
import Categories from "../components/categories/Categories";
import axios from "axios";

const url = "https://vestire.onrender.com/product";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let endpoint = `${url}/get-products`;
      try {
        const { data } = await axios.get(endpoint);
        console.log(data);
        setProducts(data);
      } catch (error) {
        alert("Ha ocurrido un problema.");
      }
    };
    getData();
  }, []);

  console.log(products);
  return (
    <section>
      <Categories />
      {/* <Slider /> */}
      <ProductGrid products={products} />
    </section>
  );
};

export default HomePage;
