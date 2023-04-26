import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const RootLayout = () => {
  return (
    <div className = 'root-layout' style={{fontFamily: 'Roboto, sans-serif'}}>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
};

export default RootLayout;