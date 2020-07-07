import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from "actions/types";
import axios from "axios";

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}

export const fetchComments = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then(({ data }) => {
      setTimeout(() => {
        console.log("A second has passed!, dispatching action now ^.^");
        dispatch({
          type: FETCH_COMMENTS,
          payload: data,
        });
      }, 1000);
    })
    .catch((err) => {
      console.log(`ERROR >>> Action Creator >>> ${err}`);
    });

  // dispatch({
  //   type: FETCH_COMMENTS,
  //   payload: response,
  // });
};

export const changeAuth = (isLoggedIn) => {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn,
  };
};
