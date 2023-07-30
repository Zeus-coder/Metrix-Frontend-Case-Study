/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconlyLightGraph = ({ className, iconlyLightGraph = "/img/iconly-light-graph-1.svg" }) => {
  return <img className={`iconly-light-graph ${className}`} alt="Iconly light graph" src={iconlyLightGraph} />;
};

IconlyLightGraph.propTypes = {
  iconlyLightGraph: PropTypes.string,
};
