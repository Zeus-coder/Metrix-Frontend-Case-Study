/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconlyBulk = ({ className, iconlyBulk = "/img/iconly-bulk-notification-1.svg" }) => {
  return <img className={`iconly-bulk ${className}`} alt="Iconly bulk" src={iconlyBulk} />;
};

IconlyBulk.propTypes = {
  iconlyBulk: PropTypes.string,
};
