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
import FavoritePage from "./pages/FavoritePage";
import AboutUs from "./pages/AboutUs";
//const productGrid = document.getElementById("product-grid");
const url = "https://vestire.onrender.com/product";
function App() {
  const [products, setProducts] = useState([]);
  const [productsToShow, setProductsToShow] = useState([]);
  const [productsToShowAux, setProductsToShowAux] = useState([]);
  const [loading, setLoading] = useState(true);
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
  }, []);

  const [productsToCart, setProductsToCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [priceCartItem, setPriceCartItem] = useState(0);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [totalCartItems, setTotalCartItems] = useState(0);
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
        //productGrid={productGrid}
      />
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
        <Route path="/favorite-page" element={<FavoritePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
