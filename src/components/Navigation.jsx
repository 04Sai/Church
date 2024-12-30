import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navigation = () => {
  return (
    <nav class="navbar is-info is-fixed-top is-spaced" role="navigation">
      <div class="navbar-brand mx-3">
        <a href="#home">
          <img src={logo} width="50" alt="Logo" />
        </a>
      </div>

      <div class="navbar-menu" id="navMenu">
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable ml-2">
            <a class="navbar-link">Main Website</a>
            <div class="navbar-dropdown">
              <Link to="index.html" class="navbar-item">
                Home
              </Link>
              <Link to="index.html#about" class="navbar-item">
                About
              </Link>
              <Link to="index.html#boc" class="navbar-item">
                About BOC
              </Link>
              <Link to="index.html#programs" class="navbar-item">
                Programs
              </Link>
              <Link to="index.html#history" class="navbar-item">
                History
              </Link>
              <Link
                href="index.html#watch-live"
                class="navbar-item has-text-weight-bold has-text-danger-dark"
              >
                Watch Live
              </Link>
              <Link to="index.html#contact" class="navbar-item">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
