import React from "react";
import Marquee from "react-fast-marquee";

const Swipper = () => (
  <div className=" px-[2%] sm:px-[10%] py-10 sm:py-20 flex flex-row ">
    {" "}
    <Marquee speed={200} loop={0} gradient={true} gradientWidth={10} autoFill={true}>
      <div className="p-8 sm:p-0 sm:w-80 sm:h-32 bg-white mx-5 rounded-md flex items-center justify-center shadow-lg border border-gray-500">
        <h2 className=" text-3xl text-gray-600">PKRD COIN</h2>
      </div>
      <div className="p-8 sm:p-0 sm:w-80 sm:h-32 bg-white mx-5 rounded-md flex items-center justify-center shadow-lg border border-gray-500">
        <h2 className=" text-3xl text-gray-600">PKRD COIN</h2>
      </div>
      <div className="p-8 sm:p-0 sm:w-80 sm:h-32 bg-white mx-5 rounded-md flex items-center justify-center shadow-lg border border-gray-500">
        <h2 className=" text-3xl text-gray-600">PKRD COIN</h2>
      </div>
    </Marquee>
  </div>
);

export default Swipper;
