import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";
import axios from "axios";

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}

export const fetchComments = () => async (dispatch) => {
  await axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then(({ data }) => {
      console.log("Fetch request completes");
      dispatch({
        type: FETCH_COMMENTS,
        payload: data,
      });
    })
    .catch((err) => {
      console.log(`ERROR >>> Action Creator >>> ${err}`);
    });

  // dispatch({
  //   type: FETCH_COMMENTS,
  //   payload: response,
  // });
};
