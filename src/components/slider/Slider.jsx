import React, { useState, useEffect } from "react";
import CardSlider from "./CardSlider";
import axios from "axios";
import styles from "../card/card.module.css";

const Slider = ({ products }) => {
  const productsSlider = products.filter(
    (product) => product.destacado === true
  );

  const productGroups = [];
  for (let i = 0; i < productsSlider.length; i++) {
    if (i % 4 === 0) {
      productGroups.push(productsSlider.slice(i, i + 4));
    }
  }

  return (
    <>
      <h3 className="text-center mt-4">DESTACADOS DEL MES</h3>
      <div className="container-flex my-3">
        <div className="row col-12 m-0">
          <div
            id="carouselExampleIndicators"
            className="position-static carousel carousel-dark slide p-0"
          >
            <div
              className={`d-none d-md-flex position-static ${styles.sliderContainer}`}
            >
              {productGroups.map((x, i) => (
                <CardSlider x={x} i={i} key={i} />
              ))}
            </div>
            <div className={`d-flex d-md-none ${styles.sliderContainer}`}>
              {productsSlider.map((x, i) => (
                <CardSlider x={x} i={i} key={i} />
              ))}
            </div>
            <section id="product-grid"></section>
            <div
              className={`col d-flex carousel-indicators position-static ${styles.sliderBtns}`}
            >
              {productGroups.map((x, i) => (
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={`${i}`}
                  className={`${styles.sliderBtn} ${i === 0 ? "active" : ""}`}
                  aria-current={`${i === 0 ? "true" : "false"}`}
                  aria-label={`Slide ${i + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
