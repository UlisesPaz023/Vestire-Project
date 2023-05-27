import React, { useState, useEffect } from "react";
import FavoriteGrid from "../components/favoriteGrid/FavoriteGrid";
import axios from "axios";

const url = "https://vestire.onrender.com/product";

const FavoritePage = ({ favList }) => {
  console.log(favList);
  const [favsToShow, setFavsToShow] = useState([]);

  useEffect(() => {
    const getFavs = () => {
      favList.forEach(async (favId) => {
        console.log(favId);
        let endpoint = `${url}/get-product-by-Id/${favId}`;
        const { data } = await axios.get(endpoint);
        setFavsToShow((prevState) => [...prevState, data]);
      });
    };
    getFavs();
  }, [favList]);

  return (
    <>
      {console.log(favsToShow)}
      <h3>Favoritos del usuario</h3>
      {favsToShow.map((fav) => (
        <p>{fav.resumenDescripcion}</p>
      ))}
    </>
  );
};

export default FavoritePage;
