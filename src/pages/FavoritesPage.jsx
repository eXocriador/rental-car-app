import React from "react";
import { useSelector } from "react-redux";
import CarList from "../components/CarList/CarList";
import styles from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites.items);

  const handleBrowseCatalog = () => {
    window.location.href = "/catalog";
  };

  if (favorites.length === 0) {
    return (
      <div className={styles.favoritesContainer}>
        <div className={styles.emptyFavorites}>
          <h2 className={styles.emptyTitle}>No favorite cars yet</h2>
          <p className={styles.emptyText}>
            Start browsing our catalog and add cars to your favorites to see
            them here.
          </p>
          <button className={styles.browseButton} onClick={handleBrowseCatalog}>
            Browse Catalog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.favoritesContainer}>
      <div className={styles.favoritesHeader}>
        <h1 className={styles.favoritesTitle}>Your Favorite Cars</h1>
        <p className={styles.favoritesSubtitle}>
          You have {favorites.length} car{favorites.length !== 1 ? "s" : ""} in
          your favorites
        </p>
      </div>

      <CarList
        cars={favorites}
        onLoadMore={() => {}} // No pagination for favorites
        hasMore={false}
        isLoading={false}
      />
    </div>
  );
};

export default FavoritesPage;
