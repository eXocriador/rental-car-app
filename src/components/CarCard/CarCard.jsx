import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import PropTypes from "prop-types";
import {
  addFavorite,
  removeFavorite
} from "../../redux/favorites/favoritesSlice";
import { formatPrice, capitalizeFirst } from "../../utils/formatters";
import styles from "./CarCard.module.css";

// Heart icon as React component
const HeartIcon = ({ isFavorite }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill={isFavorite ? "#3470FF" : "none"}
      stroke={isFavorite ? "#3470FF" : "#000000"}
      strokeWidth="2"
    />
  </svg>
);

const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.favorites.items);

  const isFavorite = favorites.some((fav) => fav.id === car.id);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      dispatch(removeFavorite(car.id));
      toast.success("Removed from favorites");
    } else {
      dispatch(addFavorite(car));
      toast.success("Added to favorites");
    }
  };

  const handleLearnMore = (e) => {
    e.stopPropagation();
    navigate(`/catalog/${car.id}`);
  };

  const handleCardClick = () => {
    navigate(`/catalog/${car.id}`);
  };

  return (
    <div className={styles.cardContainer} onClick={handleCardClick}>
      <div className={styles.cardImage}>
        <img
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/274x268?text=No+Image";
          }}
        />
        <button
          className={`${styles.favoriteButton} ${
            isFavorite ? styles.isFavorite : ""
          }`}
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <HeartIcon isFavorite={isFavorite} />
        </button>
      </div>

      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3 className={styles.carTitle}>
            {car.brand} <span>{car.model}</span>, {car.year}
          </h3>
          <div className={styles.carPrice}>{formatPrice(car.rentalPrice)}</div>
        </div>

        <div className={styles.carDetails}>
          <span className={styles.detailItem}>{car.address.split(",")[1]}</span>
          <span className={styles.detailItem}>{car.address.split(",")[2]}</span>
          <span className={styles.detailItem}>{car.rentalCompany}</span>
          <span className={styles.detailItem}>{capitalizeFirst(car.type)}</span>
          <span className={styles.detailItem}>{car.model}</span>
          <span className={styles.detailItem}>
            {car.mileage.toLocaleString("en-US")}
          </span>
          <span className={styles.detailItem}>{car.functionalities[0]}</span>
        </div>

        <button className={styles.learnMoreButton} onClick={handleLearnMore}>
          Learn More
        </button>
      </div>
    </div>
  );
};

CarCard.propTypes = {
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

export default CarCard;
