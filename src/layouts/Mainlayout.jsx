import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default MainLayout;
