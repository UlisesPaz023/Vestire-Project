import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from '../categories/categories.module.css';
import CategoriesMenu from './CategoriesMenu';

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

  const arrayClass = products.reduce((stack, prod) => {
    return stack.concat(prod.clase);
  }, []);

  let trueArrayClass = arrayClass.filter((x, i) => {
    return arrayClass.indexOf(x) === i;
  });
  
  console.log(trueArrayClass);

  const isNotUndefined = (products, trueArrayClass) => {
    if(products !== undefined && trueArrayClass !== undefined){
      return true;
    }
  }

  return (
    <section className='container-fluid border'>
      {
        isNotUndefined(products, trueArrayClass)
        &&
        <CategoriesMenu products={products} trueArrayClass={trueArrayClass}/>
      }
    </section>
  );
};

export default Categories;