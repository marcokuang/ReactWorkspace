// Refactor the Root component to a separate file
// Add redux debug tool support
import React from "react";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import reducers from "reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ({ initState = {}, children }) => {
  return (
    <Provider
      store={createStore(
        reducers,
        initState,
        composeEnhancers(applyMiddleware())
      )}
    >
      {children}
    </Provider>
  );
};
