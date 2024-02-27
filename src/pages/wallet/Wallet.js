import UserHeader from "layout/UserHeader";
import React, { useEffect, useState } from "react";

import AssetRowCard from "components/userDashboard/Wallet/AssetRowCard";
import HoldingsCard from "components/userDashboard/Wallet/HoldingsCard";

import Tab from "components/userDashboard/Wallet/Tab";
import Footer from "../../components/_common/copyWritefooter/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchWallet } from "store/actions";
import Modal from "components/_common/modal/Modal";
import CreateWalletModal from "components/userDashboard/Wallet/CreateWalletModal";

const Wallet = () => {
  const [sidebarShow, setSidebarShow] = React.useState(false);
  const dispatch = useDispatch();
  const { wallet } = useSelector((state) => state.walletReducer);
  const [createWalletShowModal, setCreateWalletShowModal] = useState(false);


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
      <UserHeader setSidebarShow={setSidebarShow} />
      {!sidebarShow && (
        <>
          <div className="flex-1 bg-[#F8F9F9] pt-10 md:pt-28 px-2 cmlg:px-4 sm:px-12  pb-10">
            <Tab />
            <div className=" flex flex-col gap-10">
              {/* Tab */}

              {/* card holdings */}
              <HoldingsCard />

              {/* assets  */}
              <div className="w-full bg-white rounded-md shadow-sm lg:p-8 p-4 flex flex-col ">
                <h3 className=" text-2xl mb-5 font-bold">Assets</h3>

                <table className="w-full grid grid-cols-1">
                  <tr className="grid grid-cols-2 md:grid-cols-7 text-left text-xl font-semibold ">
                    <th className="col-span-2 hidden md:table-cell">
                      Currency
                    </th>
                    <th className="col-span-2 hidden md:table-cell">Balance</th>
                    <th className="col-span-3 hidden md:table-cell">In $USD</th>
                  </tr>
                  <AssetRowCard />
                </table>
              </div>
            </div>
            {createWalletShowModal && (
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

          <Footer />
        </>
      )}
    </div>
  );
};

export default Wallet;
