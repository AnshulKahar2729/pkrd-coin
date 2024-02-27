import React from "react";
import "../../App.css";
import HeroSection from "components/landing/sections/HeroSection";
import PKRDFor from "components/landing/sections/PKRDFor";
import LatestNews from "components/landing/sections/LatestNews";
import Subscribe from "./Subscribe";
import PKRDBackground from "./sections/PKRDBackground";
// import AcceptanceCountries from "./sections/AcceptanceCountries";
import PKRDStatement from "./sections/PKRDStatement";
import FAQ from "./sections/FAQ";
import FeatureOfPKRD from "components/landing/sections/FeatureOfMoney";
import Team from "./sections/Team";
import Swipper from "components/_common/Swipper";
import SimpleSlider from "components/_common/Swipper";
import Adoption from "./sections/Adoption";

const page = 'landingPage';

const Landing = () => {
  return (
    <div className="">
      <HeroSection />
      <PKRDStatement />
      {/* <Swipper /> */}
      <PKRDFor page={page} />
      <FAQ />
      <LatestNews />
      <Adoption/>
      {/* <AcceptanceCountries /> */}
      {/* <FeatureOfPKRD /> */}
      {/* <Team/> */}
      {/* <Subscribe /> */}
    </div>
  );
};

export default Landing;