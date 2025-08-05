import React from "react";
import PropTypes from "prop-types";
import CarCard from "../CarCard/CarCard";
import styles from "./CarList.module.css";

const CarList = ({ cars, onLoadMore, hasMore, isLoading }) => {
  if (!cars || cars.length === 0) {
    return (
      <div className={styles.emptyState}>
        <h3 className={styles.emptyStateTitle}>No cars found</h3>
        <p className={styles.emptyStateText}>
          Try adjusting your filters or search criteria to find more vehicles.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className={styles.carListContainer}>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      {hasMore && (
        <div className={styles.loadMoreContainer}>
          <button
            className={styles.loadMoreButton}
            onClick={onLoadMore}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </>
  );
};

CarList.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      brand: PropTypes.string.isRequired,
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
      rentalConditions: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
      ]).isRequired,
      mileage: PropTypes.number.isRequired
    })
  ).isRequired,
  onLoadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default CarList;
