import React, { useState, useRef, useEffect } from "react";
import img1 from "../../Assets/images/phone1.png";
import img2 from "../../Assets/images/phone2.png";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { firedb } from "../../firebase/firebase.config";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import { gsap } from "gsap";
function HeroContext() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const phone1 = useRef();
  const phone2 = useRef();
  // const handleClick = () => {
  //   window.open("https://forms.gle/5kPVkp29WQji4iUV9");
  // };
  useEffect(() => {
    gsap.to(phone1.current, {
      duration: 2.2,
      ease: "sine.inOut",
      y: -25,
      repeat: -1,
      yoyo: true,
    });
    gsap.to(phone2.current, {
      duration: 2.2,
      ease: "sine.inOut",
      y: 25,
      repeat: -1,
      delay: 0.4,
      yoyo: true,
    });
  }, []);
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
              Join Us
            </Button>
          </form>
        </div>
        <div className="hero-context-images">
          <img
            ref={phone1}
            src={
              "https://firebasestorage.googleapis.com/v0/b/onsync-b9627.appspot.com/o/phone1%20(1).png?alt=media&token=7e3c8680-92b4-4553-934d-165714c1ece4"
            }
            alt="phone1"
            className="hero-context-image1"
          />
          <img
            ref={phone2}
            src={
              "https://firebasestorage.googleapis.com/v0/b/onsync-b9627.appspot.com/o/phone2%20(1).png?alt=media&token=29b62c4d-c5cf-44bb-8110-dd8299d1a4b3"
            }
            alt="phone2"
            className="hero-context-image2"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroContext;
