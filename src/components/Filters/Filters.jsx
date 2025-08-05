import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { fetchCarBrands } from "../../redux/cars/operations";
import {
  FiltersContainer,
  FiltersTitle,
  FiltersForm,
  FilterGroup,
  FilterLabel,
  FilterSelect,
  MileageGroup,
  MileageInputWrapper,
  FilterInput,
  SearchButton,
  ResetButton
} from "./Filters.styled";

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
    <FiltersContainer>
      <FiltersTitle>Filters</FiltersTitle>
      <FiltersForm onSubmit={handleSubmit}>
        <FilterGroup>
          <FilterLabel htmlFor="make">Car Brand</FilterLabel>
          <FilterSelect
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
          </FilterSelect>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel htmlFor="rentalPrice">Price/1 hour</FilterLabel>
          <FilterSelect
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
          </FilterSelect>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Mileage</FilterLabel>
          <MileageGroup>
            <MileageInputWrapper>
              <label>From</label>
              <FilterInput
                name="mileageFrom"
                type="number"
                value={filters.mileageFrom}
                onChange={handleInputChange}
                min="0"
              />
            </MileageInputWrapper>
            <MileageInputWrapper>
              <label>To</label>
              <FilterInput
                name="mileageTo"
                type="number"
                value={filters.mileageTo}
                onChange={handleInputChange}
                min="0"
              />
            </MileageInputWrapper>
          </MileageGroup>
        </FilterGroup>

        <SearchButton type="submit">Search</SearchButton>
      </FiltersForm>
    </FiltersContainer>
  );
};

Filters.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
};

export default Filters;
