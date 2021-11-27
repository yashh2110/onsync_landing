import React from "react";
import Features from "../components/Home/Features";
import Hero from "../components/Home/Hero";
import OurTeam from "../components/Home/OurTeam";
import Universities from "../components/Home/Universities";
import Waitlist from "../components/Home/Waitlist";
import Footer from "../components/common/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Universities />
      <OurTeam />
      <Waitlist />
      <Footer />
    </div>
  );
}

export default Home;
