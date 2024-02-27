import React, { useEffect } from "react";
import { FaUserFriends } from "react-icons/fa";
import { BeatLoader } from "react-spinners";
import Engage from "../../assets/images/Engage.gif";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";

const TradeStartModal = ({
  bid,
  setEngage,
  myTrade,
  USDAmount,
  PKRDAmount,
}) => {
  useEffect(() => {
    console.log(myTrade, "mytrade");
  }, []);
  return (
    <div className="bg-white rounded-md grid grid-cols-1 max-h-[900px] max-w-[450px] min-h-[350px] min-w-[300px] cmlg:min-h-[420px] cmlg:min-w-[350px] md:min-h-[420px] md:min-w-[450px]">
      <div className="w-full text-2xl py-3 px-4 rounded-md grid grid-cols-3 gap-2 place-items-center">
        <div className="w-full"></div>
        <div className="w-full flex flex-row items-end">
          <FaUserFriends className="text-2xl" />
          <span>Engaging</span>
          <span className="flex items-end pb-1">
            <BeatLoader color="#29A744" size={6} />
          </span>
        </div>
        <div
          onClick={() => {
            setEngage(false);
          }}
          className="w-full text-[#29A744] flex justify-end cursor-pointer"
        >
          <IoMdCloseCircle />
        </div>
      </div>

      <div className="w-full text-center">
        <p>
          Connecting with{" "}
          <span className="text-[#29A744] hover:text-green-700">
            {bid?.user_id?.username}
          </span>{" "}
          ,
          <span className="text-[#29A744] hover:text-green-700 ">
            <br /> WhatsApp - {bid?.user_id?.full_phone_number}
          </span>
          .
          <br /> Click the button to chat .{" "}
        </p>
      </div>

      <div className="w-full h-72 rounded-b-md rounded-md mb-3">
        <img
          src={Engage}
          alt="Create Wallet"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="w-full flex bg-white rounded-md">
        <a
          className="w-full"
          target="_blank"
          rel="noreferrer"
          href={`https://wa.me/${
            bid?.user_id?.full_phone_number
          }?text=Hello%20I%20am%20${
            bid?.user_id?.username
          }%20interested%20in%20your%20offer%20on%20PKRD%20Marketplace.%20I%20would%20like%20to%20know%20more%20about%20it.%20Thank%20you.

            Payment Method - ${bid?.paymentMethod}
            Rate - 1PKRD = ${myTrade?.PKRDRate} USD
            Amount I want to buy ${PKRDAmount} PKRD for which I will pay ${USDAmount} USD.
            
            Click the above link to start a trade on PKRD Marketplace.
            http://localhost:3000/trade/${myTrade?._id}?token=${
            myTrade?._id + "-" + myTrade?.bid_id?.user_id
          }
            `}
        >
          <button className="bg-[#29A744] text-white mx-auto py-2 px-3 rounded-full flex flex-row gap-2 items-center mb-3">
            <IoLogoWhatsapp className="text-xl" /> Chat on Whatsapp
          </button>
        </a>
      </div>
    </div>
  );
};

export default TradeStartModal;
