import { combineReducers } from "@reduxjs/toolkit";

import config from "./config";
import auth from "./auth";

export function createRootReducer() {
  return combineReducers({ config, auth });
}
