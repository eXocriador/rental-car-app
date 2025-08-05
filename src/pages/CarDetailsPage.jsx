import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { fetchAdverts, fetchCarById } from "../redux/cars/operations";
import { clearSelectedCar } from "../redux/cars/carsSlice";
import CarDetails from "../components/CarDetails/CarDetails";
import RentalForm from "../components/RentalForm/RentalForm";
import Modal from "../components/Modal/Modal";
import Loader from "../components/Loader/Loader";
import styled from "styled-components";

const DetailsContainer = styled.div`
  max-width: 1184px;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 1440px) {
    padding: 0;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const CarDetailsWrapper = styled.div`
  margin-top: 40px;
`;

const RentButton = styled.button`
  background: #3470ff;
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding: 16px 32px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(52, 112, 255, 0.3);
  margin-top: 32px;

  &:hover {
    background: #0b44cd;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(52, 112, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 4rem 0;
  color: #ff0000;
  font-size: 1.125rem;
`;

const CarDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    items: cars,
    selectedCar,
    isLoading
  } = useSelector((state) => state.cars);

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // If cars are already loaded, find the car by ID
    if (cars.length > 0) {
      const foundCar = cars.find((c) => c.id === id);
      if (foundCar) {
        return;
      }
    }

    // If car not found in current cars, fetch it by ID
    dispatch(fetchCarById(id))
      .then((result) => {
        if (result.error) {
          toast.error("Failed to load car details");
        }
      })
      .catch(() => {
        toast.error("Failed to load car details");
      });

    return () => {
      dispatch(clearSelectedCar());
    };
  }, [id, cars, dispatch]);

  const handleRentalSubmit = (formData) => {
    // Simulate API call for rental booking
    console.log("Rental form submitted:", formData);

    // Show success notification
    toast.success("Car rental booked successfully! We'll contact you soon.");
    setIsFormSubmitted(true);
    setIsModalOpen(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 3000);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Get car data from either selectedCar or cars array
  const car = selectedCar || cars.find((c) => c.id === id);

  if (isLoading && !car) {
    return <Loader text="Loading car details..." />;
  }

  if (!car) {
    return (
      <ErrorMessage>
        Car not found. Please check the URL or go back to the catalog.
      </ErrorMessage>
    );
  }

  return (
    <DetailsContainer>
      <CarDetailsWrapper>
        <CarDetails car={car} />
        <RentButton onClick={handleOpenModal}>Rent This Car</RentButton>
      </CarDetailsWrapper>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <RentalForm
          car={car}
          onSubmit={handleRentalSubmit}
          isSubmitted={isFormSubmitted}
        />
      </Modal>
    </DetailsContainer>
  );
};

export default CarDetailsPage;
