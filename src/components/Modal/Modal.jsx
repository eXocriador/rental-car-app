import React, { useEffect } from "react";
import PropTypes from "prop-types";
import CloseIcon from "../../assets/icons/close-icon.svg";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          <img src={CloseIcon} alt="close" />
        </button>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Modal;
