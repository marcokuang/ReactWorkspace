import { ADD_TODO, TOGGLE_TODO } from "../actions/actionTypes";
import _ from "lodash";

const initState = _.mapKeys(
  [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: true,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
  ],
  "id"
);

console.log(initState);

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    }
    case TOGGLE_TODO: {
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
