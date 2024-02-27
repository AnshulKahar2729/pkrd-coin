import React, { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { RiListSettingsLine } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";

const Popup2 = ({ isOpen, onClose, className }) => {
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



  const [top, setTop] = useState(-2000);
  const [left, setLeft] = useState(-2000);

  useEffect(() => {
    const updatePosition = () => {
      const divElement = document.getElementById(className);
      if (divElement) {
        const rect = divElement.getBoundingClientRect();
        setTop(rect.top + 30);
        setLeft(rect.left - 10);
      }
    };
    updatePosition(); // Initial position calculation

    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    
      <div
      ref={popupRef}
      style={{ position: "absolute", top: top, left: left }}
      className="hidden md:block bg-white border shadow-md max-w-72 p-2 rounded-md"
    >
      <div className="w-fit ">
        <div className="w-fit flex gap-1  overflow-y-auto">
          <div className="w-fit max-h-[300px] flex flex-col gap-1 text-[#000000a7]">
            <Link
              to="/buyer"
              className="p-4 rounded-md flex items-center gap-2 hover:bg-[#b9ffc85d] cursor-pointer transition-all duration-100"
            >
              <FaRegUserCircle />
              <span>Buy PKRD</span>
            </Link>
            <Link
              to="/seller"
              className="p-4 rounded-md flex items-center gap-2 hover:bg-[#b9ffc85d] cursor-pointer transition-all duration-100"
            >
              <RiListSettingsLine />
              <span>Sell PKRD</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup2;
