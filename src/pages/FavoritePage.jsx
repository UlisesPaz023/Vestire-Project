import React , {useState , useEffect} from 'react';
import FavoriteGrid from '../components/favoriteGrid/FavoriteGrid';
import axios from 'axios';

const url = "https://vestire.onrender.com/users";

const FavoritePage = () => {

    const [userFavorites, setUserFavorites] = useState({favorites:[]});

    useEffect(() => {
      const getData = async () => {
        let endpoint = `${url}/get-user-by-id/645bf7a074039838f83349d0`;
        try {
          const { data } = await axios.get(endpoint);
          setUserFavorites(data);
        } catch (error) {
          console.log(error);
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