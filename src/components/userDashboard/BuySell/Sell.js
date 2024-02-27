import React, { useEffect, useState } from "react";
import BuySellSidebar from "../_sidebar/BuySell";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { BsSortDown } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import SellerCard from "../SellerCard";
import Footer from "components/_common/copyWritefooter/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getBids } from "store/actions";
import ToolTip from "components/_common/ToolTip";
import Pagination from "components/_common/pagination/Pagination";

const SellerDashboard = () => {
  const [showToolTip, setShowToolTip] = useState(false);
  document.title = "Seller Dashboard";
  const dispatch = useDispatch();
  const [showHoverPopup, setShowHoverPopup] = useState(false);
  const { loading, bids, error, paginatedData } = useSelector(
    (state) => state.getBids
  );
  const [sellerBids, setSellBids] = useState([]);
  const [filterData, setFilterData] = useState({
    limit: 5,
    sort: 0,
    currentPage: 1,
    bidType: 1,
    amount: "",
    paymentMethod: "",
    currency: "",
  });

  // Fetch active bids list
  const fetchSellBidsList = () => {
    try {
      dispatch(
        getBids(
          `sort=${filterData?.sort}&limit=${filterData?.limit}&page=${filterData?.currentPage}&bidType=${filterData?.bidType}&currency=${filterData.currency}&amount=${filterData.amount}&paymentMethod=${filterData.paymentMethod}`,
          (response) => {
            if (response.code === 200) {
              setSellBids(response?.body);
            }
          }
        )
      );
    } catch (error) {
      // Handle error
    }
  };

  const handlePageChange = (page) => {
    setFilterData((prevData) => ({
      ...prevData,
      currentPage: page,
    }));
  };

  useEffect(() => {
    fetchSellBidsList();
  }, [filterData]); // Trigger fetchSellBidsList when filterData changes

  const onLookFor = (data) => {
    setFilterData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  return (
    <div className=" lg:h-screen flex flex-col lg:flex-row lg:pt-16 w-full ">
      <div className="w-full lg:w-[20%]">
        <BuySellSidebar onLookFor={onLookFor} type="Sell" />
      </div>
      <div className=" w-full lg:flex-1 p-4 overflow-hidden lg:min-h-screen overflow-y-scroll">
        <div className=" mt-5 mb-5 ">
          <h2 className=" text-[#29A645] text-4xl">Sell PKRD.</h2>
        </div>
        <div>
          <p className=" font-sans ">You can trade with UPI also here...</p>
        </div>

        {/* checkbox */}
        <div className=" text-right lg:mr-20 my-2 lg:my-0 lg:mt-5 lg:mb-5 w-full ">
          <input id="buyerCheckbox" type="checkbox" />
          <label className="font-sans" htmlFor="buyerCheckbox">
            &nbsp; Vendors wey dey active for 10 min wey just pass
          </label>
        </div>

        <div className="border-[1px] border-gray-300 rounded-md">
          <table className="  lg:mr-20 rounded-tl-md rounded-tr-md overflow-hidden w-full place">
            <tr className=" py-4 px-4 lg:grid grid-cols-4 bg-[#29A645] hidden text-white ">
              <th className="flex items-center  text-left  ">Sell to</th>
              <th className="flex items-center">Get paid with</th>
              <th className="flex items-center  text-left  ">
                Avg. trade speed
              </th>
              <th className="flex items-center  text-left  justify-end lg:pr-7  ">
                <div className=" flex gap-3 items-center">
                  Price per PKRD
                  <div
                    id="sellQue"
                    onMouseEnter={() => setShowHoverPopup(true)}
                    onMouseLeave={() => setShowHoverPopup(false)}
                    className="cursor-pointer"
                  >
                    <RxQuestionMarkCircled className=" text-white text-xl" />
                  </div>
                  {showHoverPopup && (
                    <ToolTip
                      className={"sellQue"}
                      topDist={130}
                      leftDist={180}
                      text={
                        "The seller sets their own PKRD price based on speed, privacy, and convenience. The rates will vary depending on the payment method."
                      }
                    />
                  )}
                  <div
                    id="sort"
                    onMouseEnter={() => setShowToolTip(true)}
                    onMouseLeave={() => setShowToolTip(false)}
                    onClick={() => {
                      setFilterData((prev) => ({
                        ...prev,
                        sort: prev?.sort === 0 ? 1 : 0,
                      }));
                    }}
                    className=" bg-white  rounded-md py-2  px-2 cursor-pointer hover:bg-gray-200 transition-all "
                  >
                    <BsSortDown className=" text-gray-500 text-lg" />
                  </div>
                  {showToolTip && (
                    <ToolTip
                      topDist={50}
                      leftDist={5}
                      className={"sort"}
                      text={"Sort"}
                    />
                  )}
                  {/* <div className=" bg-white  rounded-md py-2  px-2 ">
                        <AiOutlineInfoCircle className=" text-gray-500 text-lg" />
                      </div> */}
                </div>
              </th>
            </tr>
            {loading ? (
              <div className="flex justify-center items-center h-24">
                <p className="text-2xl text-gray-500">Loading...</p>
              </div>
            ) : error ? (
              <div className="flex justify-center items-center h-24">
                <p className="text-2xl text-gray-500">Error : {error}</p>
              </div>
            ) : sellerBids?.data?.length === 0 ? (
              <div className="flex justify-center items-center h-24">
                <p className="text-2xl text-gray-500">No bids available</p>
              </div>
            ) : (
              sellerBids?.data?.map((bid, index) => (
                <SellerCard key={index} bid={bid} />
              ))
            )}
          </table>
        </div>
        {!loading && !error && sellerBids && (
          <div className=" flex mt-10 lg:mb-20 justify-center mr-5">
            <Pagination
              paginatedData={paginatedData}
              setCurrentPage={handlePageChange}
              currentPage={filterData.currentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerDashboard;
