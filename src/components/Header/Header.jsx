// src/components/Header/Header.jsx

import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${css.link} ${isActive ? css.active : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            `${css.link} ${isActive ? css.active : ""}`
          }
        >
          Catalog
        </NavLink>
        {/* Посилання на обрані */}
        {/* <NavLink to="/favorites" className={({ isActive }) => `${css.link} ${isActive ? css.active : ''}`}>
          Favorites
        </NavLink> */}
      </nav>
    </header>
  );
};

export default Header;
