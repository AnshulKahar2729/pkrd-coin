import {
  CREATE_WALLET,
  CREATE_WALLET_ERROR,
  CREATE_WALLET_SUCCESS,
  FETCH_WALLET,
  FETCH_WALLET_ERROR,
  FETCH_WALLET_SUCCESS,
} from "./actionTypes";

const initalState = {
  loading: false,
  error: "",
  data: {},
  wallet: {},
};

export const walletReducer = (state = initalState, action) => {
  switch (action.type) {
    case CREATE_WALLET:
      return {
        ...state,
        loading: true,
      };
    case CREATE_WALLET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case CREATE_WALLET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_WALLET:
      return {
        ...state,
        loading: true,
      };
    case FETCH_WALLET_SUCCESS:
      return {
        ...state,
        loading: false,
        wallet: action.payload.body,
      };
    case FETCH_WALLET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
