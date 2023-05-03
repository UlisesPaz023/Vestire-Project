import React, {useState, useEffect} from 'react';
import CardSlider from './CardSlider';
import axios from 'axios';
import styles from '../card/card.module.css';

const Slider = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const getData = async () => {
      const urlBase = `http://localhost:3000/productos`;
      try {
        const {data} = await axios.get(urlBase);
        setProducts(data);
      } catch (error) {
        alert('Ha ocurrido un problema');
      }
    };
    getData();
  },[]);

  console.log(products)

  return (
    <div className='container-flex'>
      <div className='row col-12 m-0'>
        <div id="carouselExampleIndicators" className="carousel carousel-dark slide p-0">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className={`${styles.sliderBtn} rounded active`} aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className={`${styles.sliderBtn} rounded`} aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className={`${styles.sliderBtn} rounded`} aria-label="Slide 3"></button>
          </div>
          <div className={`justify-content-center ${styles.sliderContainer}`}>
              {
                products.map((x, i)=>(
                  x.id < 4
                  &&
                  <CardSlider x = {x}/>
                ))
              }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;