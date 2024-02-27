import {
  FETCH_NOTIFICATIONS,
  FETCH_NOTIFICATIONS_ERROR,
  FETCH_NOTIFICATIONS_SUCCESS,
  READ_NOTIFICATION,
  READ_NOTIFICATION_ERROR,
  READ_NOTIFICATION_SUCCESS,
} from "./actionTypes";

export const fetchNotifications = (data, callback) => {
  return {
    type: FETCH_NOTIFICATIONS,
    payload: { data, callback },
  };
};

export const fetchNotificationsSuccess = (data) => {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    payload: data,
  };
};

export const fetchNotificationsError = (error) => {
  return {
    type: FETCH_NOTIFICATIONS_ERROR,
    payload: error,
  };
};

export const readNotification = (data, callback) => {
  return {
    type: READ_NOTIFICATION,
    payload: { data, callback },
  };
};

export const readNotificationSuccess = (data) => {
  return {
    type: READ_NOTIFICATION_SUCCESS,
    payload: data,
  };
};

export const readNotificationError = (error) => {
  return {
    type: READ_NOTIFICATION_ERROR,
    payload: error,
  };
};
