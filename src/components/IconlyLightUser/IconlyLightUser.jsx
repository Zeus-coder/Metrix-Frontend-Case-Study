/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconlyLightUser = ({ className, iconlyLightUser = "/img/iconly-light-2-user-14.svg" }) => {
  return <img className={`iconly-light-user ${className}`} alt="Iconly light user" src={iconlyLightUser} />;
};

IconlyLightUser.propTypes = {
  iconlyLightUser: PropTypes.string,
};
