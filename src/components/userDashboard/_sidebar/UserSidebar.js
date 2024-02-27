import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";
import { VscSettings } from "react-icons/vsc";
import { MdDownload } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import { RxDashboard } from "react-icons/rx";
import { IoNewspaperOutline } from "react-icons/io5";

const UserSidebar = ({
  setDashboardShow,
  setTradeHistoryShow,
  setNewsShow,
  newsShow,
  dashboardShow,
  tradeHistoryShow,
}) => {
  const location = useLocation();

  return (
    <div className=" bg-white border border-gray-300 rounded-md p-2  flex flex-col gap-5">
      <Link
        onClick={() => {
          setDashboardShow(true);
          setTradeHistoryShow(false);
          setNewsShow(false);
        }}
        to={"/user-dashboard"}
        className={` ${
          dashboardShow === true && location.pathname === "/user-dashboard"
            ? "text-[#29A645] "
            : " "
        } flex gap-3 items-center text-xl px-4 py-2 `}
      >
        <RxDashboard />
        Dashboard
      </Link>
      <Link
        onClick={() => {
          setDashboardShow(false);
          setTradeHistoryShow(true);
          setNewsShow(false);
        }}
        to={"/user-dashboard"}
        className={` ${
          tradeHistoryShow === true && location.pathname === "/user-dashboard"
            ? "text-[#29A645]  "
            : " "
        } flex gap-3 items-center text-xl px-4 py-2 `}
      >
        <FaArrowTrendUp />
        Trade History{" "}
      </Link>
      <Link
        onClick={() => {
          setDashboardShow(false);
          setTradeHistoryShow(false);
          setNewsShow(true);
        }}
        to={"/user-dashboard"}
        className={` ${
          newsShow === true && location.pathname === "/user-dashboard"
            ? "text-[#29A645]  "
            : " "
        } flex gap-3 items-center text-xl px-4 py-2 `}
      >
        {" "}
        <IoNewspaperOutline className="" />
        News
      </Link>
      <Link
        to={"/account"}
        className={` ${
          location.pathname === "/account" ? "text-[#29A645]  " : " "
        } flex gap-3 items-center text-xl px-4 py-2 `}
      >
        {" "}
        <VscSettings className=" rotate-90" /> Account
      </Link>
    </div>
  );
};

export default UserSidebar;
