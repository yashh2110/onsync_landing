import React, { useState } from "react";
import "../../scss/common/footer.scss";
import logo from "../../Assets/logos/logoonblack.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { links } from "../Data/navLinks";
import { HashLink } from "react-router-hash-link";
import { toast } from "react-toastify";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { firedb } from "../../firebase/firebase.config";
function Footer() {
  const [email, setEmail] = useState("");
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
    <div className="footerDiv">
      <div className="footer">
        <div className="companyDetails">
          <img src={logo} alt="onSync" className="logo" />
          <div className="copyrightsDiv">
            <p className="copyrights">Copyright © 2021 OnSync.</p>
            <p className="copyrights">All rights reserved</p>
            <div className="contactus">
              <InstagramIcon
                className="footIcon"
                onClick={InstagramClickHandler}
              />
              <TwitterIcon className="footIcon" onClick={TwitterClickHandler} />
              <YouTubeIcon className="footIcon" onClick={YoutubeClickHandler} />
              <LinkedInIcon
                className="footIcon"
                onClick={LinkdinClickHandler}
              />
            </div>
          </div>
        </div>
        <div className="onSync">
          <p className="feildHeading">OnSync</p>
          {/* Home</p> */}
          {/* <p className="feildItem">Features</p>
          <p className="feildItem">Our Team</p>
          <p className="feildItem">Join the Waitlist</p>
          <p className="feildItem">Apply for Internships</p> */}
          {links.map((link) => {
            return (
              <HashLink
                smooth
                to={link.url}
                key={link.id}
                style={{ textDecoration: "none" }}
              >
                <p className="feildItem">{link.text}</p>
              </HashLink>
              // <div></div>
            );
          })}
        </div>
        <div className="stayuptodate">
          <p className="stayuptodateHeading">Stay up to date</p>
          <form className="contactForm">
            <input
              type="email"
              className="stayuptodateInput"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <SendRoundedIcon className="sendBtn" onClick={addData} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
