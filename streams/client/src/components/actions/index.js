// action creators
import { SIGN_IN, SIGN_OUT } from "./types";

// on sign in, the user Id of the Google account will be recorded
const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: { userId },
  };
};

const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export { signIn, signOut };
