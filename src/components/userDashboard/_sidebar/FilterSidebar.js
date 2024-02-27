import Modal from "components/_common/modal/Modal";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const FilterSidebar = ({ setShowFilters }) => {
  const [dropDown1, setDropDown1] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);

  return (
    <Modal
      setShowModal={setShowFilters}
      className={
        "  bg-white  lg:w-[25%] w-[50%] h-screen top-0 right-0 overflow-hidden "
      }
    >
      <div className="flex flex-col gap-5">
        <div className="  bg-[#F7F6F6] flex flex-row justify-between px-6 py-5">
          <h2 className=" text-[14px] font-semibold">Filters</h2>
          <div onClick={() => setShowFilters(false)}>
            <MdClose className="text-xl cursor-pointer" />
          </div>
        </div>

        <div className="">
          {/* <div className=" mb-5">
            <h2 className=" text-2xl">Trade Type</h2>
          </div>

          <div>
            <div className=" flex flex-row items-center gap-3">
              <input type="checkbox" className=" p-2" />
              <p className=" font-sans text-gray-600">Buy</p>
            </div>
            <div className=" flex flex-row items-center gap-3">
              <input type="checkbox" className=" p-2" />
              <p className=" font-sans text-gray-600">Sell</p>
            </div>
          </div> */}
          <details open className="mb-10 px-6">
            <summary
              onClick={() => setDropDown1(!dropDown1)}
              className="text-[14px] font-semibold list-none w-full justify-between flex flex-row"
            >
              Trade Type{" "}
              {dropDown1 ? (
                <RiArrowDropDownLine className="text-[30px] duration-700" />
              ) : (
                <RiArrowDropDownLine
                  className="text-[30px] duration-700"
                  style={{ transform: "rotate(180deg)" }}
                />
              )}
            </summary>
            <div className="text-[14px] flex flex-col gap-2 text-[#6b7280]">
              <div className=" flex flex-row items-center gap-3">
                <input
                  type="checkbox"
                  className=" w-5 h-5  p-2 cursor-pointer focus:ring-[#29A744] focus:ring-2 duration-500 transition-all bg-[#29A744]"
                />
                <p className=" font-sans ">Buy</p>
              </div>
              <div className=" flex flex-row items-center gap-3 ">
                <input
                  type="checkbox"
                  className="w-5 h-5  p-2 cursor-pointer focus:ring-[#29A744] focus:ring-2 duration-500 transition-all bg-[#29A744]"
                />
                <p className=" font-sans ">Sell</p>
              </div>
            </div>
          </details>
          {/* <div className=" my-5">
            <h2 className=" text-2xl">Trade outcome</h2>
          </div>

          <div>
            <div className=" flex flex-row items-center gap-3">
              <input type="checkbox" className=" p-2" />
              <p className=" font-sans text-gray-600">Completed</p>
            </div>
            <div className=" flex flex-row items-center gap-3">
              <input type="checkbox" className=" p-2" />
              <p className=" font-sans text-gray-600">Disputed</p>
            </div>
            <div className=" flex flex-row items-center gap-3">
              <input type="checkbox" className=" p-2" />
              <p className=" font-sans text-gray-600">Expired</p>
            </div>
            <div className=" flex flex-row items-center gap-3">
              <input type="checkbox" className=" p-2" />
              <p className=" font-sans text-gray-600">Cancelled</p>
            </div>
          </div> */}
          <details open className="mb-10 px-6">
            <summary
              onClick={() => setDropDown2(!dropDown2)}
              className="text-[14px] font-semibold list-none w-full justify-between flex flex-row"
            >
              Trade outcome{" "}
              {dropDown2 ? (
                <RiArrowDropDownLine className="text-[30px] duration-700" />
              ) : (
                <RiArrowDropDownLine
                  className="text-[30px] duration-700"
                  style={{ transform: "rotate(180deg)" }}
                />
              )}
            </summary>
            <div className="text-[14px] flex flex-col gap-2 text-[#6b7280]">
              <div className=" flex flex-row items-center gap-3">
                <input
                  type="checkbox"
                  className="w-5 h-5  p-2 cursor-pointer focus:ring-[#29A744] focus:ring-2 duration-500 transition-all bg-[#29A744]"
                />
                <p className=" font-sans ">Completed</p>
              </div>
              <div className=" flex flex-row items-center gap-3">
                <input
                  type="checkbox"
                  className="w-5 h-5  p-2 cursor-pointer focus:ring-[#29A744] focus:ring-2 duration-500 transition-all bg-[#29A744]"
                />
                <p className=" font-sans ">Disputed</p>
              </div>
              <div className=" flex flex-row items-center gap-3">
                <input
                  type="checkbox"
                  className="w-5 h-5  p-2 cursor-pointer focus:ring-[#29A744] focus:ring-2 duration-500 transition-all bg-[#29A744]"
                />
                <p className=" font-sans ">Expired</p>
              </div>
              <div className=" flex flex-row items-center gap-3">
                <input
                  type="checkbox"
                  className="w-5 h-5  p-2 cursor-pointer focus:ring-[#29A744] focus:ring-2 duration-500 transition-all bg-[#29A744]"
                />
                <p className=" font-sans ">Cancelled</p>
              </div>
            </div>
          </details>
        </div>
      </div>
    </Modal>
  );
};

export default FilterSidebar;
