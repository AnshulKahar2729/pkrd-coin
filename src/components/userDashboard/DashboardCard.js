import React from "react";
import Graph from "./Graph";

const DashboardCard = () => {
  return (
    <div className="h-fit grid grid-cols-1 gap-4">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="w-full flex-1 lg:h-40 bg-white rounded-md border border-gray-400 p-5 xl:p-8">
        <div>
          <p>Account Level : 1</p>
        </div>

        <div>
          <p className="text-gray-500 ">Account Limit : $1000 USD</p>
        </div>
      </div>

      <div className="w-full flex-1 lg:h-40 bg-white rounded-md border border-gray-400 p-5 xl:p-8">
        <div>
          <p className=" text-[#29A744]">You’re Phone Verified</p>
        </div>

        <div>
          <p className="text-gray-500 ">You have verified your phone number.</p>
        </div>
      </div>

      <div className="w-full flex-1 lg:h-40 bg-white rounded-md border border-gray-400 p-5 xl:p-8">
        <div>
          <p className=" text-red-500">2FA Not Enabled</p>
        </div>

        <div>
          <p className="text-gray-500 ">
            Enabling two-factor authentication is great way to secure your
            account.
          </p>
        </div>
      </div>
      </div>

      <div className="w-full">
        <Graph/>
      </div>
    </div>
  );
};

export default DashboardCard;
