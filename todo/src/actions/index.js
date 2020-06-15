import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";
import { COMPLETED, INCOMPLETE } from "../components/todoTypes";

let nextTodoId = 3;
let userId = 0;

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: {
      id: nextTodoId++,
      title: todo,
      completed: false,
      userId,
    },
  };
};

export const toggleTodo = (todo) => {
  console.log("toggle action is called");
  return {
    type: TOGGLE_TODO,
    payload: {
      ...todo,
    },
  };
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: {
      filter: filter,
    },
  };
};
