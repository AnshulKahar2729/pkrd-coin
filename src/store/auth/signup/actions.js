import {
  SIGNUP_API_ERROR,
  SIGNUP_SUCCESS,
  SIGNUP_USER,
  SOCIAL_SIGNUP,
} from "./actionTypes";

export const signupUser = (user, callback) => {
  return {
    type: SIGNUP_USER,
    payload: { user, callback },
  };
};

export const signupSuccess = (user) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: user,
  };
};

export const signupApiError = (error) => {
  return {
    type: SIGNUP_API_ERROR,
    payload: error,
  };
};

export const socialSignup = (user, callback, type) => {
  return {
    type: SOCIAL_SIGNUP,
    payload: { user, callback, type },
  };
};
