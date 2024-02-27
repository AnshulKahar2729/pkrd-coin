import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../../../layout/main/Header";
import Footer from "../../../layout/main/Footer";

const NewsPage = () => {
  const location = useLocation();

  useEffect(() => {
    // console.log(content);
    window.scrollTo(0, 0);
    document.title = `News - PKRD`;
  });

  const paragraphs = location?.state?.content?.split("\n");

  return (
    <>
      {location?.state?.title &&
      location?.state?.date &&
      location?.state?.content &&
      location?.state?.image ? (
        <>
          <div>
            <Header />
            <div className=" lg:px-[15%] lg:pr-[30%] lg:pt-10 bg-white lg:pb-20 md:px-[7.5%]">
              <div className=" lg:text-left mt-10 mx-5 mb-5">
                <h2 className=" lg:text-[2.5rem] text-3xl ">
                  {location?.state?.title}
                </h2>
              </div>
            </div>

            <div className=" bg-[#F9FBFB]">
              <div className=" lg:mx-[15%] lg:mr-[30%] rounded-md lg:pt-20 lg:mb-10 mx-5 md:mx-[7.5%]">
                <img
                  src={location?.state?.image}
                  alt={location?.state?.title}
                  className=" rounded-md"
                />
              </div>

              <div className=" lg:mx-[15%] md:px-[7.5%] lg:mb-5 mx-5 my-5">
                <span className=" lg:text-xl text-lg">
                  By PKRD | {location?.state?.date}
                </span>
              </div>

              <div className=" lg:mx-[15%] md:mx-[7.5%] lg:mr-[30%] lg:flex flex-col gap-3 mx-5 ">
                {paragraphs.map((paragraph, index) => (
                  <>
                    <p
                      className=" lg:text-[1.2rem] text-[#586871] font-sans"
                      key={index}
                    >
                      {paragraph}
                    </p>
                  </>
                ))}
              </div>
            </div>

            <Footer />
          </div>
        </>
      ) : (
        <>
          <Header />
          <div className=" h-screen flex flex-col items-center justify-center">
            <p>404, Page not Found</p>
          <Link to={"/"}> GO HOME</Link>
           
          </div>
        </>
      )}
    </>
  );
};

export default NewsPage;
