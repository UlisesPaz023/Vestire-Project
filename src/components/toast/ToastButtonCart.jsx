import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

const ToastButtonCart = ({ show, setShowToast }) => {
  return (
    <Row>
      <Toast
        onClose={() => setShowToast(false)}
        show={show}
        delay={3000}
        autohide
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">¡Atención!</strong>
        </Toast.Header>
        <Toast.Body>
          Debe seleccionar talle y cantidad antes de continuar.
        </Toast.Body>
      </Toast>
    </Row>
  );
};

export default ToastButtonCart;
