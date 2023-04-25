import React from 'react';
import Card from '../card/Card';

const ProductGrid = () => {
  return (
    <div className='container-fluid'>
      <div className='row justify-content-center'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
};

export default ProductGrid;