import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { fetchCarBrands } from "../../redux/cars/operations";
import styles from "./Filters.module.css";

const Filters = ({ onSearch, onReset }) => {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.cars.brands);

  const [filters, setFilters] = useState({
    make: "",
    rentalPrice: "",
    mileageFrom: "",
    mileageTo: ""
  });

  useEffect(() => {
    dispatch(fetchCarBrands());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const activeFilters = Object.fromEntries(
      Object.entries(filters).filter(([, value]) => value !== "")
    );
    onSearch(activeFilters);
  };

  const handleReset = () => {
    setFilters({
      make: "",
      rentalPrice: "",
      mileageFrom: "",
      mileageTo: ""
    });
    onReset();
  };

  // Generate price options
  const priceOptions = [];
  for (let i = 30; i <= 500; i += 10) {
    priceOptions.push(i);
  }

  return (
    <form className={styles.filtersForm} onSubmit={handleSubmit}>
      <div className={styles.filterGroup} style={{ width: "224px" }}>
        <label className={styles.filterLabel} htmlFor="make">
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
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.filterGroup} style={{ width: "125px" }}>
        <label className={styles.filterLabel} htmlFor="rentalPrice">
          Price/1 hour
        </label>
        <select
          className={styles.filterSelect}
          id="rentalPrice"
          name="rentalPrice"
          value={filters.rentalPrice}
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

Filters.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
};

export default Filters;
