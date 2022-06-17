import { configureStore, combineReducers } from "@reduxjs/toolkit";
import photo from "./photo";
import token from "./token";
import user from "./user";
import feed from "./feed";
import ui from "./ui";

const middleware = () => (defaultMiddleware) => {
  return [...defaultMiddleware()]
};

const reducer = combineReducers({photo, token, user, feed, ui });
const store = configureStore({reducer, middleware: middleware()});

export default store