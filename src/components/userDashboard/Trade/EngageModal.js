import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import SuccessEngage from "../../../assets/images/SuccessEngage.gif";
function EngageModal() {
  return (
    <div className="bg-white rounded-md grid grid-cols-1 max-h-[900px] max-w-[450px] min-h-[350px] min-w-[300px] cmlg:min-h-[420px] cmlg:min-w-[350px] md:min-h-[420px] md:min-w-[450px]">
      <div className="w-full text-[#29A744] text-2xl text-center font-semibold py-3 px-4 rounded-md ">
        <p className="w-full">Trade successfully engaged </p>
      </div>

      <div className="w-full text-center">
        <p>
          With <span className="text-[#29A744]">Virat Kohli</span> ,{" "}
          <span className="text-[#29A744]">9876541230</span>
        </p>
      </div>

      <div className=" flex justify-center items-center w-full rounded-b-md rounded-md ">
        <img className="" src={SuccessEngage} alt="" />
      </div>
      <div className="w-full flex bg-white rounded-md pb-3">
        <button className="bg-[#29A744] text-white mx-auto py-2 px-3 rounded-full flex flex-row gap-2 items-center">
          Continue <FaCircleArrowRight className="text-xl" />
        </button>
      </div>
    </div>
  );
}

export default EngageModal;
