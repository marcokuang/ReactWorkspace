import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () =>
  // action creators in Redux will always return a plain js object

  // in order to make use of Redux-Thunk, the action creator should return a function
  async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");

    // return actions
    dispatch({ type: "FETCH_POSTS", payload: response });
  };
