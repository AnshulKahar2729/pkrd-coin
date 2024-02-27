import { call, put, takeEvery } from "redux-saga/effects";
import { toast } from "react-toastify";

// Login Redux States
import { FETCH_PKRD_PRICE } from "./actionTypes";
import { getPKRDPrice } from "../service/backend_api_helper";
import { fetchPKRDPriceError } from "./actions";
import { fetchPKRDPriceSuccess } from "./actions";

function* fetchPKRDPrice({ payload: { callback } }) {
  try {
    const response = yield call(getPKRDPrice);
    if (response) {
      // toast.success(response.message || "Successfully executed");
      yield put(fetchPKRDPriceSuccess(response));
    } else {
      // toast.error(response.message || "Something went wrong.");
    }

    callback && callback(response);
  } catch (error) {
    // toast.error(error?.response?.data?.message || "Something went wrong.");
    yield put(
      fetchPKRDPriceError(error?.response?.data?.message || "Server Error")
    );
  }
}

function* priceSaga() {
  yield takeEvery(FETCH_PKRD_PRICE, fetchPKRDPrice);
}

export default priceSaga;
