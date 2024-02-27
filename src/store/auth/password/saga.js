import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { postChangePassword } from "store/service/backend_api_helper";
import { changePasswordError, changePasswordSuccess } from "./actions";
import { CHANGE_PASSWORD } from "./actionTypes";

function* changePassword({ payload: { data, callback } }) {
  try {
    const response = yield call(postChangePassword, data);
    if (response.code === 200) {
      yield put(changePasswordSuccess(response));
      toast.success(response?.message || "Successfully executed");
    } else {
      toast.error(response?.message || "Something went wrong.");
    }
    callback && callback(response);
  } catch (error) {
    toast.error(error?.response?.data?.message || "Server Error");
    yield put(
      changePasswordError(error?.response?.data?.message || "Server Error")
    );
  }
}

function* passwordSaga() {
  yield takeEvery(CHANGE_PASSWORD, changePassword);
}

export default passwordSaga;
