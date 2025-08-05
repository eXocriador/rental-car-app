import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosConfig";

// Fetch car brands for filters
export const fetchCarBrands = createAsyncThunk(
  "cars/fetchBrands",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/adverts/makes");
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch car brands"
      );
    }
  }
);

// Fetch adverts with pagination and filters
export const fetchAdverts = createAsyncThunk(
  "cars/fetchAdverts",
  async ({ page = 1, filters = {} }, { rejectWithValue }) => {
    try {
      const params = {
        page,
        limit: 12,
        ...filters
      };

      // Remove '$' from rentalPrice if present
      if (params.rentalPrice && typeof params.rentalPrice === "string") {
        params.rentalPrice = params.rentalPrice.replace("$", "");
      }

      const response = await axiosInstance.get("/adverts", { params });
      return {
        data: response.data,
        page,
        filters
      };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch adverts"
      );
    }
  }
);
