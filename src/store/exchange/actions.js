import { ADD_EXCHANGE, ADD_EXCHANGE_ERROR, ADD_EXCHANGE_SUCCESS } from "./actionTypes";

export const addExchange = (data, callback) => {
  return {
    type: ADD_EXCHANGE,
    payload: { data, callback },
  };
}

export const addExchangeSuccess = (data) => {
  return {
    type: ADD_EXCHANGE_SUCCESS,
    payload: data,
  };
}

export const addExchangeError = (error) => {
  return {
    type: ADD_EXCHANGE_ERROR,
    payload: error,
  };
}
