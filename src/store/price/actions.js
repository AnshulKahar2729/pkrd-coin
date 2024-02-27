import {
  FETCH_PKRD_PRICE,
  FETCH_PKRD_PRICE_ERROR,
  FETCH_PKRD_PRICE_SUCCESS,
} from "./actionTypes";

export const fetchPKRDPrice = (callback) => {
  return {
    type: FETCH_PKRD_PRICE,
    payload: {callback},
  };
};

export const fetchPKRDPriceSuccess = (price) => {
  return {
    type: FETCH_PKRD_PRICE_SUCCESS,
    payload: price,
  };
};

export const fetchPKRDPriceError = (error) => {
  return {
    type: FETCH_PKRD_PRICE_ERROR,
    payload: error,
  };
};
