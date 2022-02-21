import React from "react";
import circle from "../../Assets/images/Circle.png";
import "../../scss/feature.scss";
import f1 from "../../Assets/images/f1.svg";
import f2 from "../../Assets/images/f2.svg";
import f3 from "../../Assets/images/f3.svg";
import f4 from "../../Assets/images/f4.svg";
import f5 from "../../Assets/images/f5.svg";
import f6 from "../../Assets/images/f6.svg";
import f7 from "../../Assets/images/f7.svg";
import f8 from "../../Assets/images/f8.svg";

function Features() {
  return (
    <div className="featuresDiv" id="features">
      <div className="features">
        <p className="featureTitle">App features</p>
        <div className="featureCards">
          <div className="featureCard">
            <p className="featureCardTitle">Student Community</p>
            <img src={f1} alt="o" className="cardIcon" />
          </div>
          <div className="featureCard">
            <p className="featureCardTitle">
              Find People with similar Intrests
            </p>
            <img src={f2} alt="o" className="cardIcon" />
          </div>
          <div className="featureCard">
            <p className="featureCardTitle">Find Your university</p>
            <img src={f3} alt="o" className="cardIcon" />
          </div>
          <div className="featureCard">
            <p className="featureCardTitle">Join Various Communities</p>
            <img src={f4} alt="o" className="cardIcon" />
          </div>
          <div className="featureCard">
            <p className="featureCardTitle">Participate in Events</p>
            <img src={f5} alt="o" className="cardIcon" />
          </div>
          <div className="featureCard">
            <p className="featureCardTitle">Chat with People</p>
            <img src={f6} alt="o" className="cardIcon" />
          </div>
          <div className="featureCard">
            <p className="featureCardTitle">Join Debates</p>
            <img src={f7} alt="o" className="cardIcon" />
          </div>
          <div className="featureCard">
            <p className="featureCardTitle">Learn new Things</p>
            <img src={f8} alt="o" className="cardIcon" />
          </div>
        </div>
        <img className="featureCircle" src={circle} alt="onsync" />
      </div>
    </div>
  );
}

export default Features;
