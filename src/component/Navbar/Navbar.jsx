import { Link, NavLink } from "react-router-dom";
import { ImBooks } from "react-icons/im";

import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav">
        <ImBooks size={35} />
        <div className="nav_links">
          <Link to="/home" className="nav_items">
            Home
          </Link>
          <Link to="/Store" className="nav_items">
            Store
          </Link>
          <NavLink to="home" className="nav_items">
            Signout
          </NavLink>
        </div>
      </div>
    </div>
  );
}
