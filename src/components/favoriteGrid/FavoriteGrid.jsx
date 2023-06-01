import React from "react";
import CardFavorite from "./CardFavorite";
import Pagination from "../pagination/Pagination";
import { useState } from "react";

const FavoriteGrid = (props) => {
  const {favorites} = props.userFavorites;

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(15);
  const totalProducts = favorites.length;
  const lastIndex = productsPerPage * currentPage;
  const firstIndex = lastIndex - productsPerPage;

  console.log(favorites);
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="p-0">
          <h1 className={`fs-2 fw-bold text-center col m-3 pb-1 border-bottom`}>
            Favoritos
          </h1>
        </div>
        {
          favorites.map((product) => (
            <CardFavorite user={props.userFavorites} setUser={props.setUserFavorites} product={product} quantity={favorites.length} />
          )).slice(firstIndex, lastIndex)
        }
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

export default FavoriteGrid;