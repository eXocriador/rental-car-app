import React from "react";
import PropTypes from "prop-types";
import styles from "./Loader.module.css";

const Loader = ({ text = "Loading..." }) => {
  return (
    <div className={styles.loaderContainer}>
      <div>
        <div className={styles.spinner} />
        <p className={styles.loaderText}>{text}</p>
      </div>
    </div>
  );
};

Loader.propTypes = {
  text: PropTypes.string
};

export default Loader;
