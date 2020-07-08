// Refactor the Root component to a separate file
// Add redux debug tool support
import React from "react";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
//import thunk from "redux-thunk";
import reducers from "reducers";
import async from "middlewares/async";
import stateValidator from "middlewares/stateValidator";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ({ initState = {}, children }) => {
  return (
    <Provider
      store={createStore(
        reducers,
        initState,
        composeEnhancers(applyMiddleware(async, stateValidator))
      )}
    >
      {children}
    </Provider>
  );
};
