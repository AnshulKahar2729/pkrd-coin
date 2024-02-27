import React, { useEffect, useState } from "react";
import UserHeader from "../../layout/UserHeader";
import TradeHistory from "components/userDashboard/Trade/TradeHistory";
import DashboardCard from "components/userDashboard/DashboardCard";
import NewsDashboard from "components/userDashboard/news/NewsDashboard";
import UserSidebar from "components/userDashboard/_sidebar/UserSidebar";
import Footer from "components/_common/copyWritefooter/Footer";
import { useDispatch, useSelector } from "react-redux";
import { createWallet, fetchWallet } from "store/actions";
import Modal from "components/_common/modal/Modal";
import CreateWalletModal from "components/userDashboard/Wallet/CreateWalletModal";

const UserDashboard = () => {
  const [sidebarShow, setSidebarShow] = React.useState(false);
  const [dashboardShow, setDashboardShow] = React.useState(true);
  const [tradeHistoryShow, setTradeHistoryShow] = React.useState(false);
  const [newsShow, setNewsShow] = React.useState(false);
  const [createWalletShowModal, setCreateWalletShowModal] = useState(false);
  const dispatch = useDispatch();
  const { wallet, error, loading } = useSelector((state) => state.walletReducer);

  useEffect(() => {
    if (wallet?.wallet_address === undefined) {
      dispatch(fetchWallet((response) => {
        dispatch(
          fetchWallet((response) => {
            if (response.body && Object.keys(response.body).length > 0) {
            } else if (response.body && Object.keys(response.body).length === 0) {
              setCreateWalletShowModal(true);
            }
          })
        );
      }));
    }

  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="  header ">
        <UserHeader setSidebarShow={setSidebarShow} />
      </div>

      {!sidebarShow && (
        <div className="flex-1 md:pt-28 pt-6 bg-[#F8F8F8]">


          <div className=" lg:px-24 px-3 grid lg:grid-cols-8 grid-cols-1 lg:gap-10 ">

            <div className=" col-span-2 flex flex-col lg:m-0 mb-5">
              <UserSidebar
                setTradeHistoryShow={setTradeHistoryShow}
                setDashboardShow={setDashboardShow}
                setNewsShow={setNewsShow}
                newsShow={newsShow}
                dashboardShow={dashboardShow}
                tradeHistoryShow={tradeHistoryShow}
              />
            </div>

            <div className=" col-span-6">
              {tradeHistoryShow && (
                <>
                  <TradeHistory />
                </>
              )}

              {dashboardShow && (
                <>
                  <DashboardCard />
                </>
              )}

              {newsShow && (
                <>
                  <NewsDashboard />
                </>
              )}
            </div>
          </div>


          {createWalletShowModal === true && (
            <Modal
              className={
                "rounded-md bg-[#F7F6F6] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              }
              setShowModal={setCreateWalletShowModal}
            >
              <CreateWalletModal setCreateWalletShowModal={setCreateWalletShowModal} />
            </Modal>
          )}




        </div>


      )}

      <Footer />
    </div>
  );
};

export default UserDashboard;

// ${window.location.href.includes("/user-dashboard") ? "bg-[#29a644df]" : " "}
