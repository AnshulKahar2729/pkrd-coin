import Gradient from 'components/_common/Gradient'
import MainLayout from 'layout/main'
import React, { useEffect } from 'react'

const PKRDForIndividual = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
    document.title = "PKRD for Individuals - PKRD";
  },[])

  return (
    <MainLayout>
    <div className=" pb-10 mx-2">
      <div>
        <div className=" flex flex-row items-center justify-center gap-10 mb-10 pt-10 ">
          <div className=" hidden lg:block">
            <Gradient />
          </div>
          <h2 className=" text-center text-[#4D4D4C] text-5xl uppercase">
            PKRD for Individuals
          </h2>
          <div className=" hidden lg:block">
            <Gradient />
          </div>
        </div>

        <div className=" xl:mx-52 flex flex-col gap-10">
          <p className=" text-2xl text-gray-500">
            KRD tokens offer exceptional liquidity on exchanges for traders to
            perform as quick fix and provide the ability to take all possible
            advantage of opportunities in the fastest time possible.
          </p>
          <p className=" text-2xl text-gray-500">
            PKRD tokens provide the functional activity of a blockchain
            science without the volatility to mitigate risks which are
            typically associated with cryptocurrencies.
          </p>
        </div>

        <div className=" flex flex-row items-center justify-center gap-10 mb-10 pt-10 ">
          <h2 className=" text-center text-[#4D4D4C] text-3xl uppercase ">
            Benefits for Individuals
          </h2>
        </div>

        <div className=" xl:mx-52 flex flex-col gap-10">
          <div className=" text-2xl text-gray-500">
            PKRD tokens provide an advanced trading and investment space of
            important benefits.
          </div>
          <div className=" text-2xl text-gray-500 flex flex-col gap-14">
            <div>
              <p className=" text-black text-3xl mb-2">
                Availability to use{" "}
              </p>
              <p>
                PKRD tokens can be used at exchanges in an innovative
                ecosystem built around PKRD.
              </p>
            </div>
            <div>
              <p className=" text-black text-3xl mb-2">Quick transfers</p>
              <p>
                PKRD can be transferred as Fast transfers across the world
                without any worry of traditional banking delays.
              </p>
            </div>
            <div>
              <p className=" text-black text-3xl mb-2">
                Volatility Reduction
              </p>
              <p>
                PKRD are designed, pegged and developed for a progressive
                ecosystem to minimize the chances of the decreasing value of
                your digital assets.
              </p>
            </div>
            <div>
              <p className=" text-black text-3xl mb-2">
                Multiple fiat currencies options
              </p>
              <p>
                PKRD tokens are available in USD, Euro, Chinese RMB, UAE AED,
                Indian INR and British Pound to create comfort for individuals
                and better accommodate your needs.
              </p>
            </div>
            <div>
              <p className=" text-black text-3xl mb-2">
                Highly competitive fees
              </p>
              <p>
                PKRD fees are highly competitive for user to Move small or big
                amounts at low cost.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
  )
}

export default PKRDForIndividual
