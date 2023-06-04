import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import CardSliderItem from "./CardSliderItem";

const CustomSlider = ({ products }) => {
  const productsSlider = products.filter(
    (product) => product.destacado === true
  );
  const [width, setWidth] = useState(0);


  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
  };
  
  useEffect(()=>{
    updateWindowDimensions();
    addEventListener("resize", updateWindowDimensions);
    
    return () => window.removeEventListener("resize", updateWindowDimensions);

  }, []);

  const slidesPerView = width <= 767 ? 1 : 4;

  return (
    <>
      <h1 className={`fs-2 text-center col mt-5 m-3 pb-1 border-bottom`}>
        DESTACADOS DEL MES
      </h1>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper m-5"
      >
        {
          productsSlider.map((productSlider, i) => (
            <SwiperSlide><CardSliderItem x = {productSlider} key = {i}/></SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}

export default CustomSlider;
