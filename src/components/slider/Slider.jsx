import React from 'react';

const Slider = () => {
  return (
    <div className='container-flex'>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://www.macowens.com.ar/media/catalog/product/m/a/macowens-traje_3001-081_001.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:" className="d-block w-100" alt="traje"/>
          </div>
          <div className="carousel-item">
            <img src="https://www.macowens.com.ar/media/catalog/product/m/a/macowens-camisa-vestir_44964-017_001.jpg" className="d-block w-100" alt="camisa"/>
          </div>
          <div className="carousel-item">
            <img src="https://www.macowens.com.ar/media/catalog/product/m/a/macowens-pantalon_8908-002_001.jpg" className="d-block w-100" alt="pantalon"/>
          </div>
      </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;