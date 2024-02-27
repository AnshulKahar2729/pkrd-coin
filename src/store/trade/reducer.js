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

const initalState = {
  loading: false,
  error: "",
  data: {},
  trades: [],
  tradeById: {},
};

export const tradeReducer = (state = initalState, action) => {
  switch (action.type) {
    case START_TRADE:
      return {
        ...state,
        loading: true,
      };
    case START_TRADE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case START_TRADE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ENGAGE_USER:
      return {
        ...state,
        loading: true,
      };
    case ENGAGE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case ENGAGE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_TRADES_LIST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TRADES_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        trades: action.payload.body.data,
      };
    case FETCH_TRADES_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_TRADE_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TRADE_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        tradeById: action.payload.body,
      };
    case FETCH_TRADE_BY_ID_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CANCEL_TRADE:
      return {
        ...state,
        loading: true,
      };
    case CANCEL_TRADE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case CANCEL_TRADE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case COMPLETE_TRADE:
      return {
        ...state,
        loading: true,
      };
    case COMPLETE_TRADE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case COMPLETE_TRADE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_TRADE_STATUS:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_TRADE_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_TRADE_STATUS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
