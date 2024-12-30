import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navigation = () => {
  return (
    <nav className="navbar is-info is-fixed-top is-spaced" role="navigation">
      <div className="navbar-brand mx-3">
        <Link to="/">
          <img src={logo} width="50" alt="Logo" />
        </Link>
      </div>

      <div className="navbar-menu" id="navMenu">
        <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable ml-2">
            <a className="navbar-link">Main Website</a>
            <div className="navbar-dropdown">
              <a href="/" className="navbar-item">
                Home
              </a>
              <a href="/" className="navbar-item">
                About
              </a>
              <a href="/" className="navbar-item">
                About BOC
              </a>
              <a href="/" className="navbar-item">
                Programs
              </a>
              <a href="/" className="navbar-item">
                History
              </a>
              <a
                href="/"
                className="navbar-item has-text-weight-bold has-text-danger-dark"
              >
                Watch Live
              </a>
              <a href="/" className="navbar-item">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;