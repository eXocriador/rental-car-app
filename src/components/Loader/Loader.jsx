// src/components/Loader/Loader.jsx

import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader_overlay}>
      <div className={css.loader}></div>
    </div>
  );
};

export default Loader;
