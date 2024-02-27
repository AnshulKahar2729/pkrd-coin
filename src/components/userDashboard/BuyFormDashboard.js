import React, { useEffect, useState } from "react";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { MdInfoOutline } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { engageUser, fetchWallet, startTrade } from "store/actions";
import Modal from "components/_common/modal/Modal";
import axios from "axios";
import TradeStartModal from "./TradeStartModal";
import { toast } from "react-toastify";
import CreateWalletModal from "./Wallet/CreateWalletModal";

function BuyFormDashboard({ bid }) {
  const [engage, setEngage] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [USDAmount, setUSDAmount] = useState("");
  const [PKRDAmount, setPKRDAmount] = useState("");
  const { loading, error, PKRDPrice } = useSelector(
    (state) => state.PKRDPriceReducer
  );
  const [myTrade, setMyTrade] = useState({});
  const [createWalletShowModal, setCreateWalletShowModal] = useState(false);
  const { wallet, loading: walletLoading, error: walletError } = useSelector((state) => state.walletReducer);

  useEffect(() => {
    if (wallet?.wallet_address === undefined) {
      dispatch(fetchWallet((response) => {
        dispatch(
          fetchWallet((response) => {
            if (response.body && Object.keys(response.body).length > 0) {
            } else if (response.body && Object.keys(response.body).length === 0) {
              setCreateWalletShowModal(true);
            }
          })
        );
      }));
    }

  }, []);

  const handleBuyNowClick = () => {
    console.log("Buy now clicked");


    if (wallet?.wallet_address === undefined) {
      toast.error("You don't have a wallet address. Please create a wallet first");
      return;
    }

    if (USDAmount > Number(wallet?.wallet_balance * PKRDPrice)) {
      toast.error("You don't have sufficient wallet balance");
      return;
    }

    if ((wallet?.wallet_address !== undefined) && USDAmount < Number(wallet?.wallet_balance * PKRDPrice)) {
      dispatch(
        startTrade(
          {
            bid_id: bid._id,
            PKRDRate: PKRDPrice,
            USDAmount: USDAmount,
            PKRDAmount: PKRDAmount,
          },
          (response) => {
            if (response.code === 200) {
              console.log("Trade started");
              console.log(response);
              setMyTrade(response?.body);
              setEngage(true);
              // if trade is started engage the user
              // engagingUser(response);
            }
          }
        )
      );
    }

  };

  const handleUSDChange = async (e) => {
    const value = e.target.value;
    const updatedValue = value.replace(/\D/g, "");
    setUSDAmount(updatedValue);
    const OnePKRDEqualTo = PKRDPrice;
    const OneUSDEqualTo = 1 / OnePKRDEqualTo;
    const EquivalentPKRD = value * OneUSDEqualTo;
    setPKRDAmount(EquivalentPKRD);
  };

  return (
    <div className="w-full  py-10 ">
      <h1 className="w-full text-center text-4xl font-semibold mb-10">
        PKRD Purchase/Trade Form
      </h1>
      <form
        onSubmit={(event) => event.preventDefault()}
        className="w-full py-4  px-[1.5%] lg:px-[3.5%] xl:px-[12.5%] flex flex-col  gap-20 "
      >
        <div className="shadow-sm flex flex-col gap-5 justify-center border p-8 rounded-md bg-white">
          <p className="text-3xl text-[#29A744] font-bold text-center">
            How much do you want to Buy?
          </p>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="w-full flex flex-col justify-start gap-2">
              <label className="">I will pay</label>
              <div className="flex flex-row gap-2 border rounded-md">
                <input
                  value={USDAmount}
                  onChange={handleUSDChange}
                  className="outline-none w-full p-[10px] rounded-md"
                  placeholder="Enter amount"
                  type="number"
                />
                <span className="border-l px-4 w-fit flex items-center justify-center">
                  USD
                </span>
              </div>
              <span className="text-[#848484] flex flex-row items-center gap-1">
                <MdInfoOutline /> Enter amount to get started
              </span>
              <span>
                {USDAmount > Number(wallet?.wallet_balance * PKRDPrice) && <>
                  <p>You don't have sufficient wallet balance. Current wallet balance : {wallet?.wallet_balance} </p>
                </>}
              </span>
            </div>
            <div className="w-full flex flex-col justify-start gap-2">
              <label className="">and receive</label>
              <div className="flex flex-row gap-2 border rounded-md">
                <input
                  value={
                    loading ? "Loading..." : Number(PKRDAmount)?.toFixed(2)
                  }
                  disabled
                  className="outline-none w-full p-[10px] rounded-md"
                  type="number"
                />
                <span className="border-l px-4 w-fit flex items-center justify-center">
                  PKRD
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={handleBuyNowClick}
            className="w-fit p-2 px-6 text-center text-[#29A744] hover:bg-green-100 hover:border-green-500 border border-green-100 transition-all duration-200 bg-green-50 rounded-md"
          >
            Buy Now
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="w-full flex flex-col gap-3">
            <p className="text-2xl text-[#29A744] font-bold">
              About this offer
            </p>
            <div className="shadow-sm border rounded-md py-5 px-6 bg-white flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-[#848484] flex flex-row items-center gap-2">
                  Seller rate <FaStar />
                </p>
                <p className="text-xl font-bold">
                  182,044,150.281 USD
                  <span className="text-[#848484] text-base font-bold">
                    {" "}
                    • 2% below market
                  </span>
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-[#848484]">Buy limits</p>
                <p className="text-xl font-bold">
                  <span className="text-[#848484] font-bold">Min</span>{" "}
                  {bid?.minAmount}
                  USD - <br className="sm:hidden" />{" "}
                  <span className="text-[#848484] font-bold">Max</span>{" "}
                  {bid?.maxAmount}
                  USD
                </p>
              </div>

              <div className="grid grid-cols-2 text-left gap-3">
                <div className="flex flex-col gap-1">
                  <p className="text-[#848484]">Trade time limit</p>
                  <p className="text-xl font-bold">{bid?.averageTime} min</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[#848484]">PKRD fee</p>
                  <p className="text-xl font-bold">0%</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-full flex flex-col gap-3 ">
            <p className="text-2xl text-[#29A744] font-bold">
              About this seller
            </p>
            <div className="shadow-sm w-full border rounded-md py-5 px-6 flex flex-col gap-5 bg-white">
              <div className="flex flex-row items-center gap-3">
                <RxAvatar className="text-[44px]" />
                <p className="flex flex-col gap-1">
                  <span className=""> {bid?.user_id?.username} </span>
                  {/*  <span className=""> Seen 11 hours ago </span> */}
                </p>
              </div>

              {/*  <div className="w-full grid grid-cols-2 text-left">
                <div className=" flex flex-col gap-2 justify-start bg-green-50 p-3">
                  <p className="text-[#848484]">Positive feedback</p>
                  <p className="flex items-center gap-2 text-xl font-bold">
                    <FaRegThumbsUp className="text-green-500" /> 10
                  </p>
                </div>

                <div className=" flex flex-col gap-2 justify-start bg-red-50 p-3">
                  <p className="text-[#848484]">Negative feedback</p>
                  <p className="flex items-center gap-2 text-xl font-bold">
                    <FaRegThumbsDown className="text-red-500" /> 0
                  </p>
                </div>
              </div> */}

              <div className="w-full grid grid-cols-2 gap-2">
                {/*  <p className="flex flex-row  items-center gap-2 ">
                  <FaCheck className="text-xl text-green-400" /> ID verified
                </p> */}
                <p className="flex flex-row  items-center gap-2 ">
                  <FaCheck className="text-xl text-green-400" /> Email verified
                </p>
                <p className="flex flex-row  items-center gap-2 ">
                  <FaCheck className="text-xl text-green-400" /> Phone verified
                </p>
              </div>
              {/*  <div className="flex flex-col gap-1">
                <p className="text-[#848484]">Average trade speed</p>
                <span className="bg-green-50 border border-green-300 p-1 text-green-700 rounded-md w-fit">
                  Instant
                </span>
              </div> */}
            </div>
          </div>
        </div>

        {/* <div className="shadow-sm w-full border rounded-md bg-white">
          <p className="w-full border-b text-2xl text-[#29A744] font-bold p-4 ">
            Feedback on this offer
          </p>
          <textarea
            className="w-full p-4 outline-none"
            placeholder="Give you Feedback"
            name="feedback"
            rows="3"
            cols="50"
          ></textarea>
        </div> */}

        <div className="w-full flex flex-col gap-5 justify-between items-center">
          {/*           <button className="p-2 w-fit border-2 border-red-500 rounded-md bg-white">
            Report a problem
          </button> */}
          <p className="text-center text-[#848484]">
            * PKRD and the services provided by PKRD may not be affiliated,
            associated with, endorsed nor sponsored by your selected payment
            method.
          </p>
        </div>
      </form>

      {engage === true && (
        <Modal
          setShowModal={() => { }}
          className={
            " rounded-md bg-[#F7F6F6] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          }
        >
          <TradeStartModal
            bid={bid}
            setEngage={setEngage}
            myTrade={myTrade}
            USDAmount={USDAmount}
            PKRDAmount={PKRDAmount}
          />
        </Modal>
      )}
      {createWalletShowModal === true && (
        <Modal
          className={
            "rounded-md bg-[#F7F6F6] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          }
          setShowModal={setCreateWalletShowModal}
        >
          <CreateWalletModal setCreateWalletShowModal={setCreateWalletShowModal} />
        </Modal>
      )}
    </div>
  );
}

export default BuyFormDashboard;
