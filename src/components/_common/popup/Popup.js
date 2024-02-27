import React, { useEffect, useRef } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { RiListSettingsLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaList } from "react-icons/fa6";

const Popup = ({ isOpen, onClose }) => {
  const popupRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose(!isOpen);
        console.log("Toggle Popup Called");
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={popupRef}
      className={`w-fit overflow-hidden popup ${
        isOpen ? "flex sticky" : "hidden"
      }`}
    >
      <div className="w-fit popup-content">
        <div className="w-fit flex gap-1  overflow-y-auto">
          <div className="w-fit max-h-[300px] flex flex-col gap-1 text-[#000000a7]">
            <Link
              to="/user/profile"
              className="p-4 rounded-md flex items-center gap-2 hover:bg-[#b9ffc85d] cursor-pointer transition-all duration-100"
            >
              <FaRegUserCircle />
              My Profile
            </Link>

            <Link
              to="/user/profile"
              className="p-4 rounded-md flex items-center gap-2 hover:bg-[#b9ffc85d] cursor-pointer transition-all duration-100"
            >
              <RiListSettingsLine />
              Settings
            </Link>

            <Link
              to="/user/my-offer-list"
              className="p-4 rounded-md flex items-center gap-2 hover:bg-[#b9ffc85d] cursor-pointer transition-all duration-100"
            >
              <FaList className="" />
              My Offer List
            </Link>

            <Link
              onClick={() => {
                localStorage.removeItem("authUser");
              }}
              to="/"
              className="p-4 rounded-md flex items-center gap-2 hover:bg-[#b9ffc85d] cursor-pointer transition-all duration-100"
            >
              <LuLogOut />
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
