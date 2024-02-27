import { all, fork } from "redux-saga/effects";

//public
import OTPSaga from "./auth/otp/saga";
import signupSaga from "./auth/signup/saga";
import bidSaga from "./bids/saga";
import loginSaga from "./auth/login/saga";
import passwordSaga from "./auth/password/saga";
import notificationsSaga from "./notifications/saga";
import walletSaga from "./wallet/saga";
import tradeSaga from "./trade/saga";
import priceSaga from "./price/saga";
import IPInfoSaga from "./ip_info/saga";
import exchangeSaga from "./exchange/saga";

export default function* rootSaga() {
  yield all([
    fork(loginSaga),
    fork(OTPSaga),
    fork(signupSaga),
    fork(bidSaga),
    fork(passwordSaga),
    fork(notificationsSaga),
    fork(walletSaga),
    fork(tradeSaga),
    fork(priceSaga),
    fork(IPInfoSaga),
    fork(exchangeSaga)
  ]);
}
