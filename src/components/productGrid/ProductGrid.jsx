import React from "react";
import Card from "../card/Card";
import style from "../productGrid/productgrid.module.css";
import Pagination from "../pagination/Pagination";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductGrid = ({
  products,
  productsToShow,
  setProductsToShow,
  logedUserId,
  setLogedUserId,
  favList,
  setFavList,
}) => {
  //const [favList, setFavList] = useState([]);
  const [auxFav, setAuxFav] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(15);
  const totalProducts = productsToShow.length;
  const lastIndex = productsPerPage * currentPage;
  const firstIndex = lastIndex - productsPerPage;
  const url = "https://vestire.onrender.com/users";
  useEffect(() => {
    if (auxFav) {
      console.log(`la lista de favoritos es ${favList}`);
      let endpoint = `${url}/edit-user/${logedUserId}`;
      const addFav = async () => {
        const resp = await axios.patch(endpoint, { favorites: favList });
        //console.log(resp.data.favorites);
        setFavList(resp.data.favorites);
      };
      addFav();
    }
    //console.log(favList);
  }, [auxFav]);

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="p-0">
          <h1 className={`fs-2 fw-bold text-center col m-3 pb-1 border-bottom`}>
            Nueva Colección
          </h1>
        </div>
        {productsToShow
          .map((product) => (
            <Card
              product={product}
              quantity={productsToShow.length}
              logedUserId={logedUserId}
              setLogedUserId={setLogedUserId}
              // isFav={isFav}
              // setIsFav={setIsFav}
              setFavList={setFavList}
              setAuxFav={setAuxFav}
              auxFav={auxFav}
            />
          ))
          .slice(firstIndex, lastIndex)}
      </div>
      <Pagination
        totalProducts={totalProducts}
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ProductGrid;
