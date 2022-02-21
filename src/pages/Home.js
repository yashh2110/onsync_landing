import React from "react";
import Features from "../components/Home/Features";
import Hero from "../components/Home/Hero";
import OurTeam from "../components/Home/OurTeam";
import Universities from "../components/Home/Universities";
import Waitlist from "../components/Home/Waitlist";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

function Home() {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      {/* <div className="safeNav"> */}
      <Hero />
      <Features />
      <Universities />
      <OurTeam />
      <Waitlist />
      <Footer />
      {/* </div> */}
    </div>
  );
}

export default Home;
