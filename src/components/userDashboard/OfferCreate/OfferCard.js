import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function OfferCard({ myBid }) {
  const navigate = useNavigate();

  return (
    <tr className="w-full grid grid-cols-5 p-4 bg-slate-50">
      <td className="w-full mx-auto flex flex-col items-center">
        <div className="text-left text-sm sm:text-base flex flex-row flex-wrap sm:grid sm:grid-cols-2 lg:flex lg:flex-row gap-3 text-nowrap">
          <span className="w-fit text-[#29A645]">Offer Name</span>
          <span className="text-nowrap flex flex-row items-center gap-1 sm:mx-3">
            <FaRegThumbsUp className="text-lg text-[#29A645]" /> 12
          </span>
        </div>
      </td>

      <td className="w-full flex justify-center">
        <span>{myBid?.bidType === 0 ? "Buy" : "Sell"}</span>
      </td>

      <td className="hidden w-full md:flex justify-center">
        <span>{myBid?.profitPercentage} %</span>
      </td>

      <td
        className={`mx-auto px-6 py-2 w-fit rounded-lg ${true ? " text-green-600" : " text-red-600"
          } `}
      >
        {myBid.status === 1 ? "Active" : "Expired"}
      </td>

      <td className="mx-auto flex-1 flex justify-center items-center">
        <Link to="/user/my-offer-list/offer1">
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate(`/user/my-offer-list/offer-${myBid?._id}`, {
                state: { bidDetails: myBid },
              });
            }}
            className="flex flex-row items-center gap-3 px-6 py-2 w-fit rounded-lg hover:bg-green-50 hover:border-green-500 sm:border text-green-600"
          >
            {" "}
            <span className="hidden sm:block">See Offer</span>{" "}
            <FaEye className="text-xl sm:text-lg hover:scale-150 transition-all duration-300" />{" "}
          </button>
        </Link>
      </td>
    </tr>
  );
}

export default OfferCard;
