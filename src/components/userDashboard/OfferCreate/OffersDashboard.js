import React, { useEffect, useState } from "react";
import OfferCard from "./OfferCard";
import Footer from "components/_common/copyWritefooter/Footer";
import Pagination from "components/_common/pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getBids } from "store/actions";

function OffersDashboard() {
  document.title = "Offers List";
  const dispatch = useDispatch();

  const { loading, bids, error, paginatedData } = useSelector(
    (state) => state.getBids
  );
  const auth = JSON.parse(localStorage.getItem("authUser"))
  const [myBids, setMyBids] = useState([]);
  const [filterData, setFilterData] = useState({
    limit: 5,
    sort: 0,
    currentPage: 1,
    user_id: auth?.body?._id || ''
  });

  // Fetch active bids list
  const fetchBidsList = () => {
    try {
      dispatch(
        getBids(`limit=${filterData?.limit}&page=${filterData?.currentPage}&user_id=${filterData?.user_id}`, (response) => {
          if (response.code === 200) {
            setMyBids(response?.body)
          }
        })
      );
    } catch (error) {
      // Handle error
    }
  }
  useEffect(() => {
    fetchBidsList();
  }, [filterData]); // Trigger fetchBidsList when filterData changes

  const handlePageChange = (page) => {
    setFilterData((prevData) => ({
      ...prevData,
      currentPage: page
    }));
  };


  return (
    <div className="flex-1 w-full mt-14 xl:mt-0 ">
      <div className="w-full px-2 cmlg:px-[4%] pb-10 cll:flex-row cll:mx-0 flex flex-col ">
        <div className="w-full mt-28 flex flex-col gap-1 ">
          <div className=" mb-5 ">
            <h2 className=" text-[#216c31] text-4xl">My Offers</h2>
          </div>
          <div
            className="w-full overflow-x-scroll offers-scrollbar"
          >
            <table className="min-w-[1409px] w-full overflow-x-scroll">
              <tr className="w-full py-3 rounded-t-lg text-sm sm:text-xl font-semibold text-nowrap bg-[#29A744] text-white grid grid-cols-5">
                <th>Offers</th>
                <th>Offer Type</th>
                <th>Profit Percentage </th>
                <th>Status</th>
                <th>More Details</th>
              </tr>
              {
                myBids?.data?.length <= 0
                  ?
                  <tr><td>No Record Found</td></tr>
                  :
                  myBids?.data?.map((myBid, index) => (
                    <tr key={index} className="border-b">
                      <OfferCard myBid={myBid} key={index} />
                    </tr>
                  ))
              }
            </table>
            <div className="w-full justify-center flex sm:p-4">
              <div className=" flex mt-5 justify-center mr-5">
                <Pagination
                  paginatedData={paginatedData}
                  setCurrentPage={handlePageChange}
                  currentPage={filterData.currentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffersDashboard;
