import { postOTPResend, postOTPVerify } from "store/service/backend_api_helper";

import { toast } from "react-toastify";
import { OTP_RESEND, OTP_VERIFY } from "./actionTypes";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  OTPResendSuccess,
  OTPVerifySuccess,
  OTPResendApiError,
  OTPVerifyApiError,
} from "./actions";

function* OTPResend({ payload: { data, callback } }) {
  try {
    const response = yield call(postOTPResend, data);
    if (response?.code === 200) {
      console.log(response?.message || "Successfully executed");
      toast.success(response?.message || "Successfully executed");
      yield put(OTPResendSuccess(response));
    } else {
      toast.error(response?.message || "Something went wrong.");
    }

    callback && callback(response);
  } catch (error) {
    console.log(error?.response?.data?.message || "Server Error");
    toast.error(error?.response?.data?.message || "Something went wrong.");
    yield put(
      OTPResendApiError(error?.response?.data?.message || "Server Error")
    );
  }
}

function* OTPVerify({ payload: { data, callback } }) {
  try {
    console.log("data from saga of OTPVERIFY", data);
    const response = yield call(postOTPVerify, data);
    if (response?.code === 200) {
      console.log(response?.message || "Successfully executed");
      toast.success(response?.message || "Successfully executed");
      yield put(OTPVerifySuccess(response));
    } else {
      toast.error(response?.message || "Something went wrong.");
    }

    callback && callback(response);
  } catch (error) {
    console.log(error?.response?.data?.message || "Server Error");
    toast.error(error?.response?.data?.message || "Something went wrong.");
    yield put(
      OTPVerifyApiError(error?.response?.data?.message || "Server Error")
    );
  }
}

function* OTPSaga() {
  yield takeEvery(OTP_RESEND, OTPResend);
  yield takeEvery(OTP_VERIFY, OTPVerify);
}

export default OTPSaga;
