import UserHeader from "layout/UserHeader";
import React from "react";
import UserProfileImg from "../../assets/images/user-profile.png";
import { Link } from "react-router-dom";
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaRegThumbsDown } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { SlArrowDown } from "react-icons/sl";
import { CiMobile4 } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { IoLocation } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";


const UserProfile = () => {
  const [sidebarShow, setSidebarShow] = React.useState(false);
  return (
    <div>
      <UserHeader setSidebarShow={setSidebarShow} />
      {!sidebarShow && (
        <>
          <div className=" xl:px-24 pt-28 pb-20">
            {/* upar wala */}
            <div className=" grid xl:grid-cols-12 xl:col-span-1 gap-10  xl:mx-0 mx-4">
              {/* profile photo and bitcoin */}
              <div className=" flex flex-col gap-10 xl:col-span-2">
                <div className=" flex items-center justify-center">
                  <img src={UserProfileImg} alt="" className=" rounded-full" />
                </div>
                <div className=" w-full">
                  <Link
                    className=" border border-green-600  text-center rounded-md px-5 py-2 w-full inline-block"
                    to={"/wallet"}
                  >
                    Send PKRD
                  </Link>
                </div>
              </div>

              {/* right hand side info */}
              <div className=" w-full  flex xl:flex-row justify-between flex-col gap-10 xl:col-span-10">
                <div>
                  <div className=" pb-10">
                    <h2 className=" text-3xl">{JSON.parse(localStorage.getItem("authUser"))?.body?.username}</h2>
                   {/*  <p className=" flex flex-row gap-4 mt-4">
                      <span className=" text-green-600 font-sans">Trust</span>
                      <span className=" text-green-600 font-sans">Block</span>
                    </p>
                    <p className=" text-gray-500 font-sans mt-3 flex flex-row gap-4 items-center">
                      <IoMdEye className=" text-green-600 text-lg"/>
                      Seen 2 hours ago
                    </p> */}
                  </div>

                  <div className=" flex flex-col xl:flex-row gap-10">
                    {/* positive feedback */}
                    <div className=" bg-green-50 flex flex-row gap-10 justify-between p-4 rounded-md">
                      <div>
                        <p className=" text-green-600">+223</p>
                        <p>Positive feedback</p>
                      </div>
                      <div>
                        <FaRegThumbsUp className=" text-green-600" />
                      </div>
                    </div>
                    {/* negative feedback */}
                    <div className=" bg-red-50 flex flex-row gap-10 justify-between p-4 rounded-md">
                      <div>
                        <p className=" text-red-600">-0</p>
                        <p>Positive feedback</p>
                      </div>
                      <div>
                        <FaRegThumbsDown className=" text-red-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* social icons */}
               {/*  <div className=" flex flex-row gap-5 xl:justify-normal justify-center">
                  <FaTwitterSquare className=" xl:text-4xl text-6xl  text-[#55ACEE]" />
                  <IoLogoFacebook className=" xl:text-4xl text-6xl  text-[#3B5899]" />
                  <IoMail className=" xl:text-4xl text-6xl  text-[#454445]" />
                </div> */}
              </div>
            </div>

            {/* niche wala */}
            <div className=" mt-10 grid xl:grid-cols-12 grid-cols-1 gap-10 xl:mx-0 mx-4">
              <div className=" xl:col-span-2 flex flex-col gap-10">
                <div>
                  <div className=" bg-gray-50 border border-gray-300 rounded-t-md p-2 px-4">
                    <h2 className=" text-xl">Verifications</h2>
                  </div>
                  <div className=" border p-2 px-4 rounded-b-md  border-x-gray-300 flex flex-col gap-4">
                    <div className=" flex flex-row gap-4 items-center">
                      <CiMobile4 className=" text-green-600 text-xl"/>
                      Phone verified
                    </div>
                    <div className=" flex flex-row gap-4 items-center">
                      <CiMail className=" text-green-600 text-xl"/>
                      Email verified
                    </div>
                    <div className=" flex flex-row gap-4 items-center">
                      <RxAvatar className=" text-green-600 text-xl"/>
                      ID verified
                    </div>
                    <div className=" flex flex-row gap-4 items-center">
                      <IoLocation className=" text-green-600 text-xl"/>
                      Address verified
                    </div>
                  </div>
                </div>

                <div>
                  <div className=" bg-gray-50 border border-gray-300 rounded-t-md p-2 px-4">
                    <h2 className=" text-xl">Info</h2>
                  </div>
                  <div className=" border p-2 px-4 rounded-b-md  border-x-gray-300 flex flex-col gap-4">
                    <div className=" text-gray-700 font-sans text-sm">
                      Location: India
                    </div>
                    <div className=" text-gray-700 font-sans text-sm">
                      Languages:{" "}
                    </div>
                    <div className=" text-gray-700 font-sans text-sm">
                      <span className=" font-bold text-black">133</span> Trade
                      partners
                    </div>
                    <div className=" text-gray-700 font-sans text-sm">
                      <span className=" font-bold text-black">245</span> Trades
                    </div>
                    <div className=" text-gray-700 font-sans text-sm">
                      Trade volume :{" "}
                      <span className=" font-bold text-black">
                        0 PKRD
                      </span>{" "}
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className=" xl:col-span-10 flex flex-col gap-10 ">
                <div className=" border border-gray-300 rounded-md">
                  <div className=" p-6 border-b border-gray-300 flex justify-between items-center px-8">
                    <h2 className=" text-xl ">Active offers</h2>
                    <SlArrowDown />
                  </div>
                  <div className=" px-8 py-6">a</div>
                </div>
                <div className=" border border-gray-300 rounded-md">
                  <div className=" p-6 border-b border-gray-300 flex justify-between items-center px-8">
                    <h2 className=" text-xl ">Feedback</h2>
                    <SlArrowDown />
                  </div>
                  <div className=" px-8 py-6">a</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfile;
