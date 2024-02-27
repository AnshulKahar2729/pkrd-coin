import React from "react";
import { LuSend } from "react-icons/lu";

const SendModal = ({setSendShowModal}) => {
  return (
    <div className="flex flex-col max-h-[500px] max-w-[450px] min-h-[350px] min-w-[300px] cmlg:min-h-[420px] cmlg:min-w-[350px] md:min-h-[420px] md:min-w-[450px]">
      <div className="bg-[#29A744] text-white rounded-t-md mb-2 py-8 px-4 cmlg:px-8 flex items-center gap-4">
        <LuSend />
        <h2 className=" text-2xl">Send cryptocurrency</h2>
      </div>

      <div className=" bg-white flex justify-between mx-4 cmlg:mx-8 rounded-md px-3 py-2">
        <h2 className=" text-lg">Sending</h2>

        <h2 className=" text-lg">PKRD Coin</h2>
      </div>

      <div className=" bg-white mx-4 cmlg:mx-8 mt-4 px-3 pt-3 pb-10 rounded-md">
        <h2 className=" text-lg mb-3">Send to</h2>
        <input
          className=" outline-none w-full"
          type="text"
          placeholder="Paste or enter the wallet address here"
        />
      </div>

      <div className=" bg-white mt-4 mx-4 cmlg:mx-8 px-3 py-3">
        <input
          type="number"
          className=" outline-none w-full"
          placeholder="Amount to send"
        />
      </div>

      <div className=" mx-auto w-fit mt-4 mb-4">
        <button onClick={()=>{
            setSendShowModal(false)
        }} className=" bg-[#29A744] text-white w-full py-2 px-10 rounded-full text-center">
          Continue
        </button>
      </div>
    </div>
  );
};

export default SendModal;