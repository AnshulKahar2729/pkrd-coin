import { call, put, takeEvery } from "redux-saga/effects";
import { toast } from "react-toastify";
import {
  getFetchWallet,
  postCreateWallet,
} from "store/service/backend_api_helper";
import {
  createWalletError,
  createWalletSuccess,
  fetchWalletError,
  fetchWalletSuccess,
} from "./actions";
import { CREATE_WALLET, FETCH_WALLET } from "./actionTypes";

function* createWallet({ payload: { data, callback } }) {
  try {
    const response = yield call(postCreateWallet, data);
    if (response.code === 200) {
      yield put(createWalletSuccess(response));
      // toast.success(response?.message || "Successfully executed");
    } else {
      // toast.error(response?.message || "Something went wrong.");
    }
    callback && callback(response);
  } catch (error) {
    // toast.error(error?.response?.data?.message || "Server Error");
    yield put(
      createWalletError(error?.response?.data?.message || "Server Error")
    );
  }
}

function* fetchWallet({ payload: { callback } }) {
  try {
    const response = yield call(getFetchWallet);
    if (response.code === 200) {
      yield put(fetchWalletSuccess(response));
      toast.success(response?.message || "WALLET IS FETCHED SUCCESSFULLY.");
    } else {
      toast.error(response?.message || "Something went wrong.");
    }
    callback && callback(response);
  } catch (error) {
    toast.error(error?.response?.data?.message || "Server Error");
    yield put(
      fetchWalletError(error?.response?.data?.message || "Server Error")
    );
  }
}

function* walletSaga() {
  yield takeEvery(CREATE_WALLET, createWallet);
  yield takeEvery(FETCH_WALLET, fetchWallet);
}

export default walletSaga;
