import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";
import Header from "layout/main/Header";
import bg from "../../../assets/images/home-bg-main.cc68c4e4.png";
import SignupProgress from "components/auth/signup/SignupProgress";
import Footer from "components/_common/copyWritefooter/Footer";
import Sidebar from "pages/landing/sections/Sidebar";
import { toast } from "react-toastify";

const PersonalInfoForm = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    marketplace: "",
    email: "",
    phone: "",
    country_code: "",
    password: "",
    full_phone_number: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    if (event.target.value === "0") {
      setFormData((prev) => ({
        ...prev,
        marketplace: event.target.checked ? event.target.value : "",
      }));
    } else if (event.target.value === "1") {
      setFormData((prev) => ({
        ...prev,
        marketplace: event.target.checked ? event.target.value : "",
      }));
    }
  };

  const handleNextBtnClick = (event) => {
    event.preventDefault();
    console.log(formData);
    if (formData.marketplace !== "" && formData.username !== "") {
      navigate("/sign-up/step-2", { state: formData });
    } else if (formData.marketplace === "" || formData.username === "") {
      toast.error("Please fill in all fields");
    }
  };

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
            className="my-4 w-full md:w-[700px] md:h-[500px]  bg-white pb-10 rounded-md pt-2 sm:pt-8  md:mx-16 px-5 sm:px-16 lg:mx-48 lg:px-20 xl:mx-[25%] "
          >
            <div className=" text-center mb-5 pt-2">
              <h2 className=" text-xl sm:text-3xl text-[#4C4D4D] font-bold font-inter">
                CREATE A PKRD ACCOUNT
              </h2>
            </div>
            <div className="px-2 sm:px-0">
              <SignupProgress />
            </div>
            <form>
              <div className="flex flex-col">
                <div className="flex flex-col gap-2">
                  <label
                    className="text-[#4C4D4D] text-lg font-sans font-semibold"
                    htmlFor="text"
                  >
                    Username <span className="text-red-500">*</span>
                  </label>
                  <input
                    value={formData.username}
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        username: e.target.value,
                      }));
                    }}
                    type="text"
                    id="text"
                    className="outline-none rounded-md px-3 sm:py-3 py-2 "
                    placeholder="As per government issued ID"
                    style={{ border: "1px solid #bcccdc" }}
                  />
                </div>

                <div className="flex flex-col gap-2 sm:mt-5 mt-4 mb-5">
                  <label
                    className="text-[#4C4D4D] text-lg  font-bold"
                    htmlFor="text"
                  >
                    Marketplace
                  </label>
                  <div className=" flex flex-row gap-5">
                    <div className="flex flex-col gap-2">
                      <p className=" font-bold">Buyer</p>
                      <Switch
                        onClick={handleChange}
                        color="primary"
                        name="marketplace"
                        value="0"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="font-bold">Seller</p>
                      <Switch
                        onClick={handleChange}
                        color="primary"
                        name="marketplace"
                        value="1"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full flex items-center justify-end">
                  <button
                    onClick={handleNextBtnClick}
                    className="font-inter text-xl py-2 px-8 rounded-full bg-[#29A645] text-white cursor-pointer hover:bg-[#228f39] transition-all duration-150"
                  >
                    Next
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
      {!showSidebar && <Footer />}
    </div>
  );
};

export default PersonalInfoForm;
