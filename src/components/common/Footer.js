import React from "react";
import "../../scss/common/footer.scss";
import logo from "../../Assets/logos/logoonblack.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
function Footer() {
  return (
    <div className="footerDiv">
      <div className="footer">
        <div className="companyDetails">
          <img src={logo} alt="onSync" className="logo" />
          <div className="copyrightsDiv">
            <p className="copyrights">Copyright © 2021 OnSync.</p>
            <p className="copyrights">All rights reserved</p>
            <div className="contactus">
              <InstagramIcon className="footIcon" />
              <TwitterIcon className="footIcon" />
              <YouTubeIcon className="footIcon" />
              <LinkedInIcon className="footIcon" />
            </div>
          </div>
        </div>
        <div className="onSync">
          <p className="feildHeading">OnSync</p>
          <p className="feildItem">Home</p>
          <p className="feildItem">Features</p>
          <p className="feildItem">Our Team</p>
          <p className="feildItem">Join the Waitlist</p>
          <p className="feildItem">Apply for Internships</p>
        </div>
        <div className="stayuptodate">
          <p className="stayuptodateHeading">Stay up to date</p>
          <div className="contactForm">
            <input
              type="email"
              className="stayuptodateInput"
              placeholder="Your email address"
            />
            <SendRoundedIcon className="sendBtn" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
