import { call, put, takeEvery } from "redux-saga/effects";
import { toast } from "react-toastify";
import {
  postAddExchange,
} from "store/service/backend_api_helper";
import {
  addExchangeError,
  addExchangeSuccess,
} from "./actions";
import { ADD_EXCHANGE } from "./actionTypes";

function* addExchange({ payload: { data, callback } }) {
  try {
    const response = yield call(postAddExchange, data);
    if (response.code === 200) {
      yield put(addExchangeSuccess(response));
      toast.success(response?.message || "Successfully executed");
    } else {
      toast.error(response?.message || "Something went wrong.");
    }
    callback && callback(response);
  } catch (error) {
    toast.error(error?.response?.data?.message || "Server Error");
    yield put(
      addExchangeError(error?.response?.data?.message || "Server Error")
    );
  }
}

function* exchangeSaga() {
  yield takeEvery(ADD_EXCHANGE, addExchange);
}

export default exchangeSaga;
