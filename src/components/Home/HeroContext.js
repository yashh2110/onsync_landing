import React, { useState } from "react";
import img1 from "../../Assets/images/phone1.png";
import img2 from "../../Assets/images/phone2.png";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { firedb } from "../../firebase/firebase.config";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
function HeroContext() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  // const handleClick = () => {
  //   window.open("https://forms.gle/5kPVkp29WQji4iUV9");
  // };
  const userCollection = collection(firedb, "users");
  const addData = async (e) => {
    e.preventDefault();
    setEmailError(false);
    if (email.length >= 1) {
      await addDoc(userCollection, { email }).then((res) => {
        setEmail("");
        console.log(res);
        toast.success("Yay! You are onSync ", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
        });
      });
    } else {
      setEmailError(true);
    }
  };
  return (
    <div className="hero-context-div">
      <div className="hero-context">
        <div className="hero-context-content">
          <p className="hero-context-title">
            The Ultimate <br />
            Event-Based <br /> Social Media App.
          </p>
          <form className="joinform" onSubmit={addData}>
            <input
              type="text"
              className="joinInput"
              value={email}
              placeholder="Your email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button className="joinBtn" type="submit">
              To waitlist
            </Button>
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
