import React from "react";
import ProductGrid from "../components/productGrid/ProductGrid";
import Slider from "../components/slider/Slider";
import Categories from "../components/categories/Categories";

const HomePage = () => {
  return (
    <section>
      <Categories />
      <Slider />
      <ProductGrid />
    </section>
  );
};

export default HomePage;
