/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { VscSettings } from "react-icons/vsc";
import { MdDownload } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import Modal from "components/_common/modal/Modal";
import FilterSidebar from "../_sidebar/FilterSidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchTradesList } from "store/actions";
import { Info } from "@mui/icons-material";
import { BsEye } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const TradeHistory = () => {
  const [showFilters, setShowFilters] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, trades } = useSelector((state) => state.tradeReducer);

  useEffect(() => {
    dispatch(
      fetchTradesList("page=1&limit=5", (response) => {
        if (response.code === 200) {
          console.log(response);
        }
      })
    );
  }, []);

  return (
    <div className=" border border-gray-300 bg-white rounded-md py-4 ">
      <div className=" mx-8 mb-4">
        <p>You are viewing all trades for the last 18 days</p>
      </div>

      <div
        onClick={() => {
          setShowFilters(true);
        }}
        className=" border border-gray-300 md:mx-8 mx-2 py-3 rounded-md px-4 flex justify-between items-center hover:cursor-pointer hover:bg-gray-100 transition-all mb-5"
      >
        <p>Filters</p>
        <VscSettings className=" rotate-90" />
      </div>
      {/*  <div className=" border border-gray-300 md:mx-8 mx-2 py-3 rounded-md px-4 flex justify-between items-center hover:cursor-pointer hover:bg-gray-100 transition-all mb-5">
        <p>Export Trades</p>
        <MdDownload className=" " />
      </div>
      <div className=" border border-gray-300 md:mx-8 mx-2 py-3 rounded-md px-4 flex justify-between items-center hover:cursor-pointer hover:bg-gray-100 transition-all mb-5">
        <p>Completed Trades: 0% (trades out of 1)</p>
        <IoIosArrowDown />
      </div> */}

      <div className=" md:mx-8 mx-2">
        <div className=" px-4 py-8 rounded-t-md border border-gray-300 bg-[#FBFAFA] flex md:flex-row flex-col md:justify-between md:items-center  ">
          <div className=" md:m-0 mb-4">
            <p>My Past Trades</p>
            <p className=" text-gray-500">Jan 1, 2024 - Jan 19, 2024</p>
          </div>
          {/* <div className=" flex md:items-center gap-3 md:flex-row flex-col">
            <div className=" flex items-center gap-3 bg-white border border-gray-500 py-2 px-4 rounded-md">
              Export Trades <MdDownload className=" " />
            </div>
            <div className=" flex items-center gap-3 bg-white border border-gray-500 py-2 px-4 rounded-md">
              Copy Details <FaRegCopy />{" "}
            </div>
          </div> */}
        </div>

        {loading ? (
          <>
            <div className=" bg-white border-x border-gray-300 border-b rounded-b-md  flex md:flex-row md:gap-0 gap-4 flex-col  justify-between md:px-8 px-4 py-4">
              <p>Loading...</p>
            </div>
          </>
        ) : error ? (
          <>
            <div className=" bg-white border-x border-gray-300 border-b rounded-b-md  flex md:flex-row md:gap-0 gap-4 flex-col  justify-between md:px-8 px-4 py-4">
              <p>Error</p>
            </div>
          </>
        ) : trades.length === 0 ? (
          <>
            <div className=" bg-white border-x border-gray-300 border-b rounded-b-md  flex md:flex-row md:gap-0 gap-4 flex-col  justify-between md:px-8 px-4 py-4">
              <p>No trades available</p>
            </div>
          </>
        ) : (
          <>
            {" "}
            {trades
              ?.filter(
                (trade) =>
                  trade?.user_id?._id ===
                  JSON.parse(localStorage.getItem("authUser"))?.body?._id
              )
              ?.map((myTrade, index) => {
                return (
                  <div key={index}>
                    <div className=" bg-white border-x border-gray-300 border-b rounded-b-md  flex md:flex-row md:gap-0 gap-4 flex-col  justify-between md:px-8 px-4 py-4">
                      <div className=" flex flex-row items-center gap-3">
                        <div>
                          <RxAvatar className=" text-5xl" />
                        </div>
                        <div>
                          <p className=" ">{myTrade?.bid_id?.paymentMethod}</p>
                          <div className=" flex items-center gap-3">
                            <span className=" text-gray-500">
                              {myTrade?.bid_id?.bidType === 0
                                ? "Buy"
                                : myTrade?.bid_id?.bidType === 1
                                ? "Sell"
                                : null}{" "}
                              PKRD
                            </span>
                            <span className=" text-gray-500">
                              {myTrade?.user_id?.username}
                            </span>
                            <span className=" text-gray-500">
                              {new Date(myTrade.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                }
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className=" flex md:items-center gap-3 md:flex-row flex-col">
                        <div>
                          <div>
                            {myTrade?.USDAmount}USD{" "}
                            <span className=" text-sm font-sans text-gray-500">
                              {myTrade?.PKRDAmount} PKRD
                            </span>
                          </div>
                          <div className=" text-sm text-gray-500 font-sans">
                            Rate: 1PKRD = {myTrade?.PKRDRate} USD
                          </div>
                        </div>
                        <div>
                          <div className=" bg-[#F8F8F8] text-gray-700 px-4 text-lg py-1">
                            {myTrade?.status === 0 && "Expired"}
                            {myTrade?.status === 1 && "Active"}
                            {myTrade?.status === 2 && "Completed"}
                            {myTrade?.status === 3 && "Cancelled"}
                          </div>
                        </div>
                        <div>
                          <div
                            onClick={() => {
                              navigate(`/trade/${myTrade?._id}`, {
                                state: { trade: myTrade },
                              });
                            }}
                            className=" bg-white border border-gray-400 py-2 px-2 rounded-md cursor-pointer hover:bg-gray-100 transition-all"
                          >
                            <BsEye />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </>
        )}
      </div>

      {showFilters && (
        <>
          <FilterSidebar setShowFilters={setShowFilters} />
        </>
      )}
    </div>
  );
};

export default TradeHistory;
