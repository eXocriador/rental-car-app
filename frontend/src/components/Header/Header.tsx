import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link to="/" className={styles.logo}>
          RentalCar
        </Link>
        <nav className={styles.navigation}>
          <NavLink
            to="/"
            end
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
            }
          >
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
