import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Car } from "../../types";

interface FavoritesState {
  items: Car[];
}

const initialState: FavoritesState = {
  items: []
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Car>) => {
      const carId = action.payload.id;
      const exists = state.items.find((item) => item.id === carId);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
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
