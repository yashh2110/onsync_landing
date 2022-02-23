import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import logo from "../../Assets/logos/logo.svg";
function Bootsplash() {
  const logoRef = useRef();
  const page = useRef();
  useEffect(() => {
    const tl = gsap.timeline({ ease: "power2" });
    tl.from(logoRef.current, {
      x: window.innerWidth * -1,
      duration: 3,
      ease: "elastic",
    });
    // tl.to(logoRef.current, {
    //   x: window.innerWidth,
    //   duration: 2,
    // });
    tl.to(page.current, {
      top: window.innerHeight * -1,
      duration: 1,
      opacity: 0,
    });
  }, []);
  return (
    <div
      ref={page}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        position: "fixed",
        zIndex: 1000,
        left: 0,
        top: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <img ref={logoRef} src={logo} alt="onSync" style={{ width: "180px" }} />
        {/* <p>fell on </p> */}
      </div>
      {/* asd */}
    </div>
  );
}

export default Bootsplash;
