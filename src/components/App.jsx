import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "../pages/HomePage";
import CatalogPage from "../pages/CatalogPage";
import CarDetailsPage from "../pages/CarDetailsPage";
import FavoritesPage from "../pages/FavoritesPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Layout />}>
          <Route index element={<CatalogPage />} />
          <Route path=":id" element={<CarDetailsPage />} />
        </Route>
        <Route path="/favorites" element={<Layout />}>
          <Route index element={<FavoritesPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
