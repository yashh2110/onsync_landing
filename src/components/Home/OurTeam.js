import React from "react";
import "../../scss/ourteam.scss";
import yash from "../../Assets/images/yash.png";
import sidhu from "../../Assets/images/sidhu.png";
import narvik from "../../Assets/images/narvik.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
function OurTeam() {
  const instagramClickHandlerYashwanth = () => {
    window.open("https://www.instagram.com/yashh_2110/");
  };
  const instagramClickHandlerSiddhu = () => {
    window.open("https://www.instagram.com/siddhardha_varma_siddhu/");
  };
  const instagramClickHandlerNarvik = () => {
    window.open("https://www.instagram.com/narvik_9/");
  };
  const instagramClickHandlerNeeraja = () => {
    window.open("https://www.instagram.com/neeraja_devireddy/");
  };

  const twitterClickHandlerYashwanth = () => {
    window.open("https://twitter.com/YashuMuddana");
  };
  const twitterClickHandlerSiddhu = () => {
    window.open("https://twitter.com/SiddhardhaVar12");
  };
  const twitterClickHandlerNarvik = () => {
    window.open("https://twitter.com/narvik_9");
  };
  const twitterClickHandlerNeeraja = () => {
    window.open("https://twitter.com/neeraja_devireddy");
  };

  const linkdinClickHandlerYashwanth = () => {
    window.open("https://www.linkedin.com/in/yashwanth2110/");
  };
  const linkdinClickHandlerSiddhu = () => {
    window.open("https://www.linkedin.com/in/siddhardha-varma-mudunuri/");
  };
  const linkdinClickHandlerNarvik = () => {
    window.open("https://www.linkedin.com/in/narvik-nandan-719003191/");
  };
  const linkdinClickHandlerNeeraja = () => {
    window.open("https://www.linkedin.com/in/neeraja-devireddy-b1876619b/");
  };

  return (
    <div className="ourTeamDiv" id="ourteam">
      <div className="ourTeam">
        <p className="ourTeamHeading">Our team</p>
        <p className="ourTeamText">
          We have been working Towards connecting students from all around the
          world to place of learing and building connections with people with
          similar interests and hobbies. We are open to any kind of feedback and
          suggestions
        </p>
        <div className="ourTeamCards">
          <div className="ourTeamCard">
            <img src={yash} alt="yashwanth muddana" className="ourTeamImg" />
            <p className="teammateName">Yashwanth</p>
            <p className="teammateRole">Full Stack Developer</p>

            <div className="contactIcons">
              <InstagramIcon
                className="socialIcons"
                onClick={instagramClickHandlerYashwanth}
              />
              <TwitterIcon
                className="socialIcons"
                onClick={twitterClickHandlerYashwanth}
              />
              <LinkedInIcon
                className="socialIcons"
                onClick={linkdinClickHandlerYashwanth}
              />
            </div>
          </div>
          <div className="ourTeamCard">
            <img src={sidhu} alt="Siddhardha" className="ourTeamImg" />
            <p className="teammateName">Siddhardha </p>
            <p className="teammateRole">UI/UX Designer</p>

            <div className="contactIcons">
              <InstagramIcon
                className="socialIcons"
                onClick={instagramClickHandlerSiddhu}
              />
              <TwitterIcon
                className="socialIcons"
                onClick={twitterClickHandlerSiddhu}
              />
              <LinkedInIcon
                className="socialIcons"
                onClick={linkdinClickHandlerSiddhu}
              />
            </div>
          </div>
          <div className="ourTeamCard">
            <img src={narvik} alt="narvik" className="ourTeamImg" />
            <p className="teammateName">Narvik</p>
            <p className="teammateRole">Full Stack Developer</p>

            <div className="contactIcons">
              <InstagramIcon
                className="socialIcons"
                onClick={instagramClickHandlerNarvik}
              />
              <TwitterIcon
                className="socialIcons"
                onClick={twitterClickHandlerNarvik}
              />
              <LinkedInIcon
                className="socialIcons"
                onClick={linkdinClickHandlerNarvik}
              />
            </div>
          </div>
          <div className="ourTeamCard">
            <img src={narvik} alt="narvik" className="ourTeamImg" />
            <p className="teammateName">Neeraja</p>
            <p className="teammateRole">Backend Developer</p>

            <div className="contactIcons">
              <InstagramIcon
                className="socialIcons"
                onClick={instagramClickHandlerNeeraja}
              />
              <TwitterIcon
                className="socialIcons"
                onClick={twitterClickHandlerNeeraja}
              />
              <LinkedInIcon
                className="socialIcons"
                onClick={linkdinClickHandlerNeeraja}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
