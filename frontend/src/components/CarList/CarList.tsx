import React from "react";
import CarCard from "../CarCard/CarCard";
import styles from "./CarList.module.css";
import type { Car } from "../../types";

interface CarListProps {
  cars: Car[];
  onLoadMore: () => void;
  hasMore: boolean;
  isLoading: boolean;
}

const CarList: React.FC<CarListProps> = ({ cars, onLoadMore, hasMore, isLoading }) => {
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

export default CarList;
