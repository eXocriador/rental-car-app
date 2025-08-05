import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarBrands } from "../../redux/cars/operations";
import styles from "./Filters.module.css";
import type { FilterState } from "../../types";
import type { RootState, AppDispatch } from "../../redux/store";

interface FiltersProps {
  onSearch: (filters: FilterState) => void;
  onReset: () => void;
}

const Filters: React.FC<FiltersProps> = ({ onSearch, onReset }) => {
  const dispatch = useDispatch<AppDispatch>();
  const brands = useSelector((state: RootState) => state.cars.brands);

  const [filters, setFilters] = useState<FilterState>({
    make: "",
    price: "",
    mileageFrom: "",
    mileageTo: ""
  });

  useEffect(() => {
    dispatch(fetchCarBrands());
  }, [dispatch]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const activeFilters = Object.fromEntries(
      Object.entries(filters).filter(([, value]) => value !== "")
    ) as FilterState;
    onSearch(activeFilters);
  };

  const handleReset = () => {
    setFilters({
      make: "",
      price: "",
      mileageFrom: "",
      mileageTo: ""
    });
    onReset();
  };

  // Generate price options
  const priceOptions: number[] = [];
  for (let i = 30; i <= 500; i += 10) {
    priceOptions.push(i);
  }

  return (
    <form className={styles.filtersForm} onSubmit={handleSubmit}>
      <div className={styles.filterGroup} style={{ width: "224px" }}>
        <label className={styles.filterLabel} htmlFor="brand">
          Car Brand
        </label>
        <select
          className={styles.filterSelect}
          id="make"
          name="make"
          value={filters.make}
          onChange={handleInputChange}
        >
          <option value="">All brands</option>
          {brands.map((brand: string) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.filterGroup} style={{ width: "125px" }}>
        <label className={styles.filterLabel} htmlFor="price">
          Price/1 hour
        </label>
        <select
          className={styles.filterSelect}
          id="price"
          name="price"
          value={filters.price}
          onChange={handleInputChange}
        >
          <option value="">All prices</option>
          {priceOptions.map((price) => (
            <option key={price} value={price}>
              ${price}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Mileage</label>
        <div className={styles.mileageGroup}>
          <div className={styles.mileageInputWrapper}>
            <label>From</label>
            <input
              className={styles.filterInput}
              name="mileageFrom"
              type="number"
              value={filters.mileageFrom}
              onChange={handleInputChange}
              min="0"
            />
          </div>
          <div className={styles.mileageInputWrapper}>
            <label>To</label>
            <input
              className={styles.filterInput}
              name="mileageTo"
              type="number"
              value={filters.mileageTo}
              onChange={handleInputChange}
              min="0"
            />
          </div>
        </div>
      </div>

      <div className={styles.buttonGroup}>
        <button className={styles.searchButton} type="submit">
          Search
        </button>
        <button
          className={styles.resetButton}
          type="button"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default Filters;
