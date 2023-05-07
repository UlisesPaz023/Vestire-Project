import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className = 'root-layout' style={{fontFamily: 'Roboto, sans-serif'}}>
      <main>
        <Outlet/>
      </main>
    </div>
  );
};

export default RootLayout;
