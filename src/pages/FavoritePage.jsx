import React , {useState , useEffect} from 'react';
import FavoriteGrid from '../components/favoriteGrid/FavoriteGrid';
import axios from 'axios';

const url = "https://vestire.onrender.com/users";

const FavoritePage = () => {

    const [userFavorites, setUserFavorites] = useState({favorites:[]});

    useEffect(() => {
      const getData = async () => {
        let endpoint = `${url}/get-user-by-token`;
        if (localStorage.getItem("userToken")) {
          const token = localStorage.getItem("userToken");
          const headers = { Authorization: `Bearer ${token}` };
          try {
            const {data} = await axios.get(
              endpoint,
              {
                headers,
              }
            );
            setUserFavorites(data);
            // if(resp)
            
          } catch (error) {
            console.log(error);
          }
        } else {
          Swal.fire(
            "Acceso denegado",
            "Debe ser administrador para ingresar",
            "error"
          );
          setTimeout(() => {
            location.href = "/";
          }, 3000);
        }
      };
      getData();
    }, [userFavorites.favorites]);

  return (
    <section>
      {
      userFavorites !== undefined &&
      <FavoriteGrid
        userFavorites={userFavorites}
        setUserFavorites={setUserFavorites}
      />
      }
    </section>
  );
};

export default FavoritePage;