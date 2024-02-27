import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const HoldingsCard = () => {
  const { wallet } = useSelector((state) => state.walletReducer);
  const { PKRDPrice } = useSelector((state) => state.PKRDPriceReducer); // 1PKRD EQUAL TO HOW MUCH USD

  return (
    <div className=" lg:grid grid-cols-4">
      <div className=" bg-white rounded-md p-4 shadow-sm xl:col-span-1 lg:col-span-2">
        <p className=" text-2xl font-sans font-thin">Total holdings</p>
        <p className=" text-2xl">
          {wallet?.wallet_balance ? wallet?.wallet_balance?.toFixed(2) : "0.00"}
          PKRD
        </p>
        <p className=" font-sans">
          = $
          {wallet?.wallet_balance
            ? (wallet?.wallet_balance * PKRDPrice)?.toFixed(2)
            : "0.00"}
          USD
        </p>
      </div>

      <div className=" xl:col-span-3 lg:col-span-2"></div>
    </div>
  );
};

export default HoldingsCard;
