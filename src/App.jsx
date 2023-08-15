import { Routes, Route } from 'react-router-dom'
import 'typeface-roboto'
import Footer from './components/footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/navbar/Navbar'
import { useState, useEffect } from 'react'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import axios from 'axios'
import BuyingPage from './pages/BuyingPage'
import Admin from './pages/Admin'
import ProductForm from './pages/ProductForm'
import ProductTable from './pages/ProductTable'
import ContactPage from './pages/ContactPage'
import FavoritePage from './pages/FavoritePage'
import AboutUs from './pages/AboutUs'
import UserTable from './pages/UserTable'
import ForgotPassword from './pages/ForgotPassword'
import ResetPasswordPage from './pages/ResetPasswordPage'
import TermsPage from './pages/TermsPage'
import Error from './components/error404/Error'
const url = import.meta.env.VITE_BACKEND_PRODUCTS_URL
const App = () => {
  const [products, setProducts] = useState([])
  const [productsToShowAux, setProductsToShowAux] = useState([])
  const [loading, setLoading] = useState(true)
  const [productsToShow, setProductsToShow] = useState([])
  const [productsToCart, setProductsToCart] = useState([])
  const [totalCartPrice, setTotalCartPrice] = useState(0)
  const [totalCartItems, setTotalCartItems] = useState(0)
  const [gridTitle, setGridTitle] = useState('Nueva Colección')

  useEffect(() => {
    const getData = async () => {
      let endpoint = `${url}/get-products`
      try {
        const { data } = await axios.get(endpoint)
        setProducts(data)
        setProductsToShow(data)
        setProductsToShowAux(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <section
      className="d-flex flex-column"
      style={{ minHeight: '100vh', overflow: 'hidden' }}
    >
      <NavBar
        productsToCart={productsToCart}
        setProductsToCart={setProductsToCart}
        totalCartPrice={totalCartPrice}
        setTotalCartPrice={setTotalCartPrice}
        totalCartItems={totalCartItems}
        setTotalCartItems={setTotalCartItems}
        productsToShow={productsToShow}
        setProductsToShow={setProductsToShow}
        productsToShowAux={productsToShowAux}
        setGridTitle={setGridTitle}
      />
      <section className="flex-grow-1">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HomePage
                products={products}
                productsToShow={productsToShow}
                setProductsToShow={setProductsToShow}
                loading={loading}
                setGridTitle={setGridTitle}
                gridTitle={gridTitle}
              />
            }
          />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/product-table" element={<ProductTable />} />
          <Route path="/admin/product-form" element={<ProductForm />} />
          <Route path="/admin/user-table" element={<UserTable />} />
          <Route path="/sobre-nosotros" element={<AboutUs />} />
          <Route
            path="/product-page/:id"
            element={
              <ProductPage
                productsToCart={productsToCart}
                setProductsToCart={setProductsToCart}
              />
            }
          />
          <Route path="/buying-page" element={<BuyingPage />} />
          <Route path="/contact-page" element={<ContactPage />} />
          <Route path="/terminos" element={<TermsPage />} />
          <Route path="/favorite-page" element={<FavoritePage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password-page" element={<ResetPasswordPage />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </section>
      <Footer />
    </section>
  )
}

export default App
