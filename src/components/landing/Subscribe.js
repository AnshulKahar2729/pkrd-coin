import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const Subscribe = () => {
  return (
    <div className=" bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 py-8">
      <div className=" mb-4">
        <h2 className=" text-4xl text-center text-white">Subscribe</h2>
        <p className=" text-center text-white text-xl">To Newsletter</p>
      </div>

      <div className=" flex justify-center">
        <div className=" rounded-md bg-white flex md:flex-row flex-col mx-1 md:mx-0 items-center py-4 px-4 gap-5">
          <div>
            {" "}
            <HiOutlineMail className=" text-2xl" />
          </div>
          <div>
            {" "}
            <input
              type="text"
              className=" text-2xl py-2 w-full placeholder: text-gray-500 px-2"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            {" "}
            <button className=" bg-yellow-500 py-4 px-8 rounded-md text-2xl text-black">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
