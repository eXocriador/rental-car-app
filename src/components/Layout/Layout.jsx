import React, { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import { LayoutContainer, MainContent } from "./Layout.styled";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainContent>
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
    </LayoutContainer>
  );
};

export default Layout;
