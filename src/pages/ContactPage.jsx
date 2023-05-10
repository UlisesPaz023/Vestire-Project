import React from "react";
import styles from "../pages/contactPage.module.css";
import Swal from "sweetalert2";

const handleClick = (e) => {
  e.preventDefault();
  Swal.fire(
    "Mensaje enviado",
    "Muchas gracias por sus comentarios, le responderemos a la brevedad.",
    "success"
  );
  setTimeout(() => {
    location.href = "/";
  }, 3000);
};
const ContactPage = () => {
  return (
    <div className="container-fluid">
      <div className="row col flex-column flex-lg-row my-5 justify-content-center align-items-center">
        <div
          className={`col-lg-5 d-flex d-lg-block flex-column flex-lg-row text-center text-lg-start ${styles.info}`}
        >
          <h1 className={`${styles.title} fw-light lg-4 mb-4`}>Contáctenos</h1>
          <p className="fw-bold m-0">Nuestra dirección postal es:</p>
          <p>T4000, San Miguel de Tucumán.</p>
          <p>
            <span className="fw-bold m-0">Teléfono:</span> +54 381321459
          </p>
          <div className="m-0">
            <i className={`bi bi-facebook me-4 ${styles.font}`}></i>
            <i className={`bi bi-whatsapp me-4 ${styles.font}`}></i>
            <i className={`bi bi-instagram ${styles.font}`}></i>
          </div>
        </div>
        <form
          className="col-9 col-lg-5 text-center text-lg-start mb-5 m-lg-0"
          onSubmit={handleClick}
        >
          <p className="mb-4">
            Una gran visión sin grandes personas es irrelevante. <br /> Ayúdanos
            a mejorar.
          </p>
          <div className="mb-3">
            <input
              type="text"
              className={`${styles.input} form-control rounded-0`}
              id="name"
              placeholder="Ingrese su nombre"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className={`${styles.input} form-control rounded-0`}
              id="email"
              placeholder="Ingrese su correo electrónico"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              type="text"
              className={`${styles.input} form-control rounded-0`}
              id="name"
              placeholder="Ingrese su mensaje"
              required
            />
          </div>
          <button type="submit" className={`rounded-0 col-6 py-3 btn btn-dark`}>
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
