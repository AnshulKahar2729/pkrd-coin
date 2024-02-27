import React, { useState } from 'react';
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoClose, IoInformationCircle } from 'react-icons/io5';
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";
import { BsInfo } from 'react-icons/bs';

function TradeDashboard() {
    const [openAlert1,setOpenAlert1] = useState(true);
    const [openAlert2,setOpenAlert2] = useState(true);

  return (
    <div className="flex-1 w-full pt-8 md:pt-24 px-2 sm:px-4 md:px-14 bg-[#F8F9F9] grid grid-cols-1 xl:grid-cols-2 gap-8">
      <div className="w-full h-fit flex flex-col gap-3">
        <h1 className="text-3xl font-bold">Trade Started</h1>
        {openAlert1 ? (
          <div className="rounded-md flex flex-row gap-4 bg-[#44f40e1b] p-2 transition-all duration-300">
            <IoMdInformationCircleOutline className="text-[#E0AB40] text-5xl sm:text-2xl my-auto" />
            <span className='text-gray-500 text-[14px]'>
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
                Please make a payment of 100,000 USD using Airtel Money
              </span>
              <span className="">
                0.00084077 PKRD will be added to your PKRD wallet
              </span>
            </p>
          </div>

          <div className="flex flex-col p-2 sm:p-6 gap-4">
            <p>
              Once you’ve made the payment, be sure to click Paid within the
              given time limit. Otherwise the trade will be automatically
              canceled and the Bitcoin will be returned to the seller’s wallet.
            </p>
            <button className="flex flex-row gap-4 items-center p-2 rounded-md w-fit bg-[#29A744] text-white">
              <p className="flex flex-col gap-2 text-left ">
                <span>Paid</span>
                <span>Time left :  00:29:59</span>
              </p>
              <FaCheck className="text-xl" />
            </button>
          </div>
          <div className= "p-2 sm:p-6">
            {openAlert2 ? (
              <div className="flex flex-row items-center gap-2 bg-[#44f40e1b] p-2 transition-all duration-300">
                <IoMdInformationCircleOutline className="text-[#E0AB40] text-[140px] sm:text-[70px] my-auto" />
                <span className='text-gray-500 text-[14px]'>
                  Keep trades within PKRD. Some users may ask you to trade outside the PKRD platform. This is against our Terms of Service and likely a scam attempt. You must insist on keeping all trade conversations within PKRD. If you choose to proceed outside PKRD, note that we cannot help or support you if you are scammed during such trades.
                </span>
                <IoClose
                  onClick={() => setOpenAlert2(false)}
                  className="text-[140px] sm:text-[70px] cursor-pointer hover:scale-110"
                />
              </div>
            ) : null}
          </div>

          <div className="flex flex-row flex-wrap gap-3 justify-between p-2 sm:p-6">
            <button className='rounded-md border border-red-600 hover:bg-red-50 transition-all duration-200 py-1 px-4 '>Cancel Trade</button>
            <p className='flex items-center gap-2'><IoMdInformationCircleOutline/> You haven't paid yet</p>
          </div>

        </div>
        {/* <div className='flex flex-col'>
          <div className='flex flex-col'>
            <p>Instructions</p>
            <div className='flex flex-row ga-2'>
              <p className='bg-white p-2 rounded-md'>Tag1</p>
              <p className='bg-white p-2 rounded-md'>Tag2</p>
              <p className='bg-white p-2 rounded-md'>Tag3</p>
            </div>
            <p>Please follow the trade instructions in the chat window to complete this transaction.</p>
          </div>

          <div className='flex flex-col'>
            <p>Trade Information</p>
            <p>0.00013664 BTC has been reserved for this trade. This includes Paxful’s fee of 0 BTC.</p>
            <div className='flex flex-row ga-2'>
              <div className='bg-white p-2 rounded-md'>
                <p>RATE</p>
                <p>739,145,427.716</p>
                <p>IDR/PKRD</p>
              </div>
              <div className='bg-white p-2 rounded-md'>
                <p>RATE</p>
                <p>RATE</p>
                <p>RATE</p>
              </div>
              <div className='bg-white p-2 rounded-md'>
                <p>RATE</p>
                <p>RATE</p>
                <p>RATE</p>
              </div>
            </div>
            <p>Please follow the trade instructions in the chat window to complete this transaction.</p>
          </div>
        </div> */}

      </div>
      <div className="rounded-md w-full h-[600px] bg-green-500"></div>
    </div>
  );
}

export default TradeDashboard