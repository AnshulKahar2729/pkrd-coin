import React from "react";

const Footer = () => {
  return (
    <div className="  flex flex-col p-4 bg-white  border-t-2">
      {/* copyright mark and all */}
      <div className="md:ml-5 flex flex-col md:flex-row">
        <div className="w-full">
          <p className=" text-sm sm:text-base text-[#687574] font-sans text-center">
            Copyright © 2024 pkrd Operations Limited.<br className="block sm:hidden"/> All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
