import { configureStore } from "@reduxjs/toolkit";
import textReverseReducer from "../reducers/index";

export const store = configureStore({
  reducer: textReverseReducer,
});
