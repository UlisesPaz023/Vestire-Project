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

const url = "https://vestire.onrender.com/product";
function App() {
  const [allProducts, setAllProducts] = useState();
  useEffect(() => {
    const getData = async () => {
      let endpoint = `${url}/get-products`;
      try {
        const { data } = await axios.get(endpoint);
        setAllProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const [productsToCart, setProductsToCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [priceCartItem, setPriceCartItem] = useState(0);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [totalCartItems, setTotalCartItems] = useState(0);
  return (
    <>
      <NavBar
        allProducts={allProducts}
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
      <Routes>
        <Route exact path="/" element={<HomePage />} />
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
