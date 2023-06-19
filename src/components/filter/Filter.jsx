import { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Categories from "../categories/Categories";
import Button from "react-bootstrap/Button";

const Filter = ({
  products,
  setProducts,
  setProductsToShow,
  productsToShow,
  setGridTitle,
  setEstadoPrueba,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setProductsToShow(productsToShow);
  };
  const handleShow = () => {
    setShow(true);
    setProductsToShow(productsToShow);
  };

  return (
    <>
      <Button variant="primary" className="d-lg-none" onClick={handleShow}>
        Filtros
      </Button>
      {/* 
      <Alert variant="info" className="d-none d-lg-block">
        <Categories
          products={products}
          setProducts={setProducts}
          setProductsToShow={setProductsToShow}
          productsToShow={productsToShow}
          setGridTitle={setGridTitle}
        />
      </Alert> */}

      <Offcanvas
        show={show}
        onHide={handleClose}
        responsive="lg"
        restoreFocus={true}
        sticky="top"
        scroll={true}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Categories
            products={products}
            setProducts={setProducts}
            setProductsToShow={setProductsToShow}
            productsToShow={productsToShow}
            setGridTitle={setGridTitle}
            setEstadoPrueba={setEstadoPrueba}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Filter;
