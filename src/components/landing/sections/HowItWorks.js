import React from "react";
import CirclePKRD from "../../../assets/images/circle.jpeg";
import QuarterPKRD from "../../../assets/images/quarter.jpeg";
import PKRDFor from "./PKRDFor";
import LatestNews from "./LatestNews";

const HowItWorks = () => {
  return (
    <div>
      <div className=" bg-[#f9fbfb] ">
        <div>
          <p className=" py-5 sm:pt-20 px-5 sm:px-[12.5%] text-left md:text-left xl:mr-96 md:pb-40 md:pt-32"> 
            <span className="text-2xl sm:text-3xl md:text-6xl custom-heading">What are PKRD tokens and how do they work?</span>
          </p>
        </div>

        <div className="w-full px-2 sm:px-[12.5%] ">
        <div className=" rounded-md bg-white shadow-lg sm:py-12 px-4 sm:px-16  mb-5">
          <p className="text-[20px] sm:text-2xl mb-5 font-semibold text-[#232323] leading-9">
            PKRD tokens are assets that move across the blockchain just as
            easily as other digital currencies but that are pegged to real-world
            currencies on a{" "}
            <span className=" text-[#C1A160]">1-to-1 basis.</span>
          </p>

          <p className=" text-[#586970] font-thin mb-1 leading-7">
            PKRD tokens are referred to as stablecoins because they offer
            price stability as they are pegged to a fiat currency. This offers
            traders, merchants and funds a low volatility solution when exiting
            positions in the market.
          </p>
          <p className=" text-[#586970] font-thin mb-1">
            All PKRD tokens are pegged at 1-to-1 with a matching fiat currency
            ( e.g., 1 USD₮ = 1 USD ) and are backed 100% by PKRD’s reserves.
          </p>
          <p className=" text-[#586970] font-thin mb-1">
            As a fully <span className=" text-[#29A744]">transparent</span>{" "}
            company, we publish a record of the current reserve assets.
          </p>
        </div>
        </div>

        <div>
          <h2
            className=" text-2xl font-bold text-center mb-10 lg:text-4xl lg:my-20"
            style={{ lineHeight: "34px" }}
          >
            How are PKRD tokens Issued
          </h2>
        </div>

        {/* we need to intergate video over here */}
        <div></div>

        <div className=" bg-[#F7F7F7] grid grid-cols-1 lg:grid-cols-2 lg:mt-40">
          {/* image */}
          <div className=" flex-1">
            <img src={CirclePKRD} alt="" />
          </div>

          <div className=" flex-1 mx-7 lg:py-60 lg:mr-[30%] my-auto">
            <h2 className=" text-2xl mb-5 md:text-4xl xl:mr-[30%]">
              More stability, more growth
            </h2>
            <p
              className=" text-[#586970] text-lg font-sans"
              style={{ fontWeight: "100" }}
            >
              PKRD tokens have grown in popularity over the past few years,
              with a market cap of over US$65 billion (as of September 2022).
              PKRD tokens allow customers the ability to transact across
              different blockchains, without the inherent volatility and
              complexity typically associated with digital tokens.
            </p>
          </div>
        </div>
        <div className=" bg-[#F7F7F7] mx-7 sm:mx-0 flex lg:flex-row gap-4 flex-col-reverse pb-5 ">
          <div className="py-2 md:py-0 flex-1 lg:py-60 lg:ml-[12%] my-auto">
            <h2 className=" text-2xl mb-5 md:text-4xl ">Blockchain ready</h2>
            <p
              className=" text-[#586970] text-lg font-sans"
              style={{ fontWeight: "100" }}
            >
              PKRD tokens exist as digital tokens built on various blockchains
              including Algorand, Avalanche, Ethereum, EOS, Liquid Network,
              Near, Omni, Polygon, Solana, Bitcoin Cash's Standard Ledger
              Protocol, Statemine, Statemint, Tezos, and Tron. Therefore,
              issuance of PKRD tokens is viable on various blockchains with
              varying capabilities depending on the transport protocol used.
            </p>
          </div>

          {/* image */}
          <div className=" flex-1">
            <img src={QuarterPKRD} alt="" />
          </div>
        </div>

        <div className=" bg-[#29a7443f] py-10 px-5 md:py-20 md:px-10 lg:px-36 xl:px-60 ">
          <h3 className=" text-[#29A744] text-3xl mb-5">New Tokens</h3>
          <h4 className=" text-[#687574] text-xl sm:ext-2xl font-sans">
            PKRD only issues new PKRD tokens when they are requested and
            purchased by customers who have followed our strict KYC procedure.
          </h4>
        </div>

        
        <div className="sm:mb-20"><PKRDFor/></div>
        <div className="sm:hopb-20"><LatestNews/></div>
      </div>
    </div>
  );
};

export default HowItWorks;
