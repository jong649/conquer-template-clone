import React from "react";
import NavbarLink from "../NavbarLink/NavbarLink";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <ul>
          <NavbarLink title="Home" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
