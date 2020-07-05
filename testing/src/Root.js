// Refactor the Root component to a separate file
// Add redux debug tool support
import React from "react";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import reducers from "reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (props) => {
  return (
    <Provider
      store={createStore(reducers, composeEnhancers(applyMiddleware()))}
    >
      {props.children}
    </Provider>
  );
};
