import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosConfig";
import type { Car, FilterState } from "../../types";

interface FetchAdvertsParams {
  page?: number;
  filters?: FilterState;
}

interface ApiResponse {
  cars?: Car[];
  totalCars?: number;
}

interface FetchAdvertsResponse {
  data: {
    adverts: Car[];
    total: number;
  };
  page: number;
  filters: FilterState;
}

// Fetch car brands for filters
export const fetchCarBrands = createAsyncThunk<
  string[],
  void,
  { rejectValue: string }
>("cars/fetchBrands", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get<string[]>("/brands");
    return response.data;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || "Failed to fetch car brands"
    );
  }
});

// Fetch a single car by ID
export const fetchCarById = createAsyncThunk<
  Car,
  string,
  { rejectValue: string }
>("cars/fetchCarById", async (carId, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get<Car>(`/cars/${carId}`);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || "Failed to fetch car details"
    );
  }
});

// Fetch cars with pagination and filters
export const fetchAdverts = createAsyncThunk<
  FetchAdvertsResponse,
  FetchAdvertsParams,
  { rejectValue: string }
>(
  "cars/fetchAdverts",
  async (
    {
      page = 1,
      filters = { brand: "", price: "", mileageFrom: "", mileageTo: "" }
    },
    { rejectWithValue }
  ) => {
    try {
      const params: Record<string, any> = {
        page,
        limit: 12
      };

      // Map our filter names to API parameter names
      if (filters.brand) {
        params.brand = filters.brand;
      }

      if (filters.price) {
        params.rentalPrice = filters.price.replace("$", "");
      }

      if (filters.mileageFrom) {
        params.minMileage = filters.mileageFrom;
      }

      if (filters.mileageTo) {
        params.maxMileage = filters.mileageTo;
      }

      const response = await axiosInstance.get<ApiResponse>("/cars", {
        params
      });
      return {
        data: {
          adverts: response.data.cars || [],
          total: response.data.totalCars || 0
        },
        page,
        filters
      };
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch cars"
      );
    }
  }
);
