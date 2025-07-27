// src/pages/CatalogPage/CatalogPage.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarsThunk } from "../../redux/slices/carsSlice"; // Викликаємо правильний thunk
import CarCard from "../../components/CarCard/CarCard";
import Loader from "../../components/Loader/Loader";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error, currentPage } = useSelector(
    (state) => state.cars
  );

  useEffect(() => {
    // Завантажуємо першу сторінку, тільки якщо список порожній
    if (items.length === 0) {
      dispatch(getCarsThunk(1));
    }
  }, [dispatch, items.length]);

  const handleLoadMore = () => {
    dispatch(getCarsThunk(currentPage));
  };

  return (
    <div className={css.container}>
      {/* Тут буде компонент фільтрів */}

      {items.length > 0 && (
        <ul className={css.gallery}>
          {items.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </ul>
      )}

      {isLoading && <Loader />}

      {error && <p>Oops, something went wrong: {error}</p>}

      {/* Показуємо кнопку, якщо не йде завантаження і є ще що завантажувати (умовно < 12 на сторінці) */}
      {!isLoading && items.length > 0 && items.length % 12 === 0 && (
        <button className={css.loadMoreButton} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CatalogPage;
