// src/redux/placeholderSlice.js

import { createSlice } from "@reduxjs/toolkit";

const placeholderSlice = createSlice({
  name: "placeholder",
  initialState: {
    value: 0
  },
  reducers: {}
});

export default placeholderSlice.reducer;
