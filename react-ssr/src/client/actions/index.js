import axios from "axios";
export const FETCH_USERS = "FETCH_USERS";
const rootURL = "http://react-ssr-api.herokuapp.com/users";
export const fetchUsers = () => async (dispatch) => {
  const res = await axios.get(rootURL);

  dispatch({
    type: FETCH_USERS,
    payload: res,
  });
};
