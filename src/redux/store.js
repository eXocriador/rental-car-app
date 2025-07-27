// src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";
// Змінюємо імпорт на іменований, додавши дужки
import { carsReducer } from "./slices/carsSlice";
import favoritesReducer from "./slices/favoritesSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorites: favoritesReducer
  }
});
