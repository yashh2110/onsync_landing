import React from "react";
import "../../scss/common/footer.scss";
import logo from "../../Assets/logos/logoonblack.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { links } from "../../pages/data";

function Footer() {
  const InstagramClickHandler = () => {
    window.open("https://www.instagram.com/onsync.in/");
  };
  const TwitterClickHandler = () => {
    window.open("https://twitter.com/onSync_");
  };
  const LinkdinClickHandler = () => {
    window.open("https://www.linkedin.com/company/onsync");
  };
  const YoutubeClickHandler = () => {
    window.open("https://www.youtube.com/channel/UCdgJpHWb8Ekjf5h67ilC8xw");
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
          {links.map((link) => {
            return (
              <a
                style={{
                  textDecoration: "none",
                  color: "white",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 7,
                }}
                href={link.url}
                key={link.id}
              >
                {link.text}
              </a>
            );
          })}
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
