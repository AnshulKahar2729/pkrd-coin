import Header from "layout/main/Header";
import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { OTPResend, OTPVerify } from "store/actions";
import bg from "../../../assets/images/home-bg-main.cc68c4e4.png";
import SignupProgress from "components/auth/signup/SignupProgress";
import Footer from "components/_common/copyWritefooter/Footer";
import Sidebar from "pages/landing/sections/Sidebar";
import { FaCheckCircle } from "react-icons/fa";

const EmailOTPSignup = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: location.state?.username,
    marketplace: location.state?.marketplace,
    email: "",
    phone: location.state?.phone,
    country_code: location.state?.country_code,
    password: "",
    full_phone_number: "",
  });
  const [validEmail, setValidEmail] = useState(true);
  const [otpInputShow, setOtpInputShow] = useState(false);
  const [otp, setOtp] = useState("");
  const [isEmailVerify, setIsEmailVerify] = useState(false);
  const {
    loading: OTPResendLoading,
    error: OTPResendError,
    success: OTPResendSuccess,
  } = useSelector((state) => state.OTPResend);
  const { loading: OTPVerifyLoading, error: OTPVerifyError } = useSelector(
    (state) => state.OTPVerify
  );

  const emailChangeHandler = (e) => {
    const updatedEmail = e.target.value;
    setFormData((prev) => ({
      ...prev,
      email: updatedEmail,
    }));

    if (updatedEmail.includes("@") && updatedEmail.includes(".")) {
      setValidEmail(true);
    }

    // for setting validEmail to false
    if (
      updatedEmail.length >= 1 &&
      !updatedEmail.includes("@") &&
      !updatedEmail.includes(".")
    ) {
      setValidEmail(false);
    }
  };

  const sendOtpBtnClickHandler = () => {
    dispatch(
      OTPResend(
        {
          email: formData.email,
          type: "0",
        },
        (response) => {
          if (response.code === 200) {
            setOtpInputShow(true);
          }
        }
      )
    );
  };

  const verifyBtnClickHandler = () => {
    dispatch(
      OTPVerify({ email: formData.email, otp: otp, type: "0" }, (response) => {
        if (response.code === 200) {
          setIsEmailVerify(true);
        }
      })
    );
    // setIsEmailVerify(true);
  };

  const handleNextBtnClick = (event) => {
    event.preventDefault();
    if (formData.email !== "" && isEmailVerify) {
      navigate("/sign-up/step-4", { state: formData });
    }
  };

  useEffect(() => {
    if (
      location.state?.username === undefined ||
      location.state?.marketplace === undefined ||
      location.state?.phone === undefined ||
      location.state?.country_code === undefined
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
      <div className="  flex justify-center mx-3">
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
            <div className=" text-center mb-5">
              <h2 className=" text-3xl text-[#4C4D4D]">
                CREATE A PKRD ACCOUNT
              </h2>
            </div>
            <div>
              <SignupProgress firstStep={true} secondStep={true} />
            </div>
            <div className="min-h-[188px] flex flex-col gap-2 mb-2">
              <label
                className=" text-[#4C4D4D] text-lg font-sans"
                htmlFor="email"
              >
                Email <span className=" text-red-500">*</span>
              </label>
              <div
                className={` ${
                  formData.email !== "" && validEmail && !isEmailVerify
                    ? " grid grid-cols-3"
                    : (isEmailVerify ? 'flex flex-row justify-between border rounded-md pr-3' : '')
                } gap-1 sm:gap-3`}
              >
                <input
                  disabled={isEmailVerify}
                  value={formData.email}
                  onChange={emailChangeHandler}
                  type="text"
                  id="email"
                  className={`outline-none text-sm sm:text-base rounded-md px-3 py-2 sm:py-3 font-sans ${!isEmailVerify ? 'border border-gray-500 col-span-2 flex-1' : 'col-span-1'} w-full ${
                    !validEmail ? "  border-red-500 " : "  "
                  }`}
                  placeholder=" As per government issued ID"
                />
                {formData.email !== "" && validEmail && !isEmailVerify && (
                  <div className=" col-span-1">
                    <button
                      disabled={OTPResendLoading}
                      onClick={sendOtpBtnClickHandler}
                      className={` ${
                        OTPResendLoading ? "bg-[#29a644a1] " : " "
                      } w-full font-sans h-full text-nowrap text-sm sm:text-lg flex-1 py-2 sm:py-3 rounded-md bg-[#29A645] text-white`}
                    >
                      {OTPResendLoading
                        ? "Sending..."
                        : OTPResendSuccess && !OTPResendError
                        ? "Resend OTP"
                        : "Send OTP"}
                    </button>
                  </div>
                )}
                {isEmailVerify && (
                  <p className="w-fit flex items-center justify-end text-nowrap">
                    <span className=" flex flex-row items-center justify-end gap-2 text-green-600 text-right text-sm sm:text-base"> 
                      <span className="hidden sm:block">
                        Email verified 
                      </span> 
                      <FaCheckCircle className="text-xl"/>
                    </span> 
                  </p>
                )}
              </div>

              {!validEmail && (
                <div className=" mt-2 ">
                  <span className=" text-red-500 font-sans">
                    *Enter valid email address
                  </span>
                </div>
              )}

              {/* {isEmailVerify && (
                <div className=" mt-2 ">
                  <span className=" text-green-600 font-sans">
                    Email is verified
                  </span>
                </div>
              )} */}

              {otpInputShow && validEmail && !isEmailVerify && (
                <div className=" mt-5">
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
              {otp.length === 6 && !isEmailVerify && (
                <>
                  <div className="w-full flex justify-end">
                    <button
                      disabled={OTPVerifyLoading}
                      onClick={verifyBtnClickHandler}
                      type="submit"
                      className={`${
                        OTPVerifyLoading ? "bg-[#29a644a1] " : " "
                      } bg-[#29A645] w-fit px-8 text-center text-white rounded-full py-3`}
                    >
                      {OTPVerifyLoading ? "Verifying..." : "Verify"}
                    </button>
                  </div>
                </>
              )}
            </div>

            <div className="w-full mt-10 flex flex-row gap-4 items-center justify-end">
              <button
                onClick={(event) => {
                  event.preventDefault();
                  navigate("/sign-up/step-2", { state: formData });
                }}
                className="border-gray-700 w-fit font-sans text-xl py-2 px-8 rounded-full border text-black"
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

export default EmailOTPSignup;
