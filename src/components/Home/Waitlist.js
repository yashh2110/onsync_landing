import React from "react";
import email from "../../Assets/images/email.png";
import "../../scss/waitlist.scss";
function Waitlist() {
  return (
    <div className="waitlistDiv">
      <div className="waitlist">
        <img src={email} alt="onSync" className="waitlistImg" />
        <div className="waitlistContext">
          <p className="waitlistText">Join 569 more people in the waitlist</p>
          <div className="waitlistForm">
            <input
              type="email"
              className="waitlistInput"
              placeholder="Your work email address"
            />
            <button type="submit" className="waitlistBtn">
              Join the waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Waitlist;
