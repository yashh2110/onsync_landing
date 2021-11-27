import React from "react";
import "../../scss/ourteam.scss";
import yash from "../../Assets/images/yash.png";
import sidhu from "../../Assets/images/sidhu.png";
import narvik from "../../Assets/images/narvik.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
function OurTeam() {
  return (
    <div className="ourTeamDiv">
      <div className="ourTeam">
        <p className="ourTeamHeading">Our team</p>
        <p className="ourTeamText">
          We have been working Towards connecting students from all around the
          world to place of learing and building connections with people with
          similar interests and hobbies
        </p>
        <div className="ourTeamCards">
          <div className="ourTeamCard">
            <img src={yash} alt="yashwanth muddana" className="ourTeamImg" />
            <p className="teammateName">Yashwanth</p>
            <p className="teammateRole">Fullstack Developer</p>
            <p className="teammateDesc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae.
            </p>
            <div className="contactIcons">
              <FacebookRoundedIcon className="socialIcons" />
              <InstagramIcon className="socialIcons" />
              <TwitterIcon className="socialIcons" />
              <LinkedInIcon className="socialIcons" />
            </div>
          </div>
          <div className="ourTeamCard">
            <img src={sidhu} alt="Siddhardha" className="ourTeamImg" />
            <p className="teammateName">Siddhardha </p>
            <p className="teammateRole">UI/UX Designer</p>
            <p className="teammateDesc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae.
            </p>
            <div className="contactIcons">
              <FacebookRoundedIcon className="socialIcons" />
              <InstagramIcon className="socialIcons" />
              <TwitterIcon className="socialIcons" />
              <LinkedInIcon className="socialIcons" />
            </div>
          </div>
          <div className="ourTeamCard">
            <img src={narvik} alt="narvik" className="ourTeamImg" />
            <p className="teammateName">Narvik</p>
            <p className="teammateRole">Fullstack Developer</p>
            <p className="teammateDesc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae.
            </p>
            <div className="contactIcons">
              <FacebookRoundedIcon className="socialIcons" />
              <InstagramIcon className="socialIcons" />
              <TwitterIcon className="socialIcons" />
              <LinkedInIcon className="socialIcons" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
