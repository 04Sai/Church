import { FaChevronRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="columns">
          <div className="column is-3">
            <p className="title is-3 has-text-weight-bold">BCBI</p>
            <p className="subtitle is-6">Brothers of Christ of Banneux, Inc.</p>
            <p className="subtitle is-6">© Copyright BCBI. All Rights Reserved</p>
          </div>
          <div className="column is-4">
            <p className="is-6 has-text-weight-bold">Useful Links</p>
            <div className="icon-text">
              <span className="icon">
                <FaChevronRight />
              </span>
              <a href="#home">Home</a>
            </div>
            <div className="icon-text">
              <span className="icon">
                <FaChevronRight />
              </span>
              <a href="#about">About</a>
            </div>
            <div className="icon-text">
              <span className="icon">
                <FaChevronRight />
              </span>
              <a href="#boc">BOC</a>
            </div>
            <div className="icon-text">
              <span className="icon">
                <FaChevronRight />
              </span>
              <a href="#programs">Program</a>
            </div>
            <div className="icon-text">
              <span className="icon">
                <FaChevronRight />
              </span>
              <a href="#history">History</a>
            </div>
          </div>
          <div className="column is-5">
            <p className="title is-6 has-text-weight-bold">Panel</p>
            <div className="icon-text">
              <span className="icon">
                <i className="fas fa-chevron-right"></i>
              </span>
              <a href="">Login</a>
            </div>
            <div className="icon-text">
              <span className="icon">
                <i className="fas fa-chevron-right"></i>
              </span>
              <a href="">Register</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
