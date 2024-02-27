import Tab from "components/userDashboard/Wallet/Tab";
import UserHeader from "layout/UserHeader";
import Footer from "../../components/_common/copyWritefooter/Footer";
import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { RiRefreshLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { addExchange } from "store/exchange/actions";

const Exchange = () => {
  const [sidebarShow, setSidebarShow] = React.useState(false);
  const [time, setTime] = useState(60);
  const { PKRDPrice } = useSelector((state) => state.PKRDPriceReducer);
  const [PKRDAmount, setPKRDAmount] = useState("");
  const [USDAmount, setUSDAmount] = useState("");
  const dispatch = useDispatch();
  const { wallet } = useSelector((state) => state.walletReducer);
  const { loading, error, data } = useSelector((state) => state.exchangeReducer);

  useEffect(() => {
    setTimeout(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
  }, [time]);

  const handleExchangeBtnClick = (event) => {
    event.preventDefault();
    console.log("Exchange button clicked");
    dispatch(addExchange({
      exchange_amount_pkrd: PKRDAmount,
      exchange_value_usdt: USDAmount,
      wallet_address: wallet?.wallet_address,
    }, (res) => {
      if (res.code === 200) {
        console.log("Exchange Success", res);
        setPKRDAmount("");
        setUSDAmount("");
      }
    }))
  }

  const handlePKRDAmountChange = (event) => {
    const value = event.target.value;
    setPKRDAmount(value);
    setUSDAmount((value * PKRDPrice).toFixed(2));
  }

  return (
    <div className="min-h-screen flex flex-col justify-center bg-[#F8F9F9]">
      <UserHeader setSidebarShow={setSidebarShow} />
      {!sidebarShow && (
        <>
          {" "}
          <div className="flex-1 bg-[#F8F9F9] pt-28 px-12 ">
            <Tab />
            <div className=" bg-white  rounded-tr-md rounded-tl-md shadow-sm grid grid-cols-1 lg:grid-cols-2">
              {/* left card */}
              <div className=" border-b-2 p-8 border-gray-300 flex flex-col gap-10">
                {/* text */}
                <div className=" flex justify-between ">
                  <p>You are converting</p>{" "}
                  <p className=" text-gray-500">Available : 0</p>
                </div>

                {/* input */}
                <div className=" flex gap-3 pb-10">
                  <input
                    value={PKRDAmount}
                    onChange={handlePKRDAmountChange}
                    className="lg:text-3xl text-xl outline-none w-full"
                    type="text"
                    placeholder="Enter amount"
                  />
                  <select className=" bg-white rounded-md border border-[#29A645] px-4 py-1">
                    <option>PKRD</option>
                  </select>
                </div>
              </div>

              {/* right card */}
              <div className=" border-b-2 border-l-2 p-8 border-gray-300 flex flex-col gap-10">
                {/* text */}
                <div className=" flex justify-between ">
                  <p>You are converting</p>{" "}
                  <p className=" text-gray-500">Available : 0</p>
                </div>

                {/* input */}
                <div className=" flex gap-3 pb-10">
                  <input
                    value={USDAmount}
                    className="lg:text-3xl text-xl outline-none w-full"
                    type="text"
                    placeholder="Enter amount"
                  />
                  <select className=" bg-white rounded-md border border-[#29A645] px-4 py-1">
                    <option>USD</option>
                  </select>
                </div>
              </div>
            </div>
            <div className=" flex justify-between p-8 bg-white rounded-bl-md rounded-br-md">
              <div className="flex flex-row items-center gap-3">
                <div className="">
                  <CountdownCircleTimer
                    isPlaying
                    duration={60}
                    strokeWidth={2}
                    colors={["#29A744"]}
                    size={40}
                  >
                    {({ remainingTime }) => (
                      <div className="p-2">
                        <RiRefreshLine className="bg-green-50 text-xl" />
                      </div>
                    )}
                  </CountdownCircleTimer>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <p>
                    Exchange Rate: 1 PKRD = <span>{PKRDPrice.toFixed(2)}</span>{" "}
                    USD
                  </p>
                  <p>
                    Refreshing in <span>{time}</span> seconds
                  </p>
                </div>
              </div>
              <div>
                {" "}
                <button disabled={loading} onClick={handleExchangeBtnClick} className=" bg-[#29A645] text-white rounded-md lg:px-16 px-4 py-2 border border-gray-400">
                  {loading ? "Loading..." : "Exchange"}
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Exchange;
