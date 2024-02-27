import React, { useEffect, useState } from "react";
import { FiArrowDownRight } from "react-icons/fi";
import { LuCopy } from "react-icons/lu";
import { LuCopyCheck } from "react-icons/lu";
import { MdCopyAll } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";

const ReceiveModal = ({ setReceiveShowModal }) => {
  const [textCopied, setTextCopied] = useState(false);
  const { wallet } = useSelector((state) => state.walletReducer);

  const CopyText = async () => {
    try {
      await navigator.clipboard.writeText(wallet?.wallet_address);
      console.log("Text copied to clipboard successfully");
    } catch (err) {
      console.error("Unable to copy text to clipboard: ", err);
    }

    setTextCopied(true);
    setTimeout(() => {
      setTextCopied(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col max-w-[400px] ">
      <div className="px-4 cmlg:mx-0 py-6 mb-2 rounded-t-md cmlg:px-8 flex items-center gap-4 font-semibold bg-[#29A744] text-white">
        <FiArrowDownRight />
        <h2 className="text-xl cmlg:text-2xl">Receive cryptocurrency</h2>
      </div>

      <div className=" bg-white flex justify-between mx-4 cmlg:mx-8 rounded-md px-3 py-2">
        <h2 className=" text-lg font-semibold">Receive</h2>

        <h2 className=" text-lg font-semibold">PKRD Coin</h2>
      </div>

      <div className="max-w-full bg-white mx-4 cmlg:mx-8 mt-4 px-3 pt-3 pb-4 rounded-md">
        <h2 className="text-xl">YOUR PKRD ADDRESS</h2>
        <h2 className="text-base my-1">Use this address to deposit PKRD:</h2>
        <div className="w-full flex flex-row gap-5 items-center justify-between my-2">
          <p className="w-[80%] text-[14px] cmlg:text-base text-gray-400 leading-3 sm:leading-4 whitespace-normal break-words">
            {wallet?.wallet_address}
          </p>

          {textCopied ? (
            <div
              onClick={CopyText}
              className="text-xl cursor-pointer text-gray-600 flex flex-col items-center"
            >
              <FaCheck className="text-[#29A744]" />
              <span className="text-[12px]">Copied</span>
            </div>
          ) : (
            <div
              onClick={CopyText}
              className="text-xl cursor-pointer text-gray-600 flex flex-col items-center"
            >
              <MdCopyAll />
              <span className="text-[12px]">Copy</span>
            </div>
          )}
        </div>
      </div>

      <div className=" mx-auto w-fit  mt-4 mb-4">
        <button
          onClick={() => {
            setReceiveShowModal(false);
          }}
          className=" bg-[#29A744] text-white rounded-full w-full px-10 py-2 text-center"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ReceiveModal;
