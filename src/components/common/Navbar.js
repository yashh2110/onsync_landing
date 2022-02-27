import React, { useEffect, useState } from "react";
import "../../scss/common/navbar.scss";
import logo from "../../Assets/logos/logo.svg";
import logoonyellow from "../../Assets/logos/logoonyellow.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { links } from "../Data/navLinks";
import { HashLink } from "react-router-hash-link";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { firedb } from "../../firebase/firebase.config";
import { toast } from "react-toastify";

function Navbar() {
  const [email, setEmail] = useState("");
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

  // const handleClick = () => {
  //   window.open("https://forms.gle/5kPVkp29WQji4iUV9");
  // };
  const userCollection = collection(firedb, "users");
  const addData = async (e) => {
    e.preventDefault();
    if (email.length >= 1) {
      await addDoc(userCollection, { email }).then((res) => {
        setEmail("");
        console.log(res);
        toast.success("Yay! You are onSync ", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
        });
      });
    } else {
      toast.warning("Please enter a valid email", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };
  return (
    <div id="nav" className="navbarDiv ">
      <div className="navbar">
        <img src={logo} alt="onSync" className="logo" />
        <Button
          style={{ color: "#333", borderRadius: "7px" }}
          onClick={() =>
            document.getElementById("sm-nav").classList.toggle("active")
          }
        >
          <MenuIcon className="menuBtn" />
        </Button>
        <div className="navbar-menu">
          {links.map((link) => {
            return (
              <>
                <HashLink
                  smooth
                  to={link.url}
                  key={link.id}
                  className="navbar-link"
                >
                  {link.text}
                </HashLink>
              </>
              // <div></div>
            );
          })}
          <a
            href="https://forms.gle/5kPVkp29WQji4iUV9"
            target="_blank"
            className="navbar-link"
          >
            Apply for Internship{" "}
          </a>
        </div>
        <div className="navbar-menu-sm" id="sm-nav">
          <Button
            style={{
              position: "absolute",
              right: "0px",
              top: "10px",
              // margin: "5px",
            }}
            onClick={() =>
              document.getElementById("sm-nav").classList.toggle("active")
            }
          >
            <CloseIcon style={{ color: "white", fontSize: "30px" }} />
          </Button>
          <img
            src={logoonyellow}
            alt="onSync"
            className="navbar-menu-sm-logo"
          />
          <div className="navbar-menu-items-sm">
            {/* <li className="navbar-item-sm">Home</li>
            <li className="navbar-item-sm">Features</li>
            <li className="navbar-item-sm">Universities</li>
            <li className="navbar-item-sm">Our Team</li>
            <li className="navbar-item-sm">Join the waitlist</li>
            <li className="navbar-item-sm">Join Our Team</li> */}
            {links.map((link) => {
              return (
                <>
                  <HashLink
                    smooth
                    to={link.url}
                    key={link.id}
                    onClick={() =>
                      document
                        .getElementById("sm-nav")
                        .classList.toggle("active")
                    }
                    style={{ textDecoration: "none" }}
                  >
                    <li className="navbar-item-sm"> {link.text}</li>
                  </HashLink>
                </>
                // <div></div>
              );
            })}
            <a
              href="https://forms.gle/5kPVkp29WQji4iUV9"
              target="_blank"
              style={{ textDecoration: "none" }}
              className="navbar-link"
              onClick={() =>
                document.getElementById("sm-nav").classList.toggle("active")
              }
            >
              <button className="navbar-form-btn">Apply for Internship</button>
            </a>
          </div>
          {/* <form className="navbar-menu-sm-form">
            <input
              className="navbar-input"
              type="text"
              placeholder="Your email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="navbar-form-btn" onClick={addData}>
              Join the waitlist
            </button>
          </form> */}
          <div className="navbar-menu-sm-contact"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
