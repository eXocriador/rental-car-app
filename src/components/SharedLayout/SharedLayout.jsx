// src/components/SharedLayout/SharedLayout.jsx

import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import css from "./SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* Якщо буде футер, він буде тут */}
    </div>
  );
};

export default SharedLayout;
