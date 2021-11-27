import React from "react";
import img1 from "../../Assets/images/phone1.png";
import img2 from "../../Assets/images/phone2.png";
function HeroContext() {
  return (
    <div className="hero-context-div">
      <div className="hero-context">
        <div className="hero-context-content">
          <p className="hero-context-title">
            Be OnSync with Your Collage Mates.
          </p>
          <form className="joinform">
            <input
              type="text"
              className="joinInput"
              placeholder="Your work email address"
            />
            <button className="joinBtn">Join the waitlist</button>
          </form>
        </div>
        <div className="hero-context-images">
          <img src={img1} alt="phone1" className="hero-context-image1" />
          <img src={img2} alt="phone2" className="hero-context-image2" />
        </div>
      </div>
    </div>
  );
}

export default HeroContext;
