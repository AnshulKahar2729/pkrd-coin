import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineStock } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";


const content = [
  {
    title : 'PKRD for Individuals',
    para : 'PKRD tokens offer exceptional liquidity on exchanges for traders to perform as quick fix and provide the ability to take all possible advantage of opportunities in the fastest time possible.',
    icon : <RxAvatar/>
  },
  {
    title : 'PKRD for Merchants',
    para : 'PKRD multidirectional integration supports the Merchants and consumer sales purchase cycles because the consumers are confident to purchase products, services .',
    icon : <AiOutlineStock/>
  },
  {
    title : 'PKRD for Exchanges',
    para : 'PKRD tokens with its strategic use and demand will play a vital role in the digital token ecosystem. PKRD tokens are actively traded through famous exchanges because of its availability .',
    icon : <AiOutlineShopping/>
  },
]

const PKRDFor = ({page}) => {
  return (
    <div
      className={`${page === "landingPage" ? "bg-[#fafff8]" : "bg-[#29A744]"}`}
    >
      <div className=" text-center xl:mx-[30%] mx-4 md:pt-20 pt-5">
        {" "}
        <h2 className={`${page === "landingPage" ? "text-[#000000]" : "text-white"} mb-3 sm:mb-10 sm:mt-10  font-semibold text-3xl sm:text-4xl text-black font-inter`}>
          The token that is disrupting the global financial industry
        </h2>
      </div>

      <div className=" grid grid-cols-1 gap-3 md:grid-cols-3 xl:mx-[10.5%] mx-4 md:pb-32 pb-16">
        {content.map((item) => (
          <div className={`${page === "landingPage" ? "bg-white" : "bg-[#ffffff1b]"}  rounded-md flex flex-col justify-between w-full xl:max-w-[360px] p-7 shadow-lg card-main hover:scale-105 transition-all duration-300`}>
            <div className=" flex flex-row justify-between items-start mb-3">
              <h3 className={`${page === "landingPage" ? "text-[#29A744]" : "text-[#ffffff]"}  text-3xl font-bold `}>
                {item.title}
              </h3>
              <div className={`${page === "landingPage" ? "text-[#cda961]" : "text-[#8cf8a4]"}   text-7xl card-icon`} >{item.icon}</div>
            </div>

            <p className={` ${page === "landingPage" ? "text-[#586970]" : "text-[#ffffff]"}  text-sm leading-6 `}>{item.para}</p>

            <Link
              to={"/pkrd-for-individuals"}
              className={`${page === "landingPage" ? "text-[#cda961]" : "text-[#8cf8a4]"} flex gap-2  hover:underline items-center font-sans`}
            >
              Learn more <FaArrowRightLong />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PKRDFor;
