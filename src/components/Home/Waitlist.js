import { addDoc, collection, getDocs } from "firebase/firestore";
import { firedb } from "../../firebase/firebase.config";
import React, { useState } from "react";
import imgEmail from "../../Assets/images/email.png";
import "../../scss/waitlist.scss";
import { toast } from "react-toastify";
function Waitlist() {
  const [email, setEmail] = useState("");
  // const handleClick = () => {
  //   window.open("https://forms.gle/5kPVkp29WQji4iUV9");
  // };
  const userCollection = collection(firedb, "users");
  const addData = async (e) => {
    e.preventDefault();
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
      toast.warning("Please enter a valid email", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };
  return (
    <div className="waitlistDiv" id="waitlist">
      <div className="waitlist">
        <img src={imgEmail} alt="onSync" className="waitlistImg" />
        <div className="waitlistContext">
          <p className="waitlistText">Join 569 more people in the waitlist</p>
          <form className="waitlistForm" onSubmit={addData}>
            <input
              type="email"
              className="waitlistInput"
              // placeholder="Your work email address"
              value={email}
              placeholder="Your email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="waitlistBtn">
              Join the waitlist
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Waitlist;