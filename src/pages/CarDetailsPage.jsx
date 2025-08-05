import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { fetchAdverts } from "../redux/cars/operations";
import CarDetails from "../components/CarDetails/CarDetails";
import RentalForm from "../components/RentalForm/RentalForm";
import Loader from "../components/Loader/Loader";
import styled from "styled-components";
import { colors, fonts, spacing } from "../components/Shared/variables";

const DetailsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${spacing.lg};
`;

const BackButton = styled.button`
  background: ${colors.secondary};
  color: ${colors.text};
  font-size: ${fonts.sizes.base};
  font-weight: ${fonts.weights.medium};
  padding: ${spacing.md} ${spacing.lg};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-bottom: ${spacing.xl};

  &:hover {
    background: ${colors.secondaryHover};
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: ${spacing["2xl"]};
  margin-top: ${spacing.xl};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: ${spacing["3xl"]} 0;
  color: ${colors.error};
  font-size: ${fonts.sizes.lg};
`;

const CarDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items: cars, isLoading } = useSelector((state) => state.cars);

  const [car, setCar] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    // If cars are already loaded, find the car by ID
    if (cars.length > 0) {
      const foundCar = cars.find((c) => c.id === id);
      if (foundCar) {
        setCar(foundCar);
        return;
      }
    }

    // If car not found in current cars, fetch all cars to find it
    dispatch(fetchAdverts({ page: 1, limit: 100 }))
      .then((result) => {
        if (result.payload?.data?.adverts) {
          const foundCar = result.payload.data.adverts.find((c) => c.id === id);
          if (foundCar) {
            setCar(foundCar);
          }
        }
      })
      .catch(() => {
        toast.error("Failed to load car details");
      });
  }, [id, cars, dispatch]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleRentalSubmit = (formData) => {
    // Simulate API call for rental booking
    console.log("Rental form submitted:", formData);

    // Show success notification
    toast.success("Car rental booked successfully! We'll contact you soon.");
    setIsFormSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 3000);
  };

  if (isLoading && !car) {
    return <Loader text="Loading car details..." />;
  }

  if (!car) {
    return (
      <DetailsContainer>
        <BackButton onClick={handleBack}>← Back to Catalog</BackButton>
        <ErrorMessage>
          Car not found. Please check the URL or go back to the catalog.
        </ErrorMessage>
      </DetailsContainer>
    );
  }

  return (
    <DetailsContainer>
      <BackButton onClick={handleBack}>← Back to Catalog</BackButton>

      <ContentGrid>
        <div>
          <CarDetails car={car} />
        </div>

        <div>
          <RentalForm
            car={car}
            onSubmit={handleRentalSubmit}
            isSubmitted={isFormSubmitted}
          />
        </div>
      </ContentGrid>
    </DetailsContainer>
  );
};

export default CarDetailsPage;
