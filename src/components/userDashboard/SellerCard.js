import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegThumbsUp } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaArrowDown } from "react-icons/fa6";
import { InfoOutlined } from "@mui/icons-material";

const SellerCard = ({ bid }) => {
  const navigate = useNavigate();

  const sellBtnClickHandler = () => {
    navigate(`/seller/seller-form`, {
      state: { bid: bid },
    });
  };

  return (
    <tr className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4   bg-[#29a6440b] px-4 py-4 border-b-[1px] border-gray-300 hover:bg-white transition-all ">
      <td className="">
        <div>
          <Link
            to={"/user/profile"}
            className="w-full hover:underline text-[#29A645] line-clamp-1"
          >
            {bid?.user_id?.username}
          </Link>
        </div>

        <div className=" flex items-center gap-2">
          <FaRegThumbsUp className=" text-[#29A645]" />
          12{" "}
        </div>
      </td>

      <td className="">
        <div>{bid.paymentMethod}</div>
      </td>

      <td className="pl-5 lg:block hidden ">{bid?.averageTime} minutes</td>

      <td className="mt-4 sm:mt-0 grid grid-cols-1 cmlg:grid-cols-2 sm:flex sm:flex-col col-span-2 sm:col-span-1 sm:justify-end sm:text-right">
        <div className=" ">
          <p className=" font-bold text-xl  ">
            {bid?.user_id?.wallet_balance} PKRD
          </p>
        </div>

        <div className=" flex flex-row gap-1 cmlg:justify-end ">
          <span className=" font-sans text-gray-400 text-sm  ">
            1 USD = $1.02 USD of PKRD
          </span>

          <span className=" flex gap-1 items-center text-[#29A645]  ">
            <FaArrowDown className=" text-[#29A645]" />
            {bid.profitPercentage}% <InfoOutlined className=" text-gray-500" />
          </span>
        </div>

        <div className="lg:flex grid grid-cols-1 lg:flex-row sm:justify-end gap-1 items-center">
          <div className="text-right">
            <div className=" text-sm text-left sm:text-right">
              Min purchase: {bid.minAmount} PKRD
            </div>
            <div className=" text-sm text-left sm:text-right">
              Max purchase: {bid.maxAmount} PKRD
            </div>
          </div>

          <div className="">
            <button
              onClick={sellBtnClickHandler}
              className=" bg-[#29A645] py-2 w-fit text-white lg:px-5 lg:py-1 rounded-md px-4"
            >
              SELL
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default SellerCard;
