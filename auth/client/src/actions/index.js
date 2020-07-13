import axios from "axios";
import * as ActionType from "../actions/types";

export const signUp = (user, callback) => (dispatch) => {
  axios
    .post("http://localhost:4000/signup", user)
    .then((response) => {
      console.log(response);
      dispatch({
        type: ActionType.SIGN_UP,
        payload: response.data.token,
      });
      localStorage.setItem("token", response.data.token);
      callback();
    })
    .catch((err) => {
      console.error(err);
      dispatch({
        type: ActionType.AUTH_ERROR,
        payload: "Email in Use",
      });
    });
};

export const signIn = (user, callback) => (dispatch) => {
  axios
    .post("http://localhost:4000/signin", user)
    .then((response) => {
      console.log(response);
      dispatch({
        type: ActionType.SIGN_IN,
        payload: response.data.token,
      });
      localStorage.setItem("token", response.data.token);
      if (typeof callback === "function") {
        callback();
      }
    })
    .catch((err) => {
      console.error(err);
      dispatch({
        type: ActionType.AUTH_ERROR,
        payload: "Email and password do not match",
      });
    });
};

export const signOut = () => {
  localStorage.removeItem("token");
  return {
    type: ActionType.SIGN_OUT,
    payload: "",
  };
};
