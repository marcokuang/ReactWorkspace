import { Todo, Action, ActionTypes } from "../actions";

export const todoReducer = (state: Todo[] = [], action: Action) => {
  // swtich statement acts as type guards
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo) => {
        return todo.id !== action.payload;
      });
    default:
      return state;
  }
};
