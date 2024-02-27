// import { FETCH_NOTIFICATIONS, FETCH_NOTIFICATIONS_ERROR, FETCH_NOTIFICATIONS_SUCCESS } from "./actionTypes";

import {
  FETCH_NOTIFICATIONS,
  FETCH_NOTIFICATIONS_ERROR,
  FETCH_NOTIFICATIONS_SUCCESS,
  READ_NOTIFICATION,
  READ_NOTIFICATION_ERROR,
  READ_NOTIFICATION_SUCCESS,
} from "./actionTypes";

const initalState = {
  notifications: [],
  loading: false,
  error: "",
};

export const notificationsReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS:
      console.log("Fetch Notification Called from reducer", action.payload);
      return {
        ...state,
        loading: true,
      };
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        notifications: action.payload.body.data,
      };
    case FETCH_NOTIFICATIONS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case READ_NOTIFICATION:
      return {
        ...state,
        loading: true,
      };
    case READ_NOTIFICATION_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case READ_NOTIFICATION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
