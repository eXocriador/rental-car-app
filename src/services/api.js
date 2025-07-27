// src/services/api.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://car-rental-api.goit.global"
});

// Використовуємо правильний ендпоінт /CARS, як на вашому скріншоті.
export const fetchCars = async (page = 1, limit = 12) => {
  try {
    const response = await apiClient.get("/cars", {
      params: {
        page,
        limit
      }
    });
    return response.data;
  } catch (error) {
    console.error(
      "API Error fetching cars:",
      error.response?.data || error.message
    );
    throw error;
  }
};
