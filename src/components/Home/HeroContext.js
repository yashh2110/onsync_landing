import React from "react";
import img1 from "../../Assets/images/phone1.png";
import img2 from "../../Assets/images/phone2.png";
function HeroContext() {
  const handleClick = () => {
    window.open("https://forms.gle/5kPVkp29WQji4iUV9");
  };

  return (
    <div className="hero-context-div">
      <div className="hero-context">
        <div className="hero-context-content">
          <p className="hero-context-title">
            The Ultimate <br />
            Event-Based <br /> Social Media App.
          </p>
          <p className="hero-context-subtitle">Register Now for beta access.</p>
          {/*<form className="joinform">
            {/*<input
              type="text"
              className="joinInput"
              placeholder="Your work email address"
            
            <button className="joinBtn">Join the waitlist</button>
          </form>*/}

          <button className="registerBtn" onClick={handleClick}>
            Register Now
          </button>
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
