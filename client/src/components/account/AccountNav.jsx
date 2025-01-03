import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { MdOutlineLogout } from "react-icons/md";
import { useState } from "react";

const AccountNav = () => {
  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleBurger = () => {
    setIsActive(!isActive);
  };

  const handleLogout = () => {
    setIsModalOpen(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem("user");
    setIsModalOpen(false);
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar is-info is-fixed-top is-spaced" role="navigation">
        <div className="navbar-brand mx-3">
          <Link to="/">
            <img src={logo} width="50" alt="Logo" />
          </Link>

          <a
            role="button"
            className={`navbar-burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={toggleBurger}
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
            {/* Add Logout button for mobile view */}
            <div className="navbar-item is-hidden-tablet">
              <div
                className="icon-text has-text-danger"
                onClick={handleLogout}
                style={{ cursor: "pointer" }}
              >
                <span className="icon">
                  <MdOutlineLogout />
                </span>
                <p className="has-text-weight-bold">Logout</p>
              </div>
            </div>
          </div>

          {/* Keep Logout button for desktop view */}
          <div className="navbar-end is-hidden-mobile">
            <a
              className="navbar-item p-4"
              onClick={handleLogout}
              style={{ cursor: "pointer" }}
            >
              <div className="icon-text has-text-danger">
                <span className="icon">
                  <MdOutlineLogout />
                </span>
                <p className="has-text-weight-bold">Logout</p>
              </div>
            </a>
          </div>
        </div>
      </nav>

      {/* Logout Confirmation Modal */}
      <div className={`modal ${isModalOpen ? "is-active" : ""}`}>
        <div
          className="modal-background"
          onClick={() => setIsModalOpen(false)}
        ></div>
        <div className="modal-content">
          <div className="box">
            <p className="has-text-centered has-text-weight-bold is-size-5 mb-4">
              Are you sure you want to logout?
            </p>
            <div className="buttons is-centered">
              <button className="button is-danger" onClick={confirmLogout}>
                Yes
              </button>
              <button className="button" onClick={() => setIsModalOpen(false)}>
                No
              </button>
            </div>
          </div>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => setIsModalOpen(false)}
        ></button>
      </div>
    </>
  );
};

export default AccountNav;
