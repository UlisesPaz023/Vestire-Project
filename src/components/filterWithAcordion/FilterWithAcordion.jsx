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
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <div className="container-fluid d-flex flex-column justify-content-between border">
            <Accordion
              className="my-accordion"
              style={{
                height: "50%",
                position: "fixed",
                left: "0",
                overflowY: "auto",
              }}
            >
              <h5 className="text-center mt-4">Filtros</h5>
              {trueArrayClass.map((clase, index) => (
                <>
                  <Accordion.Item
                    key={index}
                    eventKey={index.toString()} // Asignar un eventKey único
                    style={{ height: "auto" }}
                  >
                    <Accordion.Header onClick={handleClick}>
                      {clase}
                    </Accordion.Header>
                    <Accordion.Body>
                      <FilterCategory
                        clase={clase}
                        products={products}
                        setProductsToShow={setProductsToShow}
                        setGridTitle={setGridTitle}
                        setShow={setShow}
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                </>
              ))}
            </Accordion>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default FilterWithAcordion;
