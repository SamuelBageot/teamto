import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducers } from ".";

export const rootReducer = combineReducers(reducers)

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
  reducer: reducers,
});
