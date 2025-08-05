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
import styles from "./CarDetailsPage.module.css";

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
      <div className={styles.errorMessage}>
        Car not found. Please check the URL or go back to the catalog.
      </div>
    );
  }

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.carDetailsWrapper}>
        <CarDetails car={car} />
        <button className={styles.rentButton} onClick={handleOpenModal}>
          Rent This Car
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <RentalForm
          car={car}
          onSubmit={handleRentalSubmit}
          isSubmitted={isFormSubmitted}
        />
      </Modal>
    </div>
  );
};

export default CarDetailsPage;
