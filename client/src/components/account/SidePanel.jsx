import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import profile from "../../assets/images/profile.png";


const SidePanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const name = user.firstname && user.lastname 
    ? `${user.firstname} ${user.lastname}` 
    : "Guest User";
  const id = user.id || "N/A";

  // Menu items categorized
  const menuItems = {
    General: ["Dashboard", "Profile", "Grades", "Subjects"],
    Transaction: ["Balance"],
    Portal: ["Account", "Registration"],
  };

  const isActive = (item) => {
    const path = `/${item.toLowerCase().replace(/\s+/g, "-")}`;
    return location.pathname === path;
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
      {/* Mobile Burger Button - Moved to right */}
      <div
        className="is-hidden-tablet"
        style={{ position: "fixed", top: "1rem", right: "1rem", zIndex: 31 }}
      >
        <button
          className={`button ${isOpen ? "is-primary" : "is-light"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="icon">
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </span>
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="is-hidden-tablet"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 29,
          }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Side Panel - Modified for right side */}
      <div
        className={`menu-container ${isOpen ? "is-active" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          right: 0, // Changed from left: 0
          bottom: 0,
          width: "250px",
          background: "white",
          transform: isOpen ? "translateX(0)" : "translateX(100%)", // Changed from -100%
          transition: "transform 0.3s ease-in-out",
          zIndex: 30,
          overflowY: "auto",
          boxShadow: "-2px 0 5px rgba(0,0,0,0.1)", // Changed shadow direction
          display: "flex",
          flexDirection: "column", // Added for logout positioning
        }}
      >
        <aside className="menu has-text-centered p-4" style={{ flex: 1 }}>
          <figure className="image is-128x128 is-inline-block">
            <img className="is-rounded" src={profile} alt="Profile" />
          </figure>
          <p className="title has-text-centered pt-3 is-5">{name}</p>
          <p className="subtitle has-text-centered is-6">{id}</p>

          <p className="menu-label">General</p>
          <hr className="my-2" />
          <ul className="menu-list">
            {menuItems.General.map((item, index) => (
              <li key={index}>
                <a
                  className={`has-text-centered ${
                    isActive(item) ? "is-active" : ""
                  }`}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <p className="menu-label">Transaction</p>
          <hr className="my-2" />
          <ul className="menu-list">
            {menuItems.Transaction.map((item, index) => (
              <li key={index}>
                <a
                  className={`has-text-centered ${
                    isActive(item) ? "is-active" : ""
                  }`}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <p className="menu-label">Portal</p>
          <hr className="my-2" />
          <ul className="menu-list">
            {menuItems.Portal.map((item, index) => (
              <li key={index}>
                <a
                  className={`has-text-centered ${
                    isActive(item) ? "is-active" : ""
                  }`}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Mobile Logout Button */}
        <div
          className="is-hidden-tablet p-4 has-background-white-bis"
          style={{ borderTop: "1px solid #eee" }}
        >
          <button
            className="button is-danger is-light is-fullwidth"
            onClick={handleLogout}
          >
            <span className="icon">
              <MdOutlineLogout />
            </span>
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="container mt-5 is-hidden-mobile">
        <aside className="menu has-text-centered">
          <figure className="image is-128x128 is-inline-block">
            <img className="is-rounded" src={profile} alt="Profile" />
          </figure>
          <p className="title has-text-centered pt-3 is-5">{name}</p>
          <p className="subtitle has-text-centered is-6">{id}</p>

          <p className="menu-label">General</p>
          <ul className="menu-list">
            {menuItems.General.map((item, index) => (
              <li key={index}>
                <a
                  className={`has-text-centered ${
                    isActive(item) ? "is-active" : ""
                  }`}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <p className="menu-label">Transaction</p>
          <ul className="menu-list">
            {menuItems.Transaction.map((item, index) => (
              <li key={index}>
                <a
                  className={`has-text-centered ${
                    isActive(item) ? "is-active" : ""
                  }`}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <p className="menu-label">Portal</p>
          <ul className="menu-list">
            {menuItems.Portal.map((item, index) => (
              <li key={index}>
                <a
                  className={`has-text-centered ${
                    isActive(item) ? "is-active" : ""
                  }`}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* Logout Modal */}
      <div className={`modal ${isModalOpen ? "is-active" : ""}`}>
        <div
          className="modal-background"
          onClick={() => setIsModalOpen(false)}
        />
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
        />
      </div>
    </>
  );
};

export default SidePanel;
