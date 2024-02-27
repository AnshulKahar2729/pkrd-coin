import LatestNews from "components/landing/sections/LatestNews";
import NewsCard from "components/landing/sections/NewsCard";
import React from "react";
import newsWallpaper from "assets/images/image__216_.png";
import { Link } from "react-router-dom";

const NewsDashboard = () => {
  return (
    <div>
      <div className=" flex  flex-col pb-12  px-4 ">
        <h1 className=" font-sans font-bold text-3xl mb-10">
          Latest News
        </h1>

        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div
            className=" hover:bg-[#30b3301f] transition-all cursor-pointer latestNewsCard bg-[#F5FBFA] rounded-md overflow-hidden"
            // style={{ width: "541px", height: "407px" }}
          >
            <img src={newsWallpaper} />
            <h1 className=" text-[#29A744] text-lg mx-4 font-bold mt-2 font-sans">
              PKRD Makes Investment into the Academy of Digital Industries
            </h1>
            <p className=" mx-4 font-sans text-base">
              23 December 2023 – Following recent initiatives to promote
              blockchain innovation in Georgia, PKRD today announced that it
              has invested an undisclosed amount into the Series-A investment
              round of Academy of Digital Industries
            </p>

            <div className=" flex flex-row gap-2 items-center mx-4 mt-2 font-sans font-lg text-[#C0A060] font-bold">
              Read more {/* <FaArrowRightLong /> */}
            </div>
          </div>
          <div
            className=" hover:bg-[#30b3301f] transition-all cursor-pointer latestNewsCard bg-[#F5FBFA] rounded-md overflow-hidden"
            // style={{ width: "541px", height: "407px" }}
          >
            <img src={newsWallpaper} alt="img"/>
            <h1 className=" text-[#29A744] text-lg mx-4 font-bold mt-2 font-sans">
              PKRD Makes Investment into the Academy of Digital Industries
            </h1>
            <p className=" mx-4 font-sans text-base">
              23 December 2023 – Following recent initiatives to promote
              blockchain innovation in Georgia, PKRD today announced that it
              has invested an undisclosed amount into the Series-A investment
              round of Academy of Digital Industries
            </p>

            <div className=" flex flex-row gap-2 items-center mx-4 mt-2 font-sans font-lg text-[#C0A060] font-bold">
              Read more {/* <FaArrowRightLong /> */}
            </div>
          </div>
        </div>

        <div className=" mt-10 mb-10">
          <Link to={"/news"} className=" hover:bg-[#c0a0600f] transition-all py-2 px-5 font-sans font-semibold rounded-full text-[#C0A060] border border-[#C0A060]">
            Read all news
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDashboard;
