import React from "react";
import PropTypes from "prop-types";
import {
  formatMileage,
  formatPrice,
  capitalizeFirst
} from "../../utils/formatters";
import {
  DetailsContainer,
  CarImage,
  CarTitle,
  CarPrice,
  CarDescription,
  DetailsGrid,
  DetailItem,
  DetailLabel,
  DetailValue,
  RentalConditions,
  RentalConditionsTitle,
  ConditionsList,
  ConditionItem,
  RentalButton
} from "./CarDetails.styled";

const CarDetails = ({ car }) => {
  // Handle rentalConditions as either array or string
  const rentalConditions = Array.isArray(car.rentalConditions)
    ? car.rentalConditions
    : car.rentalConditions.split("\n").filter((condition) => condition.trim());

  return (
    <DetailsContainer>
      <CarImage>
        <img src={car.img} alt={`${car.brand} ${car.model}`} />
      </CarImage>

      <CarTitle>
        {car.brand} {car.model}, {car.year}
      </CarTitle>

      <CarPrice>{formatPrice(car.rentalPrice)}</CarPrice>

      <CarDescription>{car.description}</CarDescription>

      <DetailsGrid>
        <DetailItem>
          <DetailLabel>Fuel Consumption</DetailLabel>
          <DetailValue>{car.fuelConsumption}</DetailValue>
        </DetailItem>

        <DetailItem>
          <DetailLabel>Engine Size</DetailLabel>
          <DetailValue>{car.engineSize}</DetailValue>
        </DetailItem>

        <DetailItem>
          <DetailLabel>Mileage</DetailLabel>
          <DetailValue>{formatMileage(car.mileage)}</DetailValue>
        </DetailItem>

        <DetailItem>
          <DetailLabel>Type</DetailLabel>
          <DetailValue>{capitalizeFirst(car.type)}</DetailValue>
        </DetailItem>

        <DetailItem>
          <DetailLabel>Rental Company</DetailLabel>
          <DetailValue>{car.rentalCompany}</DetailValue>
        </DetailItem>

        <DetailItem>
          <DetailLabel>Address</DetailLabel>
          <DetailValue>{car.address}</DetailValue>
        </DetailItem>
      </DetailsGrid>

      {car.accessories && car.accessories.length > 0 && (
        <DetailItem>
          <DetailLabel>Accessories</DetailLabel>
          <DetailValue>{car.accessories.join(", ")}</DetailValue>
        </DetailItem>
      )}

      {car.functionalities && car.functionalities.length > 0 && (
        <DetailItem>
          <DetailLabel>Functionalities</DetailLabel>
          <DetailValue>{car.functionalities.join(", ")}</DetailValue>
        </DetailItem>
      )}

      <RentalConditions>
        <RentalConditionsTitle>Rental Conditions</RentalConditionsTitle>
        <ConditionsList>
          {rentalConditions.map((condition, index) => (
            <ConditionItem key={index}>{condition}</ConditionItem>
          ))}
        </ConditionsList>
      </RentalConditions>

      <RentalButton href="tel:+380730000000">Rental Car</RentalButton>
    </DetailsContainer>
  );
};

CarDetails.propTypes = {
  car: PropTypes.shape({
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
  }).isRequired
};

export default CarDetails;
