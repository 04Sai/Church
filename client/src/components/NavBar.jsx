import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

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
          <a href="#contact" className="navbar-item ml-2">
            Contact
          </a>
          {/* Mobile-only login/register buttons */}
          <div className="is-hidden-tablet">
            <p className="subtitle menu-label ml-3">Account</p>
            <Link to="/Login" className="navbar-item ml-2">
              <FaSignInAlt fontSize="1em" className="mr-2" />
              Login
            </Link>
            <Link to="/Register" className="navbar-item ml-2">
              <FaUserPlus fontSize="1em" className="mr-2" />
              Register
            </Link>
          </div>
        </div>

        <div className="navbar-end mx-1">
          {/* Desktop-only login/register buttons */}
          <div className="navbar-item is-hidden-mobile">
            <div className="buttons">
              <Link to="/Login" className="button is-info">
                Login
              </Link>
              <Link to="/Register" className="button is-link">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
