/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconlyLightBag = ({ className, iconlyLightBag = "/img/iconly-light-bag-14.svg" }) => {
  return <img className={`iconly-light-bag ${className}`} alt="Iconly light bag" src={iconlyLightBag} />;
};

IconlyLightBag.propTypes = {
  iconlyLightBag: PropTypes.string,
};
