import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [pendingLink, setPendingLink] = useState("");

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setPendingLink(link);
    setIsModalActive(true);
  };

  const handleConfirm = () => {
    // Here you can add logout logic if needed
    window.location.href = pendingLink;
    setIsModalActive(false);
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
              <a onClick={(e) => handleLinkClick(e, "/")}>Home</a>
            </div>
            <div className="icon-text">
              <span className="icon">
                <FaChevronRight />
              </span>
              <a onClick={(e) => handleLinkClick(e, "/#about")}>About</a>
            </div>
            <div className="icon-text">
              <span className="icon">
                <FaChevronRight />
              </span>
              <a onClick={(e) => handleLinkClick(e, "/#boc")}>BOC</a>
            </div>
            <div className="icon-text">
              <span className="icon">
                <FaChevronRight />
              </span>
              <a onClick={(e) => handleLinkClick(e, "/#programs")}>Programs</a>
            </div>
            <div className="icon-text">
              <span className="icon">
                <FaChevronRight />
              </span>
              <a onClick={(e) => handleLinkClick(e, "/#history")}>History</a>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <div className={`modal ${isModalActive ? "is-active" : ""}`}>
        <div
          className="modal-background"
          onClick={() => setIsModalActive(false)}
        ></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">
              This will logout your account, are you sure?
            </p>
            <button
              className="delete"
              aria-label="close"
              onClick={() => setIsModalActive(false)}
            ></button>
          </header>
          <footer className="modal-card-foot">
            <button className="button is-danger mr-3" onClick={handleConfirm}>
              Yes
            </button>
            <button className="button" onClick={() => setIsModalActive(false)}>
              No
            </button>
          </footer>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
