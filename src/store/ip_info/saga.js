import { call, put, takeEvery } from "redux-saga/effects";
import { toast } from "react-toastify";
import {
  getFetchIPInfo,
  getNotifications,
  postCreateIPInfo,
  putReadNotification,
} from "store/service/backend_api_helper";
import {
  createIPInfoError,
  createIPInfoSuccess,
  fetchIPInfoError,
  fetchIPInfoSuccess,
  fetchNotificationsError,
  fetchNotificationsSuccess,
  readNotificationError,
  readNotificationSuccess,
} from "./actions";
import { CREATE_IP_INFO, FETCH_IP_INFO, FETCH_NOTIFICATIONS, READ_NOTIFICATION } from "./actionTypes";

function* createIPInfo({ payload: { data, callback } }) {
  try {
    const response = yield call(postCreateIPInfo, data);
    if (response.code === 200) {
      yield put(createIPInfoSuccess(response));
      toast.success(response?.message || "Successfully executed");
    } else {
      toast.error(response?.message || "Something went wrong.");
    }
    callback && callback(response);
  } catch (error) {
    yield put(
      createIPInfoError(error?.response?.data?.message || "Server Error")
    );
  }
}


function* fetchIPInfo({ payload: { callback } }) {
  try {
    const response = yield call(getFetchIPInfo);
    if (response.code === 200) {
      yield put(fetchIPInfoSuccess(response));
      toast.success(response?.message || "Successfully executed");
    } else {
      toast.error(response?.message || "Something went wrong.");
    }
    callback && callback(response);
  } catch (error) {
    yield put(
      fetchIPInfoError(error?.response?.data?.message || "Server Error")
    );
  }
}

function* IPInfoSaga() {
  yield takeEvery(CREATE_IP_INFO, createIPInfo);
  yield takeEvery(FETCH_IP_INFO, fetchIPInfo);

}

export default IPInfoSaga;
