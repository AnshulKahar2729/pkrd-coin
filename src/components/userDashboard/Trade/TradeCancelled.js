import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { CgCloseO } from "react-icons/cg";
import { IoIosCloseCircle } from "react-icons/io";
import { useSelector } from "react-redux";

const TradeCancelled = () => {
  const [openAlert1, setOpenAlert1] = useState(true);
  const [openAlert2, setOpenAlert2] = useState(true);
  const { tradeById } = useSelector((state) => state.tradeReducer);
  const { PKRDPrice } = useSelector((state) => state.PKRDPriceReducer);

  return (
    <div className="flex-1 w-full pt-8 md:pt-24 px-2 sm:px-4 md:px-14 bg-[#F8F9F9] grid grid-cols-1 xl:grid-cols-2 gap-8">
      <div className="w-full flex flex-col gap-10">
        <h1 className="text-3xl font-bold">Trade Cancelled by System</h1>

        {openAlert1 ? (
          <div className="rounded-md bg-[#ffffff] transition-all duration-300">
            <div className="flex flex-row border-b">
              <div className="p-3 w-fit flex justify-between items-center text-red-500 text-2xl">
                <CgCloseO
                  onClick={() => setOpenAlert1(false)}
                  className="text-xl"
                />
              </div>
              <div className="font-semibold flex-1 text-xl p-5">
                Want to start another trade? You can always start a new trade
                with
                <span className="text-[#29A744] font-bold text-[20px]">
                  {" "}
                  {tradeById?.bid_id?.user_id?._id === JSON.parse(localStorage.getItem("authUser"))?.body?._id ? tradeById?.user_id?.username : tradeById?.bid_id?.user_id?.username}
                </span>
                or simply find a new one from our list of
                <span className="text-[#29A744] font-bold text-[20px]">
                  {" "}{tradeById?.bid_id?.paymentMethod}{" "}
                </span>
                offers.
              </div>
            </div>
          </div>
        ) : null}


        {openAlert2 ? (
          <div className="p-5 rounded-md bg-white">
            <div className="flex flex-row items-center gap-5 bg-[#f6f8b6a8] p-2 py-6 transition-all duration-300">
              <IoMdInformationCircleOutline className="text-[#E0AB40] text-[100px] my-auto" />
              <span className="text-gray-500 text-[14px]">
                Keep trades within PKRD. Some users may ask you to trade outside
                the PKRD platform. This is against our Terms of Service and
                likely a scam attempt. You must insist on keeping all trade
                conversations within PKRD. If you choose to proceed outside
                PKRD, note that we cannot help or support you if you are scammed
                during such trades.
              </span>
              <IoIosCloseCircle
                onClick={() => setOpenAlert2(false)}
                className="sm:text-[100px] cursor-pointer hover:scale-110"
              />
            </div>
          </div>
        ) : null}
      </div>

      {/* <div className="rounded-md w-full h-[550px] bg-green-500"></div> */}

      <div className=" flex flex-col mb-5 text-gray-500 mt-11 text-center">
        <div className="flex flex-col gap-5">
          <p className="text-[24px] font-semibold text-gray-900 text-2xl ">
            Please follow <span className="text-[#29A744]">{tradeById?.bid_id?.user_id?._id === JSON.parse(localStorage.getItem("authUser"))?.body?._id ? tradeById?.user_id?.username : tradeById?.bid_id?.user_id?.username}</span>'s
            instructions
          </p>
          <p className="text-lg my-5">
            ASK FOR THE <span className="text-[#29A744]">{tradeById?.bid_id?.paymentMethod}</span>{" "}
            PAYMENT DETAILS
          </p>
        </div>

        <div className="flex flex-col gap-5 mt-5">
          <p className="text-gray-900 text-2xl font-bold">Trade Information</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white p-2 rounded-md flex flex-col justify-start">
              <p className="font-medium text-gray-900">RATE</p>
              <p>{PKRDPrice}</p>
              <p>USD/PKRD</p>
            </div>
            <div className="bg-white p-2 rounded-md flex flex-col justify-start">
              <p className="font-medium text-gray-900">TRADE ID</p>
              <p>av5sf34s</p>
            </div>
            <div className="bg-white p-2 rounded-md flex flex-col justify-start">
              <p className="font-medium text-gray-900">STARTED</p>
              <p>{tradeById?.createdAt}</p>
            </div>
            <div className="bg-white p-2 rounded-md flex flex-col justify-start">
              <p className="font-medium text-gray-900">CANCELLED</p>
              <p>17 minutes ago</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TradeCancelled;
