import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./filterWithAcordion.module.css";
import { BsFilterSquareFill } from "react-icons/bs";
import FilterCategory from "../filterCategory/FilterCategory";

const FilterWithAcordion = ({ products, setProductsToShow, setGridTitle }) => {
  const handleClick = () => {
    setProductsToShow(products);
    setGridTitle("Nueva Colección");
  };

  const arrayClass = products.reduce((stack, prod) => {
    return stack.concat(prod.clase);
  }, []);
  let trueArrayClass = arrayClass.filter((x, i) => {
    return arrayClass.indexOf(x) === i;
  });
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <Button
        variant="outline-secondary"
        className="d-lg-none"
        onClick={handleShow}
        style={{
          position: "fixed",
          borderRadius: "50%",
          top: "30vh",
          border: "none",
          fontSize: "2.5rem",
        }}
      >
        <BsFilterSquareFill />
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        responsive="lg"
        restoreFocus={true}
        sticky="top"
        scroll={true}
      >
        <Offcanvas.Body>
          <div className="container-fluid d-flex flex-column align-items-center w-100 border">
            <Accordion
              className="row px-3 m-0 p-0 col my-accordion"
              style={{
                position: "fixed",
                overflowY: "auto",
              }}
            >
              <div className="position-relative">
              <Offcanvas.Header className="my-1 position-absolute" closeButton></Offcanvas.Header>
              <h5 className="text-center my-3">Filtros</h5>
              </div>
              <hr />
              {trueArrayClass.map((clase, index) => (
                <Accordion.Item
                  className="border-0 text-decoration-none"
                  key={index}
                  eventKey={index.toString()} // Asignar un eventKey único
                  style={{ height: "auto" }}
                >
                  <Accordion.Header 
                    className="border-0"
                    onClick={handleClick}
                  >
                    {clase}
                  </Accordion.Header>
                  <Accordion.Body
                    className="border-0"
                  >
                    <FilterCategory
                      className="border-0 text-decoration-none"
                      clase={clase}
                      products={products}
                      setProductsToShow={setProductsToShow}
                      setGridTitle={setGridTitle}
                      setShow={setShow}
                    />
                  </Accordion.Body>
                  <hr className="m-0" />
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default FilterWithAcordion;
