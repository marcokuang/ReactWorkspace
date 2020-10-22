import { FETCH_ADMINS } from "../actions";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ADMINS: {
      // console.log(action.payload);
      return action.payload.data;
    }

    default:
      return state;
  }
};
