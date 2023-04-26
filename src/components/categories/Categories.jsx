import React, {useState, useEffect} from 'react';
import Card from '../card/Card';
import axios from 'axios';
import styles from '../categories/categories.module.css';
import CategoriesItem from './CategoriesItem';

const Categories = () => {
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

    const removeDuplicatesCategories = products.filter(
      (obj, index, array) =>
        index === array.findIndex((i) => i.categoria === obj.categoria
        )
    )

  return (
    <section className='container-fluid border'>
      <div className ='row'>
        <div className={`d-flex justify-content-center ${styles.color}`}>
          <a className={`mx-4 mt-4 mb-5 text-decoration-none fw-bold ${styles.categoryItem}`} href='/#' >COLECCIÓN</a>
          <a className={`mx-4 mt-4 mb-5 text-decoration-none fw-bold ${styles.categoryItem}`} href='/#' >SASTRERÍA</a>
          <a className={`mx-4 mt-4 mb-5 text-decoration-none fw-bold ${styles.categoryItem}`} href='/#' >ACCESORIOS</a>
        </div>
        <div>
          <div className={`row ${styles.color}`}>
            {         
              removeDuplicatesCategories.map((x, i)=>(
                <CategoriesItem x = {x}/>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;