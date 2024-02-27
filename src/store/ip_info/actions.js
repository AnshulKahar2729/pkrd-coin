import { CREATE_IP_INFO, CREATE_IP_INFO_ERROR, CREATE_IP_INFO_SUCCESS, FETCH_IP_INFO, FETCH_IP_INFO_ERROR, FETCH_IP_INFO_SUCCESS } from "./actionTypes";

export const createIPInfo = (data, callback) => {
  return {
    type: CREATE_IP_INFO,
    payload: { data, callback },
  };
}

export const createIPInfoSuccess = (data) => {
  return {
    type: CREATE_IP_INFO_SUCCESS,
    payload: data,
  };
}

export const createIPInfoError = (error) => {
  return {
    type: CREATE_IP_INFO_ERROR,
    payload: error,
  };
}

export const fetchIPInfo = (callback) => {
  return {
    type: FETCH_IP_INFO,
    payload: { callback },
  };
}

export const fetchIPInfoSuccess = (data) => {
  return {
    type: FETCH_IP_INFO_SUCCESS,
    payload: data,
  };
}

export const fetchIPInfoError = (error) => {
  return {
    type: FETCH_IP_INFO_ERROR,
    payload: error,
  };
}