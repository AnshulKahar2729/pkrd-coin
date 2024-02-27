import React, { useEffect, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelTrade,
  completeTrade,
  fetchTradeById,
  updateTradeStatus,
} from "store/actions";
import EngageModal from "../EngageModal";
import Modal from "components/_common/modal/Modal";

const TradeActive = ({ showEngageModal, setShowEngageModal }) => {
  const { tradeById } = useSelector((state) => state.tradeReducer);
  const [openAlert1, setOpenAlert1] = useState(true);
  const [openAlert2, setOpenAlert2] = useState(true);
  const dispatch = useDispatch();
  const [remainingTime, setRemainingTime] = useState(
    Number(tradeById?.bid_id?.averageTime * 60)
  );
  const { PKRDPrice } = useSelector((state) => state.PKRDPriceReducer);

  const handleCancelTradeBtnClick = () => {
    console.log("Cancel trade button clicked");
    dispatch(
      cancelTrade({ id: tradeById?._id }, (response) => {
        if (response.code === 200) {
          console.log(response);
          updateTradeStatus({ id: tradeById?._id });
          dispatch(fetchTradeById(tradeById?._id));
        }
      })
    );
  };

  const handlePaidBtnClick = () => {
    let body = {
      id: tradeById?._id,
    };
    if (
      tradeById?.engage_user_id ===
      JSON.parse(localStorage.getItem("authUser"))?.body?._id
    ) {
      body = { ...body, complete_by_engage_user: 1 };
    } else {
      body = { ...body, complete_by_user: 1 };
    }
    dispatch(
      completeTrade(body, (response) => {
        if (response.code === 200) {
          console.log(response);
          updateTradeStatus({ id: tradeById?._id });
          dispatch(fetchTradeById(tradeById?._id));
        }
      })
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date();
      const createdAtTime = new Date(tradeById?.createdAt);
      const ellapsedTime = (currentTime - createdAtTime) / 1000;
      /* console.log(currentTime);
      console.log(createdAtTime); */
      console.log(ellapsedTime);

      if (ellapsedTime < Number(tradeById?.bid_id?.averageTime * 60)) {
        console.log("timer inside if");
        // console.log(remainingTime);
        setRemainingTime((prev) => prev - 1);
      }

      if (ellapsedTime === Number(tradeById?.bid_id?.averageTime * 60)) {
        clearInterval(timer); // Stop the countdown when remaining time reaches zero
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex-1 w-full pt-8 md:pt-24 px-2 sm:px-4 md:px-14 bg-[#F8F9F9] grid grid-cols-1 xl:grid-cols-2 gap-8">
      <div className="w-full h-fit flex flex-col gap-3 mb-3">
        <h1 className="text-3xl font-bold">Trade Active</h1>
        {openAlert1 ? (
          <div className="rounded-md flex flex-row gap-4 bg-[#44f40e1b] p-2 transition-all duration-300">
            <IoMdInformationCircleOutline className="text-[#E0AB40] text-5xl sm:text-2xl my-auto" />
            <span className="text-gray-500 text-[14px]">
              Keep all conversations within the trade chat. Moderators won't be
              able to assit you if something goes wrong outside of PKRD.
            </span>
            <IoClose
              onClick={() => setOpenAlert1(false)}
              className="text-5xl sm:text-2xl cursor-pointer hover:scale-110"
            />
          </div>
        ) : null}
        <div className="rounded-md flex flex-col bg-white shadow-sm">
          <div className="flex flex-row gap-2 p-2 sm:p-6 border-b">
            <AiOutlineClockCircle className="my-auto text-4xl" />
            <p className="flex flex-col ">
              <span className="">
                Please make a payment of {tradeById?.USDAmount} USD using{" "}
                {tradeById?.bid_id?.paymentMethod}
              </span>
              <span className="">
                {tradeById?.PKRDAmount?.toFixed(2)} PKRD will be added to your
                PKRD wallet
              </span>
            </p>
          </div>

          {((JSON.parse(localStorage.getItem("authUser"))?.body?._id ===
            tradeById?.engage_user_id &&
            tradeById?.complete_by_engage_user === 0) ||
            (JSON.parse(localStorage.getItem("authUser"))?.body?._id !==
              tradeById?.engage_user_id &&
              tradeById?.complete_by_user === 0)) && (
              <div className="flex flex-col p-2 sm:p-6 gap-4">
                <p>
                  Once you've made the payment, be sure to click Paid within the
                  given time limit. Otherwise the trade will be automatically
                  canceled and the PKRD will be returned to the seller's wallet.
                </p>
                <button
                  onClick={handlePaidBtnClick}
                  className="flex flex-row gap-4 items-center p-2 rounded-md w-fit bg-[#29A744] text-white"
                >
                  <p className="flex flex-col gap-2 text-left ">
                    <span>Paid</span>
                    <span>
                      {parseInt(remainingTime / 3600) % 12 < 10
                        ? `0${parseInt(remainingTime / 3600) % 12}`
                        : parseInt(remainingTime / 3600) % 12}
                      :
                      {parseInt(remainingTime / 60) % 60 < 10
                        ? `0${parseInt(remainingTime / 60) % 60}`
                        : parseInt(remainingTime / 60) % 60}
                      :
                      {parseInt(remainingTime % 60) < 10
                        ? `0${remainingTime % 60}`
                        : remainingTime % 60}
                    </span>
                  </p>
                  <FaCheck className="text-xl" />
                </button>
              </div>
            )}

          {tradeById?.complete_by_engage_user === 1 &&
            JSON.parse(localStorage.getItem("authUser"))?.body?._id ===
            tradeById?.engage_user_id && (
              <div className="flex flex-col p-2 sm:p-6 gap-4">
                <p>You've paid the payment please wait for another person.</p>
              </div>
            )}
          {tradeById?.complete_by_user === 1 &&
            JSON.parse(localStorage.getItem("authUser"))?.body?._id !==
            tradeById?.engage_user_id && (
              <div className="flex flex-col p-2 sm:p-6 gap-4">
                <p>You've paid the payment please wait for another person.</p>
                {/*                 <button className="flex flex-row gap-4 items-center p-2 rounded-md w-fit bg-[#29A744] text-white">
                  <p className="flex flex-col gap-2 text-left ">
                    <span>Confirm Payment</span>
                    <span>Time left : 00:29:59</span>
                  </p>
                  <FaCheck className="text-xl" />
                </button> */}
              </div>
            )}
          <div className="p-2 sm:p-6">
            {openAlert2 ? (
              <div className="flex flex-row items-center gap-2 bg-[#44f40e1b] p-2 transition-all duration-300">
                <IoMdInformationCircleOutline className="text-[#E0AB40] text-[140px] sm:text-[70px] my-auto" />
                <span className="text-gray-500 text-[14px]">
                  Keep trades within PKRD. Some users may ask you to trade
                  outside the PKRD platform. This is against our Terms of
                  Service and likely a scam attempt. You must insist on keeping
                  all trade conversations within PKRD. If you choose to proceed
                  outside PKRD, note that we cannot help or support you if you
                  are scammed during such trades.
                </span>
                <IoClose
                  onClick={() => setOpenAlert2(false)}
                  className="text-[140px] sm:text-[70px] cursor-pointer hover:scale-110"
                />
              </div>
            ) : null}
          </div>

          <div className="flex flex-row flex-wrap gap-3 justify-between p-2 sm:p-6">
            <button
              onClick={handleCancelTradeBtnClick}
              className="rounded-md border border-red-600 hover:bg-red-50 transition-all duration-200 py-1 px-4 "
            >
              Cancel Trade
            </button>
            <p className="flex items-center gap-2">
              <IoMdInformationCircleOutline />
              {tradeById?.engage_user_id ===
                JSON.parse(localStorage.getItem("authUser"))?.body?._id &&
                tradeById?.complete_by_engage_user === 0 && (
                  <>You haven't paid yet</>
                )}
              {tradeById?.engage_user_id ===
                JSON.parse(localStorage.getItem("authUser"))?.body?._id &&
                tradeById?.complete_by_user === 0 && <>You haven't paid yet</>}
            </p>
          </div>
        </div>
      </div>
      {/* <div className="rounded-md w-full h-[600px] bg-green-500"></div> */}

      <div className=" flex flex-col mb-5 text-gray-500 mt-11 text-center">
        <div className="flex flex-col  gap-5 mt-5">
          <p className="text-gray-900 text-2xl font-bold">Trade Information</p>
          <p>
            0.00013664 PKRD has been reserved for this trade. This includes
            PKRD’s fee of 0 PKRD.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white p-2 rounded-md flex flex-col justify-start">
              <p className="font-semibold text-gray-900">RATE</p>
              <p>{PKRDPrice}</p>
              <p>USD/PKRD</p>
            </div>
            <div className="bg-white p-2 rounded-md flex flex-col justify-start">
              <p className="font-semibold text-gray-900">Started</p>
              <p>{tradeById?.createdAt}</p>
            </div>
          </div>
        </div>
      </div>

      {showEngageModal && (
        <Modal
          className={
            "rounded-md bg-[#F7F6F6] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          }
        >
          <EngageModal setShowEngageModal={setShowEngageModal} />
        </Modal>
      )}
    </div>
  );
};

export default TradeActive;
