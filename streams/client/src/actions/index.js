import streams from "../apis/streams";
// action creators
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";

// on sign in, the user Id of the Google account will be recorded
const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

// getState argument will get the redux store data
const createStream = (formValues) => async (dispatch, getState) => {
  //get the user Id from the getState object
  const { userId } = getState().auth;

  // return a redux thunk action creator with async method
  const response = await streams.post("/streams", { ...formValues, userId });

  // dispatch an action of Create Stream after the response from the axios api is successful
  dispatch({ type: CREATE_STREAM, payload: response.data, userId });
};

const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");

  //dispatch an action of Fetch Streams after the GET call
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

const deleteStream = (id) => async (dispatch) => {
  const response = await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: response.data });
};

const editStream = (id, formValues) => async (dispatch) => {
  // return a redux thunk action creator with async method
  await streams.put(`/streams/${id}`, formValues);

  // dispatch an action of Create Stream after the response from the axios api is successful
  dispatch({ type: EDIT_STREAM, payload: id });
};

export {
  signIn,
  signOut,
  createStream,
  fetchStreams,
  fetchStream,
  deleteStream,
  editStream,
};
