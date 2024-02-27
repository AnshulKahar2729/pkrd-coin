import Gradient from "components/_common/Gradient";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PKRDBackground = () => {
  return (
    <div className=" py-10">
      <div className=" flex flex-row  items-center justify-center gap-3 pt-10 lg:pb-10 mx-2 ">
        <div className=" hidden xl:block">
          <Gradient />
        </div>
        <h2 className=" text-center text-[#4D4D4C] lg:text-5xl text-2xl ">
          PKRD FIGHTING AGAINST MAJOR GLOBAL CHALLENGES
        </h2>
        <div className=" hidden xl:block">
          <Gradient />
        </div>
      </div>

      <div className=" xl:mx-48 text-gray-500 lg:text-2xl mt-5 ">
        <p className=" text-center font-thin leading-7 lg:leading-10" >
          With the intensification of globalization dynamics, risks to the
          economic financial stability of the international system have grown to
          the extent that formerly localized threats are no longer locally
          containable. Ethnic conflicts, infectious diseases, wars, climate
          change, pollution, food and energy insecurity, inflation, and other
          pressing threats, are increasingly threatening global economic
          financial security and stability, prompting doubts about the ability
          of the current global governance order to respond.
          <Link
            to={"/pkrd-fighting-against-major-global-challenges"}
            className=" text-[#C0A161] inline-flex items-center ml-2 cursor-pointer gap-3 "
          >
            Read more <FaArrowRightLong />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PKRDBackground;
