import React, { useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { FiUpload } from "react-icons/fi";
import { MdInfo } from "react-icons/md";

function PersonalInfo() {
  const [username, setUsername] = useState(
    JSON.parse(localStorage.getItem("authUser"))?.body?.username
  );
  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("authUser"))?.body?.username);
  }, []);
  return (
    <div className="">
      <div className="w-full flex flex-col gap-6 rounded-md border border-gray-400 bg-white p-4 px-8 mx-2 my-5">
        <div className=" mb-8">
          <h2 className=" text-[#29A744] text-2xl">Personal Information</h2>
        </div>

        <div className="flex flex-col gap-5 border-b-2">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-start ">
            <div className="">
              <div className=" flex flex-col gap-2">
                <label htmlFor="phoneNumber">Phone Number</label>
                {/* input for phone number */}
                <input
                  value={
                    JSON.parse(localStorage.getItem("authUser"))?.body
                      ?.full_phone_number
                  }
                  disabled
                  type="tel"
                  placeholder="Enter phone number"
                  className=" outline-none w-full  rounded-md py-[11px] px-[15px] border border-gray-400 cursor-not-allowed bg-[#0c932a23] text-black"
                  id="phoneNumber"
                />
              </div>
            </div>
            <div className=" flex flex-col gap-3">
              <div className=" flex md:flex-row flex-col md:items-start   md:gap-10 lg:gap-2 gap-4">
                <div className=" flex gap-3 items-center">
                  <label htmlFor="profileUpload" className="md:pt-7">
                    <BsPersonCircle className="text-5xl text-gray-500" />
                  </label>
                  <input
                    type="file"
                    name=""
                    id="profileUpload"
                    className=" hidden"
                  />
                </div>
                <div className=" w-full flex flex-col gap-2 ">
                  <label htmlFor="username">Username</label>
                  <div className="flex flex-row border border-gray-400 py-[7px] px-[15px] rounded-md">
                    <input
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      type="text"
                      name=""
                      id="username"
                      placeholder="Enter username"
                      className=" outline-none w-full  rounded-md "
                    />
                    <button className=" bg-[#29A744] w-fit px-4 lg:px-2 xl:px-4 py-1 lg:py-0 xl:py-1 text-white rounded-md">
                      Save
                    </button>
                  </div>
                  <p className="text-[14px] text-[#626262]">
                    You can change your username only once
                  </p>
                  <div className="w-fit flex flex-row gap-2 items-center border rounded-md p-2 bg-gray-100 text-[14px]">
                    <label
                      htmlFor="fileInput"
                      className="cursor-pointer flex items-center"
                    >
                      <input id="fileInput" type="file" className="hidden" />
                      Upload image
                    </label>
                    <FiUpload className="text-[#29A744]" />
                  </div>
                  <p className="text-[12px] font-light text-[#626262]">
                    Upload a nice picture, preferably of yourself. If you upload
                    any explicit or otherwise inappropriate image, we’ll remove
                    it immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-rol border p-2 rounded-md gap-2 items-center py-[11] px-[15] mb-10 bg-gray-100">
            <div>
              <MdInfo className="text-[#29A744] text-[20px]" />
            </div>
            <span className="text-[#626262]">
              It is mandatory to verify your email first in case you have to
              reset or change the phone number.
              <button className="text-[#29A744] hover:text-[#29a744c7]">
                Verify Email
              </button>
            </span>
          </div> */}
        </div>
        <div className="flex flex-col text-[14px] gap-3">
          <label htmlFor="currency" className="font-medium">
            Preferred Currency
          </label>
          <select
            name=""
            id="currency"
            className=" outline-none md:w-1/2 w-full rounded-md px-[15px] py-[11px] border border-gray-400"
          >
            <option selected value="ngn">
              Indian Rupee (INR)
            </option>
            <option value="usd">$USD</option>
            <option value="ngn">NGN</option>
          </select>
          <p style={{ fontWeight: "100" }} className="font-thin text-[#626262]">
            Select which currency your wallet will use
          </p>
        </div>

        <div className="flex flex-col font-medium gap-3">
          <h2 className=" font-medium">Bio</h2>
          <textarea
            type="text"
            placeholder="Your bio appears on your public profile"
            className=" p-2 w-full outline-none border border-gray-400 rounded-md"
            rows={5}
          />
          <p className="text-[#626262]">Maximum 3 lines and 180 characters</p>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
