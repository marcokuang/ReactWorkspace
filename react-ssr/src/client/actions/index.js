export const FETCH_USERS = "FETCH_USERS";
const rootURL = "/users";
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get(rootURL);

  dispatch({
    type: FETCH_USERS,
    payload: res,
  });
};
