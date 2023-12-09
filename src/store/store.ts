import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootReducer  from "./root-reducer.ts";
import  watchGetPersonRequest from "./root-saga.ts";

export const initialize = () => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));
  const store = createStore(rootReducer, enhancer);
  sagaMiddleware.run(watchGetPersonRequest);
  return store;
};