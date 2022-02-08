import React from "react";
import "../../scss/hero.scss";
import background from "../../Assets/images/Background.png";
import bg_sm from "../../Assets/images/bg-sm.png";
import HeroContext from "./HeroContext";
import Navbar from "../common/Navbar";
//import Navbar from "../common/Navbar";
//import Navbar from "../common/Navbar";
//import Features from "./Features";
//import Universities from "./Universities";
//import OurTeam from "./OurTeam";
//import Waitlist from "./Waitlist";
//import Footer from "../common/Footer";

function Hero() {
  return (
    <div>
      <div className="hero" id="home">
        <Navbar />
        <HeroContext />
        <img src={background} alt="onSync" className="heroBackground" />
        <img src={bg_sm} alt="onSync" className="heroBackground-sm" />
      </div>
    </div>
  );
}

export default Hero;
