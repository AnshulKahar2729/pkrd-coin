import React from "react";
import { FaCheck } from "react-icons/fa6";

const SignupProgress = (props) => {
  return (
    <div className="w-full  flex flex-col justify-center gap-16 mt-10 mb-20">
      <div className="flex justify-center">
        <div
          className={`relative flex h-[3px] flex-col justify-center items-center w-36 `}
        >
          <div
            className={`absolute w-10 h-10 flex items-center justify-center z-10 bg-[#29A744] text-white rounded-full font-semibold `}
          >
            {props?.firstStep ? <FaCheck /> : 1}
          </div>

          <p className={` absolute top-6 text-gray-500 text-nowrap`}>Step 1</p>
        </div>
        <div
          className={` h-[3px]  ${
            props?.firstStep ? " bg-[#29a645] " : " bg-gray-400 "
          } w-full`}
        ></div>
        <div
          className={`relative flex h-[3px] flex-col justify-center items-center w-36 `}
        >
          <div
            className={`absolute w-10 h-10 flex items-center justify-center z-10 ${props?.firstStep ? 'bg-[#29A744] text-white' : 'bg-white border-2 text-[#29A744] border-[#29A744]'} rounded-full font-semibold `}
          >
            {props?.secondStep ? <FaCheck /> : 2}
          </div>
          <p className={` absolute top-6 text-gray-500 text-nowrap`}>Step 2</p>
        </div>
        <div
          className={` h-[3px]  ${
            props?.secondStep ? " bg-[#29a645] " : " bg-gray-400 "
          } w-full`}
        ></div>
        <div
          className={`relative flex h-[3px] flex-col justify-center items-center w-36 `}
        >
          <div
            className={`absolute w-10 h-10 flex items-center justify-center z-10 ${props?.secondStep ? 'bg-[#29A744] text-white' : 'bg-white border-2 text-[#29A744] border-[#29A744]'} rounded-full font-semibold `}
          >
            {props?.thirdStep ? <FaCheck /> : 3}
          </div>
          <p className={` absolute top-6 text-gray-500 text-nowrap`}>Step 3</p>
        </div>
        <div
          className={` h-[3px]  ${
            props?.thirdStep ? " bg-[#29a645] " : " bg-gray-400 "
          } w-full`}
        ></div>
        <div
          className={`relative flex h-[3px] flex-col justify-center items-center w-36 `}
        >
          <div
            className={`absolute w-10 h-10 flex items-center justify-center z-10 ${props?.thirdStep ? 'bg-[#29A744] text-white' : 'bg-white border-2 text-[#29A744] border-[#29A744]'} rounded-full font-semibold `}
          >
            4
          </div>
          <p className={` absolute top-6 text-gray-500 text-nowrap`}>Step 4</p>
        </div>
      </div>
    </div>
  );
};

export default SignupProgress;
