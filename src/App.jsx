<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import React from "react";
=======
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import alertify from "alertifyjs";
// import "alertifyjs/build/css/alertify.css";
// import "alertifyjs/build/css/themes/bootstrap.css";

// alertify.set("notifier", "position", "top-right");
import React from "react";
>>>>>>> develop
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
<<<<<<< HEAD
=======
<<<<<<< HEAD
  Route
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import { routes } from './routes';
import 'typeface-roboto';
=======
>>>>>>> develop
  Route,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { routes } from "./routes";
<<<<<<< HEAD
// import NavBar from "./components/navbar/Navbar";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
=======
>>>>>>> f4f13996b3607e6c7ce5e129782bf5dcfddad3d0
>>>>>>> develop

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
