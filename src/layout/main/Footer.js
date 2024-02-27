import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"

const Footer = () => {
  return (
    <div className="  flex flex-col p-4 pt-12 bg-[#fafff8]  border-t-2 bg-img ">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5  capitalize ">
        <div className=" cll:mx-20 cll:mr-32 lg:py-10 flex flex-row gap-5 justify-start">
          <div className=" ">
            <img src={logo} alt="" className=" w-48" />
          </div>
          <div className="flex flex-col gap-5 items-center">
            <h3 className=" text-xl sm:text-3xl capitalize text-[#4C4D4D] md:text-3xl">
              TRANSFORMING FINANCE ENRICING LIVES
            </h3>
            <p className=" text-base mt-5 text-gray-400">
              PKRD coin holds the power & characteristics for innovation and
              venture growth as quick fix based on digital ecosystem of multiple
              blockchain
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-2 ">
          <div className=" flex flex-col justify-center gap-10">
            <div>
              <h4 className=" text-2xl text-green-600 font-semibold">PKRD</h4>
              <ul className="">
                <li>
                  <Link to='/about-us' className=" text-[#687574] font-inter text-base">
                    About
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to='/how-it-works' className=" text-[#687574] font-sans text-base">
                    Article
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to='/how-it-works' className=" text-[#687574] font-sans text-base">
                    Our coin
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className=" text-2xl text-green-600 font-semibold">Resources</h4>
              <ul>
                <li>
                  <Link className=" text-[#687574] font-sans text-base">
                    News
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link className=" text-[#687574] font-sans text-base">
                    FAQs
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link className=" text-[#687574] font-sans text-base">
                    Whitepaper{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=" flex flex-col gap-10 justify-center">
            <div>
              <h4 className=" text-2xl text-green-600 font-semibold">Company</h4>
              <ul>
                <li>
                  <Link to='/about-us' className=" text-[#687574] font-sans text-base">
                    About us
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to='/contact-us' className=" text-[#687574] font-sans text-base">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link className=" text-[#687574] font-sans text-base">
                    Cookies Settings
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className=" text-2xl text-green-600 font-semibold">Solutions</h4>
              <ul>
                <li>
                  <Link className=" text-[#687574] font-sans text-base">
                    For Individuals
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link className=" text-[#687574] font-sans text-base">
                    For Merchants
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link className=" text-[#687574] font-sans text-base">
                    For Exchanges
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* copyright mark and all */}
      <div className="md:ml-5 xl:mx-20 my-4 flex flex-col md:flex-row">
        <div>
          <p className=" text-[#687574] font-sans text-center">
            Copyright © 2024 pkrd Operations Limited. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
