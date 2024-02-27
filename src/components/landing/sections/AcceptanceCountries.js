import Gradient from "components/_common/Gradient";
import React from "react";
import Country1 from "assets/images/countries/country-1.png";
import Country2 from "assets/images/countries/country-2.png";
import Country3 from "assets/images/countries/country-3.png";
import Country4 from "assets/images/countries/country-4.png";
import Country5 from "assets/images/countries/country-5.png";
import Country6 from "assets/images/countries/country-6.png";

const AcceptanceCountries = () => {
  return (
    <div>
      <div className=" flex flex-row items-center justify-center gap-10 mt-40 ">
        <div className=" hidden lg:block">
          <Gradient />
        </div>
        <h2 className=" text-center text-[#4D4D4C] lg:text-5xl text-2xl uppercase">
          Impactful Acceptance in Core Countries
        </h2>
        <div className=" hidden lg:block">
          <Gradient />
        </div>
      </div>

      <div className="xl:mx-96 text-gray-500 lg:text-2xl text-lg mt-10 ">
        <p className=" text-center font-thin">
          With over 1 million coins currently in circulation, we are here to
          serve users in 5 countries. Invest in and experience the future of
          finance.
        </p>
      </div>

      <div className=" flex justify-center">
        {" "}
        <div className=" xl:mt-32 flex flex-row lg:gap-20">
          <div>
            <img src={Country1} alt="" className=" lg:w-48" />
          </div>
          <div>
            {" "}
            <img src={Country2} alt="" className=" lg:w-48" />
          </div>
          <div>
            {" "}
            <img src={Country3} alt="" className=" lg:w-48" />
          </div>
          <div>
            {" "}
            <img src={Country4} alt="" className=" lg:w-48" />
          </div>
          <div>
            {" "}
            <img src={Country5} alt="" className=" lg:w-48" />
          </div>
          <div>
            {" "}
            <img src={Country6} alt="" className=" lg:w-48" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptanceCountries;
