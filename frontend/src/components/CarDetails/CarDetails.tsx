import React from "react";
import {
  capitalizeFirst
} from "../../utils/formatters";
import styles from "./CarDetails.module.css";
import type { Car } from "../../types";

interface CarDetailsProps {
  car: Car;
}

const CarDetails: React.FC<CarDetailsProps> = ({ car }) => {
  // Handle rentalConditions as either array or string
  const rentalConditions = Array.isArray(car.rentalConditions)
    ? car.rentalConditions
    : car.rentalConditions.split("\n").filter((condition) => condition.trim());

  // Function to parse conditions and wrap numbers in spans
  const parseCondition = (condition: string) => {
    const parts = condition.split(/(\d+)/);
    return parts.map((part, index) => {
      if (/^\d+$/.test(part)) {
        return <span key={index}>{part}</span>;
      }
      return part;
    });
  };

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.carImage}>
        <img src={car.img} alt={`${car.brand} ${car.carModel}`} />
      </div>

      <h2 className={styles.carTitle}>
        {car.brand} <span>{car.carModel}</span>, {car.year}
      </h2>

      <div className={styles.infoBlock}>
        <span className={styles.infoItem}>{car.address.split(",")[1]}</span>
        <span className={styles.infoItem}>Id: {car.id}</span>
        <span className={styles.infoItem}>Year: {car.year}</span>
        <span className={styles.infoItem}>
          Type: {capitalizeFirst(car.type)}
        </span>
      </div>

      <div className={styles.infoBlock}>
        <span className={styles.infoItem}>
          Fuel Consumption: {car.fuelConsumption}
        </span>
        <span className={styles.infoItem}>Engine Size: {car.engineSize}</span>
      </div>

      <p className={styles.carDescription}>{car.description}</p>

      {car.accessories && car.accessories.length > 0 && (
        <>
          <h3 className={styles.sectionTitle}>
            Accessories and functionalities:
          </h3>
          <div className={styles.infoBlock}>
            {car.accessories.map((accessory, index) => (
              <span className={styles.infoItem} key={index}>
                {accessory}
              </span>
            ))}
          </div>
        </>
      )}

      {car.functionalities && car.functionalities.length > 0 && (
        <div className={styles.infoBlock}>
          {car.functionalities.map((functionality, index) => (
            <span className={styles.infoItem} key={index}>
              {functionality}
            </span>
          ))}
        </div>
      )}

      <div className={styles.rentalConditions}>
        <h3 className={styles.sectionTitle}>Rental Conditions:</h3>
        <div className={styles.conditionsList}>
          {rentalConditions.map((condition, index) => (
            <p className={styles.conditionItem} key={index}>
              {parseCondition(condition)}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
