import React, { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import styles from "./Layout.module.css";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={styles.layoutContainer}>
      <Header />
      <main className={styles.mainContent}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff"
          }
        }}
      />
    </div>
  );
};

export default Layout;
