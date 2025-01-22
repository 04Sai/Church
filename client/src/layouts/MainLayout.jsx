import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import AccountNav from "../components/account/AccountNav";
import AccountFooter from "../components/account/AccountFooter";

const MainLayout = () => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  const isDashboard = location.pathname === "/dashboard";
  const isProfile = location.pathname === "/profile";
  const isGrades = location.pathname === "/grades";
  const isSubjects = location.pathname === "/subjects";
  const isBalance = location.pathname === "/balance";
  const isAccount = location.pathname === "/account";
  const isRegistration = location.pathname === "/registration";

  const isAccountPage =
    isDashboard ||
    isProfile ||
    isGrades ||
    isSubjects ||
    isBalance ||
    isAccount ||
    isRegistration;

  return (
    <>
      {isHomepage && <NavBar />}
      {isAccountPage && <AccountNav />}

      {!isHomepage && !isAccountPage && <Navigation />}
      <main>
        <Outlet />
      </main>
      {isAccountPage ? <AccountFooter /> : <Footer />}
    </>
  );
};

export default MainLayout;
