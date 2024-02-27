import { ADD_EXCHANGE, ADD_EXCHANGE_ERROR, ADD_EXCHANGE_SUCCESS } from "./actionTypes";

const initalState = {
  data: {},
  loading: false,
  error: "",
};

export const exchangeReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_EXCHANGE:
      console.log("Fetch Notification Called from reducer", action.payload);
      return {
        ...state,
        loading: true,
      };
    case ADD_EXCHANGE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.body.data,
      };
    case ADD_EXCHANGE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
