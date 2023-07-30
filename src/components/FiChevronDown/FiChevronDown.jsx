/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const FiChevronDown = ({ className, fiChevronDown = "/img/fi-chevron-down-23.png" }) => {
  return <img className={`fi-chevron-down ${className}`} alt="Fi chevron down" src={fiChevronDown} />;
};

FiChevronDown.propTypes = {
  fiChevronDown: PropTypes.string,
};
