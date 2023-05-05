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

  const productGroups = [];
  for (let i = 0; i < products.length; i++) {
    if (i % 4 === 0) {
      productGroups.push(products.slice(i, i + 4));
    }
  }

  return (
    <div className='container-flex my-5'>
      <div className='row col-12 m-0'>
        <div id="carouselExampleIndicators" className="position-static carousel carousel-dark slide p-0">
          <div className={`d-none d-md-flex position-static ${styles.sliderContainer}`}>
              {
                productGroups.map((x, i)=>(
                  <CardSlider x={x} i={i} key = {i}/>
                ))
              }
          </div>
          <div className={`d-flex d-md-none ${styles.sliderContainer}`}>
              {
                products.map((x, i)=>(
                  <CardSlider x={x} i={i} key = {i}/>
                ))
              }
          </div>
          <div className={`col d-flex carousel-indicators position-static ${styles.sliderBtns}`}>
            {
              productGroups.map((x, i)=>(
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={`${i}`} className={`${styles.sliderBtn} ${i===0 ? 'active':''}`} aria-current={`${i===0 ? 'true':'false'}`} aria-label={`Slide ${i+1}`}></button>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;