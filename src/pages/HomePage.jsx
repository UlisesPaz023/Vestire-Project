import { React, useState } from "react";
import ProductGrid from "../components/productGrid/ProductGrid";
import CustomSlider from "../components/slider/CustomSlider";
import Categories from "../components/categories/Categories";
import { CircularProgress } from "@mui/material";

const HomePage = ({
  products,
  setProducts,
  productsToShow,
  setProductsToShow,
  loading,
}) => {
  const [gridTitle, setGridTitle] = useState("Nueva Colección");
  console.log(window.innerWidth);
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
        productsToShow={productsToShow}
        setGridTitle={setGridTitle}
      />
      <CustomSlider products={products} />
      <ProductGrid
        productsToShow={productsToShow}
        setProductsToShow={setProductsToShow}
        setGridTitle={setGridTitle}
        gridTitle={gridTitle}
      />
    </section>
  );
};

export default HomePage;
