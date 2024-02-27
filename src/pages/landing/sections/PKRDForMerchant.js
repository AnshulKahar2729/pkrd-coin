import Gradient from "components/_common/Gradient";
import MainLayout from "layout/main";
import React, { useEffect } from "react";

const PKRDForMerchant = () => {

  useEffect(() => { 
    window.scrollTo(0, 0);
    document.title = "PKRD for Merchants - PKRD";
  } ,[]);

  return (
    <MainLayout>
      <div className=" pb-10 mx-2">
        <div>
          <div className=" flex flex-row items-center justify-center gap-10 mb-10 pt-10 ">
            <div className=" hidden lg:block">
              <Gradient />
            </div>
            <h2 className=" text-center text-[#4D4D4C] text-5xl uppercase">
              PKRD for Merchants
            </h2>
            <div className=" hidden lg:block">
              <Gradient />
            </div>
          </div>

          <div className=" xl:mx-52 flex flex-col gap-10">
            <p className=" text-2xl text-gray-500">
              PKRD multidirectional integration supports the Merchants and
              consumer sales purchase cycles because the consumers are confident
              to purchase products, services and enjoy the online gaming
              opportunities. Bringing the billion-dollar crypto market to your
              business For merchants, our PKRD stable coin integrated solutions
              provide clients with a stable and liquid means of digital payment
              as a leverages to block chain-based technology for quick fix and
              volatility free practices.{" "}
            </p>
            <p className=" text-2xl text-gray-500">
              PKRD tokens have been adoption with advanced features increases
              options for payments for real time purchases through our stable
              tokens. The growing number of exchanges and cryptocurrency
              platforms means that PKRD coin is and will provide new
              opportunities to buy sell exciting products and services.
            </p>
          </div>

          <div className=" flex flex-row items-center justify-center gap-10 lg:mb-10 pt-10 ">
            <h2 className=" text-center text-[#4D4D4C] text-3xl uppercase ">
              Benefits for Merchants
            </h2>
          </div>

          <div className=" xl:mx-52 flex flex-col gap-10">
            <div className=" text-2xl text-gray-500">
              PKRD tokens growth is and will be essential ingredient of crypto
              and digital ecosystem to offer new opportunities to business as
              best practices
            </div>
            <div className=" text-2xl text-gray-500 flex flex-col gap-14">
              <div>
                <p className=" text-black text-3xl mb-2">
                  Extraordinary functional liquidity
                </p>
                <p>
                  PKRD Tokens provides progressive functions to perform for
                  traders. It supply large-scale liquidity to enter the exchange
                  efficiently and use the liquids for their trading strength.
                </p>
              </div>
              <div>
                <p className=" text-black text-3xl mb-2">
                  Stability against highly volatile markets
                </p>
                <p>
                  PKRD tokens are stable asset for traders, corporate and
                  professional investors to trade in much more secure manner and
                  trust as compared to other non-stable coins which avoid price
                  fluctuations during times of consolidation and volatility.
                </p>
              </div>
              <div>
                <p className=" text-black text-3xl mb-2">
                  User friendly Simple integration
                </p>
                <p>
                  PKRD comprehensive guidelines and support from our team about
                  integration of PKRD and user friendly designs is highly
                  attractive to expand and develop new markets for your
                  business.
                </p>
              </div>
              <div>
                <p className=" text-black text-3xl mb-2">Innovative design</p>
                <p>
                  PKRD tokens are designed strategically to support multiple
                  blockchain protocols: Algorand, Avalanche, Ethereum, EOS,
                  Liquid Network, Near, Omni, Polygon, Solana, Bitcoin Cash's
                  Standard Ledger Protocol, Statemine, Statemint, Tezos, and
                  Tron
                </p>
              </div>
              <div>
                <p className=" text-black text-3xl mb-2">
                  House for multiple fiat currencies
                </p>
                <p>
                  PKRD coin opens multidirectional opportunities for your
                  business needs by offering multiple fiat currencies— in USD,
                  Euro, Chinese RMB, UAE AED, Indian INR and British Pound.
                </p>
              </div>
              <div>
                <p className=" text-black text-3xl mb-2">
                  Vital alternative to fiat gateways
                </p>
                <p>
                  PKRD transactions are fast and its low fees offer an
                  attractive feature to any exchange while providing a smart
                  alternative to fiat gateways. Its conversion feature to USDT
                  are an exclusive move for merchants to hold diverse types
                  liquidities and not missing any opportunity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PKRDForMerchant;
