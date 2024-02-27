import { CREATE_IP_INFO, CREATE_IP_INFO_ERROR, CREATE_IP_INFO_SUCCESS, FETCH_IP_INFO, FETCH_IP_INFO_ERROR, FETCH_IP_INFO_SUCCESS } from "./actionTypes";


const initalState = {
  ip_info: {},
  loading: false,
  error: "",
};

export const IPInfoReducer = (state = initalState, action) => {
  switch (action.type) {
    case CREATE_IP_INFO:
      return {
        ...state,
        loading: true,
      };
    case CREATE_IP_INFO_SUCCESS:
      return {
        ...state,
        ip_info: action.payload.body,
        loading: false,
      };

    case CREATE_IP_INFO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_IP_INFO:
      return {
        ...state,
        loading: true,
      };
    case FETCH_IP_INFO_SUCCESS:
      return {
        ...state,
        ip_info: action.payload.body,
        loading: false,
      };
    case FETCH_IP_INFO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
