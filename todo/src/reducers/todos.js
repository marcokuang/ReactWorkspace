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

// testing calling another reducer inside the reducer
const singleTodoReducer = (state, action) => {
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
        [action.payload]: {
          ...state[action.payload],
          completed: !state[action.payload].completed,
        },
      };
    }
    default:
      return state;
  }
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return singleTodoReducer(state, action);
    }
    case TOGGLE_TODO: {
      return singleTodoReducer(state, action);
    }
    default: {
      return state;
    }
  }
};
