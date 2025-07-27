// src/redux/slices/favoritesSlice.js

import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: JSON.parse(localStorage.getItem("favorites")) ?? []
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const car = action.payload;
      const index = state.items.findIndex((item) => item.id === car.id);

      if (index === -1) {
        state.items.push(car);
      } else {
        state.items.splice(index, 1);
      }
      localStorage.setItem("favorites", JSON.stringify(state.items));
    }
  }
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
