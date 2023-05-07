import React from 'react';
import CardSliderItem from './CardSliderItem';

const CardSlider = (props) => {
  const {x, key, i} = props;
  console.log(x);

  return (
    <div className={`carousel-item ${i === 0 ? 'active' : ''}`}>
      <div className='cards-wrapper d-md-flex justify-content-evenly'>
        {
          Array.isArray(x) 
          ?
          x.map((x, i) => (
            <CardSliderItem key={x.id} x={x} />
          ))
          :
          <CardSliderItem key={x.id} x={x} />
        }
      </div>
    </div>
  );
};

export default CardSlider;