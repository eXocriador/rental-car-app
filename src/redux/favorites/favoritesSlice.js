import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const carId = action.payload.id;
      const exists = state.items.find((item) => item.id === carId);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      const carId = action.payload;
      state.items = state.items.filter((item) => item.id !== carId);
    },
    clearFavorites: (state) => {
      state.items = [];
    }
  }
});

export const { addFavorite, removeFavorite, clearFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
