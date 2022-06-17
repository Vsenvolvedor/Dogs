import { configureStore, combineReducers } from "@reduxjs/toolkit";
import photo from "./photo";

const middleware = () => (defaultMiddleware) => {
  return [...defaultMiddleware()]
};

const reducer = combineReducers({photo});
const store = configureStore({reducer, middleware: middleware()});

export default store