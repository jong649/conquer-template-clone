import React, { Fragment } from "react";
import "./NavbarLink.css";

const NavbarLink = props => {
  return (
    <Fragment>
      <li className="navbar-list-item">
        <a href="#home">{props.title}</a>
      </li>
    </Fragment>
  );
};

export default NavbarLink;
