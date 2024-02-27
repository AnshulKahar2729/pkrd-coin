import React, { useEffect, useRef, useState } from "react";
import NavLogo from "../assets/images/nav-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxAvatar } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import SideBar from "../components/userDashboard/_sidebar/SideBar";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Popup from "../components/_common/popup/Popup";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotifications, readNotification } from "store/actions";
import ToolTip from "components/_common/ToolTip";
import { FaUser } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

const UserHeader = ({
  setSidebarShow /* , setSeller, setBuyer, buyer, seller */,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [showNotification, setShowNotification] = React.useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [hoverNotification, setHoverNotification] = useState(false);
  const [hoverProfile, setHoverProfile] = useState(false);

  const menuClickHandler = () => {
    const currentSidebarOpen = sidebarOpen;
    console.log("menu clicked");
    setSidebarOpen(!sidebarOpen);
    setSidebarShow(!currentSidebarOpen);
  };

  const buyBtnClickHandler = () => {
    navigate("/buyer");
  };

  const sellBtnClickHandler = () => {
    navigate("/seller");
  };

  const togglePopup = (e) => {
    setIsPopupOpen(!isPopupOpen);
  };

  const NotificationRef = useRef(null);
  useEffect(() => {
    const toggleNotification = (e) => {
      setShowNotification(false);
    };
    const handleClickOutside = (event) => {
      if (
        NotificationRef.current &&
        !NotificationRef.current.contains(event.target)
      ) {
        toggleNotification();
        console.log("Toggle Popup Called");
      }
    };

    if (showNotification) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNotification]);

  // WHEN NOTIFICATIONS ICON GET CLICKED, ONLY FETCH AND READ NOTIFICATIONS IF UNREAD NOTIFICATIONS COUNT IS GREATER THAN 0
  // const notificationClickHandler = () => {
  //   setShowNotification(!showNotification);
  //   if (unReadNotificationsCount > 0) {
  //     dispatch(
  //       fetchNotifications("", (response) => {
  //         console.log("Notification Response", response);
  //         if (response.code === 200) {
  //           console.log("Notification Response Success", response);

  //           // yaha pe doubt hain robin sir -->  isko andar rkha kyonki hum jab successfully fetch krle tab hi read krna chahiye ya phir dusre wale dispatch ko iske baad kru
  //           dispatch(
  //             readNotification("", (response) => {
  //               console.log("Notification Read Response", response);
  //               if (response.code === 200) {
  //                 console.log("Notification Read Response Success", response);
  //               }
  //             })
  //           );
  //         }
  //       })
  //     );
  //   }
  // };

  // WHEN PAGE LOADS GET NOTIFICATIONS AND COUNT UNREAD NOTIFICATIONS
  // useEffect(() => {
  //   dispatch(
  //     fetchNotifications("", (response) => {
  //       console.log("Notification Response", response);
  //       if (response.code === 200) {
  //         const notificationsArray = response.data;
  //         notificationsArray.forEach((notification) => {
  //           if (
  //             notification.user_id._id ===
  //             JSON.parse(localStorage.getItem("authUser"))?.body?._id
  //           ) {
  //             if (notification.is_read === 0) {
  //               setUnReadNotificationsCount((prev) => prev + 1);
  //             }
  //           }
  //         });
  //       }
  //     })
  //   );
  // }, []);

  // WHENEVER UNREAD NOTIFICATIONS COUNT CHANGES GET NOTIFICATIONS
  // useEffect(() => {
  //   dispatch(
  //     fetchNotifications("", (response) => {
  //       console.log("Notification Response", response);
  //       if (response.code === 200) {
  //       }
  //     })
  //   );
  // }, [unReadNotificationsCount]); // eslint-disable-line react-hooks/exhaustive-deps

  const [notificationList, setNotificationList] = useState();
  const fetchNotifictaionList = () => {
    try {
      dispatch(
        fetchNotifications("", (response) => {
          console.log("Notification Response", response);
          if (response.code === 200) {
            setNotificationList(response?.body);
          }
        })
      );
    } catch (error) {}
  };

  useEffect(() => {
    fetchNotifictaionList();
  }, [JSON.parse(localStorage.getItem("authUser"))?.body?._id]);

  const readNotificationFn = () => {
    /*     if (notificationList?.unread_count > 0) { */
    try {
      dispatch(
        readNotification("", (response) => {
          console.log("Notification Read Response", response);
          if (response.code === 200) {
            fetchNotifictaionList();
            console.log("Notification Read Response Success", response);
          }
        })
      );
    } catch (error) {}
    /*  } */
  };

  return (
    <>
      <div className="px-4 lg:px-12 bg-[#29A744] border-b-2 fixed flex flex-row items-center justify-between left-0  py-1 right-0 top-0 z-50">
        <div className=" flex flex-row gap-3 items-center">
          <div className=" flex flex-row gap-3 items-center">
            <div className=" transition-all border border-white rounded-md px-2 pt-1 clsm:hidden">
              {sidebarOpen ? (
                <>
                  <button
                    className=" transition-all"
                    onClick={menuClickHandler}
                  >
                    <RxCross1 className=" transition-all text-2xl text-white" />
                  </button>
                </>
              ) : (
                <>
                  <button
                    className=" transition-all"
                    onClick={menuClickHandler}
                  >
                    <GiHamburgerMenu className=" transition-all text-2xl text-white" />
                  </button>
                </>
              )}
            </div>
            <div>
              <Link to={"/"} className={""}>
                <img
                  src={NavLogo}
                  alt="headerLogo"
                  className=""
                  width="250px"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className=" flex flex-row lg:gap-4 gap-2 items-center">
          <div className=" md:flex flex-row items-center gap-8 hidden xl:mx-10">
            {/* <button className=" text-xl border rounded-md py-1 px-2  border-gray-500">
              <IoIosNotificationsOutline />
            </button> */}
            <Link
              to={"/user-dashboard"}
              className=" hidden lg:block text-white"
            >
              Dashboard
            </Link>
            <Link
              to={"/list-pkrd-buy-sell-ad"}
              className="hidden lg:block text-white text-nowrap"
            >
              Create an Offer
            </Link>
            <Link to={"/wallet"} className=" hidden clsm:block text-white">
              Wallet
            </Link>
            <Link to={"/exchange"} className=" hidden clsm:block text-white">
              Exchange
            </Link>
          </div>
          <div className="gap-2 hidden md:flex flex-row">
            <button
              className={`rounded-md px-6 py-1 w-full border border-white    ${
                window.location.href.includes("buyer")
                  ? " bg-white text-[#29A744] border-none "
                  : " text-white"
              }`}
              onClick={buyBtnClickHandler}
            >
              BUY
            </button>
            <button
              className={`rounded-md px-6 py-1 w-full border border-white  ${
                window.location.href.includes("seller")
                  ? " bg-white text-[#29A744] border-none "
                  : " text-white"
              }`}
              onClick={sellBtnClickHandler}
            >
              SELL
            </button>
            <div>
              <select
                name=""
                id=""
                className="hidden lg:block bg-transparent border border-white outline-none py-2 rounded-md text-white"
              >
                <option value="" className=" text-black optionSelect">
                  $ USD
                </option>
                <option value="" className=" text-black optionSelect">
                  INR
                </option>
              </select>
            </div>
            <div
              id="notification"
              onMouseEnter={() => setHoverNotification(true)}
              onMouseLeave={() => setHoverNotification(false)}
              className=" relative"
              onClick={() => {
                setShowNotification(!showNotification);
                setHoverNotification(false);
              }}
            >
              <button className="border border-white px-2 py-2 rounded-md">
                <IoIosNotificationsOutline className=" text-white text-xl" />
              </button>

              <div className=" w-5 h-5 rounded-[50%] text-white text-center bg-red-600 text-sm absolute top-[-6px] right-[-6px]">
                {notificationList?.unread_count || 0}
              </div>
            </div>
            <div className="hidden md:block">
              {hoverNotification && !showNotification && (
                <ToolTip
                  topDist={35}
                  leftDist={20}
                  className={"notification"}
                  text={"Notification"}
                />
              )}
            </div>
          </div>

          <div
            id="profile"
            onMouseEnter={() => setHoverProfile(true)}
            onMouseLeave={() => setHoverProfile(false)}
          >
            <button
              onClick={() => {
                togglePopup();
                setHoverProfile(false);
              }}
            >
              <AccountCircleIcon
                style={{ fontSize: "39px" }}
                className=" text-5xl text-white"
              />
            </button>
          </div>
          {hoverProfile && !isPopupOpen && (
            <ToolTip
              topDist={35}
              leftDist={10}
              className={"profile"}
              text={"Profile"}
            />
          )}
        </div>
      </div>
      {/* =======for  header======= */}
      <div className=" flex gap-2 md:hidden pt-28 px-2 pb-4 sm:pb-0">
        <button
          className={`bg-white border px-6 py-1 rounded-md  w-full ${
            window.location.href.includes("buyer") ? "text-[#29A744]" : ""
          }`}
          onClick={buyBtnClickHandler}
        >
          BUY
        </button>
        <button
          className={`border px-6 py-1 rounded-md w-full ${
            window.location.href.includes("seller")
              ? " bg-white text-[#29A744]"
              : " "
          }`}
          onClick={sellBtnClickHandler}
        >
          SELL
        </button>
        <div
          className=" relative"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => {
            setShowNotification(!showNotification);
          }}
        >
          <button className="border-2 px-2 py-2 rounded-[50%]">
            <IoIosNotificationsOutline className=" text-black text-xl" />
          </button>

          <div className=" w-5 h-5 rounded-[50%] text-white text-center bg-red-600 text-sm absolute top-[-6px] right-[-6px]">
            {notificationList?.unread_count || 0}
          </div>
        </div>
      </div>
      {/* ============ */}
      <div>
        {sidebarOpen && (
          <>
            <SideBar />
          </>
        )}
      </div>
      {showNotification && (
        <>
          <div ref={NotificationRef}>
            <div className=" absolute bg-white border lg:m-0 mt-28 mx-8 rounded-md shadow-sm  top-11 md:-top-10 lg:top-16 w-fit xl:fixed  lg:right-24 md:right-8 -right-3  z-[200] overflow-hidden">
              <div className="p-4 flex justify-between   items-center border-b">
                <h4 className="text-xl font-semibold">Notifications</h4>
                <span
                  onClick={readNotificationFn}
                  className="text-gray-500 cursor-pointer transition-all hover:text-gray-700"
                >
                  Mark all as read
                </span>
              </div>

              {
                <>
                  {notificationList?.data?.map(
                    (notification, index) =>
                      notification.user_id._id ===
                        JSON.parse(localStorage.getItem("authUser"))?.body
                          ?._id && (
                        <div
                          key={index}
                          className={`w-96 flex flex-row gap-10 items-center justify-between border-b-2 border-gray-200 
                          ${
                            notification?.is_read === 0
                              ? "bg-green-50"
                              : "bg-white"
                          }
                          cursor-pointer p-4`}
                        >
                          <div className="w-72 flex flex-row gap-4 justify-start items-center">
                            <div className="p-3 ">
                              <FaUser />
                            </div>
                            <div>
                              <p>{notification.message}</p>
                            </div>
                          </div>
                          {notification?.is_read === 0 ? (
                            <div className="text-[#29A744]">
                              <GoDotFill />
                            </div>
                          ) : null}
                        </div>
                      )
                  )}
                </>
              }
            </div>
          </div>
        </>
      )}
      {isPopupOpen && (
        <>
          <div>
            <div className=" absolute bg-white border lg:m-0 rounded-md shadow-sm h-fit w-fit mx-2 sm:mx-0 top-20 sm:top-16 xl:fixed  right-1 md:right-2 z-[200]">
              <Popup isOpen={isPopupOpen} onClose={togglePopup} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserHeader;
