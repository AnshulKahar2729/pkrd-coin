import React, { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import { IoIosCloseCircle } from "react-icons/io";

const TradeExpired = () => {
  const { tradeById } = useSelector((state) => state.tradeReducer);
  const [openAlert1, setOpenAlert1] = useState(true);
  const [openAlert2, setOpenAlert2] = useState(true);


  return (
    <div className="flex-1 w-full pt-8 md:pt-24 px-2 sm:px-4 md:px-14 bg-[#F8F9F9] grid grid-cols-1 xl:grid-cols-2 gap-8">
      <div className="w-full h-fit flex flex-col gap-5">
        <h1 className="text-3xl font-bold">Trade Expired</h1>
        {openAlert1 ? (
          <div className="rounded-md flex flex-row gap-5 bg-[#44f40e1b] p-2 py-6 transition-all duration-300">
            <IoMdInformationCircleOutline className="text-[#E0AB40] text-4xl my-auto" />
            <span className="text-gray-500 text-[14px]">
              Your trade of PKRD coin has expired, and you won't be able to complete this trade. Your duration is over. If you wish, you can create a new trade link.
            </span>
            <div className="flex items-center justify-between"><IoIosCloseCircle
              onClick={() => setOpenAlert1(false)}
              className="text-[30px] cursor-pointer hover:scale-110"
            /></div>
          </div>
        ) : null}

        <div className="rounded-md flex flex-col bg-white shadow-sm">
          {((JSON.parse(localStorage.getItem("authUser"))?.body?._id ===
            tradeById?.engage_user_id &&
            tradeById?.complete_by_engage_user === 0) ||
            (JSON.parse(localStorage.getItem("authUser"))?.body?._id !==
              tradeById?.engage_user_id &&
              tradeById?.complete_by_user === 0)) && (
              <div className="flex flex-col p-2 sm:p-6 gap-4">
                <p>
                  Once you've made the payment, be sure to click Paid within the given time limit. Otherwise, the trade will be automatically canceled and the PKRD will be returned to the seller's wallet. Please note that this trade is expired, and you won't be able to complete it.
                </p>
                <button
                  className="flex flex-row gap-4 items-center p-2 rounded-md w-fit bg-red-500 text-white"
                >
                  <p className="flex flex-col gap-2 text-left ">
                    <span>Expired</span>
                  </p>
                </button>
              </div>
            )}
        </div>

        <div className="w-full h-fit flex flex-col gap-5">
          {openAlert2 ? (
            <div className="rounded-md flex flex-row gap-5 bg-[#44f40e1b] p-2 py-6 transition-all duration-300">
              <IoMdInformationCircleOutline className="text-[#E0AB40] text-[80px] my-auto" />
              <span className="text-gray-500 text-[14px]">
                Keep trades within PKRD. Some users may ask you to trade
                outside the PKRD platform. This is against our Terms of
                Service and likely a scam attempt. You must insist on keeping
                all trade conversations within PKRD. If you choose to proceed
                outside PKRD, note that we cannot help or support you if you
                are scammed during such trades.
              </span>
              <IoIosCloseCircle
                onClick={() => setOpenAlert2(false)}
                className="text-[100px] cursor-pointer hover:scale-110"
              />
            </div>
          ) : null}
        </div>



      </div>
      {/* <div className="rounded-md w-full h-[600px] bg-green-500"></div> */}

      <div className=" flex flex-col mb-5 text-gray-500 mt-12 text-center">
        <div className="flex flex-col gap-5">
          <p className="text-[24px] font-semibold text-gray-900 text-2xl ">
            Details of your trade with <span className="text-[#29A744]">
              {tradeById?.bid_id?.user_id?._id === JSON.parse(localStorage.getItem("authUser"))?.body?._id ? tradeById?.user_id?.username : tradeById?.bid_id?.user_id?.username}
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-5 mt-5">
          <p className="text-gray-900 text-2xl font-bold">Trade Information</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white p-2 rounded-md flex flex-col justify-start text-inter">
              <p className="font-medium text-gray-800">RATE</p>
              <p>{tradeById?.PKRDRate}</p>
              <p>USD/PKRD</p>
            </div>
            <div className="bg-white p-2 rounded-md flex flex-col justify-start">
              <p className="font-medium text-gray-800">TRADE ID</p>
              <p>av5sf34s</p>
            </div>
            <div className="bg-white p-2 rounded-md flex flex-col justify-start">
              <p className="font-medium text-gray-800">STARTED</p>
              <p>an hour ago</p>
            </div>
            <div className="bg-white p-2 rounded-md flex flex-col justify-start">
              <p className="font-medium text-gray-800">EXPIRED</p>
              <p>17 minutes ago</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TradeExpired;

