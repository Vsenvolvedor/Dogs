import { configureStore, combineReducers } from "@reduxjs/toolkit";
import photo from "./photo";
import token from "./token";
import user from "./user";

const middleware = () => (defaultMiddleware) => {
  return [...defaultMiddleware()]
};

const reducer = combineReducers({photo, token, user });
const store = configureStore({reducer, middleware: middleware()});

export default store