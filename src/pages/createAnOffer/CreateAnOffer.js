import React, { useEffect, useState } from "react";
import UserHeader from "layout/UserHeader";
import Footer from "../../components/_common/copyWritefooter/Footer";
import { Field, useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createBids, fetchWallet } from "store/actions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CreateWalletModal from "components/userDashboard/Wallet/CreateWalletModal";
import Modal from "components/_common/modal/Modal";

function CreateAnOffer({ }) {
  const [sidebarShow, setSidebarShow] = React.useState(false);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.createBid);
  const { loading: walletLoading, error, wallet } = useSelector(state => state.walletReducer);
  const navigate = useNavigate();
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

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      bidType: 1,
      currency: "PKRD",
      paymentMethod: "ApplePay",
      minAmount: 0,
      maxAmount: "",
      profitPercentage: "",
      averageTime: "",
    },
    onSubmit: (values) => {
      if (wallet?.wallet_address === undefined) {
        // setCreateWalletShowModal(true);
        toast.error("Please create wallet first");
        return;
      }
      if (wallet.wallet_address !== "" && values.minAmount < wallet.wallet_balance && values.maxAmount < wallet.wallet_balance && values.minAmount < values.maxAmount) {
        dispatch(
          createBids(
            {
              ...values,
              user_id: JSON.parse(localStorage.getItem("authUser"))?.body?._id,
            },
            (response) => {
              if (response.code === 200) {
                validation.resetForm();
                navigate("/user/my-offer-list");
              }
            }
          )
        );
      } else if (values.minAmount > wallet?.wallet_balance || values.maxAmount > wallet?.wallet_balance) {
        toast.error("You don't have sufficient wallet balance");
      }
    },
  });

  return (
    <div className="min-h-screen flex flex-col justify-center pt-8 xl:pt-0">
      <UserHeader setSidebarShow={setSidebarShow} />
      {!sidebarShow && (
        <>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              validation.handleSubmit();
              return false;
            }}
            className="w-full flex-1 bg-[#F8F9F9] md:pt-10 xl:pt-20  xl:px-24 px-4 pb-10 flex flex-col lg:flex-row"
          >
            <section className="w-full lg:w-2/3 sm:p-6 flex flex-col border-b-2 lg:border-b-0 lg:border-r-2 border-gray-300 gap-5 hideScrollbar ">
              <h1 className="text-[32px] leading-[42.56px] font-bold">
                Create an Offer to Buy & Sell PKRD Coin
              </h1>
              <div className="flex flex-col gap-5">
                {/* <WhatWouldYouLike /> */}
                <div className="flex flex-col text-[14px] gap-5 font-inter border-b pb-5">
                  <span className="text-[18px] font-semibold">
                    What would you like to do
                  </span>
                  <div className="flex flex-row gap-2">
                    {/* handle this radios with useFOrmik */}
                    <input
                      className="h-5 w-5"
                      type="radio"
                      value={1}
                      checked={validation.values.bidType === 1}
                      onChange={() => {
                        validation.setFieldValue("bidType", 1);
                      }}
                    />
                    <label className="flex flex-col">
                      <span className="font-semibold text-[16px]">
                        Sell PKRD
                      </span>
                      <span className="text-[#626262]">
                        Your offer will be listed on the Buy PKRD page
                      </span>
                    </label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <input
                      className="h-5 w-5"
                      type="radio"
                      value={0}
                      checked={validation.values.bidType === 0}
                      onChange={() => {
                        validation.setFieldValue("bidType", 0);
                      }}
                    />
                    <label className="flex flex-col">
                      <span className="font-semibold text-[16px]">
                        Buy PKRD
                      </span>
                      <span className="text-[#626262]">
                        Your offer will be listed on the Sell PKRD page
                      </span>
                    </label>
                  </div>
                </div>

                {/* <ChooseCurrency /> */}
                <div className="flex flex-col gap-5 border-b pb-8">
                  <p className="text-[18px] font-semibold">
                    Choose your Cryptocurrency
                  </p>
                  <div className="w-fit py-[11px] px-[36px] border border-[#29A744] rounded-md text-[14px]">
                    PKRD Coin
                  </div>
                </div>

                {/* <PaymentMethod setChoosenCurrency={setChoosenCurrency} /> */}
                <div className="w-full flex flex-col gap-10 mt-3">
                  <div className="w-full flex flex-col lg:flex-row gap-6">
                    <div className="w-full flex flex-col gap-5 text-gray-400">
                      <span className="text-[18px] font-semibold text-black">
                        Payment Method
                      </span>
                      <select
                        value={validation.values.paymentMethod || "ApplePay"}
                        onChange={(e) => {
                          validation.setFieldValue(
                            "paymentMethod",
                            e.target.value
                          );
                        }}
                        id="wallets"
                        className="h-fit text-sm flex flex-col gap-2 py-[13px] w-full  my-auto border  rounded-md px-[15px] outline-none text-black"
                      >
                        <option disabled selected hidden className="p-2">
                          Popular Online wallets
                        </option>
                        <option className="p-2">ApplePay</option>
                        <option className="p-2">GCash</option>
                        <option className="p-2">PayPal</option>
                        <option className="p-2">WeChat Pay</option>
                        <option className="p-2">M-Pesa</option>
                        <option className="p-2">Venmo</option>
                      </select>
                    </div>

                    <div className="w-full lg:w-1/3 flex flex-col gap-5 text-[14px] outline-none">
                      <span className="text-[18px] text-nowrap font-semibold">
                        Preferred Currency
                      </span>
                      <select className="w-full py-[13px] px-[15px] rounded-md border border-gray-300 outline-none">
                        <option selected value="USD">
                          US Dollar (USD)
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* <MinMaxAmount choosenCurrency={choosenCurrency} /> */}
                <div className="w-full flex flex-col gap-5">
                  <div className="w-full flex flex-col gap-4">
                    <label className="text-[18px] font-semibold">
                      Minimum Amount
                    </label>
                    <div className="w-full md:w-[62%] flex flex-row justify-between items-center gap-2 bg-white border rounded-md">
                      <input
                        value={validation.values.minAmount || ""}
                        onChange={(e) => {
                          validation.setFieldValue("minAmount", e.target.value);
                        }}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.errors.minAmount &&
                            validation.touched.minAmount
                            ? true
                            : false
                        }
                        type="number"
                        className="w-full outline-none appearance-none py-[11px] px-[15px] rounded-md"
                        placeholder="Enter Min Amount..."
                      />
                      <span className="border-l py-[11px] px-[20px] bg-[#29A744] text-white rounded-r-md">
                        USD
                      </span>
                    </div>

                    <span>{validation.values.minAmount > wallet?.wallet_balance && (<>
                      <p>You don't have sufficient wallet balance. Current wallet balance : {wallet?.wallet_balance}</p>
                    </>)}</span>
                  </div>
                  <div className="w-full flex flex-col gap-4">
                    <label className="text-[18px] font-semibold">
                      Maximum Amount
                    </label>
                    <div className="w-full md:w-[62%] flex flex-row justify-between items-center gap-2 bg-white border rounded-md">
                      <input
                        value={validation.values.maxAmount || ""}
                        onChange={(e) => {
                          validation.setFieldValue("maxAmount", e.target.value);
                        }}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.errors.maxAmount &&
                            validation.touched.maxAmount
                            ? true
                            : false
                        }
                        type="number"
                        className="w-full outline-none appearance-none py-[11px] px-[15px] rounded-md"
                        placeholder="Enter Max Amount..."
                      />
                      <span className="border-l py-[11px] px-[20px] bg-[#29A744] text-white rounded-r-md">
                        USD
                      </span>
                    </div>
                    <span>{validation.values.maxAmount > wallet?.wallet_balance && (<>
                      <p>You don't have sufficient wallet balance. Current wallet balance : {wallet?.wallet_balance}</p>
                    </>)}</span>
                  </div>
                </div>

                {/* <ProfitPercentage /> */}
                <div className="w-full flex flex-col gap-4">
                  <label className="text-[18px] font-semibold">
                    Profit Percentage
                  </label>
                  <div className="w-full md:w-[62%] flex flex-row justify-between items-center gap-2 bg-white border rounded-md">
                    <input
                      value={validation.values.profitPercentage || ""}
                      onChange={(e) => {
                        validation.setFieldValue(
                          "profitPercentage",
                          e.target.value
                        );
                      }}
                      onBlur={validation.handleBlur}
                      invalid={
                        validation.errors.profitPercentage &&
                          validation.touched.profitPercentage
                          ? true
                          : false
                      }
                      type="number"
                      className="w-full outline-none appearance-none py-[11px] px-[15px] rounded-md"
                      placeholder="Enter Profit Percentage..."
                    />
                    <span className="border-l py-[11px] px-[30px] bg-[#29A744] text-white rounded-r-md">
                      %
                    </span>
                  </div>
                </div>

                {/* <AverageTime /> */}
                <div className="w-full md:w-[62%] flex flex-col gap-4">
                  <p className="text-[18px] font-semibold">Average Time</p>
                  <div className="w-full flex flex-row justify-between items-center gap-2 bg-white border rounded-md">
                    <input
                      value={validation.values.averageTime || ""}
                      onChange={(e) => {
                        validation.setFieldValue("averageTime", e.target.value);
                      }}
                      onBlur={validation.handleBlur}
                      invalid={
                        validation.errors.averageTime &&
                          validation.touched.averageTime
                          ? true
                          : false
                      }
                      type="number"
                      className="w-full outline-none appearance-none py-[11px] px-[15px] rounded-md"
                      placeholder="Enter Average Time..."
                    />
                    <span className="border-l py-[11px] px-[22px] bg-[#29A744] text-white rounded-r-md">
                      MIN
                    </span>
                  </div>
                </div>

                <div className="w-full sm:w-1/3 flex flex-row gap-5 text-base md:text-[18px] text-white">
                  <button
                    disabled={loading}
                    type="submit"
                    className={`${loading ? " bg-[#29a644a1]" : ""
                      } rounded-md border px-2 py-2 flex-grow bg-[#29A744] `}
                  >
                    {loading ? "Loading..." : "Create Offer"}
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      validation.resetForm();
                    }}
                    className="rounded-md border px-2 py-2 flex-grow bg-[#cd2c2c] "
                  >
                    Reset
                  </button>
                </div>
              </div>
            </section>

            <section className="w-full lg:w-1/3 flex flex-col p-6 gap-5">
              <span className="text-[24px] font-semibold text-black">
                About This Step
              </span>
              <p className="text-[14px]">
                Start creating your offer by selecting the cryptocurrency you
                want to trade, whether or not you want to buy or sell, and the
                payment method you want to use.
              </p>
              <ul className="point list-disc text-[#626262] pl-5 text-[14px] marker:text-[#29A744] marker:text-[24px]">
                <li className="">You want to sell PKRD</li>
                <li className="">
                  And get paid via PhonePe in Indian Rupee (INR)
                </li>
                <li className="">You will pay PKRD a 1% fee for each trade</li>
                <li className="">You will lose 5% on every sale</li>
              </ul>
            </section>
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
          </form>

          <Footer />
        </>
      )}
    </div>
  );
}

export default CreateAnOffer;
