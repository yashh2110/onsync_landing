import React from "react";
import universities from "../../Assets/images/universities.png";
import "../../scss/universities.scss";
function Universities() {
  return (
    <div className="universityDiv" id="university">
      <div className="universities">
        <div className="universitiesContext">
          <p className="universitiesHeading">
            Find Students from all over the India.
          </p>
          <p className="universitiesText">
            Register Now to be the first few people to get exclusive access to
            our app to win rewards, participate in various events and join
            communities based upon your interests.
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
