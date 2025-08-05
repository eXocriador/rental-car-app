export interface Car {
  id: string;
  year: number;
  make: string;
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

export interface RentalFormData {
  name: string;
  email: string;
  phone: string;
  carId: string;
  startDate: string;
  endDate: string;
}

export interface FilterState {
  make: string;
  price: string;
  mileageFrom: string;
  mileageTo: string;
}

export interface RootState {
  cars: CarsState;
  favorites: FavoritesState;
}

export interface CarsState {
  items: Car[];
  brands: string[];
  isLoading: boolean;
  error: string | null;
  total: number | null;
  currentPage: number;
  filters: FilterState;
  selectedCar: Car | null;
}

export interface FavoritesState {
  items: Car[]; // Array of car objects
}
