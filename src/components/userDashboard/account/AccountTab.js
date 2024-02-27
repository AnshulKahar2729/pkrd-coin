import React from "react";
import { IoPeople } from "react-icons/io5";
import { MdOutlinePassword } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { RxActivityLog } from "react-icons/rx";


const AccountTab = ({
  setPersonalInfoShow,
  setTwoFactorShow,
  setPasswordShow,
  setActivitySessionsShow,
  personalInfoShow,
  twoFactorShow,
  passwordShow,
  activitySessionsShow,
}) => {
  return (
    <div className="  lg:border-b-2 lg:border-gray-200">
      <div className="  ">
        <div className=" flex lg:flex-row flex-col items-start lg:border-none border border-gray-400 mx-2 rounded-md p-4 md:gap-10 lg:p-0 lg:gap-12  xl:gap-12 clm:gap-20  ">
          <button
            className={` ${
              personalInfoShow === true ? "lg:border-b-2 lg:border-[#29A744] text-[#29A744]" : " "
            } font-bold cursor-pointer text-xl transition-all flex items-center gap-3 lg:text-[14px] xl:text-base`}
            value={personalInfoShow}
            onClick={() => {
              setPersonalInfoShow(true);
              setTwoFactorShow(false);
              setPasswordShow(false);
              setActivitySessionsShow(false);
            }}
          >
            <IoPeople/><span className="text-nowrap">Personal Info</span>
          </button>
          <button
            className={` ${
              twoFactorShow === true ? "lg:border-b-2 lg:border-[#29A744] text-[#29A744]" : " "
            } font-bold cursor-pointer text-xl transition-all flex items-center gap-3 lg:text-[14px] xl:text-base`}
            value={twoFactorShow}
            onClick={() => {
              setTwoFactorShow(true);
              setPersonalInfoShow(false);
              setPasswordShow(false);
              setActivitySessionsShow(false);
            }}
          >
            <RiLockPasswordFill/><span className="text-nowrap">Two Factor Authentication</span>
          </button>
          <button
            className={` ${
              passwordShow === true ? "lg:border-b-2 lg:border-[#29A744] text-[#29A744]" : " "
            } font-bold cursor-pointer text-xl transition-all flex items-center gap-3 lg:text-[14px] xl:text-base`}
            value={passwordShow}
            onClick={() => {
              setPasswordShow(true);
              setPersonalInfoShow(false);
              setTwoFactorShow(false);
              setActivitySessionsShow(false);
            }}
          >
            <MdOutlinePassword/><span className="text-nowrap">Password</span> 
          </button>
          <button
            className={` ${
              activitySessionsShow === true ? "lg:border-b-2 lg:border-[#29A744] text-[#29A744]" : " "
            } font-bold cursor-pointer text-xl transition-all flex items-center gap-3 lg:text-[14px] xl:text-base`}
            value={activitySessionsShow}
            onClick={() => {
              setActivitySessionsShow(true);
              setPersonalInfoShow(false);
              setTwoFactorShow(false);
              setPasswordShow(false);
            }}
          >
            <RxActivityLog/><span className="text-nowrap">Activity sessions</span> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountTab;
