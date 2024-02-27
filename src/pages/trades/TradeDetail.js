import UserHeader from "layout/UserHeader";
import Footer from "../../components/_common/copyWritefooter/Footer";
import React, { useEffect, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { engageUser, fetchTradeById } from "store/actions";
import { useParams } from "react-router-dom";
import TradeActive from "components/userDashboard/Trade/TradeActive";
import TradeExpired from "components/userDashboard/Trade/TradeExpired";
import TradeCompleted from "components/userDashboard/Trade/TradeCompleted";
import TradeCancelled from "components/userDashboard/Trade/TradeCancelled";

const TradeDetail = () => {
  const [openAlert1, setOpenAlert1] = useState(true);
  const [openAlert2, setOpenAlert2] = useState(true);
  const [sidebarShow, setSidebarShow] = React.useState(false);
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const dispatch = useDispatch();
  const { tradeById } = useSelector((state) => state.tradeReducer);
  const [showEngageModal, setShowEngageModal] = React.useState(false);
  const trade_id = token?.split("-")[0];
  const user_id = token?.split("-")[1];
  const { tradeId: tradeIdParam } = useParams();
  const [auth, setAuth] = useState(false);

  // CODE LOGIC FOR THE PERSON WHO HAS CREATED THE BID.
  useEffect(() => {
    dispatch(
      fetchTradeById(trade_id, (response) => {
        if (response.code === 200) {
          setAuth(true);
          if (
            response?.body?.bid_id?.user_id ===
            JSON.parse(localStorage.getItem("authUser"))?.body?._id &&
            response?.body?.engage_user_id !==
            JSON.parse(localStorage.getItem("authUser"))?.body?._id
          ) {
            dispatch(
              engageUser(`${user_id}/${trade_id}`, (response) => {
                if (response?.code === 200) {
                  console.log(response);
                  setShowEngageModal(true);
                }
              })
            );
          }
        }
      })
    );
  }, []);

  // FOR THE PERSON WHO HAS STARTED THE TRADE.
  useEffect(() => {
    if (auth === false) {
      dispatch(
        fetchTradeById(tradeIdParam, (response) => {
          if (response.code === 200) {
            console.log(response);
          }
        })
      );
    }
  }, [auth]);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <UserHeader setSidebarShow={setSidebarShow} />
      {!sidebarShow && (
        <>
          {/* 1 - active, 0 - expired, 2 - complete, 3- cancelled */}
          {tradeById?.status === 0 && <TradeExpired />}
          {tradeById?.status === 1 && (
            <TradeActive
              setShowEngageModal={setShowEngageModal}
              showEngageModal={showEngageModal}
            />
          )}
          {tradeById?.status === 2 && <TradeCompleted />}
          {tradeById?.status === 3 && <TradeCancelled />}
        </>
      )}
      <Footer />
    </div>
  );
};

export default TradeDetail;
