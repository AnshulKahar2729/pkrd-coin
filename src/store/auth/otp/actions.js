import {
  OTP_RESEND,
  OTP_RESEND_API_ERROR,
  OTP_RESEND_SUCCESS,
  OTP_VERIFY,
  OTP_VERIFY_API_ERROR,
  OTP_VERIFY_SUCCESS,
} from "./actionTypes";

export const OTPResend = (data, callback) => {
  console.log("OTP RESENDdata from actions", data);
  return {
    type: OTP_RESEND,
    payload: { data, callback },
  };
};

export const OTPResendSuccess = (data) => {
  console.log("OTP RESEND data from actions success", data);
  return {
    type: OTP_RESEND_SUCCESS,
    payload: data,
  };
};

export const OTPResendApiError = (error) => {
  console.log("OTP RESEND data from actions error", error);
  return {
    type: OTP_RESEND_API_ERROR,
    payload: error,
  };
};

// Verify OTP
export const OTPVerify = (data, callback) => {
  console.log("OTP VERIFY data from actions", data);
  return {
    type: OTP_VERIFY,
    payload: { data, callback },
  };
};

export const OTPVerifySuccess = (data) => {
  console.log("OTP VERRIFY data from actions success", data);
  return {
    type: OTP_VERIFY_SUCCESS,
    payload: data,
  };
};

export const OTPVerifyApiError = (error) => {
  console.log("OTP VERIFY data from actions error", error);
  return {
    type: OTP_VERIFY_API_ERROR,
    payload: error,
  };
};
