import React from "react";
import PropTypes from "prop-types";
import CarCard from "../CarCard/CarCard";
import {
  CarListContainer,
  LoadMoreContainer,
  LoadMoreButton,
  EmptyState,
  EmptyStateTitle,
  EmptyStateText
} from "./CarList.styled";

const CarList = ({ cars, onLearnMore, onLoadMore, hasMore, isLoading }) => {
  if (!cars || cars.length === 0) {
    return (
      <EmptyState>
        <EmptyStateTitle>No cars found</EmptyStateTitle>
        <EmptyStateText>
          Try adjusting your filters or search criteria to find more vehicles.
        </EmptyStateText>
      </EmptyState>
    );
  }

  return (
    <>
      <CarListContainer>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} onLearnMore={onLearnMore} />
        ))}
      </CarListContainer>

      {hasMore && (
        <LoadMoreContainer>
          <LoadMoreButton onClick={onLoadMore} disabled={isLoading}>
            {isLoading ? "Loading..." : "Load More"}
          </LoadMoreButton>
        </LoadMoreContainer>
      )}
    </>
  );
};

CarList.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      make: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      fuelConsumption: PropTypes.string.isRequired,
      engineSize: PropTypes.string.isRequired,
      accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
      functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
      rentalPrice: PropTypes.string.isRequired,
      rentalCompany: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      rentalConditions: PropTypes.string.isRequired,
      mileage: PropTypes.number.isRequired
    })
  ).isRequired,
  onLearnMore: PropTypes.func.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default CarList;
