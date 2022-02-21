import React, { useEffect } from "react";
import "../../scss/common/navbar.scss";
import logo from "../../Assets/logos/logo.svg";
import logoonyellow from "../../Assets/logos/logoonyellow.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { links } from "../Data/navLinks";
import { HashLink } from "react-router-hash-link";
function Navbar() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.pageYOffset);
      if (window.pageYOffset > 100) {
        document.querySelector("#nav").className = "navbarDiv navbarDivActive";
      } else {
        document.querySelector("#nav").className = "navbarDiv  ";
      }
    });
  }, []);
  return (
    <div id="nav" className="navbarDiv ">
      <div className="navbar">
        <img src={logo} alt="onSync" className="logo" />
        <MenuIcon className="menuBtn" />
        <div className="navbar-menu">
          {links.map((link) => {
            return (
              <HashLink
                smooth
                to={link.url}
                key={link.id}
                className="navbar-link"
              >
                {link.text}
              </HashLink>
              // <div></div>
            );
          })}
        </div>
        <div className="navbar-menu-sm">
          <img
            src={logoonyellow}
            alt="onSync"
            className="navbar-menu-sm-logo"
          />
          <div className="navbar-menu-items-sm">
            <li className="navbar-item-sm">Home</li>
            <li className="navbar-item-sm">Features</li>
            <li className="navbar-item-sm">Universities</li>
            <li className="navbar-item-sm">Our Team</li>
            <li className="navbar-item-sm">Join the waitlist</li>
            <li className="navbar-item-sm">Join Our Team</li>
          </div>
          <div className="navbar-menu-sm-form">
            <input
              className="navbar-input"
              type="text"
              placeholder="Your email address"
            />
            <button className="navbar-form-btn">Join the waitlist</button>
          </div>
          <div className="navbar-menu-sm-contact"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
