import Gradient from "components/_common/Gradient";
import MainLayout from "layout/main";
import React, { useEffect } from "react";

const PKRDBackgroundPage = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
    document.title = "PKRD Background - PKRD";
  },[])

  return (
    <MainLayout>
      <div className="">
        {" "}
        <div className=" xl:mx-52 mx-5 flex flex-row items-center justify-center gap-10 lg:mb-10 pt-10 ">
          <div className=" lg:block hidden">
            {" "}
            <Gradient />
          </div>
          <h2 className=" text-center text-[#4D4D4C] text-5xl ">
            PKRD FIGHTING AGAINST MAJOR GLOBAL CHALLENGES
          </h2>
          <div className=" lg:block hidden">
            {" "}
            <Gradient />
          </div>
        </div>
        <div className=" xl:mx-52 flex flex-col gap-10 pb-10 mx-5">
          <p className=" text-2xl text-gray-500">
            With the intensification of globalization dynamics, risks to the
            economic financial stability of the international system have grown
            to the extent that formerly localized threats are no longer locally
            containable. Ethnic conflicts, infectious diseases, wars, climate
            change, pollution, food and energy insecurity, inflation, and other
            pressing threats, are increasingly threatening global economic
            financial security and stability, prompting doubts about the ability
            of the current global governance order to respond to the challenges
            plaguing the 21st century.
          </p>
          <p className=" text-2xl text-gray-500">
            Following these global concerns, PKRD stable coin is established to
            conclude a rational response and preparedness plan to counter some
            of the global challenges like environment protection and climate
            change therein PKRD crypto platform is able to contribute fully as
            front line model for others to follow up while holding sustainable
            growth and return to our investors.
          </p>
          <p className=" text-2xl text-gray-500">
            PKRD crypto ecosystem is dedicated to facilitate the awareness for
            global environmental and go green piolet project for true
            operational quality. how to foster the development of renewable
            energy communities and other smaller actors, improve the resilience
            of the clean energy system and strengthen the existing security of
            supply provisions, contribute to tackling high energy prices,
             reduction or removal of greenhouse gases, including renewable
            energy and energy efficiency, support to clean mobility, the
            acquisition of clean vehicles and retrofitting of vehicles, as well
            as for the deployment of recharging and refuelling
            infrastructure, increase the level of resource efficiency of
            companies for protection and restoration of biodiversity and the
            rehabilitation of natural ecosystems and the implementation of
            nature-based solutions etc.
          </p>
          <p className=" text-2xl text-gray-500">
            PKRD stable coin supports and campaign for GO Green knowledge based
            project with tactical and strategic phases for quality operational
            value, mitigating the financial and political risks, optimising the
            process of productivity and profitability based on advanced crypto
            technology and material sciences through dynamic process model to
            achieve green and clean energy, fuel and environment. Five percent
            of our profitability is direct contribution to awareness of GO Green
            Projects.
          </p>
          <p className=" text-2xl text-gray-500">
            These awareness campaigns backed by PKRD ecosystem are meant to
            broaden the categories of investments and technologies that can
            support to cover new areas of clean mobility, infrastructure,
            resource efficiency, biodiversity and all technologies that can
            deliver the Green Deals for renewable, solar wind and hydro energy,
            hydrogen, electricity storage and demand response, decarbonising
            production processes.{" "}
          </p>
          <p className=" text-2xl text-gray-500">
            This will also include recycling, reduction of toxic, hazardous
            materials and carbon footprint, Conversion of existing private,
            institutions, corporate and state Diesel/Petrol vehicles to EV, All
            fuel stations to run on solar energy, Agriculture Diesel replacement
            with solar and alternative energy and fuel resource.
          </p>
        </div>
        <div className="bg-[#e7efe6] flex items-center justify-center">
          <div className=" flex md:flex-row flex-col gap-10 mx-4 md:pb-32 py-10 md:py-20 ">
            <div className=" bg-white rounded-md w-full xl:max-w-96 p-7 shadow-lg">
              <div className=" flex flex-row justify-between items-start  ">
                <h3 className=" text-[#29A744] font-sans text-3xl font-bold mb-2">
                  Our purpose 
                </h3>
                {/* <RxAvatar className=" text-[#cda961] text-7xl " /> */}
              </div>

              <p className=" text-[#586970] font-sans">
                To protect, improve and restore our Green environment through
                ease of financial capital, transactions and contributions in an
                honest and transparent crypto ecosystem therein diversity emerge
                for prosperity and “Green Planet Again” for our next
                generations. Developing PKRD advanced crypto ecosystem series to
                establish awareness and support innovation through knowledge
                based methods for Go Green out of box solutions.
              </p>
            </div>
            <div className=" bg-white rounded-md w-full xl:max-w-96 p-7 shadow-lg">
              <div className=" flex flex-row justify-between items-start  ">
                <h3 className=" text-[#29A744] font-sans text-3xl font-bold mb-2">
                  Our vision
                </h3>
                {/* <AiOutlineShopping className=" text-[#cda961] text-7xl " /> */}
              </div>

              <p className=" text-[#586970] font-sans">
                We live with advanced, sustainable financial supply and trading
                with cheaper instant transactions in a healthy and intelligent
                environment that is valued and protected by all to fund Go Green
                Global Projects, Green life and food style. Additionally, we
                establish a central role of PKRD project for international
                trade, investment as a systematic and scientific approach for
                private and corporate identities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PKRDBackgroundPage;
