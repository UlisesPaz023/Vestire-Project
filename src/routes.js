import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import ProductPage from "./pages/ProductPage";
import ProductForm from "./pages/ProductForm";
import ProductTable from "./pages/ProductTable";
import FavoritePage from "./pages/FavoritePage";
import ContactPage from "./pages/ContactPage";

const routes = [
  {
    path: "/register",
    Element: Register,
  },
  {
    path: "/",
    Element: HomePage,
  },
  {
    path: "/login",
    Element: Login,
  },
  {
    path: "/admin",
    Element: Admin,
  },
  {
    path: "/admin/product-table",
    Element: ProductTable,
  },
  {
    path: "/admin/product-form",
    Element: ProductForm,
  },
  {
    path: '/product-page/:id',
    Element: ProductPage
  },
  {
    path: '/favorite-page',
    Element: FavoritePage
  },
  {
    path: '/contact-page',
    Element: ContactPage
  }

];

export { routes };
