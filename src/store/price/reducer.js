import {
  FETCH_PKRD_PRICE,
  FETCH_PKRD_PRICE_ERROR,
  FETCH_PKRD_PRICE_SUCCESS,
} from "./actionTypes";

const initialState = {
  PKRDPrice: 0,
  loading: false,
  error: "",
};

export const PKRDPriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PKRD_PRICE:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PKRD_PRICE_SUCCESS:
      return {
        ...state,
        loading: false,
        PKRDPrice: action.payload.market_data?.current_price?.usd,
      };
    case FETCH_PKRD_PRICE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
