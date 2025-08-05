import React, { useState } from "react";
import { useSelector } from "react-redux";
import CarList from "../components/CarList/CarList";
import Modal from "../components/Modal/Modal";
import CarDetails from "../components/CarDetails/CarDetails";
import styled from "styled-components";
import { colors, fonts, spacing } from "../components/Shared/variables";

const FavoritesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${spacing.lg};
`;

const FavoritesHeader = styled.div`
  text-align: center;
  margin-bottom: ${spacing["3xl"]};
`;

const FavoritesTitle = styled.h1`
  font-size: ${fonts.sizes["4xl"]};
  font-weight: ${fonts.weights.bold};
  color: ${colors.text};
  margin-bottom: ${spacing.md};
`;

const FavoritesSubtitle = styled.p`
  font-size: ${fonts.sizes.lg};
  color: ${colors.textSecondary};
`;

const EmptyFavorites = styled.div`
  text-align: center;
  padding: ${spacing["3xl"]} 0;
`;

const EmptyTitle = styled.h2`
  font-size: ${fonts.sizes["3xl"]};
  font-weight: ${fonts.weights.semibold};
  color: ${colors.text};
  margin-bottom: ${spacing.lg};
`;

const EmptyText = styled.p`
  font-size: ${fonts.sizes.lg};
  color: ${colors.textSecondary};
  margin-bottom: ${spacing["2xl"]};
`;

const BrowseButton = styled.button`
  background: ${colors.primary};
  color: white;
  font-size: ${fonts.sizes.base};
  font-weight: ${fonts.weights.medium};
  padding: ${spacing.md} ${spacing["2xl"]};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: ${colors.primaryHover};
  }
`;

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites.items);
  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  const handleBrowseCatalog = () => {
    window.location.href = "/catalog";
  };

  if (favorites.length === 0) {
    return (
      <FavoritesContainer>
        <EmptyFavorites>
          <EmptyTitle>No favorite cars yet</EmptyTitle>
          <EmptyText>
            Start browsing our catalog and add cars to your favorites to see
            them here.
          </EmptyText>
          <BrowseButton onClick={handleBrowseCatalog}>
            Browse Catalog
          </BrowseButton>
        </EmptyFavorites>
      </FavoritesContainer>
    );
  }

  return (
    <FavoritesContainer>
      <FavoritesHeader>
        <FavoritesTitle>Your Favorite Cars</FavoritesTitle>
        <FavoritesSubtitle>
          You have {favorites.length} car{favorites.length !== 1 ? "s" : ""} in
          your favorites
        </FavoritesSubtitle>
      </FavoritesHeader>

      <CarList
        cars={favorites}
        onLearnMore={handleLearnMore}
        onLoadMore={() => {}} // No pagination for favorites
        hasMore={false}
        isLoading={false}
      />

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedCar && <CarDetails car={selectedCar} />}
      </Modal>
    </FavoritesContainer>
  );
};

export default FavoritesPage;
