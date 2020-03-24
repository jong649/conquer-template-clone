import React from "react";
import NavbarLink from "../NavbarLink/NavbarLink";
import "./Navbar.css";

const Navbar = () => {
  const handleClick = () => {
    const navbarContainer = document.querySelector(".navbar-container");
    navbarContainer.classList.toggle("small");
  };
  return (
    <nav>
      <div className="navbar-container">
        <ul className="nav-ul">
          <NavbarLink title="Home" />
        </ul>
      </div>
      <div className="menu-container">
        <button className="menu" onClick={handleClick}></button>
      </div>
    </nav>
  );
};

export default Navbar;
