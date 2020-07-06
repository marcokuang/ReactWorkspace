import { SAVE_COMMENT, FETCH_COMMENTS } from "../actions/types";

function extractComments(comments) {
  if (!comments) {
    return [];
  }

  const t0 = performance.now();
  // const res = comments.reduce((accu, current) => {
  //   return accu.concat(current.name);
  // }, []);

  const res = comments.map((comment) => comment.name);
  const t1 = performance.now();

  console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
  return res;
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
