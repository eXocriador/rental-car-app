import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import HeartIcon from "../../assets/icons/heart-icon.svg";
import {
  addFavorite,
  removeFavorite
} from "../../redux/favorites/favoritesSlice";
import { formatPrice, capitalizeFirst } from "../../utils/formatters";
import {
  CardContainer,
  CardImage,
  FavoriteButton,
  CardContent,
  CardHeader,
  CarTitle,
  CarPrice,
  CarDetails,
  DetailItem,
  LearnMoreButton
} from "./CarCard.styled";

const CarCard = ({ car, onLearnMore }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  const isFavorite = favorites.some((fav) => fav.id === car.id);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      dispatch(removeFavorite(car.id));
    } else {
      dispatch(addFavorite(car));
    }
  };

  const handleLearnMore = (e) => {
    e.stopPropagation();
    onLearnMore(car);
  };

  const handleCardClick = () => {
    onLearnMore(car);
  };

  return (
    <CardContainer onClick={handleCardClick}>
      <CardImage>
        <img src={car.img} alt={`${car.make} ${car.model}`} />
        <FavoriteButton
          onClick={handleFavoriteClick}
          $isFavorite={isFavorite}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <img src={HeartIcon} alt="heart" />
        </FavoriteButton>
      </CardImage>

      <CardContent>
        <CardHeader>
          <CarTitle>
            {car.make} {car.model}, {car.year}
          </CarTitle>
          <CarPrice>{formatPrice(car.rentalPrice)}</CarPrice>
        </CardHeader>

        <CarDetails>
          <DetailItem>{car.address}</DetailItem>
          <DetailItem>{car.rentalCompany}</DetailItem>
          <DetailItem>{capitalizeFirst(car.type)}</DetailItem>
          <DetailItem>{car.model}</DetailItem>
          <DetailItem>{car.id}</DetailItem>
          <DetailItem>{car.functionalities?.join(", ")}</DetailItem>
        </CarDetails>

        <LearnMoreButton onClick={handleLearnMore}>Learn More</LearnMoreButton>
      </CardContent>
    </CardContainer>
  );
};

CarCard.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
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
    rentalConditions: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired
  }).isRequired,
  onLearnMore: PropTypes.func.isRequired
};

export default CarCard;
