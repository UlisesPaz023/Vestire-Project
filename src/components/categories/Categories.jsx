import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../categories/categories.module.css";
import CategoriesMenu from "./CategoriesMenu";

const Categories = () => {
  const url = "https://vestire.onrender.com/product";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let endpoint = `${url}/get-products`;
        const { data } = await axios.get(endpoint);
        setProducts(data);
      } catch (error) {
        alert("Ha ocurrido un problema");
      }
    };
    getData();
  }, []);

  const arrayClass = products.reduce((stack, prod) => {
    return stack.concat(prod.clase);
  }, []);

  let trueArrayClass = arrayClass.filter((x, i) => {
    return arrayClass.indexOf(x) === i;
  });

  const isNotUndefined = (products, trueArrayClass) => {
    if (products !== undefined && trueArrayClass !== undefined) {
      return true;
    }
  };

  return (
    <section className="container-fluid border">
      {isNotUndefined(products, trueArrayClass) && (
        <CategoriesMenu products={products} trueArrayClass={trueArrayClass} />
      )}
    </section>
  );
};

export default Categories;
