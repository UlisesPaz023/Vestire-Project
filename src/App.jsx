import {
  // createBrowserRouter,
  // RouterProvider,
  // createRoutesFromElements,
  Routes,
  Route,
  Link,
} from "react-router-dom";
// import RootLayout from "./layout/RootLayout";
// import { routes } from "./routes";
import "typeface-roboto";
// import Body from "./components/body/Body";

import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
// import Error from "./components/error404/Error";
import NavBar from "./components/navbar/Navbar";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import axios from "axios";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<RootLayout />}>
//       {routes.map(({ Element, path, index }) => (
//         <Route
//           key={index}
//           path={path}
//           element={
//             <Element
//               prueba={100000}
//               productsToCart={productsToCart}
//               setProductsToCart={setProductsToCart}
//             />
//           }
//         />
//       ))}
//     </Route>
//   )
// );
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

  //const initProductsToCart = { _id, resumenDescripcion, precio, talle };

  const [productsToCart, setProductsToCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [priceCartItem, setPriceCartItem] = useState(0);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  //console.log(productsToCart);
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
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
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
            />
          }
        />

        {/* <Error /> */}
        {/* <Body /> */}
        {/* <RouterProvider router={router} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
