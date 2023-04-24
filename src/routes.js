import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
const routes = [
  {
    path: '/register',
    Element: Register
  },
  {
    path: '/',
    Element: HomePage
  },
  {
    path: '/login',
    Element: Login
  },
];

export {routes};