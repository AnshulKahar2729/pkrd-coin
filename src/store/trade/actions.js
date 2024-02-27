import {
  CANCEL_TRADE,
  CANCEL_TRADE_ERROR,
  CANCEL_TRADE_SUCCESS,
  COMPLETE_TRADE,
  COMPLETE_TRADE_ERROR,
  COMPLETE_TRADE_SUCCESS,
  ENGAGE_USER,
  ENGAGE_USER_ERROR,
  ENGAGE_USER_SUCCESS,
  FETCH_TRADES_LIST,
  FETCH_TRADES_LIST_ERROR,
  FETCH_TRADES_LIST_SUCCESS,
  FETCH_TRADE_BY_ID,
  FETCH_TRADE_BY_ID_ERROR,
  FETCH_TRADE_BY_ID_SUCCESS,
  START_TRADE,
  START_TRADE_ERROR,
  START_TRADE_SUCCESS,
  UPDATE_TRADE_STATUS,
  UPDATE_TRADE_STATUS_ERROR,
  UPDATE_TRADE_STATUS_SUCCESS,
} from "./actionTypes";

export const startTrade = (data, callback) => {
  return {
    type: START_TRADE,
    payload: { data, callback },
  };
};

export const startTradeSuccess = (data) => {
  return {
    type: START_TRADE_SUCCESS,
    payload: data,
  };
};

export const startTradeError = (error) => {
  return {
    type: START_TRADE_ERROR,
    payload: error,
  };
};

export const engageUser = (params, callback) => {
  return {
    type: ENGAGE_USER,
    payload: { params, callback },
  };
};

export const engageUserSuccess = (data) => {
  return {
    type: ENGAGE_USER_SUCCESS,
    payload: data,
  };
};

export const engageUserError = (error) => {
  return {
    type: ENGAGE_USER_ERROR,
    payload: error,
  };
};

export const fetchTradesList = (query, callback) => {
  return {
    type: FETCH_TRADES_LIST,
    payload: { query, callback },
  };
};

export const fetchTradesListSuccess = (data) => {
  return {
    type: FETCH_TRADES_LIST_SUCCESS,
    payload: data,
  };
};

export const fetchTradesListError = (error) => {
  return {
    type: FETCH_TRADES_LIST_ERROR,
    payload: error,
  };
};

export const fetchTradeById = (id, callback) => {
  return {
    type: FETCH_TRADE_BY_ID,
    payload: { id, callback },
  };
};

export const fetchTradeByIdSuccess = (data) => {
  return {
    type: FETCH_TRADE_BY_ID_SUCCESS,
    payload: data,
  };
};

export const fetchTradeByIdError = (error) => {
  return {
    type: FETCH_TRADE_BY_ID_ERROR,
    payload: error,
  };
};

export const cancelTrade = (id, callback) => {
  console.log("id", id);
  return {
    type: CANCEL_TRADE,
    payload: { id, callback },
  };
};

export const cancelTradeSuccess = (data) => {
  return {
    type: CANCEL_TRADE_SUCCESS,
    payload: data,
  };
};

export const cancelTradeError = (error) => {
  return {
    type: CANCEL_TRADE_ERROR,
    payload: error,
  };
};

export const completeTrade = (id, callback) => {
  return {
    type: COMPLETE_TRADE,
    payload: { id, callback },
  };
};

export const completeTradeSuccess = (data) => {
  return {
    type: COMPLETE_TRADE_SUCCESS,
    payload: data,
  };
};

export const completeTradeError = (error) => {
  return {
    type: COMPLETE_TRADE_ERROR,
    payload: error,
  };
};

export const updateTradeStatus = (id, callback) => {
  return {
    type: UPDATE_TRADE_STATUS,
    payload: { id, callback },
  };
}

export const updateTradeStatusSuccess = (data) => {
  return {
    type: UPDATE_TRADE_STATUS_SUCCESS,
    payload: data,
  };
}

export const updateTradeStatusError = (error) => {
  return {
    type: UPDATE_TRADE_STATUS_ERROR,
    payload: error,
  };
}