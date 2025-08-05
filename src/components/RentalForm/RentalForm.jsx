import React, { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-hot-toast";
import { formatPrice } from "../../utils/formatters";
import styles from "./RentalForm.module.css";

const RentalForm = ({ car, onSubmit, isSubmitted }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    startDate: "",
    endDate: "",
    pickupLocation: "",
    dropoffLocation: "",
    additionalNotes: ""
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.startDate) {
      newErrors.startDate = "Start date is required";
    }

    if (!formData.endDate) {
      newErrors.endDate = "End date is required";
    } else if (formData.startDate && formData.endDate <= formData.startDate) {
      newErrors.endDate = "End date must be after start date";
    }

    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = "Pickup location is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    const rentalData = {
      ...formData,
      carId: car.id,
      carBrand: car.brand,
      carModel: car.model,
      carYear: car.year,
      rentalPrice: car.rentalPrice
    };

    onSubmit(rentalData);
  };

  if (isSubmitted) {
    return (
      <div className={styles.formContainer}>
        <div className={styles.successMessage}>
          <h3>Booking Submitted Successfully!</h3>
          <p>
            Thank you for your booking. We'll contact you shortly to confirm
            your reservation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Book This Car</h2>

      <div className={styles.carInfo}>
        <h4>
          {car.brand} {car.model}, {car.year}
        </h4>
        <div className={styles.carPrice}>{formatPrice(car.rentalPrice)}</div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="name">
            Full Name *
          </label>
          <input
            className={`${styles.formInput} ${errors.name ? styles.error : ""}`}
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="email">
            Email *
          </label>
          <input
            className={`${styles.formInput} ${
              errors.email ? styles.error : ""
            }`}
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="phone">
            Phone Number *
          </label>
          <input
            className={`${styles.formInput} ${
              errors.phone ? styles.error : ""
            }`}
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="startDate">
            Start Date *
          </label>
          <input
            className={`${styles.formInput} ${
              errors.startDate ? styles.error : ""
            }`}
            id="startDate"
            name="startDate"
            type="date"
            value={formData.startDate}
            onChange={handleInputChange}
            min={new Date().toISOString().split("T")[0]}
          />
          {errors.startDate && (
            <span className="error">{errors.startDate}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="endDate">
            End Date *
          </label>
          <input
            className={`${styles.formInput} ${
              errors.endDate ? styles.error : ""
            }`}
            id="endDate"
            name="endDate"
            type="date"
            value={formData.endDate}
            onChange={handleInputChange}
            min={formData.startDate || new Date().toISOString().split("T")[0]}
          />
          {errors.endDate && <span className="error">{errors.endDate}</span>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="pickupLocation">
            Pickup Location *
          </label>
          <select
            className={`${styles.formSelect} ${
              errors.pickupLocation ? styles.error : ""
            }`}
            id="pickupLocation"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleInputChange}
          >
            <option value="">Select pickup location</option>
            <option value="airport">Airport</option>
            <option value="downtown">Downtown Office</option>
            <option value="hotel">Hotel Pickup</option>
            <option value="other">Other Location</option>
          </select>
          {errors.pickupLocation && (
            <span className="error">{errors.pickupLocation}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="dropoffLocation">
            Dropoff Location
          </label>
          <select
            className={styles.formSelect}
            id="dropoffLocation"
            name="dropoffLocation"
            value={formData.dropoffLocation}
            onChange={handleInputChange}
          >
            <option value="">Same as pickup</option>
            <option value="airport">Airport</option>
            <option value="downtown">Downtown Office</option>
            <option value="hotel">Hotel Dropoff</option>
            <option value="other">Other Location</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="additionalNotes">
            Additional Notes
          </label>
          <textarea
            className={styles.formTextarea}
            id="additionalNotes"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleInputChange}
            placeholder="Any special requirements or notes..."
            rows="4"
          />
        </div>

        <button className={styles.submitButton} type="submit">
          Book Now
        </button>
      </form>
    </div>
  );
};

RentalForm.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rentalPrice: PropTypes.string.isRequired
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  isSubmitted: PropTypes.bool.isRequired
};

export default RentalForm;
