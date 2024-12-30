import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const login = () => {
  return (
    <div>
      <Navigation />
      <section className="section" id="home">
        <div>
          <center>
            <br />
            <br />
            <br />
            <img src={logo} alt="Logo" />
          </center>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default login;
