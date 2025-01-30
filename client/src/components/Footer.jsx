import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleHashLink = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // If element not found, first navigate to home then scroll
      window.location.href = `/#${id}`;
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="columns">
          <div className="column is-3">
            <p className="title is-3 has-text-weight-bold">BCBI</p>
            <p className="subtitle is-6">Brothers of Christ of Banneux, Inc.</p>
            <p className="subtitle is-6">
              © Copyright BCBI. All Rights Reserved
            </p>
          </div>
          <div className="column is-4">
            <p className="is-6 has-text-weight-bold">Useful Links</p>
            <div className="icon-text">
              <span className="icon">
                <FaChevronRight />
              </span>
              <Link to="/">Home</Link>
            </div>
            <div className="icon-text">
              <span className="icon">
                <FaChevronRight />
              </span>
              <a href="/#about" onClick={(e) => handleHashLink(e, "about")}>
                About
              </a>
            </div>
            <div className="icon-text">
              <span className="icon">
                <FaChevronRight />
              </span>
              <a href="/#boc" onClick={(e) => handleHashLink(e, "boc")}>
                BOC
              </a>
            </div>
            <div className="icon-text">
              <span className="icon">
                <FaChevronRight />
              </span>
              <a
                href="/#programs"
                onClick={(e) => handleHashLink(e, "programs")}
              >
                Programs
              </a>
            </div>
            <div className="icon-text">
              <span className="icon">
                <FaChevronRight />
              </span>
              <a href="/#history" onClick={(e) => handleHashLink(e, "history")}>
                History
              </a>
            </div>
          </div>
          <div className="column is-5">
            <p className="title is-6 has-text-weight-bold">Panel</p>
            <div className="icon-text">
              <span className="icon">
                <FaChevronRight />
              </span>
              <Link to="/login">Login</Link>
            </div>
            <div className="icon-text">
              <span className="icon">
                <FaChevronRight />
              </span>
              <Link to="/register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
