import React from "react";
import styles from "./Loader.module.css";

interface LoaderProps {
  text?: string;
}

const Loader: React.FC<LoaderProps> = ({ text = "Loading..." }) => {
  return (
    <div className={styles.loaderContainer}>
      <div>
        <div className={styles.spinner} />
        <p className={styles.loaderText}>{text}</p>
      </div>
    </div>
  );
};

export default Loader;
