import React, { useState } from 'react'
import { BsCheck } from 'react-icons/bs';
import { CgLaptop } from 'react-icons/cg';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { IoClose } from 'react-icons/io5'
import { useSelector } from 'react-redux';
import Logo from '../../../assets/images/logo.png';

const TradeCompleted = () => {
  const { tradeById } = useSelector((state) => state.tradeReducer);
  const [openAlert1, setOpenAlert1] = useState(true);
  const [openAlert2, setOpenAlert2] = useState(true);


  return (
    <div className="flex-1 w-full pt-8 md:pt-24 px-2 sm:px-4 md:px-14 bg-[#F8F9F9] grid grid-cols-1 xl:grid-cols-2 gap-8">
      <div className="w-full h-fit flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Trade Completed</h1>
        {openAlert1 ? (
          <div className="rounded-md flex flex-row gap-4 bg-green-50 p-2 py-6 transition-all duration-300">
            <IoMdInformationCircleOutline className="text-[#E0AB40] text-5xl sm:text-2xl my-auto" />
            <span className=" text-[24px] font-bold text-[#29A744]">
              Congratulations on your successfull Trade
            </span>
            <IoClose
              onClick={() => setOpenAlert1(false)}
              className="text-5xl sm:text-2xl cursor-pointer hover:scale-110"
            />
          </div>
        ) : null}
        <div className="rounded-md flex flex-col bg-white shadow-sm">
          <div className="flex flex-row gap-2 p-2 sm:p-6 border-b items-center">
            <CgLaptop className="my-auto text-4xl" />
            <p className="flex flex-col ">
              <span className="">
                You made a payment of {tradeById?.USDAmount} USD using{" "}
                {tradeById?.bid_id?.paymentMethod}

                {tradeById?.PKRDAmount?.toFixed(2)} PKRD is added to your
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

                <button
                  disabled={true}
                  className="flex flex-row gap-4 items-center p-2 rounded-md w-fit bg-[#53bc69] text-white"
                >
                  <span>Completed</span>
                  <BsCheck />
                </button>
              </div>
            )}


          <div className="p-2 sm:p-6">
            {openAlert2 ? (
              <div className="rounded-md flex flex-row items-center gap-2 bg-[#44f40e1b] p-2 py-6 transition-all duration-300">
                <IoMdInformationCircleOutline
                  className="text-[#E0AB40] text-[140px] sm:text-[70px] my-auto" />
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
        </div>
      </div>




      <div className='w-full px-32 mt-16'>
        <div className="rounded-2xl w-full bg-white shadow-lg flex flex-col justify-between">
          <div className='flex flex-row w-full justify-between px-3 sm:px-10 py-4'>
            <p className='flex justify-between items-center text-3xl font-bold'>Trade Bill</p>
            <img className='h-20' src={Logo} alt='' />
          </div>
          <div className='flex-1 border-y w-full px-4 sm:px-8 py-4 grid grid-cols-1 gap-3'>
            <p className=' w-full items-center flex flex-row justify-between'><span>Cryptocurrency</span>  <span>PKRD Coin</span></p>
            <p className=' w-full items-center flex flex-row justify-between'><span>Trade using</span>  <span>{tradeById?.bid_id?.paymentMethod}</span></p>
            <p className=' w-full items-center flex flex-row justify-between'><span>Name of Buyer</span>  <span>{/* {tradeById?bid_id?.bidType === 0 ? tradeById?.user_id?.username : tradeById?.engage_user_id?.username} */}</span></p>
            <p className=' w-full items-center flex flex-row justify-between'><span>Name of Seller</span>  <span>Rohit Sharma</span></p>
            {/* <p className=' w-full items-center flex flex-row justify-between'><span>Bid by buyer</span>  <span>2.258 PKRD Coin</span></p> */}
            <p className=' w-full items-center flex flex-row justify-between'><span>Status of offer</span>  <span>Completed</span></p>
            <p className=' w-full items-center flex flex-row justify-between'><span>Date of trade</span>  <span>{tradeById?.createdAt}</span></p>
          </div>
          <div className='flex  justify-center items-center py-4'>Thank You</div>
        </div>
      </div>




      <div className=" flex flex-col mb-5 text-gray-500 mt-5">
        <div className="flex flex-col gap-5">
          <p className="text-[24px font-semibold] text-gray-900 text-2xl font-bold">
            Details of your trade with <span className="text-[#29A744]">
              {tradeById?.bid_id?.user_id?._id === JSON.parse(localStorage.getItem("authUser"))?.body?._id ? tradeById?.user_id?.username : tradeById?.bid_id?.user_id?.username}</span>
          </p>
          <p className="text-lg my-5">
            YOU HAVE RECEIVED <span className="text-[#29A744]">{tradeById?.bid_id?.paymentMethod}</span>{" "}
            PAYMENT DETAILS
          </p>
        </div>

        <div className="flex flex-col gap-5 mt-5">
          <p className="text-gray-900 text-2xl font-bold">Trade Information</p>
          <div className="grid grid-cols-2 sm:grid-cols-4">
            <div className="bg-white p-2 rounded-md flex flex-col justify-start">
              <p className="font-medium text-gray-900">RATE</p>
              <p>{tradeById?.PKRDRate}</p>
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
              <p className="font-medium text-gray-900">COMPLETED</p>
              <p>17 minutes ago</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TradeCompleted
