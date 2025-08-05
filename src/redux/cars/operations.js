import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosConfig";

// Fetch car brands for filters
export const fetchCarBrands = createAsyncThunk(
  "cars/fetchBrands",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/brands");
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch car brands"
      );
    }
  }
);

// Fetch a single car by ID
export const fetchCarById = createAsyncThunk(
  "cars/fetchCarById",
  async (carId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/cars/${carId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch car details"
      );
    }
  }
);

// Fetch cars with pagination and filters
export const fetchAdverts = createAsyncThunk(
  "cars/fetchAdverts",
  async ({ page = 1, filters = {} }, { rejectWithValue }) => {
    try {
      const params = {
        page,
        limit: 12
      };

      // Map our filter names to API parameter names
      if (filters.make) {
        params.brand = filters.make;
      }

      if (filters.rentalPrice) {
        params.rentalPrice = filters.rentalPrice.replace("$", "");
      }

      if (filters.mileageFrom) {
        params.minMileage = filters.mileageFrom;
      }

      if (filters.mileageTo) {
        params.maxMileage = filters.mileageTo;
      }

      const response = await axiosInstance.get("/cars", { params });
      return {
        data: {
          adverts: response.data.cars || [],
          total: response.data.totalCars || 0
        },
        page,
        filters
      };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch cars"
      );
    }
  }
);
