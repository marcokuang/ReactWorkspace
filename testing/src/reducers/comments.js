import { SAVE_COMMENT, FETCH_COMMENTS } from "../actions/types";

function extractComments(comments) {
  if (!comments) {
    return [];
  }

  const results = comments.reduce((accu, current) => {
    return accu.concat(current.name);
  }, []);

  return results;
}

export default (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    case FETCH_COMMENTS:
      return [...state, ...extractComments(action.payload)];
    default:
      return state;
  }
};
