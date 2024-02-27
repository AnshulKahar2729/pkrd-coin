import {
  CREATE_BIDS,
  CREATE_BIDS_API_ERROR,
  CREATE_BIDS_SUCCESS,
  GET_BIDS,
  GET_BIDS_API_ERROR,
  GET_BIDS_SUCCESS,
} from "./actionTypes";

const initialState = {
  error: "",
  loading: false,
};

export const createBid = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BIDS:
      state = {
        ...state,
        loading: true,
      };
      break;
    case CREATE_BIDS_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case CREATE_BIDS_API_ERROR:
      state = {
        ...state,
        loading: false,
        error: action.payload,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

const getBidsInitialState = {
  error: "",
  loading: false,
  bids : [],
  paginatedData : {}
};

export const getBids = (state = getBidsInitialState, action) => {
  switch (action.type) {
    case GET_BIDS:
      return {
        ...state,
        loading: true,
      }
    case GET_BIDS_SUCCESS:
      return {
        ...state,
        loading: false,
        bids: action.payload.body.data,
        paginatedData : action.payload.body,
      }
      
    case GET_BIDS_API_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

