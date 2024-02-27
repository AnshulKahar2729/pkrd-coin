import React, { useState } from "react";
import { ImSpinner11 } from "react-icons/im";

const BuySell = ({ onLookFor, type }) => {
  const [formData, setFormData] = useState({
    currency: "PKRD",
    paymentMethod: "",
    amount: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onLookFor(formData)
  };

  return (
    <div className="w-full bg-[#F9F9F8] lg:h-full py-[16px] md:py-[48px] lg:overflow-y-scroll lg:pb-5 lg:pt-5 lg:top-[71px] mt-4 md:mt-16 lg:mt-4 pb-5 rounded-md px-4  lg:px-5 xl:px-10">
      <form onSubmit={handleSubmit} className="  flex flex-col gap-2 ">
        <label className=" font-sans font-semibold" htmlFor="Buy">
          {type}
        </label>
        <div className=" ">
          <select
            value={formData.currency}
            onChange={(e) =>
              setFormData({ ...formData, currency: e.target.value })
            }
            id="Buy"
            className=" bg-white w-full font-sans rounded-sm border outline-none border-[#E0E0E0] py-3 px-2 hover:bg-[#EFEFEF] cursor-pointer transition-all hover:border-[#a9a9a9] "
          >
            <option value="PKRD" className=" font-sans ">
              PKRD
            </option>
            <option value="Bitcoin" className=" font-sans ">
              BITCOIN
            </option>
          </select>
        </div>

        <div className="">
          <span className=" text-[#939292]">
            1 PKRD ={" "}
            <span className=" text-[#29A645]">1.02 USD </span>
          </span>
        </div>

        <label className=" font-sans font-semibold" htmlFor="Pay thru">
          {type} through
        </label>
        <div className=" ">
          <select
            value={formData.paymentMethod}
            onChange={(e) =>
              setFormData({ ...formData, paymentMethod: e.target.value })
            }
            id="Pay thru"
            className="h-fit gap-2 py-3  w-full border border-[#E0E0E0] rounded-sm px-2 outline-none bg-white hover:bg-[#EFEFEF] cursor-pointer transition-all hover:border-[#a9a9a9]"
          >
            <option className="p-2">ApplePay</option>
            <option className="p-2">GCash</option>
            <option className="p-2">PayPal</option>
            <option className="p-2">WeChat Pay</option>
            <option className="p-2">M-Pesa</option>
            <option className="p-2">Venmo</option>
          </select>
        </div>
        <label className=" font-sans font-semibold">I want to {type === "Buy" ? "spend" : "collect"}</label>
        <input
          type="text"
          value={formData.amount}
          onChange={(e) =>
            setFormData({ ...formData, amount: e.target.value })
          }
          className="py-3 px-2 outline-none w-full rounded-sm border border-[#E0E0E0] font-sans focus:border-[#a9a9a9] hover:border-[#a9a9a9] transition-all bg-white "
          id="I wan spend"
          placeholder="Any Amount"
        />
        {/* <label className=" font-sans font-semibold" htmlFor="">
            The place where the offer is
          </label>
          <div className="">
            <select className=" w-full font-sans outline-none rounded-sm border border-[#E0E0E0] py-3 px-2">
              <option value="India">India</option>
            </select>
          </div>
          <label
            className=" font-sans font-semibold"
            htmlFor=""
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            Office owner location
          </label>
          <div className="">
            <select className=" w-full font-sans outline-none rounded-sm border border-[#E0E0E0] py-3 px-2">
              <option value="">India</option>
            </select>
          </div> */}

        <div>
          <button
            type="submit"
            className=" mt-5 w-full bg-[#29A645] flex flex-row items-center justify-between py-3 font-sans  px-4 text-white border-none rounded-md hover:bg-[#26833a] transition-all"
          >
            Look for offers
            <ImSpinner11 />
          </button>
        </div>
      </form>
    </div>
  );
};

export default BuySell;
