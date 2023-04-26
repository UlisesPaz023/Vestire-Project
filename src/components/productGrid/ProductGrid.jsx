import React, {useState, useEffect} from 'react';
import Card from '../card/Card';
import axios from 'axios';
import style from '../productGrid/productgrid.module.css';

const ProductGrid = () => {
  const [product, setProduct] = useState([]);

  useEffect(()=> {
    const getData = async () => {
      const urlBase =  `http://localhost:3000/productos`;
      try {
        const {data} = await axios.get(urlBase);
        setProduct(data);
      } catch (error) {
        alert('Ha ocurrido un problema.');
      }
    };
    getData();
  },[]);
  
  return (
    <div className='container-fluid'>
      <div className='row justify-content-center'>
        <div className='p-0'>
          <h1 className= {`fs-2 fw-bold text-center col m-3 pb-1 border-bottom`}>Nueva Colección</h1>
        </div>
        {
          product.map((x, i)=>(
            <Card x = {x}/>
          ))
        }
      </div>
    </div>
  );
};

export default ProductGrid;