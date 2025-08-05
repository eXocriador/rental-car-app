import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosConfig";
import type { Car, FilterState } from "../../types";

interface FetchAdvertsParams {
  page?: number;
  filters?: FilterState;
}

interface ApiCar {
  id: string;
  year: number;
  brand: string; // API returns 'brand'
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string;
  mileage: number;
}

interface ApiResponse {
  cars?: ApiCar[];
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
      error.response?.data?.error || "Failed to fetch car brands"
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
    const response = await axiosInstance.get<{ success: boolean; data: ApiCar }>(`/cars/${carId}`);
    // Map API response to our Car interface (brand -> make)
    return {
      ...response.data.data,
      make: response.data.data.brand
    };
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.error || "Failed to fetch car details"
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
      filters = { make: "", price: "", mileageFrom: "", mileageTo: "" }
    },
    { rejectWithValue }
  ) => {
    try {
      const params: Record<string, any> = {
        page,
        limit: 12
      };

      // Map our filter names to API parameter names
      if (filters.make) {
        params.brand = filters.make;
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

      const response = await axiosInstance.get<{ success: boolean; cars: ApiCar[]; totalCars: number }>("/cars", {
        params
      });

      // Map API response to our Car interface (brand -> make)
      const mappedCars = (response.data.cars || []).map((car) => ({
        ...car,
        make: car.brand // Map brand to make for consistency
      }));

      return {
        data: {
          adverts: mappedCars,
          total: response.data.totalCars || 0
        },
        page,
        filters
      };
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.error || "Failed to fetch cars"
      );
    }
  }
);
