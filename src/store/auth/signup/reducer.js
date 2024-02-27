const INITIAL_STATE = {
  loading: false,
  error: "",
};

const signup = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGNUP_USER":
      state = {
        ...state,
        loading: true,
      };
      break;
    case "SIGNUP_SUCCESS":
      state = {
        ...state,
        loading: false,
      };
      break;
    case "SIGNUP_API_ERROR":
      state = {
        ...state,
        error: action.payload,
        loading: false,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default signup;
