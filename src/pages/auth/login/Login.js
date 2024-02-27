import PropTypes from "prop-types";

import React, { useEffect, useState } from "react";
import bg from "../../../assets/images/home-bg-main.cc68c4e4.png";
import { Link } from "react-router-dom";

import * as Yup from "yup";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// actions
import { loginUser } from "store/actions";
import withRouter from "components/_common/withRouter/withRouter";
import Header from "layout/main/Header";
import Footer from "components/_common/copyWritefooter/Footer";
import Sidebar from "pages/landing/sections/Sidebar";
import { createIPInfo } from "store/ip_info/actions";

const Login = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);

  document.title = "Login - PKRD";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [goWithEmail, setGoWithEmail] = useState(false);
  const { loading } = useSelector((s) => s.Login);

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
      type: goWithEmail ? 0 : 1,
    },
    validationSchema: Yup.object(
      goWithEmail
        ? {
          email: Yup.string()
            .email("Please enter a valid email address")
            .required("Email is required"),
          password: Yup.string().required("Please Enter Your Password"),
        }
        : {
          phone: Yup.string().required("Please Enter Your Phone"),
          password: Yup.string().required("Please Enter Your Password"),
        }
    ),
    onSubmit: (values) => {
      dispatch(
        loginUser(values, (res) => {
          if (res.code === 200) {
            dispatch(createIPInfo({ browser: navigator.userAgent, location: "California, USA" }));
            navigate("/user-dashboard");
          }
        })
      );
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="min-h-screen flex flex-col justify-between"
    >
      <Header setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <div className="w-full flex justify-center">
        <div className="w-full absolute top-16">
          {showSidebar && <Sidebar />}
        </div>
        {!showSidebar && (
          <div
            style={{
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            }}
            className="py-8 px-4 cmlg:px-12 sm:py-10 sm:px-6 w-[600px] max-h-[500px] mx-2 my-2 bg-white flex items-center rounded-md "
          >
            <div className="w-full">
              <div className=" text-center mb-10">
                <h2
                  className=" text-[#4c4c4c] text-3xl font-bold font-inter"
                  style={{ wordSpacing: "2px", letterSpacing: "-2px" }}
                >
                  LOG IN
                </h2>
                <span>TO YOUR ACCOUNT</span>
              </div>

              <form
                className=" px-2 sm:px-4 md:px-8 "
                onSubmit={(e) => {
                  e.preventDefault();
                  validation.handleSubmit();
                  return false;
                }}
              >
                <div>
                  <div className=" mb-3">
                    <label className=" text-[#848484] font-sans ">
                      {goWithEmail ? "Email" : "Phone No. "} :{" "}
                      <span className=" text-red-500">*</span>
                    </label>
                  </div>

                  <div className=" ">
                    {goWithEmail ? (
                      <>
                        <input
                          name="email"
                          className={`py-2 outline-none px-4 font-sans w-full border  placeholder:text-gray-400 rounded-md border-gray-500`}
                          placeholder="Enter your email"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ""}
                          invalid={
                            validation.touched.email && validation.errors.email
                              ? true
                              : false
                          }
                        />
                        {validation.touched.email && validation.errors.email ? (
                          <div className=" mt-2 ">
                            <span className=" text-red-500 font-sans">
                              {validation.errors.email}
                            </span>
                          </div>
                        ) : null}
                      </>
                    ) : (
                      <div className=" flex gap- border bg-white border-gray-500 rounded-md">
                        <select
                          name="country_code"
                          className=" w-20 pl-1 sm:pl-2 text-sm sm:text-base sm:px-2 py-2 outline-none bg-white rounded-l-md "
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.country_code || ""}
                          invalid={
                            validation.touched.country_code &&
                              validation.errors.country_code
                              ? true
                              : false
                          }
                        >
                          <option value="+971">+971</option>
                          <option value="+1">+1</option>
                          <option value="+86">+86</option>
                          <option value="+30">+30</option>
                          <option value="+44">+44</option>
                          <option value="+91">+91</option>
                        </select>
                        <input
                          type="tel"
                          name="phone"
                          className=" py-2 sm:px-2 font-sans w-full rounded-md outline-none"
                          placeholder=" Shall be connected to whatsapp"
                          onChange={(e) => {
                            // Remove non-numeric characters from the input
                            const inputPhone = e.target.value.replace(
                              /\D/g,
                              ""
                            );
                            validation.setFieldValue("phone", inputPhone);
                          }}
                          onBlur={validation.handleBlur}
                          value={validation.values.phone || ""}
                          invalid={
                            validation.touched.phone && validation.errors.phone
                              ? true
                              : false
                          }
                        />
                      </div>
                    )}
                    {validation.touched.phone && validation.errors.phone ? (
                      <div className=" mt-2 ">
                        <span className=" text-red-500 font-sans">
                          {validation.errors.phone}
                        </span>
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className=" mt-5">
                  <div className=" mb-3">
                    <label className=" text-[#848484] font-sans ">
                      Password <span className=" text-red-500">*</span>
                    </label>
                  </div>

                  <div className=" ">
                    <input
                      type="password"
                      name="password"
                      className={`outline-none py-2 px-4 font-sans w-full border border-gray-500 placeholder:text-gray-400 rounded-md`}
                      placeholder=" Enter your password"
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.password || ""}
                      invalid={
                        validation.touched.password &&
                          validation.errors.password
                          ? true
                          : false
                      }
                    />
                    {validation.touched.password &&
                      validation.errors.password ? (
                      <div className=" mt-2 ">
                        <span className=" text-red-500 font-sans">
                          {validation.errors.password}
                        </span>
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className=" flex justify-between mt-2 mb-10 xl:mb-15">
                  <span
                    className=" font-sans text-[#29A645] text-sm xl:text-base cursor-pointer"
                    onClick={() => setGoWithEmail(!goWithEmail)}
                  >
                    Continue with {!goWithEmail ? "email" : "phone no. "}.?
                  </span>

                  <Link
                    to="/sign-up/step-1"
                    className=" text-[#29A645] text-sm xl:text-base font-sans curpo"
                  >
                    Sign Up?
                  </Link>
                </div>

                <div className=" sm:px-8 flex items-center justify-center">
                  {loading ? (
                    <button className=" w-[50%] font-sans text-xl py-2 rounded-md bg-[#29a64478] text-white">
                      ...
                    </button>
                  ) : (
                    <button
                      className="w-[50%] font-sans text-xl py-2 rounded-md bg-[#29A645] text-white"
                      type="submit"
                    >
                      Login
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      {!showSidebar && <Footer />}
    </div>
  );
};

export default withRouter(Login);
Login.propTypes = {
  history: PropTypes.object,
};
