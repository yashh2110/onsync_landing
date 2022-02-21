import React from "react";
import "../../scss/hero.scss";
import background from "../../Assets/images/Background.png";
import bg_sm from "../../Assets/images/bg-sm.png";
import Navbar from "../common/Navbar";
import HeroContext from "./HeroContext";
function Hero() {
  return (
    <div className="hero" id="home">
      <HeroContext />
      <img src={background} alt="onSync" className="heroBackground" />
      <img src={bg_sm} alt="onSync" className="heroBackground-sm" />
    </div>
  );
}

export default Hero;
