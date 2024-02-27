import { call, put, takeEvery } from "redux-saga/effects";
import { toast } from "react-toastify";

// Login Redux States
import { CREATE_BIDS, GET_BIDS } from "./actionTypes";
import {
  createBidsError,
  createBidsSuccess,
  getBidsError,
  getBidsSuccess,
} from "./actions";

import { getPaginatedBids, postCreateBid } from "../service/backend_api_helper";

function* createBid({ payload: { bid, callback } }) {
  try {
    const response = yield call(postCreateBid, bid);
    if (response.code === 200) {
      toast.success(response.message || "Successfully executed");
      yield put(createBidsSuccess(response));
    } else {
      toast.error(response.message || "Something went wrong.");
    }

    callback && callback(response);
  } catch (error) {
    toast.error(error?.response?.data?.message || "Something went wrong.");
    yield put(
      createBidsError(error?.response?.data?.message || "Server Error")
    );
  }
}

function* getBids({ payload: { bidQuery, callback } }) {
  try {
    const response = yield call(getPaginatedBids, bidQuery);
    if (response.code === 200) {
      // toast.success(response.message || "Successfully executed");
      yield put(getBidsSuccess(response));
    } else {
      toast.error(response.message || "Something went wrong.");
    }

    callback && callback(response);
  } catch (error) {
    toast.error(error?.response?.data?.message || "Something went wrong.");
    yield put(getBidsError(error?.response?.data?.message || "Server Error"));
  }
}

function* bidSaga() {
  yield takeEvery(CREATE_BIDS, createBid);
  yield takeEvery(GET_BIDS, getBids);
}

export default bidSaga;
