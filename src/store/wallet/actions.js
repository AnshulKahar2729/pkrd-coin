import {
  CREATE_WALLET,
  CREATE_WALLET_ERROR,
  CREATE_WALLET_SUCCESS,
  FETCH_WALLET,
  FETCH_WALLET_ERROR,
  FETCH_WALLET_SUCCESS,
} from "./actionTypes";

export const createWallet = (data, callback) => {
  return {
    type: CREATE_WALLET,
    payload: { data, callback },
  };
};

export const createWalletSuccess = (data) => {
  return {
    type: CREATE_WALLET_SUCCESS,
    payload: data,
  };
};

export const createWalletError = (error) => {
  return {
    type: CREATE_WALLET_ERROR,
    payload: error,
  };
};

export const fetchWallet = (callback) => {
  return {
    type: FETCH_WALLET,
    payload: { callback },
  };
};

export const fetchWalletSuccess = (data) => {
  return {
    type: FETCH_WALLET_SUCCESS,
    payload: data,
  };
};

export const fetchWalletError = (error) => {
  return {
    type: FETCH_WALLET_ERROR,
    payload: error,
  };
};
