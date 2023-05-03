import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import ProductForm from "./pages/ProductForm";
import ProductTable from "./pages/ProductTable";
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
];

export { routes };
