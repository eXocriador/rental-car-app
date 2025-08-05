import React, { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-hot-toast";
import { formatPrice } from "../../utils/formatters";
import {
  FormContainer,
  FormTitle,
  Form,
  FormGroup,
  FormLabel,
  FormInput,
  FormSelect,
  FormTextarea,
  SubmitButton,
  SuccessMessage,
  CarInfo,
  CarPrice
} from "./RentalForm.styled";

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
      <FormContainer>
        <SuccessMessage>
          <h3>Booking Submitted Successfully!</h3>
          <p>
            Thank you for your booking. We'll contact you shortly to confirm
            your reservation.
          </p>
        </SuccessMessage>
      </FormContainer>
    );
  }

  return (
    <FormContainer>
      <FormTitle>Book This Car</FormTitle>

      <CarInfo>
        <h4>
          {car.brand} {car.model}, {car.year}
        </h4>
        <CarPrice>{formatPrice(car.rentalPrice)}</CarPrice>
      </CarInfo>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor="name">Full Name *</FormLabel>
          <FormInput
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            error={errors.name}
            placeholder="Enter your full name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="email">Email *</FormLabel>
          <FormInput
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="phone">Phone Number *</FormLabel>
          <FormInput
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            error={errors.phone}
            placeholder="Enter your phone number"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="startDate">Start Date *</FormLabel>
          <FormInput
            id="startDate"
            name="startDate"
            type="date"
            value={formData.startDate}
            onChange={handleInputChange}
            error={errors.startDate}
            min={new Date().toISOString().split("T")[0]}
          />
          {errors.startDate && (
            <span className="error">{errors.startDate}</span>
          )}
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="endDate">End Date *</FormLabel>
          <FormInput
            id="endDate"
            name="endDate"
            type="date"
            value={formData.endDate}
            onChange={handleInputChange}
            error={errors.endDate}
            min={formData.startDate || new Date().toISOString().split("T")[0]}
          />
          {errors.endDate && <span className="error">{errors.endDate}</span>}
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="pickupLocation">Pickup Location *</FormLabel>
          <FormSelect
            id="pickupLocation"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleInputChange}
            error={errors.pickupLocation}
          >
            <option value="">Select pickup location</option>
            <option value="airport">Airport</option>
            <option value="downtown">Downtown Office</option>
            <option value="hotel">Hotel Pickup</option>
            <option value="other">Other Location</option>
          </FormSelect>
          {errors.pickupLocation && (
            <span className="error">{errors.pickupLocation}</span>
          )}
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="dropoffLocation">Dropoff Location</FormLabel>
          <FormSelect
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
          </FormSelect>
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="additionalNotes">Additional Notes</FormLabel>
          <FormTextarea
            id="additionalNotes"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleInputChange}
            placeholder="Any special requirements or notes..."
            rows="4"
          />
        </FormGroup>

        <SubmitButton type="submit">Book Now</SubmitButton>
      </Form>
    </FormContainer>
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
