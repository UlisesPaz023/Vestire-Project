import { Routes, Route } from "react-router-dom";
import "typeface-roboto";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
// import Error from "./components/error404/Error";
import NavBar from "./components/navbar/Navbar";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import axios from "axios";
import BuyingPage from "./pages/BuyingPage";
import Admin from "./pages/Admin";
import ProductForm from "./pages/ProductForm";
import ProductTable from "./pages/ProductTable";
import ContactPage from "./pages/ContactPage";
import AboutUs from "./pages/AboutUs";
import FavoritePage from "./pages/FavoritePage";

const url = "https://vestire.onrender.com/product";
function App() {
  const [products, setProducts] = useState([]);
  const [productsToShow, setProductsToShow] = useState([]);
  const [productsToShowAux, setProductsToShowAux] = useState([]);
  const [loading, setLoading] = useState(true);

  const [productsToCart, setProductsToCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [priceCartItem, setPriceCartItem] = useState(0);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [logedUserId, setLogedUserId] = useState("");
  const [favList, setFavList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let endpoint = `${url}/get-products`;
      try {
        const { data } = await axios.get(endpoint);
        setProducts(data);
        setProductsToShow(data);
        setProductsToShowAux(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();

    if (localStorage.getItem("userName")) {
      const userLoged = localStorage.getItem("userName");
      const getUser = async () => {
        try {
          const { data } = await axios.get(
            `https://vestire.onrender.com/users/get-user-by-username/${userLoged}`
          );
          setLogedUserId(data._id);
          console.log(data._id);
        } catch (error) {
          console.log(error);
        }
      };
      getUser();
    }
  }, []);

  useEffect(() => {
    console.log(logedUserId);
    const getFavFromUser = async () => {
      let endpoint = `https://vestire.onrender.com/users/get-user-by-id/${logedUserId}`;
      try {
        const { data } = await axios.get(endpoint);
        console.log(data);
        setFavList(data.favorites);
      } catch (error) {
        console.log(error);
      }
    };
    getFavFromUser();
  }, [logedUserId]);

  return (
    <>
      <NavBar
        productsToCart={productsToCart}
        setProductsToCart={setProductsToCart}
        quantity={quantity}
        setQuantity={setQuantity}
        priceCartItem={priceCartItem}
        setPriceCartItem={setPriceCartItem}
        totalCartPrice={totalCartPrice}
        setTotalCartPrice={setTotalCartPrice}
        totalCartItems={totalCartItems}
        setTotalCartItems={setTotalCartItems}
        productsToShow={productsToShow}
        setProductsToShow={setProductsToShow}
        productsToShowAux={productsToShowAux}
        setProductsToShowAux={setProductsToShowAux}
        setLogedUserId={setLogedUserId}
      />
      {/* {console.log(logedUserId)} */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <HomePage
              products={products}
              setProducts={setProducts}
              productsToShow={productsToShow}
              setProductsToShow={setProductsToShow}
              loading={loading}
              setLogedUserId={setLogedUserId}
              logedUserId={logedUserId}
              favList={favList}
              setFavList={setFavList}
            />
          }
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/product-table" element={<ProductTable />} />
        <Route path="/admin/product-form" element={<ProductForm />} />
        <Route path="/sobre-nosotros" element={<AboutUs />} />
        <Route
          path="/product-page/:id"
          element={
            <ProductPage
              productsToCart={productsToCart}
              setProductsToCart={setProductsToCart}
              quantity={quantity}
              setQuantity={setQuantity}
              priceCartItem={priceCartItem}
              setPriceCartItem={setPriceCartItem}
              totalCartPrice={totalCartPrice}
              setTotalCartPrice={setTotalCartPrice}
              totalCartItems={totalCartItems}
              setTotalCartItems={setTotalCartItems}
            />
          }
        />
        <Route path="/buying-page" element={<BuyingPage />} />
        <Route path="/contact-page" element={<ContactPage />} />
        <Route
          path="/favorite-page"
          element={<FavoritePage favList={favList} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
