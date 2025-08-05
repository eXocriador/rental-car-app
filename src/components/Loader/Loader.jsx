import React from "react";
import PropTypes from "prop-types";
import { LoaderContainer, Spinner, LoaderText } from "./Loader.styled";

const Loader = ({ text = "Loading..." }) => {
  return (
    <LoaderContainer>
      <div>
        <Spinner />
        <LoaderText>{text}</LoaderText>
      </div>
    </LoaderContainer>
  );
};

Loader.propTypes = {
  text: PropTypes.string
};

export default Loader;
