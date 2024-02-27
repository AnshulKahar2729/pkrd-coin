import { call, put, take, takeEvery } from "redux-saga/effects";
import { toast } from "react-toastify";
import {
  getTradeById,
  getTradesList,
  postCancelTrade,
  postCompleteTrade,
  postEngageUser,
  postStartTrade,
  postUpdateTradeStatus,
} from "store/service/backend_api_helper";
import {
  cancelTradeError,
  cancelTradeSuccess,
  completeTradeError,
  completeTradeSuccess,
  engageUserError,
  engageUserSuccess,
  fetchTradeByIdError,
  fetchTradeByIdSuccess,
  fetchTradesListError,
  fetchTradesListSuccess,
  startTradeError,
  startTradeSuccess,
  updateTradeStatusError,
  updateTradeStatusSuccess,
} from "./actions";
import {
  CANCEL_TRADE,
  COMPLETE_TRADE,
  ENGAGE_USER,
  FETCH_TRADES_LIST,
  FETCH_TRADE_BY_ID,
  START_TRADE,
  UPDATE_TRADE_STATUS,
} from "./actionTypes";

function* startTrade({ payload: { data, callback } }) {
  try {
    const response = yield call(postStartTrade, data);
    if (response.code === 200) {
      yield put(startTradeSuccess(response));
      toast.success(response?.message || "Successfully executed");
    } else {
      toast.error(response?.message || "Something went wrong.");
    }
    callback && callback(response);
  } catch (error) {
    toast.error(error?.response?.data?.message || "Server Error");
    yield put(
      startTradeError(error?.response?.data?.message || "Server Error")
    );
  }
}

function* engageUser({ payload: { params, callback } }) {
  try {
    const response = yield call(postEngageUser, params);
    if (response.code === 200) {
      yield put(engageUserSuccess(response));
      toast.success(response?.message || "Successfully executed");
    } else {
      toast.error(response?.message || "Something went wrong.");
    }
    callback && callback(response);
  } catch (error) {
    toast.error(error?.response?.data?.message || "Server Error");
    yield put(
      engageUserError(error?.response?.data?.message || "Server Error")
    );
  }
}

function* fetchTradesList({ payload: { query, callback } }) {
  try {
    const response = yield call(getTradesList, query);
    if (response.code === 200) {
      yield put(fetchTradesListSuccess(response));
      toast.success(response?.message || "Successfully executed");
    } else {
      toast.error(response?.message || "Something went wrong.");
    }
    callback && callback(response);
  } catch (error) {
    toast.error(error?.response?.data?.message || "Server Error");
    yield put(
      fetchTradesListError(error?.response?.data?.message || "Server Error")
    );
  }
}

function* fetchTradeById({ payload: { id, callback } }) {
  try {
    const response = yield call(getTradeById, id);
    if (response.code === 200) {
      yield put(fetchTradeByIdSuccess(response));
      toast.success(response?.message || "Successfully executed");
    } else {
      toast.error(response?.message || "Something went wrong.");
    }
    callback && callback(response);
  } catch (error) {
    toast.error(error?.response?.data?.message || "Server Error");
    yield put(
      fetchTradeByIdError(error?.response?.data?.message || "Server Error")
    );
  }
}

function* cancelTrade({ payload: { id, callback } }) {
  try {
    const response = yield call(postCancelTrade, id);
    if (response.code === 200) {
      yield put(cancelTradeSuccess(response));
      toast.success(response?.message || "Successfully executed");
    } else {
      toast.error(response?.message || "Something went wrong.");
    }
    callback && callback(response);
  } catch (error) {
    toast.error(error?.response?.data?.message || "Server Error");
    yield put(
      cancelTradeError(error?.response?.data?.message || "Server Error")
    );
  }
}

function* completeTrade({ payload: { id, callback } }) {
  try {
    const response = yield call(postCompleteTrade, id);
    if (response.code === 200) {
      yield put(completeTradeSuccess(response));
      toast.success(response?.message || "Successfully executed");
    } else {
      toast.error(response?.message || "Something went wrong.");
    }
    callback && callback(response);
  } catch (error) {
    toast.error(error?.response?.data?.message || "Server Error");
    yield put(
      completeTradeError(error?.response?.data?.message || "Server Error")
    );
  }
}

function* updateTradeStatus({ payload: { id, callback } }) {
  try {
    const response = yield call(postUpdateTradeStatus, id);
    if (response.code === 200) {
      yield put(updateTradeStatusSuccess(response));
      toast.success(response?.message || "Successfully executed");
    } else {
      toast.error(response?.message || "Something went wrong.");
    }
    callback && callback(response);
  } catch (error) {
    toast.error(error?.response?.data?.message || "Server Error");
    yield put(
      updateTradeStatusError(error?.response?.data?.message || "Server Error")
    );
  }
}

function* tradeSaga() {
  yield takeEvery(START_TRADE, startTrade);
  yield takeEvery(ENGAGE_USER, engageUser);
  yield takeEvery(FETCH_TRADES_LIST, fetchTradesList);
  yield takeEvery(FETCH_TRADE_BY_ID, fetchTradeById);
  yield takeEvery(CANCEL_TRADE, cancelTrade);
  yield takeEvery(COMPLETE_TRADE, completeTrade);
  yield takeEvery(UPDATE_TRADE_STATUS, updateTradeStatus);
}

export default tradeSaga;
