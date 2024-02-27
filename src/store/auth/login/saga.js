import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";

// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from "./actionTypes";
import { apiError, loginSuccess, logoutUserSuccess } from "./actions";
import { postLogin } from "../../service/backend_api_helper";

function* loginUser({ payload: { user, callback } }) {
  try {
    const response = yield call(postLogin, user);
    if (response.code === 200) {
      localStorage.setItem("authUser", JSON.stringify(response));
      yield put(loginSuccess(response));
      toast.success(response?.message || "Successfully executed")
    } else {
      toast.error(response?.message || "Something went wrong.");
    }
    callback && callback(response)
  } catch (error) {
    toast.error(error?.response?.data?.message || "Server Error");
    yield put(apiError(error?.response?.data?.message || "Server Error"));
  }
}

function* logoutUser({ payload: { callback } }) {
  try {
    localStorage.removeItem("authUser");
    const response = yield call();
    yield put(logoutUserSuccess(response));
    callback && callback(response);

  } catch (error) {
    yield put(apiError(error));
  }
}

function* loginSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
  yield takeEvery(LOGOUT_USER, logoutUser);
}

export default loginSaga;
