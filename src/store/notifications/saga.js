import { call, put, takeEvery } from "redux-saga/effects";
import { toast } from "react-toastify";
import {
  getNotifications,
  putReadNotification,
} from "store/service/backend_api_helper";
import {
  fetchNotificationsError,
  fetchNotificationsSuccess,
  readNotificationError,
  readNotificationSuccess,
} from "./actions";
import { FETCH_NOTIFICATIONS, READ_NOTIFICATION } from "./actionTypes";

function* fetchNotifications({ payload: { data, callback } }) {
  try {
    const response = yield call(getNotifications, data);
    if (response.code === 200) {
      yield put(fetchNotificationsSuccess(response));
      // toast.success(response?.message || "Successfully executed");
    } else {
      toast.error(response?.message || "Something went wrong.");
    }
    callback && callback(response);
  } catch (error) {
    // toast.error(error?.response?.data?.message || "Server Error");
    yield put(
      fetchNotificationsError(error?.response?.data?.message || "Server Error")
    );
  }
}

function* readNotification({ payload: { data, callback } }) {
  try {
    const response = yield call(putReadNotification, data);
    if (response.code === 200) {
      yield put(readNotificationSuccess(response));
      toast.success(response?.message || "Successfully executed");
    } else {
      toast.error(response?.message || "Something went wrong.");
    }
    callback && callback(response);
  } catch (error) {
    yield put(
      readNotificationError(error?.response?.data?.message || "Server Error")
    );
  }
}

function* notificationSaga() {
  yield takeEvery(FETCH_NOTIFICATIONS, fetchNotifications);
  yield takeEvery(READ_NOTIFICATION, readNotification);
}

export default notificationSaga;
