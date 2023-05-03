// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import alertify from "alertifyjs";
// import "alertifyjs/build/css/alertify.css";
// import "alertifyjs/build/css/themes/bootstrap.css";

// alertify.set("notifier", "position", "top-right");
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
<<<<<<< HEAD
  Route
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import { routes } from './routes';
import 'typeface-roboto';
=======
  Route,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { routes } from "./routes";
>>>>>>> f4f13996b3607e6c7ce5e129782bf5dcfddad3d0

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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
