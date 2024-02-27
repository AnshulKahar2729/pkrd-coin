import React from "react";
import FeatureOfPKRD from "./FeatureOfMoney";
import PKRDLogo from "../../../assets/images/circle.jpeg";
import PKRDFor from '../sections/PKRDFor';
import LatestNews from "./LatestNews";

const WhyPKRD = () => {
  return (
    <>
      <div className=" bg-[#F7F7F7] grid grid-cols-1 xl:grid-cols-2 ">
        <div className="">
          <img className="" src={PKRDLogo} alt="" />
        </div>
        <div className=" p-3 sm:px-5 sm:mb-10 md:mx-10 xl:mr-[30%]">
          <p className="text-center text-2xl sm:text-3xl m sm:mt-20 mb-4 md:mb-8 md:text-6xl md:mt-52">
            <span className="custom-heading">Why use PKRD?</span>
          </p>
          <p className=" text-[#586970] text-lg text-center">
            Launched in 2014, PKRD tokens (USD₮) pioneered the stablecoin model
            and are the most widely traded. PKRD tokens offer the stability and
            simplicity of fiat currencies coupled with the innovative nature of
            blockchain technology, representing a perfect combination of both
            worlds.
          </p>
        </div>

      </div>
      <div className=" bg-[#F9FBFB]">
        <div className=" px-2 sm:px-10 py-5 sm:py-10 md:py-20 md:px-20 lg:px-32 xl:px-80 text-center">
          <h5 className=" text-xl font-sans font-semibold md:text-center">
            Whether it is for personal use or business purposes, PKRD tokens
            offer many benefits as the most stable, liquid and trusted
            stablecoin.
          </h5>
        </div>

        <FeatureOfPKRD />
        <div className="sm:mb-20"><PKRDFor/></div>
        <div className="sm:pb-20"><LatestNews/></div>
      </div>
    </>
  );
};

export default WhyPKRD;
