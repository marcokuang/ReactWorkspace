// customized redux middleware
export default (store) => {
  // next is the reference to the next middleware in the flow
  return (next) => {
    // the action object
    return (action) => {
      // check to see if the action received is a function
      // if it does, then forward the dispatch to the caller function and let it deal with the logic
      // if it does not, then send the action on to the next middleware
      if (typeof action === "function") {
        return action(store.dispatch, store.getState);
      }
      return next(action);
    };
  };
};
