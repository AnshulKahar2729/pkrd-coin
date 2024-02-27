import { combineReducers } from "redux";

// Authentication
import Login from "./auth/login/reducer";
import Signup from "./auth/signup/reducer";
// import OTPResend from "./auth/otp/reducer";
import { OTPResend } from "./auth/otp/reducer";
import { OTPVerify } from "./auth/otp/reducer";
import { createBid, getBids } from "./bids/reducer";
import { passwordReducer } from "./auth/password/reducer";
import { notificationsReducer } from "./notifications/reducer";
import { walletReducer } from "./wallet/reducer";
import { tradeReducer } from "./trade/reducer";
import { PKRDPriceReducer } from "./price/reducer";
import { IPInfoReducer } from "./ip_info/reducer";
import { exchangeReducer } from "./exchange/reducer";

const rootReducer = combineReducers({
  Login,
  Signup,
  OTPResend,
  OTPVerify,
  createBid,
  getBids,
  passwordReducer,
  notificationsReducer,
  walletReducer,
  tradeReducer,
  PKRDPriceReducer,
  IPInfoReducer,
  exchangeReducer,
});

export default rootReducer;
