import axios from "axios";
import * as ActionType from "../actions/types";

const authHeader = (getState) => {
  const { auth } = getState();
  const userToken = auth.authenticated;
  return { Authorization: userToken };
};

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

export const loadFeature = (callback) => (dispatch, getState) => {
  axios
    .get("http://localhost:4000/feature", { headers: authHeader(getState) })
    .then((response) => {
      console.log(response);
      dispatch({
        type: ActionType.FEATURE,
        payload: response.data,
      });
      if (typeof callback === "function") {
        callback();
      }
    })
    .catch((err) => {
      console.error(err);
      dispatch({
        type: ActionType.AUTH_ERROR,
        payload: "An Error has occurred while fetching features",
      });
    });
};
