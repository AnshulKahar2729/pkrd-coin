import React from "react";
import CirclePKRD from "../../../assets/images/circle.jpeg";
import QuarterPKRD from "../../../assets/images/quarter.jpeg";
import { ReactComponent as SvgComponent } from "../../../assets/svg/Svg.svg";
import { Link } from "react-router-dom";

const PKRDStatement = () => {
  return (
    <div>
      <div className="  ">
        {/* we need to intergate video over here */}
        <div></div>

        {/* /lg:pt-40 pb-5 lg:px-36  */}
        <div className=" bg-[#fff] flex xl:flex-row flex-col  ">
          {/* image */}
          <div className=" flex-1 my-auto">
            <SvgComponent />
          </div>

          <div className="flex-1 flex">
          <div className="my-auto  px-7 xl:pr-20 flex flex-col gap-4">
            <div className=" flex flex-col">
              <h2 className=" text-2xl pb-5 md:text-3xl font-semibold capitalize ">
                DRIVING THE ADDED VALUE OF MONEY
              </h2>
              <p
                className=" text-gray-500 font-inter text-base "
                style={{ fontWeight: "400" }}
              >
                PKRD tokens are the first stable coins for driving the added
                value for money and sporting the Go Green planet projects
                simultaneously. Its unique features focus on opportunity to grow
                through the digital use of traditional currencies. PKRD tokens
                support and facilitate growing trade and ventures with
                innovative behaviour in the blockchain space. PKRD tokens exist
                as a digital token built on multiple block chains with
                combination of advanced technologies and trading collaborations.
                .
              </p>
            </div>
            <div className=" flex flex-col">
              <h2 className=" text-2xl pb-5 md:text-3xl font-semibold">
                SYSTMATIC STABLE COIN
              </h2>
              <p
                className=" text-gray-500 font-inter text-base "
                style={{ fontWeight: "400" }}
              >
                PKRD coin set benefits from a combination of traditional crypto
                features and new innovative technologies for decentralized
                finance, and tokenized assets (secured money). It secure
                investment and trading options for companies and citizens of
                participating countries, as well as for the entire world while
                advancing to all existing and emerging trading solutions.
              </p>
              <Link
                to={"/how-it-works"}
                className="w-fit mt-2 mb-5 bg-[#29A744] sm:my-2 text-white font-bold transition-all duration-300 border border-[#bdbdbd66] hover:shadow-lg hover:bg-[#2c833f] md:px-8 md:text-base px-5 py-2 rounded-full text-sm xl:px-10 mx-auto cmlg:mx-0 my-2"
              >
                Learn How PKRD works
              </Link>
            </div>
          </div>
        </div>
          
        </div>

        {/* xl:px-36 xl:pt-40*/}
        <div className=" bg-[#F7F7F7] flex xl:flex-row flex-col-reverse ">
          <div className="flex-1 flex items-center">
          <div className=" h-fit px-7 pt-5 sm:pt-0 flex flex-col gap-3 justify-center xl:pl-20">
            <div className="flex flex-col">
              <h2 className=" text-2xl md:text-3xl uppercase font-semibold mb-1">
                100% BACKED AND FULLY TRANSPARENT
              </h2>
              <p
                className=" text-gray-500 font-inter text-base "
                style={{ fontWeight: "400" }}
              >
                All PKRD tokens are pegged at 1-to-1 with a matching fiat
                currency and are backed 100% by PKRD reserves. We publish
                regularly record of the current total assets and reserves. In an
                environment of fast trading and dynamic business PKRD are
                convertible to USDT.
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className=" text-2xl md:text-3xl font-semibold mb-1">
                CONVERSION TO USDT
              </h2>
              <p
                className=" text-gray-500 font-inter text-base "
                style={{ fontWeight: "400" }}
              >
                PKRD has extra ordinary features of flexibility and opportunity
                .The wallet owner can transfer PKRD to USDT and vice versa.
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className=" text-2xl md:text-3xl font-semibold mb-1">
                MULTI PURPOSE FEATURES
              </h2>
              <p
                className=" text-gray-500 font-inter text-base"
                style={{ fontWeight: "400" }}
              >
                PKRD COIN is based on Block chain advanced technology, buy and
                sell trading platform that is being jointly developed by the
                International experts with knowledge based methodologies from
                banking and technological liberaries.it allows traders,
                investors, businesses and consumers to securely and seamlessly
                trade , make and receive payments in the described currency.
              </p>
              <Link
                to={"/how-it-works"}
                className="w-fit mt-2 mb-5 sm:my-2 pt-2 bg-[#29A744] text-white font-bold transition-all duration-300  hover:shadow-lg hover:bg-[#2c833f] md:px-8 md:text-base px-5 py-2 rounded-full text-sm xl:px-10 mx-auto cmlg:mx-0 my-2"
              >
                Learn How PKRD works
              </Link>
            </div>
          </div>
          </div>

          {/* image */}
          <div className=" flex-1">
            <img src={QuarterPKRD} alt="" />
          </div>
        </div>

        <div className=" bg-[#F7F7F7] xl:pt-20 flex xl:flex-row flex-col">
          <div className=" flex-1">
            <img src={CirclePKRD} alt="" />
          </div>

          <div className="flex-1 flex items-center">
          <div className=" h-fit px-7 pt-5 sm:pt-0 xl:pr-20 flex flex-col gap-5 sm:gap-20 xl:gap-2 ">
            <div className=" flex flex-col gap-1">
              <h2 className=" text-2xl pb- md:text-3xl font-semibold">EFFICIENCY</h2>
              <p
                className=" text-gray-500 font-inter text-base"
                style={{ fontWeight: "400" }}
              >
                The PKRD payment system will have low fees, transaction costs
                with fast trading and payment processing times.
              </p>
            </div>
            <div className=" flex flex-col gap-1">
              <h2 className=" text-2xl pb- md:text-3xl font-semibold">SUSTAINABILITY</h2>
              <p
                className=" text-gray-500 font-inter text-base"
                style={{ fontWeight: "400" }}
              >
                PKRD COIN is designed to promote long-term economic stability,
                reducing risks and the resilience of all types of barriers to
                economic development, international trading and value creation
                while supporting Go Green out of box solutions and projects.
              </p>
            </div>
            <div className=" flex flex-col gap-1">
              <h2 className=" text-2xl pb- md:text-3xl font-semibold">
                SYSTEM INTEROPERABILITY
              </h2>
              <p
                className=" text-gray-500 font-inter text-base"
                style={{ fontWeight: "400" }}
              >
                Our system will ensure that clients have access to their
                accounts and funds can move and trade per their instruction
                faster and more securely through multilayers Algorithms of block
                chains .
              </p>
              <Link
                to={"/how-it-works"}
                className="w-fit mt-2 mb-5 sm:my-2 bg-[#29A744] hover:bg-[#2c833f] text-white font-bold transition-all duration-300   md:px-8 md:text-base px-5 py-2 rounded-full text-sm xl:px-10 mx-auto cmlg:mx-0 my-2"
              >
                Learn How PKRD works
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PKRDStatement;
