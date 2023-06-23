import React from "react";
import CardFavorite from "./CardFavorite";
import Pagination from "../pagination/Pagination";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
const FavoriteGrid = (props) => {
  const { favorites } = props.userFavorites;
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(15);
  const totalProducts = favorites.length;
  const lastIndex = productsPerPage * currentPage;
  const firstIndex = lastIndex - productsPerPage;
  const navigate = useNavigate();

  // if (!localStorage.getItem("userName")) {
  //   Swal.fire({
  //     title: "¡Atención!",
  //     text: "Debe iniciar sesión para ver los favoritos",
  //     icon: "warning",
  //     confirmButtonColor: "#3085d6",
  //     confirmButtonText: "Ok",
  //   }).then((result) => {
  //     if (result.isConfirmed) navigate("/");
  //   });
  // }

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        {!localStorage.getItem("userName") ? (
          <div style={{ height: "50vh" }}></div>
        ) : (
          <div className="p-0">
            <h2
              className={`fs-2 fw-bold text-center col m-3 pb-1 border-bottom`}
            >
              Favoritos
            </h2>
          </div>
        )}

        {favorites
          .map((product) => (
            <CardFavorite
              user={props.userFavorites}
              setUser={props.setUserFavorites}
              product={product}
              quantity={favorites.length}
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

export default FavoriteGrid;
