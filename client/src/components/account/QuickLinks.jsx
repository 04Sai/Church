import logo from "../../assets/images/logo.png";
import bcbiboc from "../../assets/images/bcbiboc.png";
import bocmem from "../../assets/images/bocmem.png";

const QuickLinks = () => {
  return (
    <div className="tile is-parent">
      <div className="tile-is-child card">
        <header className="card-header">
          <p className="card-header-title">Quick Links</p>
        </header>
        <div className="card-content has-text-centered content">
          <figure className="image is-128x128 is-inline-block">
            <a href="/" className="has-text-danger">
              <img src={logo} alt="" />
              Main Website
            </a>
          </figure>
          <figure className="image is-128x128 is-inline-block">
            <a href="https://fb.me/BOCPhilippines">
              <img src={bcbiboc} alt="" />
              BCBI Page
            </a>
          </figure>
          <figure className="image is-128x128 is-inline-block">
            <a href="https://fb.me/bocmemories">
              <img src={bocmem} alt="" />
              BOC Memories
            </a>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
