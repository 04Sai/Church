import profile from "../../assets/images/profile.png";
import { useLocation } from "react-router-dom";

const SidePanel = () => {
  const location = useLocation();
  const name = "Lance Listana";
  const id = "136000123";

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

  return (
    <div className="container mt-5">
      <aside className="menu has-text-centered">
        {/* Profile Section */}
        <figure className="image is-128x128 is-inline-block">
          <img className="is-rounded" src={profile} alt="Profile" />
        </figure>
        <p className="title has-text-centered pt-3 is-5">{name}</p>
        <p className="subtitle has-text-centered is-6">{id}</p>

        {/* General Section */}
        <p className="menu-label">General</p>
        <ul className="menu-list">
          {menuItems.General.map((item, index) => (
            <li key={index}>
              <a
                className={`has-text-centered ${isActive(item) ? "is-active" : ""}`}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Transaction Section */}
        <p className="menu-label">Transaction</p>
        <ul className="menu-list">
          {menuItems.Transaction.map((item, index) => (
            <li key={index}>
              <a
                className={`has-text-centered ${isActive(item) ? "is-active" : ""}`}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Portal Section */}
        <p className="menu-label">Portal</p>
        <ul className="menu-list">
          {menuItems.Portal.map((item, index) => (
            <li key={index}>
              <a
                className={`has-text-centered ${isActive(item) ? "is-active" : ""}`}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default SidePanel;
