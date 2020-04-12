import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () =>
  // action creators in Redux will always return a plain js object

  // in order to make use of Redux-Thunk, the action creator should return a function
  async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");

    // return actions
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };

// fetch user action creator takes a user id and return an action
// original before using lodash
// export const fetchUser = (id) => async (dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// };

export const fetchUser = (id) => (dispatch) => {
  _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
});
