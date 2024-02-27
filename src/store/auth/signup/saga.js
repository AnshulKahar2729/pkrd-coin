import { postSignup } from "store/service/backend_api_helper";

const { toast } = require("react-toastify");
const { put, call, takeEvery } = require("redux-saga/effects");
const { signupSuccess, signupApiError } = require("./actions");
const { SIGNUP_USER } = require("./actionTypes");

function* signupUser({ payload: { user, callback } }) {
  try {
    const response = yield call(postSignup, user);
    console.log(response, "response from signup saga");
    callback && callback(response);
    if (response?.code === 200) {
      localStorage.setItem("authUser", JSON.stringify(response));
      yield put(signupSuccess(response));
      toast.success(response?.message || "Successfully executed");
    } else {
      toast.error(response?.message || "Something went wrong.");
    }

    callback && callback(response);
  } catch (error) {
    console.log(error, "=error");
    toast.error(error?.response?.data?.message || "Something went wrong.");
    yield put(signupApiError(error?.response?.data?.message || "Server Error"));
  }
}

function* signupSaga() {
  yield takeEvery(SIGNUP_USER, signupUser);
}

export default signupSaga;
