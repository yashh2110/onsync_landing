import React from "react";
import "../../scss/common/navbar.scss";
import logo from "../../Assets/logos/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
function Navbar() {
  return (
    <div className="navbarDiv">
      <div className="navbar">
        <img src={logo} alt="onSync" className="logo" />
        <MenuIcon className="menuBtn" />
        <div className="navbar-menu">
          <li className="navbar-item">Home</li>
          <li className="navbar-item">Features</li>
          <li className="navbar-item">Universities</li>
          <li className="navbar-item">Our Team</li>
          <li className="navbar-item">Join the waitlist</li>
          <li className="navbar-item">Join Our Team</li>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
