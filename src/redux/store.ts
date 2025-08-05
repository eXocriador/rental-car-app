import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import carsReducer from "./cars/carsSlice";
import favoritesReducer from "./favorites/favoritesSlice";
import type { RootState as AppRootState } from "../types";

// Persist configuration for favorites
const favoritesPersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["items"] // Only persist the items array
};

const persistedFavoritesReducer = persistReducer(
  favoritesPersistConfig,
  favoritesReducer
);

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorites: persistedFavoritesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"]
      }
    })
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = AppRootState;
