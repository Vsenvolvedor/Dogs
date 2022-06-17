import { configureStore, combineReducers } from "@reduxjs/toolkit";

const contador = () => 0

const middleware = () => (defaultMiddleware) => {
  return [...defaultMiddleware()]
};

const reducer = combineReducers({contador});
const store = configureStore({reducer, middleware: middleware()});

export default store