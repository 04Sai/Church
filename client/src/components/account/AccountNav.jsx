import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { MdOutlineLogout } from "react-icons/md";
import { useState } from "react";
import SidePanel from "./SidePanel";

const AccountNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

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
        <div className="navbar-brand mx-3 mb-2">
            <img src={logo} width="50" alt="Logo" />
        </div>

        <div className="navbar-end">
          {/* Mobile Menu Button */}
          <div className="is-hidden-tablet">
            <SidePanel />
          </div>

          {/* Desktop Logout button */}
          <div className="is-hidden-mobile">
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
