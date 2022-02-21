import React from "react";
import universities from "../../Assets/images/universities.png";
import "../../scss/universities.scss";
function Universities() {
  return (
    <div className="universityDiv" id="university">
      <div className="universities">
        <div className="universitiesContext">
          <p className="universitiesHeading">
            Find Students from 100+Universities
          </p>
          <p className="universitiesText">
            Subscribe to our application and get deals from top notch companies
            in the world every month. Be an exclusive member of the team.
          </p>
        </div>
        <div className="universitiesImage">
          <img src={universities} alt="onSync" />
        </div>
      </div>
    </div>
  );
}

export default Universities;
