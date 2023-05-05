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
import Navbar from "./components/navbar/Navbar";
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
      <Navbar />
      <Body />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
