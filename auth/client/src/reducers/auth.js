import { SIGN_IN, SIGN_OUT, SIGN_UP } from "../actions/types";

const Init_state = {
  authenticated: "",
  errorMessage: "",
};

export default (state = Init_state, action) => {
  switch (action.type) {
    case SIGN_UP:
      return state;
    default:
      return state;
  }
};
