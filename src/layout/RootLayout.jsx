import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const RootLayout = () => {
  return (
<<<<<<< HEAD
    <div className = 'root-layout' style={{fontFamily: 'Roboto, sans-serif'}}>
      <Navbar/>
      <main>
        <Outlet/>
=======
    <div className="root-layout">
      <Navbar />
      <main>
        <Outlet />
>>>>>>> f4f13996b3607e6c7ce5e129782bf5dcfddad3d0
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
