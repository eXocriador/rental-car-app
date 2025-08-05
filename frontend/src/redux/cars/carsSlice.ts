import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAdverts, fetchCarBrands, fetchCarById } from "./operations";
import type { Car, FilterState } from "../../types";

interface CarsState {
  items: Car[];
  brands: string[];
  isLoading: boolean;
  error: string | null;
  total: number | null;
  currentPage: number;
  filters: FilterState;
  selectedCar: Car | null;
}

const initialState: CarsState = {
  items: [],
  brands: [],
  isLoading: false,
  error: null,
  total: null,
  currentPage: 1,
  filters: {
    make: "",
    price: "",
    mileageFrom: "",
    mileageTo: ""
  },
  selectedCar: null
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearCars: (state) => {
      state.items = [];
      state.currentPage = 1;
      state.total = null;
    },
    setFilters: (state, action: PayloadAction<FilterState>) => {
      state.filters = action.payload;
    },
    clearSelectedCar: (state) => {
      state.selectedCar = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch adverts
      .addCase(fetchAdverts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const { data, page } = action.payload;

        if (page === 1) {
          // Replace items for first page
          state.items = data.adverts || [];
        } else {
          // Append items for subsequent pages
          state.items = [...state.items, ...(data.adverts || [])];
        }

        state.total = data.total || 0;
        state.currentPage = page;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = (action.payload as string) || "Failed to fetch adverts";
      })

      // Fetch car by ID
      .addCase(fetchCarById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.selectedCar = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          (action.payload as string) || "Failed to fetch car details";
      })

      // Fetch car brands
      .addCase(fetchCarBrands.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchCarBrands.fulfilled, (state, action) => {
        state.brands = action.payload || [];
      })
      .addCase(fetchCarBrands.rejected, (state, action) => {
        state.error =
          (action.payload as string) || "Failed to fetch car brands";
      });
  }
});

export const { clearError, clearCars, setFilters, clearSelectedCar } =
  carsSlice.actions;
export default carsSlice.reducer;
