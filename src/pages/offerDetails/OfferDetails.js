import Footer from "components/_common/copyWritefooter/Footer";
import UserHeader from "layout/UserHeader";
import React from "react";
import { FaRegThumbsUp } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

function OfferDetails() {
  const [sidebarShow, setSidebarShow] = React.useState(false);
  const status = "Active";

  const location = useLocation();
  const { bidDetails } = location?.state;

  const handleViewDetailClick = () => {};

  return (
    <div className="flex flex-col justify-between min-h-screen w-full">
      <UserHeader setSidebarShow={setSidebarShow} />
      {!sidebarShow && (
        <div className="flex-1 w-full flex flex-col justify-between mt-16 xl:mt-0">
          <div className="w-full md:mt-32 flex flex-col lg:flex-row px-2 sm:px-5 md:px-14 gap-8 lg:gap-0 text-sm sm:text-base">
            <div className="w-full flex flex-col gap-5">
              <span className="text-2xl text-center lg:text-left sm:text-3xl font-semibold">
                List of Bids
              </span>
              <div className="w-full md:pr-5">
                <table className="w-full text-[12px] sm:text-base text-nowrap">
                  <tr className="w-full grid grid-cols-3 cmlg:grid-cols-4 bg-[#29A744] text-white py-3 rounded-t-lg">
                    <th>Image</th>
                    <th>Name of Bidder</th>
                    <th>Status</th>
                    <th className="hidden cmlg:block">Details</th>
                  </tr>
                  <tr className="w-full grid grid-cols-3 cmlg:grid-cols-4  justify-items-center py-2 border-b border-x">
                    <td>
                      <BsPersonCircle className="text-3xl sm:text-5xl text-gray-300" />
                    </td>
                    <td className="flex-1 flex items-center">John Doe</td>
                    <td className="flex-1 flex items-center justify-center bg-[#29A744] text-white rounded-md py-3 w-24 text-center">Active</td>
                    <Link to='/user/my-offer-list/:offerId/bids'><button
                      onClick={handleViewDetailClick}
                      className="flex-1 hidden cmlg:flex items-center py-2 px-6 rounded-lg border-2 hover:bg-gray-200"
                    >
                      View Bids
                    </button></Link>
                  </tr>
                  <tr className="w-full grid grid-cols-3 cmlg:grid-cols-4  justify-items-center py-2 border-b">
                    <td>
                      <BsPersonCircle className="text-3xl sm:text-5xl text-gray-300" />
                    </td>
                    <td className="flex-1 flex items-center">Jane Smith</td>
                    <td className="flex-1 flex items-center justify-center bg-[#c0c0c0] text-black  rounded-md py-3 w-24">Inactive</td>
                    <Link to='/user/my-offer-list/:offerId/bids'><button
                      onClick={handleViewDetailClick}
                      className="flex-1 hidden cmlg:flex items-center py-2 px-6 rounded-lg border-2 hover:bg-gray-200"
                    >
                      View Bids
                    </button></Link>
                  </tr>
                  <tr className="w-full grid grid-cols-3 cmlg:grid-cols-4  justify-items-center py-2 border-b">
                    <td>
                      <BsPersonCircle className="text-3xl sm:text-5xl text-gray-300" />
                    </td>
                    <td className="flex-1 flex items-center">
                      Michael Johnson
                    </td>
                    <td className="flex-1 flex items-center justify-center bg-red-600 text-white rounded-md py-3 w-24">Expired</td>
                    <Link to='/user/my-offer-list/:offerId/bids'><button
                      onClick={handleViewDetailClick}
                      className="flex-1 hidden cmlg:flex items-center py-2 px-6 rounded-lg border-2 hover:bg-gray-200"
                    >
                      View Bids
                    </button></Link>
                  </tr>
                  <tr className="w-full grid grid-cols-3 cmlg:grid-cols-4  justify-items-center py-2 border-b">
                    <td>
                      <BsPersonCircle className="text-3xl sm:text-5xl text-gray-300" />
                    </td>
                    <td className="flex-1 flex items-center">John Doe</td>
                    <td className="flex-1 flex items-center bg-[#29A744] text-white rounded-md py-3">Active</td>
                    <Link to='/user/my-offer-list/:offerId/bids'><button
                      onClick={handleViewDetailClick}
                      className="flex-1 hidden cmlg:flex items-center py-2 px-6 rounded-lg border-2 hover:bg-gray-200"
                    >
                      View Bids
                    </button></Link>
                  </tr>
                  <tr className="w-full grid grid-cols-3 cmlg:grid-cols-4  justify-items-center py-2 border-b">
                    <td>
                      <BsPersonCircle className="text-3xl sm:text-5xl text-gray-300" />
                    </td>
                    <td className="flex-1 flex items-center">Jane Smith</td>
                    <td className="flex-1 flex items-center bg-[#29A744] text-white rounded-md py-3">Inactive</td>
                    <Link to='/user/my-offer-list/:offerId/bids'><button
                      onClick={handleViewDetailClick}
                      className="flex-1 hidden cmlg:flex items-center py-2 px-6 rounded-lg border-2 hover:bg-gray-200"
                    >
                      View Bids
                    </button></Link>
                  </tr>
                </table>
              </div>
              {/* <div className='w-full flex justify-center py-4'><Pagination/></div> */}
            </div>

            <div className="lg:w-96 lg:border-l flex flex-col items-center lg:items-start text-center cmlg:text-left gap-4 py-4 lg:pl-8 lg:mr-32 text-nowrap">
              <span className="text-2xl sm:text-3xl font-semibold">
                Offer details
              </span>
              <div className="grid grid-cols-1 cmlg:pl-0 cmlg:grid-cols-2 lg:grid-cols-1 gap-3 text-nowrap font-medium">
                <span className="">
                  <span className="font-semibold">Offer ID - 1</span>
                </span>
                <span className="flex items-center text-center cmlg:text-left mx-auto cmlg:mx-0 gap-2">
                  <FaRegThumbsUp className=" text-[#29A645]" />
                  12
                </span>
                <span className="">
                  <span className="font-semibold">Created On :</span>{" "}
                  {new Date(bidDetails?.createdAt).toLocaleDateString()}
                </span>
                <span className="">
                  <span className="font-semibold">Expire On :</span> 1 Jan 2025{" "}
                </span>
                <span className="">
                  <span className="font-semibold">Cryptocurrency :</span> PKRD
                  Coin
                </span>
                <span className="">
                  <span className="font-semibold">Preferred Wallet :</span>{" "}
                  {bidDetails?.profitPercentage}
                </span>
                <span className="">
                  <span className="font-semibold">Profit Percentage :</span>{" "}
                  {bidDetails?.profitPercentage} %
                </span>
                <span className="">
                  <span className="font-semibold">Average time : </span>{" "}
                  {bidDetails?.averageTime}{" "}
                  minutes
                </span>
                <span className="">
                  <span className="font-semibold">Min Amount :</span>{" "}
                  {bidDetails?.minAmount} PKRD
                </span>
                <span className="">
                  <span className="font-semibold">Max Amount :</span>{" "}
                  {bidDetails?.maxAmount} PKRD
                </span>
                <div className=" flex flex-row gap-2 items-center">
                  <span className="font-semibold">Status :</span>{" "}
                  <button
                    className={`px-6 py-2 w-fit rounded-lg ${
                      bidDetails?.status === 1
                        ? "bg-[#29A744]  text-white"
                        : "bg-red-600  text-white"
                    } `}
                  >
                    {bidDetails?.status === 1 ? "Active" : "Expired"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      )}
    </div>
  );
}

export default OfferDetails;
