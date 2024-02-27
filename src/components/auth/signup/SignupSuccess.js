import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import { FaRegCircleCheck } from "react-icons/fa6";
import SignupSuccess from '../../../assets/images/SignupSuccess4.gif';
import Check from '../../../assets/images/check.gif';

const SignupSuccessModal = ({ setSignupSuccessModal }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-w-[300px] min-h-[250px] max-w-[400px] max-h-[500px] grid grid-cols-1 rounded-md overflow-hidden pb-2">
      <div className="bg-[#29A744] w-full rounded-t-md flex  justify-center items-center p-4 mx-auto text-white font-bold text-xl gap-2">
        <FaRegCircleCheck className="text-[20px] text-white" /> Account Created
      </div>

      <div className="relative w-full flex flex-col gap-5 justify-center ">
        <div className="w-full fixed text-center flex flex-col items-center flex-1 justify-center top-36 mx-auto animate-bounce">
          <p className="text-xl font-semibold text-gray-800">Congratulations</p>
          <p className=" text-gray-700 ">
            Your account has been successfully created.
          </p>
        </div>

        <div className="sticky flex justify-center">
          <img src={SignupSuccess} alt="SignupSuccess" className="w-[260px] h-[200px]" />
          <img src={SignupSuccess} alt="SignupSuccess" className="w-[260px] h-[200px]" />
        </div>

        <div className="w-full flex justify-center mb-4">
          <button
            onClick={() => {
              setSignupSuccessModal(false);
              navigate("/user-dashboard");
            }}
            className=" py-4 px-10 rounded-full bg-[#29A744] text-white"
          >
            Continue to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupSuccessModal;
