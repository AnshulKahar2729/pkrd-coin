import MainLayout from "layout/main";
import React, { useEffect } from "react";
import PKRDImage from "../../../assets/images/logo.png";

const AboutUs = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
    document.title = "About Us - PKRD";
  },[])

  return (
    <div>
      <MainLayout>
        <div className=" lg:pt-20 pt-5 md:mx-[15%] mx-5  mb-10">
          <p className=" lg:text-5xl text-black text-2xl text-center">
            <span className="custom-heading">ABOUT PKRD COIN AND IT'S TEAM</span>
          </p>
        </div>

        <div className=" flex flex-col md:mx-[15%] px-3 sm:mx-5 gap-5 mb-5">
          <div className=" grid md:grid-cols-3 grid-cols-1 gap-5 ">
            <div className=" col-span-1 flex justify-center items-center">
              <div>
                <img src={PKRDImage} className="" alt="" />
              </div>
            </div>
            <div className=" col-span-2">
              <p className=" text-gray-600 text-xl leading-8">
                PKRD crypto ecosystem is dedicated to facilitate the awareness
                for global environmental and go green piolet project for true
                operational quality. how to foster the development of renewable
                energy communities and other smaller actors, improve the
                resilience of the clean energy system and strengthen the
                existing security of supply provisions, contribute to tackling
                high energy prices, reduction or removal of greenhouse gases,
                including renewable energy and energy efficiency, support to
                clean mobility, the acquisition of clean vehicles and
                retrofitting of vehicles, as well as for the deployment of
                recharging and refuelling infrastructure, increase the level of
                resource efficiency of companies for protection and restoration
                of biodiversity and the rehabilitation of natural ecosystems and
                the implementation of nature-based solutions etc.
              </p>
            </div>
          </div>

          <p className=" text-gray-600 text-xl leading-8">
            PKRD stable coin supports and campaign for GO Green knowledge based
            project with tactical and strategic phases for quality operational
            value, mitigating the financial and political risks, optimising the
            process of productivity and profitability based on advanced crypto
            technology and material sciences through dynamic process model to
            achieve green and clean energy, fuel and environment. Five percent
            of our profitability is direct contribution to awareness of GO Green
            Projects.
          </p>

          <p className=" text-gray-600 text-xl leading-8">
            PKRD founders and team are an intelligent combination of individuals
            with intensive diverse financial and trading experiences, knowledge
            based methods and out of box solutions in a unique working system.
          </p>
          <p className=" text-gray-600 text-xl leading-8">
            As a strong development, our team ensures that the PKRD coin is
            technically sound, secure, stable and capable of achieving its
            goals. PKRD team members have experience in the relevant fields,
            such as block chain development, cryptography, or software
            engineering with years of experience working on successful
            cryptocurrency projects.
          </p>

          <p className=" text-gray-600 text-xl leading-8">
            Our PKRD team have a diverse set of skills, including programming
            languages, software development methodologies, and experience with
            distributed systems. It holds a clear vision for the innovative PKRD
            stable cryptocurrency project, including its goals, roadmap, and
            target audience to articulate their vision clearly and convincingly.
            Our team at all levels are transparent and open in their
            communication, and are engage with our PKRD community. The
            development team have the backing of reputable investors or
            companies, which can provide financial and technical resources to
            our operational quality and future expansions
          </p>
        </div>
      </MainLayout>
    </div>
  );
};

export default AboutUs;
