import {
  CREATE_BIDS,
  CREATE_BIDS_API_ERROR,
  CREATE_BIDS_SUCCESS,
  GET_BIDS,
  GET_BIDS_API_ERROR,
  GET_BIDS_SUCCESS,
} from "./actionTypes";

export const createBids = (bid, callback) => {
  return {
    type: CREATE_BIDS,
    payload: { bid, callback },
  };
};

export const createBidsSuccess = (bid) => {
  return {
    type: CREATE_BIDS_SUCCESS,
    payload: bid,
  };
};

export const createBidsError = (error) => {
  return {
    type: CREATE_BIDS_API_ERROR,
    payload: error,
  };
};

export const getBids = (bidQuery, callback) => {
  return {
    type: GET_BIDS,
    payload: { bidQuery, callback },
  };
};

export const getBidsSuccess = (bidData) => {
  return {
    type: GET_BIDS_SUCCESS,
    payload: bidData,
  };
};

export const getBidsError = (error) => {
  return {
    type: GET_BIDS_API_ERROR,
    payload: error,
  };
};
