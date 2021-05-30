import { combineReducers } from "redux";

import fetchQuestion from "./questions";
import fetchCounter from "./counter";
import fetchUser from "./user";

export const reducers = combineReducers({
  fetchQuestion,
  fetchCounter,
  fetchUser,
});
