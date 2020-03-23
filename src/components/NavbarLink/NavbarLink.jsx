import React, { Fragment } from "react";
import "./NavbarLink.css";

class NavbarLink extends React.Component {
  constructor() {
    super();
    this.state = {
      links: ["Homepage", "About us", "Services", "Contact", "External"]
    };
  }

  //Remove active class from all links, then adds to selected link
  handleClick(e) {
    const allLinks = document.querySelectorAll("a");
    allLinks.forEach(link => {
      link.classList.remove("active");
    });
    e.target.classList.toggle("active");
  }
  render() {
    return (
      <Fragment>
        {this.state.links.map((item, index) => {
          return (
            <li
              className="navbar-list-item"
              onClick={this.handleClick}
              key={index}
            >
              <a href={`#${item}`}>{item}</a>
            </li>
          );
        })}
      </Fragment>
    );
  }
}

export default NavbarLink;
