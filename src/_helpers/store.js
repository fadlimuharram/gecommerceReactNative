import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import reducers from "../_reducers";
import promise from "redux-promise-middleware";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(reduxThunk, logger, promise)
  // other store enhancers if any
);

export const store = createStore(reducers, {}, enhancer);
