import { SIGN_IN, SIGN_OUT, SIGN_UP } from "../actions/types";

const Init_state = {
  authenticated: "",
  errorMessage: "",
};

export default (state = Init_state, action) => {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, authenticated: action.payload };
    case SIGN_IN:
      return { ...state, authenticated: action.payload };
    case SIGN_OUT:
      return { ...state, authenticated: "" };
    default:
      return state;
  }
};
