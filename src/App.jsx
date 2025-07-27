// src/App.jsx

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        {/* Коли буде сторінка обраних, її можна буде додати сюди */}
        {/* <Route path="/favorites" element={<FavoritesPage />} /> */}
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
