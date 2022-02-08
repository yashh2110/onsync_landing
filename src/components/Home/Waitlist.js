import React from "react";
import email from "../../Assets/images/email.png";
import "../../scss/waitlist.scss";
function Waitlist() {
  const handleClick = () => {
    window.open("https://forms.gle/5kPVkp29WQji4iUV9");
  };
  return (
    <div className="waitlistDiv" id="waitlist">
      <div className="waitlist">
        <img src={email} alt="onSync" className="waitlistImg" />
        <div className="waitlistContext">
          <p className="waitlistText">Join 68 more people in the waitlist</p>

          <div className="waitlistForm">
            <button type="submit" className="waitlistBtn" onClick={handleClick}>
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Waitlist;
