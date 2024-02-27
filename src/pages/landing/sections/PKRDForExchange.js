import Gradient from "components/_common/Gradient";
import MainLayout from "layout/main";
import React, { useEffect } from "react";

const PKRDForExchange = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
    document.title = "PKRD for Exchanges - PKRD";
  } ,[])

  return (
    <MainLayout>
      <div className=" pb-10 mx-2">
        <div>
          <div className=" flex flex-row items-center justify-center gap-10 lg:mb-10 pt-10 ">
            <div className=" hidden lg:block">
              <Gradient />
            </div>
            <h2 className=" text-center text-[#4D4D4C] text-5xl uppercase">
              PKRD for Exchanges
            </h2>
            <div className=" hidden lg:block">
              <Gradient />
            </div>
          </div>

          <div className=" xl:mx-52 flex flex-col gap-10">
            <p className=" text-2xl text-gray-500">
              PKRD tokens with its strategic use and demand will play a vital
              role in the digital token ecosystem.
            </p>
            <p className=" text-2xl text-gray-500">
              PKRD tokens are actively traded through famous exchanges, because
              of its availability in most famous currencies USD, Euro, Chinese
              RMB, UAE AED, Indian INR and British. Its liquidity to perform
              trades across various exchanges and tokens integration offers
              attractive functionality for traders that’s why? It has the
              ability for large-scale liquidity to enter the exchange
              efficiently while each token built on various block chains. These
              tokens are listed on famous exchanges, OTC desks and wallets.
            </p>
            <p className=" text-2xl text-gray-500">
              PKRD tokens enable you to store, send, and receive digital tokens
              pegged to the U.S. dollar in an instant and at a fraction of the
              cost of many alternatives. PKRD tokens are easily convertible to
              USDT. Our advance technology of multiple block chain offers easy
              integration and adaptations with fast traction and lower fess. It
              provides smart alternative to fiat gateway.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PKRDForExchange;
