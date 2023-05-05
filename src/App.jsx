import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { routes } from "./routes";
import "typeface-roboto";
import Body from "./components/body/Body";
// import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <NavBar />
      <Body />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
