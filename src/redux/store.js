// src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import placeholderSlice from "./slices/placeholderSlice";

export const store = configureStore({
  reducer: {
    placelder: placeholderSlice
  }
});
