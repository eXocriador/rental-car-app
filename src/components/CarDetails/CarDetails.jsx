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
  CarDescription,
  InfoBlock,
  InfoItem,
  SectionTitle,
  RentalConditions,
  ConditionsList,
  ConditionItem
} from "./CarDetails.styled";

const CarDetails = ({ car }) => {
  // Handle rentalConditions as either array or string
  const rentalConditions = Array.isArray(car.rentalConditions)
    ? car.rentalConditions
    : car.rentalConditions.split("\n").filter((condition) => condition.trim());

  // Function to parse conditions and wrap numbers in spans
  const parseCondition = (condition) => {
    const parts = condition.split(/(\d+)/);
    return parts.map((part, index) => {
      if (/^\d+$/.test(part)) {
        return <span key={index}>{part}</span>;
      }
      return part;
    });
  };

  return (
    <DetailsContainer>
      <CarImage>
        <img src={car.img} alt={`${car.brand} ${car.model}`} />
      </CarImage>

      <CarTitle>
        {car.brand} <span>{car.model}</span>, {car.year}
      </CarTitle>

      <InfoBlock>
        <InfoItem>{car.address.split(",")[1]}</InfoItem>
        <InfoItem>Id: {car.id}</InfoItem>
        <InfoItem>Year: {car.year}</InfoItem>
        <InfoItem>Type: {capitalizeFirst(car.type)}</InfoItem>
      </InfoBlock>

      <InfoBlock>
        <InfoItem>Fuel Consumption: {car.fuelConsumption}</InfoItem>
        <InfoItem>Engine Size: {car.engineSize}</InfoItem>
      </InfoBlock>

      <CarDescription>{car.description}</CarDescription>

      {car.accessories && car.accessories.length > 0 && (
        <>
          <SectionTitle>Accessories and functionalities:</SectionTitle>
          <InfoBlock>
            {car.accessories.map((accessory, index) => (
              <InfoItem key={index}>{accessory}</InfoItem>
            ))}
          </InfoBlock>
        </>
      )}

      {car.functionalities && car.functionalities.length > 0 && (
        <InfoBlock>
          {car.functionalities.map((functionality, index) => (
            <InfoItem key={index}>{functionality}</InfoItem>
          ))}
        </InfoBlock>
      )}

      <RentalConditions>
        <SectionTitle>Rental Conditions:</SectionTitle>
        <ConditionsList>
          {rentalConditions.map((condition, index) => (
            <ConditionItem key={index}>
              {parseCondition(condition)}
            </ConditionItem>
          ))}
        </ConditionsList>
      </RentalConditions>
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
