import Header from "layout/main/Header";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { signupUser } from "store/actions";
import bg from "../../../assets/images/home-bg-main.cc68c4e4.png";
import SignupProgress from "components/auth/signup/SignupProgress";
import SignupSuccess from "components/auth/signup/SignupSuccess";
import Footer from "components/_common/copyWritefooter/Footer";
import Sidebar from "pages/landing/sections/Sidebar";
import { toast } from "react-toastify";
import Modal from "components/_common/modal/Modal";
import SignupSuccessModal from "components/auth/signup/SignupSuccess";
import { createIPInfo } from "store/ip_info/actions";

const PasswordSignup = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formData, setFormData] = useState({
    username: location.state?.username,
    marketplace: location.state?.marketplace,
    email: location.state?.email,
    phone: location.state?.phone,
    country_code: location.state?.country_code,
    password: "",
    full_phone_number: location.state?.country_code + location.state?.phone,
  });
  const [successModal, setSuccessModal] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value === confirmPassword) {
      setFormData((prev) => ({
        ...prev,
        password: e.target.value,
      }));
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value === password) {
      setFormData((prev) => ({
        ...prev,
        password: e.target.value,
      }));
    }
  };

  const handleNextBtnClick = (e) => {
    e.preventDefault();
    console.log(formData);
    if (password === "" || confirmPassword === "") {
      toast.error("Password is required");
    }
    if (formData.password !== confirmPassword) {
      toast.error("Passwords do not match, please enter the same password");
    }
    // first check that all the properties of formData are not undefined or empty
    // then dispatch the action
    if (formData.password !== "") {
      dispatch(
        signupUser(formData, (response) => {
          console.log(response, "outside");
          if (response.code === 200) {
            console.log(response);
            dispatch(createIPInfo({ browser: navigator.userAgent }));
            setSuccessModal(true);
          }
        })
      );
    }
  };

  useEffect(() => {
    if (
      location.state?.username === undefined ||
      location.state?.marketplace === undefined ||
      location.state?.email === undefined ||
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
              <SignupProgress
                firstStep={true}
                secondStep={true}
                thirdStep={true}
              />
            </div>
            <div>
              <form>
                <div className=" flex flex-col">
                  <div className=" flex flex-col gap-4">
                    <div className=" flex flex-col gap-2 mb-2">
                      <label
                        className=" text-[#4C4D4D] text-lg font-sans"
                        htmlFor="password"
                      >
                        Password <span className=" text-red-500">*</span>
                      </label>
                      <input
                        value={password}
                        onChange={handlePasswordChange}
                        type="password"
                        id="password"
                        className="outline-none rounded-md px-3 py-3 font-sans"
                        placeholder="Enter password"
                        style={{ border: "1px solid #bcccdc" }}
                      />
                    </div>
                    <div className=" flex flex-col gap-2">
                      <label
                        className=" text-[#4C4D4D] text-lg font-sans"
                        htmlFor="confirmPassword"
                      >
                        Confirm Password{" "}
                        <span className=" text-red-500">*</span>
                      </label>
                      <input
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        type="password"
                        id="confirmPassword"
                        className="outline-none rounded-md px-3 py-3 font-sans"
                        placeholder="Enter confirm password"
                        style={{ border: "1px solid #bcccdc" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full mt-10 flex flex-row justify-end items-center gap-4">
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("/sign-up/step-3", { state: formData });
                    }}
                    className="border-gray-700 w-fit px-8 font-sans text-xl py-2 rounded-full border text-black"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNextBtnClick}
                    variant="contained"
                    color="primary"
                    className={`font-sans text-xl py-2 w-fit px-8 rounded-full bg-[#29A645] text-white`}
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      {!showSidebar && <Footer />}
      {successModal === true && (
        <>
          <Modal className={"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-md shadow-md"} setShowModal={() => { }}>
            <SignupSuccessModal setSignupSuccessModal={setSuccessModal} />
          </Modal>
        </>
      )}
    </div>
  );
};

export default PasswordSignup;
