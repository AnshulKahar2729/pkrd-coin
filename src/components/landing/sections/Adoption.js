import Swipper from "components/_common/Swipper";
import React from "react";

const Adoption = () => {
  return (
    <div className="w-full  sm:py-10">
      <div className="mx-[4%] sm:mx-auto max-w-[500px]">
        <h2 className=" text-center font-bold text-3xl mb-5" >Widespread adoption</h2 >
        <p className=" text-gray-500 text-inter text-base text-center  leading-7">
          From being the first, to the most used, stablecoin, and one of the
          most traded tokens by volume, Tether tokens have come a long way.
          Tether tokens are today the most widely adopted stablecoins across
          major exchanges, OTC desks, and wallets, including:
        </p>
      </div>
      <Swipper />
    </div>
  );
};

export default Adoption;
