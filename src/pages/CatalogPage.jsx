import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "../redux/cars/operations";
import { clearCars, setFilters } from "../redux/cars/carsSlice";
import Filters from "../components/Filters/Filters";
import CarList from "../components/CarList/CarList";
import Loader from "../components/Loader/Loader";
import styles from "../components/Layout/Layout.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const {
    items: cars,
    isLoading,
    total,
    currentPage
  } = useSelector((state) => state.cars);

  useEffect(() => {
    // Load initial data
    dispatch(fetchAdverts({ page: 1 }));

    return () => {
      // Cleanup on unmount
      dispatch(clearCars());
    };
  }, [dispatch]);

  const handleSearch = (filters) => {
    dispatch(setFilters(filters));
    dispatch(fetchAdverts({ page: 1, filters }));
  };

  const handleReset = () => {
    dispatch(setFilters({}));
    dispatch(fetchAdverts({ page: 1 }));
  };

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    dispatch(fetchAdverts({ page: nextPage }));
  };

  const hasMore = cars.length < total;

  if (isLoading && cars.length === 0) {
    return <Loader text="Loading cars..." />;
  }

  return (
    <div className={styles.contentWrapper}>
      <Filters onSearch={handleSearch} onReset={handleReset} />

      {isLoading && cars.length === 0 ? (
        <Loader text="Loading cars..." />
      ) : (
        <CarList
          cars={cars}
          onLoadMore={handleLoadMore}
          hasMore={hasMore}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default CatalogPage;
