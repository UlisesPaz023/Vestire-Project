import { React, useState, useEffect } from "react";

const Subcat = ({ categoria, handleChange, subCategoria }) => {
  const [subcat, setSubcat] = useState([]);
  useEffect(() => {
    setSubcat(categoria);
    switch (categoria) {
      case "Camisa":
        setSubcat(["Mangas cortas", "Vestir", "Casual"]);
        break;
      case "Pantalon":
        setSubcat(["Vestir", "Jeans"]);
        break;
      case "Ambo":
        setSubcat(["Clasico", "Slim Fit"]);
        break;
      default:
        break;
    }
  }, [categoria]);

  return (
    <>
      <select
        className="form-select mb-2"
        aria-label="Default select example"
        name="subCategoria"
        onChange={handleChange}
        value={subCategoria}
      >
        <option selected>Sub-categoria</option>
        {subcat &&
          subcat.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
      </select>
    </>
  );
};

export default Subcat;
