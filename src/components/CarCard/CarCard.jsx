// src/components/CarCard/CarCard.jsx

import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/slices/favoritesSlice";
import css from "./CarCard.module.css";

// Іконки (припустимо, вони лежать в /src/assets/icons.svg)
import sprite from "../../assets/icons.svg";

const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.some((fav) => fav.id === car.id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(car));
  };

  const {
    year,
    make,
    model,
    type,
    img,
    functionalities,
    rentalPrice,
    rentalCompany,
    address
  } = car;

  const addressParts = address.split(", ");
  const city = addressParts[1];
  const country = addressParts[2];

  return (
    <li className={css.card}>
      <img src={img} alt={`${make} ${model}`} className={css.image} />
      <button className={css.favoriteButton} onClick={handleToggleFavorite}>
        <svg className={`${css.icon} ${isFavorite ? css.iconFavorite : ""}`}>
          <use href={`${sprite}#icon-heart`} />
        </svg>
      </button>

      <div className={css.titleWrapper}>
        <h3 className={css.title}>
          {make} <span className={css.model}>{model}</span>, {year}
        </h3>
        <p className={css.price}>{rentalPrice}</p>
      </div>

      <div className={css.details}>
        <span>{city}</span>
        <span>{country}</span>
        <span>{rentalCompany}</span>
        <span>{type}</span>
        <span>{model}</span>
        <span>{car.id}</span>
        <span>{functionalities[0]}</span>
      </div>

      <button className={css.button}>Learn more</button>
    </li>
  );
};

export default CarCard;
