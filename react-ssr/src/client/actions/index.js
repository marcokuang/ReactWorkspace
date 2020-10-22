export const FETCH_USERS = "FETCH_USERS";
const rootURL = "/users";
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get(rootURL);

  dispatch({
    type: FETCH_USERS,
    payload: res,
  });
};

// add new action creators for user auth
export const FETCH_CURRENT_USER = "FETCH_CURRENT_USER";
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get("/current_user");

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res,
  });
};

// action creators for admin
export const FETCH_ADMINS = "FETCH_ADMINS";
export const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = await api.get("/admins");

  dispatch({
    type: FETCH_ADMINS,
    payload: res,
  });
};
