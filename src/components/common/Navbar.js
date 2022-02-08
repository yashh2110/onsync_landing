import React, { useState } from "react";
import "../../scss/common/navbar.scss";
import logo from "../../Assets/logos/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { links } from "../../pages/data";

function Navbar() {
  const [navbarDiv, setnavbarDiv] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setnavbarDiv(true);
    } else {
      setnavbarDiv(false);
    }
    
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div className={navbarDiv ? "navbarDiv active" : "navbarDiv"}>
      <div className="navbar">
        <img src={logo} alt="onSync" className="logo" />
        <MenuIcon className="menuBtn" />
        <div className="navbar-menu">
          {links.map((link) => {
            return (
              <a href={link.url} key={link.id} className="navbar-link">
                {link.text}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
