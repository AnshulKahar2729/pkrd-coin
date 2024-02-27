import Header from "layout/main/Header";
import React, { useState, useEffect } from "react";
import OTPInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { OTPResend, OTPVerify } from "store/actions";
import bg from "../../../assets/images/home-bg-main.cc68c4e4.png";
import SignupProgress from "components/auth/signup/SignupProgress";
import Footer from "components/_common/copyWritefooter/Footer";
import Sidebar from "pages/landing/sections/Sidebar";
import { FaCheckCircle } from "react-icons/fa";

const MobileOTPSignup = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();
  const [formData, setFormData] = useState({
    username: location.state?.username,
    marketplace: location.state?.marketplace,
    email: "",
    phone: "",
    country_code: "+91",
    password: "",
    full_phone_number: "",
  });

  const [otpInputShow, setOtpInputShow] = useState(false);
  const [otp, setOtp] = useState("");
  const [isPhoneVerify, setIsPhoneVerify] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    loading: OTPResendLoading,
    error: OTPResendError,
    success: OTPResendSuccess,
  } = useSelector((state) => state.OTPResend);
  const { loading: OTPVerifyLoading, error: OTPVerifyError } = useSelector(
    (state) => state.OTPVerify
  );

  const sendOtpBtnClickHandler = (e) => {
    e.preventDefault();
    dispatch(
      OTPResend(
        {
          type: "1",
          phone: formData.phone,
          country_code: formData.country_code,
        },
        (response) => {
          if (response.code === 200) {
            setOtpInputShow(true);
          }
        }
      )
    );
    // setOtpInputShow(true);
  };

  const verifyBtnClickHandler = (e) => {
    e.preventDefault();
    dispatch(
      OTPVerify(
        {
          type: "1",
          phone: formData.phone,
          country_code: formData.country_code,
          otp: otp,
        },
        (response) => {
          console.log(response);
          if (response.code === 200) {
            toast.success("Phone number verified successfully");
            console.log("inside if");
            setIsPhoneVerify(true);
          }
        }
      )
    );
    // setIsPhoneVerify(true);
  };

  const handleNextBtnClick = (event) => {
    event.preventDefault();
    if (formData.phone !== "" && isPhoneVerify) {
      navigate("/sign-up/step-3", { state: formData });
    }
  };

  useEffect(() => {
    if (
      location.state?.username === undefined ||
      location.state?.marketplace === undefined
    ) {
      navigate("/sign-up/step-1");
    }
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="h-screen flex flex-col justify-between"
    >
      <Header setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <div className="flex justify-center mx-3">
        <div className="w-full absolute top-16 sm:top-[89px]">
          {showSidebar && <Sidebar />}
        </div>
        {!showSidebar && (
          <div
            style={{
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            }}
            className="my-4 w-full md:w-[700px] md:min-h-[500px]  bg-white pb-8 rounded-md pt-2 sm:pt-8  md:mx-16 px-5 sm:px-16 lg:mx-48 lg:px-20 xl:mx-[25%] "
          >
            <div className=" text-center mb-5 pt-2">
              <h2 className=" text-xl sm:text-3xl text-[#4C4D4D] font-bold font-inter">
                CREATE A PKRD ACCOUNT
              </h2>
            </div>
            <div>
              <SignupProgress firstStep={true} />
            </div>
            <form className="min-h-[182px]">








              <div className=" flex flex-col gap-2">
                <label
                  className=" text-[#4C4D4D] text-lg font-sans"
                  htmlFor="text"
                >
                  Phone Number <span className=" text-red-500">*</span>
                </label>

                <div className="bg-white rounded-md border flex flex-row items-center">
                  <div className="flex flex-col ">
                    <select
                      value={formData.country_code}
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          country_code: e.target.value,
                        }));
                      }}
                      name="country_code"
                      className="bg-white cursor-pointer sm:w-14 text-sm sm:text-base w-12 text-center outline-none rounded-l-md py-3 pl-1 sm:pl-0 font-sans"
                      type="text"
                    >
                      <option value="+91">+91</option>
                      <option value="+971">+971</option>
                      <option value="+1">+1</option>
                      <option value="+86">+86</option>
                      <option value="+30">+30</option>
                      <option value="+44">+44</option>
                    </select>
                  </div>

                  <div className={` flex-1`}>
                    <input
                      disabled={isPhoneVerify}
                      value={formData.phone}
                      onChange={(e) => {
                        const inputPhone = e.target.value.replace(/\D/g, ""); // Remove non-digit characters

                        setFormData((prev) => ({
                          ...prev,
                          phone: inputPhone,
                        }));
                      }}
                      name="phone"
                      type="tel"
                      className={`outline-none w-full py-[10px] sm:py-[14px] px-3 pl-[3px] sm:pl-[5px] pr-[5px] placeholder:text-sm sm:placeholder:text-base bg-white focus:bg-white`}
                      placeholder=" Shall be connected to whatsapp"
                    />
                  </div>

                  {formData.phone !== "" && !isPhoneVerify && (
                    <div className="">
                      <button
                        disabled={OTPResendLoading}
                        type="submit"
                        onClick={sendOtpBtnClickHandler}
                        className={` ${
                          OTPResendLoading ? "bg-[#29a644a1] " : " "
                        }  text-nowrap font-sans sm:text-lg text-sm py-2 sm:py-3 px-2  rounded-r-md bg-[#29A645] text-white`}
                      >
                        {OTPResendLoading ? "Sending..." : (OTPResendSuccess && !OTPResendError) ? "Resend OTP" : "Send OTP"}
                      </button>
                    </div>
                  )}

                  {isPhoneVerify && (
                  <div className="flex items-center pr-2">
                  <p className=" text-green-600 font-sans flex flex-row items-center gap-2 text-sm sm:text-base">
                    <span className="hidden sm:block">Phone number verified </span>
                    <FaCheckCircle className="text-xl"/> 
                  </p>
                  </div>
                  )}

                </div>
              </div>
              








              <div>
                {otpInputShow && !isPhoneVerify && (
                  <div className="  mt-5">
                    <OTPInput
                      // skipDefaultStyles={true}
                      inputStyle={{
                        border: "1px solid black",
                        padding: "15px",
                        width: "100%",
                      }}
                      value={otp}
                      onChange={setOtp}
                      numInputs={6}
                      renderSeparator={<span> &nbsp; &nbsp; &nbsp;</span>}
                      renderInput={(props) => <input {...props} />}
                    />
                  </div>
                )}
                {otp.length === 6 && !isPhoneVerify && (
                  <div className="w-full flex justify-end">
                    <button
                      disabled={OTPVerifyLoading}
                      onClick={verifyBtnClickHandler}
                      type="submit"
                      className={` ${
                        OTPVerifyLoading ? "bg-[#29a644a1] " : " "
                      } bg-[#29A645] w-fit text-center px-8  text-white rounded-full py-3`}
                    >
                      {OTPVerifyLoading ? "Verifying..." : "Verify"}
                    </button>
                  </div>
                )}
              </div>




              </form>




              <div className="w-full mt-10 flex flex-row items-center justify-end gap-4">
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    navigate("/sign-up/step-1", { state: formData });
                  }}
                  className="border-gray-700 w-fit px-8 font-sans text-xl py-2 rounded-full border text-black"
                >
                  Back
                </button>
                <button
                  onClick={handleNextBtnClick}
                  variant="contained"
                  color="primary"
                  className={`w-fit px-8 font-sans text-xl py-2 rounded-full bg-[#29A645] text-white`}
                >
                  Next
                </button>
              </div>



          </div>
        )}






      </div>

      {!showSidebar && <Footer />}
    </div>
  );
};

export default MobileOTPSignup;
