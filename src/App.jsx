import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import { routes } from './routes';
import 'typeface-roboto';
// import NavBar from "./components/navbar/Navbar";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";

// import NavBar from "./components/navbar/Navbar";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      {routes.map(({ Element, path, index }) => (
        <Route key={index} path={path} element={<Element />} />
      ))}
    </Route>
  )
);

function App() {
  return (
    <>
      <Body />
      {/* <NavBar /> */}
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
