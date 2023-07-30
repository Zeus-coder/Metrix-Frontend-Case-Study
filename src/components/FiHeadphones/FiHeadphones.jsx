/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const FiHeadphones = ({ className, fiHeadphones = "/img/fi-headphones-2.png" }) => {
  return <img className={`fi-headphones ${className}`} alt="Fi headphones" src={fiHeadphones} />;
};

FiHeadphones.propTypes = {
  fiHeadphones: PropTypes.string,
};
