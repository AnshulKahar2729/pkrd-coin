import {
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD_SUCCESS,
} from "./actionTypes";

export const changePassword = (data, callback) => {
  console.log("Change Password Action", data);
  return {
    type: CHANGE_PASSWORD,
    payload: { data, callback },
  };
};

export const changePasswordSuccess = (password) => {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    payload: password,
  };
};

export const changePasswordError = (error) => {
  return {
    type: CHANGE_PASSWORD_ERROR,
    payload: error,
  };
};
