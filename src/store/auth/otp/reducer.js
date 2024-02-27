const { OTP_RESEND, OTP_RESEND_SUCCESS, OTP_RESEND_API_ERROR, OTP_VERIFY, OTP_VERIFY_API_ERROR, OTP_VERIFY_SUCCESS } = require("./actionTypes");

const OTP_RESEND_INITIAL_STATE = {
  loading: false,
  error: "",
  success : false
};

export const OTPResend = (state = OTP_RESEND_INITIAL_STATE, action) => {
  switch (action.type) {
    case OTP_RESEND_API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading : false,
        success : false
      };
    case OTP_RESEND:
      return {
        ...state,
        loading: true,
        success : false,
      };
    case OTP_RESEND_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        success : true
      };
    default:
      return state;
  }
};


const OTP_VERIFY_INITIAL_STATE = {
  loading: false,
  error: "",
};
export const OTPVerify = (state = OTP_VERIFY_INITIAL_STATE, action) => {
  switch (action.type) {
    case OTP_VERIFY_API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading : false
      };
    case OTP_VERIFY:
      return {
        ...state,
        loading: true,
      };
    case OTP_VERIFY_SUCCESS:
      return {
        otp : action.payload,
        loading: false,
        error: "",
      };
    default:
      return state;
  }
}

// export default OTPResend;
