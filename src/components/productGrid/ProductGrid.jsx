import React, {useState, useEffect} from 'react';
import Card from '../card/Card';
import axios from 'axios';

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