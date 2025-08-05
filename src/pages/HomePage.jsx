import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleViewCatalog = () => {
    navigate("/catalog");
  };

  return (
    <div className={styles.homeContainer}>
      <Header />
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Find Your Perfect Rental Car</h1>
          <p className={styles.heroDescription}>
            Discover a wide selection of premium vehicles for your journey. From
            compact cars to luxury vehicles, we have the perfect ride for every
            occasion.
          </p>
          <button className={styles.ctaButton} onClick={handleViewCatalog}>
            Explore Our Fleet
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
