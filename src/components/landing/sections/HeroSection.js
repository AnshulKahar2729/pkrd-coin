import React from "react";
import { TypeAnimation } from "react-type-animation";
import "assets/css/HeroSection.css";
import HeroChart from "./Chart";
import { Link } from "react-router-dom";
import { IoTriangle } from "react-icons/io5";
import { BsFillCaretRightFill } from "react-icons/bs";

function HeroSection() {
  return (
    <>
      <div className=" grid lg:grid-cols-2 grid-cols-1  xl:pt-20 pt-5  md:px-10">
        <div className="mt-3 sm:mt-0 sm:my-20 md:my-28 lg:my-auto pl-2 sm:pl-4">
        <div className=" mx-2 lg:mx-0">
          <div className="text-4xl sm:text-6xl  font-semibold mb-2 sm:mb-5 text-left md:text-center lg:text-left">
            <h1>PKRD Coin</h1>
          </div>

          <div className="h-32 cmmd:h-20 md:h-16 lg:h-40 lg:p-0 md:flex md:justify-center lg:block">
            <TypeAnimation
              sequence={[
                "The world’s first multipurpose flexible stable coin",
                1000,
                "Driving the added value for money",
                1000,
                "Wide spread of intelligent adaptation",
                1000,
                "Fully backed by assets",
                1000,
                "PKRD convertible Ecosystem to USDT",
                1000,
              ]}
              wrapper="span"
              speed={10}
              className=" text-black text-2xl sm:text-3xl lg:text-5xl font-inter leading-[38px] sm:leading-[50px] "
              repeat={Infinity}
            />
          </div>
          <div className="xl:pb-10 grid grid-cols-1 cmlg:flex flex-row flex-wrap items-center  justify-normal md:justify-center lg:justify-normal gap-2  sm:gap-10 lg:gap-6 xl:gap-10 ">
            <div className="flex w-full cmlg:w-fit text-center">
              {" "}
              <Link
                to={"/sign-up/step-1"}
                className="text-nowrap w-full bg-[#29A744] hover:bg-[#1f7c33] transition-all duration-300bg-[#29A744] md:px-8 md:text-base px-10 py-3 rounded-full text-sm text-white xl:px-10 "
              >
                Create Account
              </Link>
            </div>
            <div className="text-center">
            <Link
                to={"/how-it-works"}
                className="text-nowrap w-full sm:w-fit my-2 flex flex-row items-center justify-center gap-2 text-[#000000] font-bold transition-all duration-200 border border-[#64646444] hover:border-[#000000] md:px-8 md:text-base px-5 py-3 rounded-full text-sm lg:px-6 xl:px-10 "
              >
                <BsFillCaretRightFill className="hover:scale-125"/> Learn How PKRD works
              </Link>
            </div>
          </div>
        </div>
        </div>

        <div className=" sm:mt-5">
          <div className="flex flex-row justify-around mt-5 mb-5 ">
            <div>
              <p className="text-base sm:text-xl font-semibold">Price</p>
              <p className="text-base sm:text-xl">$0.9997</p>
              <p className=" text-green-500 text-base sm:text-xl flex flex-row items-center gap-2">0.02% <IoTriangle/></p>
            </div>
            <div className=" mr-2">
              <p className="text-base sm:text-xl font-semibold">Volume</p>
              <p className="text-base sm:text-xl">$18,488</p>
              <p className=" text-green-500 text-base sm:text-xl flex flex-row items-center gap-2">69.61% <IoTriangle/></p>
            </div>
            <div>
              <p className="text-base sm:text-xl font-semibold">Market Cap</p>
              <p className="text-base sm:text-xl">$82,356</p>
              <p className=" text-red-500 text-base sm:text-xl flex flex-row items-center gap-2">0.02% <IoTriangle className="rotate-180"/></p>
            </div>
          </div>
          <HeroChart />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
