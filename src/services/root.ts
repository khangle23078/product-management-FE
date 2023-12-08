import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import { api } from "./api";

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authSlice
})