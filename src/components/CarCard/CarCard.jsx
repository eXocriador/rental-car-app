import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
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
    <CardContainer onClick={handleCardClick}>
      <CardImage>
        <img src={car.img} alt={`${car.brand} ${car.model}`} />
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
            {car.brand} {car.model}, {car.year}
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
