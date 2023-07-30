/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconlyLightFolder = ({ className, iconlyLightFolder = "/img/iconly-light-folder-14.svg" }) => {
  return <img className={`iconly-light-folder ${className}`} alt="Iconly light folder" src={iconlyLightFolder} />;
};

IconlyLightFolder.propTypes = {
  iconlyLightFolder: PropTypes.string,
};
