// src/redux/slices/carsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCars } from "../../services/api";

export const getCarsThunk = createAsyncThunk(
  "cars/getCars",
  async (page, { rejectWithValue }) => {
    try {
      const data = await fetchCars(page);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    currentPage: 1
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCarsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;

        // **ВИПРАВЛЕННЯ:**
        // Перевіряємо, чи є action.payload масивом перед тим, як його розгортати.
        // Це запобігає помилці, якщо API повертає щось інше.
        if (Array.isArray(action.payload)) {
          state.items.push(...action.payload);
          state.currentPage += 1;
        }
      })
      .addCase(getCarsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { reducer: carsReducer } = carsSlice;
