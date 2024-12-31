import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar is-spaced is-fixed-top is-info">
      <div className="navbar-brand mx-3">
        <a href="#home">
          <img src={logo} width="50" alt="Logo" />
        </a>
        <a
          role="button"
          className={`navbar-burger ${isActive ? "is-active" : ""}`}
          onClick={toggleMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
        id="navMenu"
      >
        <div className="navbar-start">
          <a href="#home" className="navbar-item ml-2">
            Home
          </a>
          <a href="#about" className="navbar-item ml-2">
            About
          </a>
          <a href="#boc" className="navbar-item ml-2">
            About BOC
          </a>
          <a href="#programs" className="navbar-item ml-2">
            Programs
          </a>
          <a href="#history" className="navbar-item ml-2">
            History
          </a>
          <a
            href="#watch-live"
            className="navbar-item has-text-weight-bold has-text-danger ml-2"
          >
            Watch Live
          </a>
          <a href="#contact" className="navbar-item ml-2">
            Contact
          </a>
        </div>

        <div className="navbar-end mx-3">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Account</a>
            <div className="navbar-dropdown is-right">
              <Link to="/Login" className="navbar-item">
                Login
              </Link>
              <Link to="/Register" className="navbar-item">
                Register
              </Link>
              <Link to="/dashboard" className="navbar-item">
                My Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
