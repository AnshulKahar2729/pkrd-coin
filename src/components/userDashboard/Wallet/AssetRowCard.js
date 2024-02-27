import React, { useEffect, useState } from "react";
import { LuLogOut, LuSend } from "react-icons/lu";
import { FiArrowDownRight } from "react-icons/fi";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { BsThreeDots } from "react-icons/bs";
import Modal from "components/_common/modal/Modal";
import SendModal from "./SendModal";
import ReceiveModal from "./ReceiveModal";
import ToolTip from "components/_common/ToolTip";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { RiListSettingsLine } from "react-icons/ri";
import Popup from "components/_common/popup/Popup";
import Popup2 from "components/_common/popup/Popup2";
import { useDispatch, useSelector } from "react-redux";
import { createWallet, fetchWallet } from "store/actions";

const menuArray = [
  {
    name: "Buy PKRD",
    icon: <FaRegUserCircle />,
    link: "/buyer",
  },
  {
    name: "Sell PKRD",
    icon: <RiListSettingsLine />,
    link: "/seller",
  },
];

const AssetRowCard = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showHoverPopup1, setShowHoverPopup1] = useState(false);
  const [showHoverPopup2, setShowHoverPopup2] = useState(false);
  const [showHoverPopup3, setShowHoverPopup3] = useState(false);
  const [showHoverPopup4, setShowHoverPopup4] = useState(false);
  const [sendShowModal, setSendShowModal] = React.useState(false);
  const [receiveShowModal, setReceiveShowModal] = React.useState(false);
  const [createWalletShowModal, setCreateWalletShowModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { wallet } = useSelector((state) => state.walletReducer);
  const { PKRDPrice } = useSelector((state) => state.PKRDPriceReducer);

  useEffect(() => { }, [
    showHoverPopup1,
    showHoverPopup2,
    showHoverPopup3,
    showHoverPopup4,
  ]);

  const createWalletFn = (type) => {
    setCreateWalletShowModal(true);

    dispatch(
      createWallet(
        {
          wallet_address:
            "0x" + JSON.parse(localStorage.getItem("authUser"))?.body?._id,
        },
        (response) => {
          if (response.code === 200) {
            console.log(response);
            setCreateWalletShowModal(false);
            if (type === "send") {
              setSendShowModal(true);
            } else if (type === "receive") {
              setReceiveShowModal(true);
            }
          }
        }
      )
    );
  };

  const handleSendBtnClick = () => {
    dispatch(
      fetchWallet((response) => {
        if (response.body && Object.keys(response.body).length > 0) {
          setSendShowModal(true);
        } else if (response.body && Object.keys(response.body).length === 0) {
          createWalletFn("send");
        }
      })
    );
  };

  const handleReceiveBtnClick = () => {
    dispatch(
      fetchWallet((response) => {
        if (response.body && Object.keys(response.body).length > 0) {
          setReceiveShowModal(true);
        } else if (response.body && Object.keys(response.body).length === 0) {
          createWalletFn("receive");
        }
      })
    );
  };

  return (
    <tr className="grid grid-cols-2 md:grid-cols-7 gap-5 md:gap-0">
      <td className="col-span-2">
        <div className="grid grid-cols-2 sm:grid-cols-1 ">
          <p className="md:hidden block">Currency : </p>
          <p className="font-semibold">PKRD</p>
          <p className="col-span-2 sm:col-span-1 text-sm font-sans text-gray-900 break-words">
            1 PKRD = ${(PKRDPrice)?.toFixed(2)}USD
          </p>
        </div>
      </td>

      <td className="col-span-2 flex md:flex-row justify-start gap-2 text-left items-center">
        <p className="md:hidden block">Balance : </p>
        <div className=" text-sm">{(wallet?.wallet_balance)?.toFixed(2) || 0.00} PKRD</div>
      </td>

      <td className="col-span-3 w-full flex flex-row  justify-start my-5 sm:my-0 ">
        <div className="w-full  border-gray-400  grid grid-cols-3 cmlg:flex cmlg:flex-row justify-between items-center">
          <div
            id="icon1"
            onMouseEnter={() => setShowHoverPopup1(true)}
            onMouseLeave={() => setShowHoverPopup1(false)}
            className="w-10 lg:text-2xl text-[#29A744] hover:text-[#358546] cursor-pointer "
          >
            <LuSend onClick={handleSendBtnClick} />
          </div>
          {showHoverPopup1 && (
            <ToolTip
              topDist={50}
              leftDist={15}
              className={"icon1"}
              text={"Send"}
            />
          )}

          <div
            id="icon2"
            onMouseEnter={() => setShowHoverPopup2(true)}
            onMouseLeave={() => setShowHoverPopup2(false)}
            className="w-10 lg:text-2xl text-[#29A744] hover:text-[#358546] cursor-pointer "
          >
            <FiArrowDownRight
              onClick={handleReceiveBtnClick}
              className=" lg:text-2xl text-[#29A744] cursor-pointer"
            />
          </div>
          {showHoverPopup2 && (
            <ToolTip
              topDist={50}
              leftDist={20}
              className={"icon2"}
              text={"Receive"}
            />
          )}

          <div
            onClick={() => navigate("/exchange")}
            id="icon3"
            onMouseEnter={() => setShowHoverPopup3(true)}
            onMouseLeave={() => setShowHoverPopup3(false)}
            className=" lg:text-2xl text-[#29A744] cursor-pointer "
          >
            <LiaExchangeAltSolid className="lg:text-2xl text-[#29A744] hover:text-[#358546] cursor-pointer" />
          </div>
          {showHoverPopup3 && (
            <ToolTip
              topDist={50}
              leftDist={22}
              className={"icon3"}
              text={"Convert"}
            />
          )}

          <div
            id="icon4"
            onClick={() => setIsPopupOpen(true)}
            onMouseEnter={() => setShowHoverPopup4(true)}
            onMouseLeave={() => setShowHoverPopup4(false)}
            className=" lg:text-2xl text-[#29A744] cursor-pointer text-right lg:text-left "
          >
            <Link
              to="/buyer"
              className=" md:hidden text-nowrap rounded-md flex my-4 items-center gap-2 text-[#29A744] hover:text-[#358546] cursor-pointer transition-all duration-100"
            >
              <FaRegUserCircle />
              <span className="text-sm cmlg:text-base">Buy PKRD</span>
            </Link>
          </div>

          <div
            id="icon4"
            onClick={() => setIsPopupOpen(true)}
            onMouseEnter={() => setShowHoverPopup4(true)}
            onMouseLeave={() => setShowHoverPopup4(false)}
            className=" lg:text-2xl text-[#29A744] cursor-pointer text-left "
          >
            <BsThreeDots className="hidden md:block lg:text-2xl text-[#29A744] cursor-pointer " />
          </div>

          {showHoverPopup4 && !isPopupOpen && (
            <ToolTip
              topDist={50}
              leftDist={-50}
              className={"icon4"}
              text={"More Actions"}
            />
          )}

          {isPopupOpen && (
            <Popup2
              className={"icon4"}
              topDist={-30}
              leftDist={70}
              isOpen={isPopupOpen}
              onClose={setIsPopupOpen}
            />
          )}

          <div
            id="icon4"
            onClick={() => setIsPopupOpen(true)}
            onMouseEnter={() => setShowHoverPopup4(true)}
            onMouseLeave={() => setShowHoverPopup4(false)}
            className=" lg:text-2xl text-[#29A744] cursor-pointer text-right lg:text-left "
          >
            <Link
              to="/seller"
              className="md:hidden text-nowrap rounded-md my-4 flex items-center gap-2 text-[#29A744] hover:text-[#358546] cursor-pointer transition-all duration-100"
            >
              <RiListSettingsLine />
              <span className="text-sm cmlg:text-base">Sell PKRD</span>
            </Link>
          </div>
        </div>
      </td>

      {sendShowModal === true && (
        <Modal
          className={
            "rounded-md bg-[#F7F6F6] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          }
          setShowModal={setSendShowModal}
        >
          {/* ><CreateWalletModal / */}
          <SendModal setSendShowModal={setSendShowModal} />
        </Modal>
      )}
      {receiveShowModal === true && (
        <Modal
          className={
            "rounded-md bg-[#F7F6F6] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          }
          setShowModal={setReceiveShowModal}
        >
          <ReceiveModal setReceiveShowModal={setReceiveShowModal} />
        </Modal>
      )}
    </tr>
  );
};

export default AssetRowCard;
