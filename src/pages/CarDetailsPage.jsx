import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { fetchAdverts } from "../redux/cars/operations";
import CarDetails from "../components/CarDetails/CarDetails";
import Modal from "../components/Modal/Modal";
import Loader from "../components/Loader/Loader";
import styled from "styled-components";

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
  const { items: cars, isLoading } = useSelector((state) => state.cars);

  const [car, setCar] = useState(null);

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

  const handleClose = () => {
    navigate(-1);
  };

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
    <Modal isOpen={true} onClose={handleClose}>
      <CarDetails car={car} />
    </Modal>
  );
};

export default CarDetailsPage;
