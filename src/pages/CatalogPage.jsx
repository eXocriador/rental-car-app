import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "../redux/cars/operations";
import { clearCars, setFilters } from "../redux/cars/carsSlice";
import Filters from "../components/Filters/Filters";
import CarList from "../components/CarList/CarList";
import Loader from "../components/Loader/Loader";
import Modal from "../components/Modal/Modal";
import CarDetails from "../components/CarDetails/CarDetails";
import styled from "styled-components";
import { spacing } from "../components/Shared/variables";

const CatalogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${spacing.lg};
`;

const CatalogPage = () => {
  const dispatch = useDispatch();
  const {
    items: cars,
    isLoading,
    total,
    currentPage
  } = useSelector((state) => state.cars);
  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleLearnMore = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  const hasMore = cars.length < total;

  if (isLoading && cars.length === 0) {
    return <Loader text="Loading cars..." />;
  }

  return (
    <CatalogContainer>
      <Filters onSearch={handleSearch} onReset={handleReset} />

      {isLoading && cars.length === 0 ? (
        <Loader text="Loading cars..." />
      ) : (
        <CarList
          cars={cars}
          onLearnMore={handleLearnMore}
          onLoadMore={handleLoadMore}
          hasMore={hasMore}
          isLoading={isLoading}
        />
      )}

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedCar && <CarDetails car={selectedCar} />}
      </Modal>
    </CatalogContainer>
  );
};

export default CatalogPage;
