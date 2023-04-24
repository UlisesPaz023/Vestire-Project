import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const RootLayout = () => {
  return (
    <div className = 'root-layout'>
      <Navbar/>
      <main className='vh-100'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
};

export default RootLayout;