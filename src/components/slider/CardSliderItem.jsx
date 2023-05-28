import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../card/card.module.css";

const CardSliderItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { _id, marca, resumenDescripcion, descripcion, imagen } = props.x;
  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  const elementClass = isHovered ? "shadow-lg" : "";
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product-page/${_id}`, { state: props.x });
  };
  return (
    <>
      <div
        className={`${styles.sliderContainer} col col-md-2 m-0 d-md-flex flex-column mx-md-2 card border-0`}
      >
        <button
          style={{ border: "none", backgroundColor: "white" }}
          className={elementClass}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={handleClick}
        >
          <div className="position-relative">
            <img
              src={imagen}
              className={`col m-0 img-fluid ${styles.sliderImage}`}
              alt={resumenDescripcion}
            />
            <section id="product-grid"></section>
            <p
              className={`position-absolute ${styles.price} rounded-5 d-flex justify-content-center align-items-center col text-white ${styles.priceText}`}
            >
              10%
            </p>
          </div>
        </button>

        <div
          className={`col card-body z-1 d-flex flex-column align-items-center align-items-md-start p-0 mt-2 mb-4 mb-lg-3`}
        >
          <div>
            <h5 className={`${styles.cardSliderInfo} card-title my-2 fw-light`}>
              {resumenDescripcion.toUpperCase()}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSliderItem;
